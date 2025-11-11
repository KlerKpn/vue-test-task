import { defineStore } from 'pinia'
import type { Coffee } from '@/entities/Card/types.ts'
import { api } from '@/shared/api.ts'

interface CoffeeState {
  coffeeList: Coffee[]
  initialCoffeeList: Coffee[]
  currentIndex: number | undefined
}

export interface CoffeeGetters {
  [key: string]: (state: CoffeeState) => void
}

interface CoffeeActions {
  addCoffee: () => void
  loadAllCoffees: () => Promise<void>
}

export const useCoffeeStore = defineStore<'coffee', CoffeeState, CoffeeGetters, CoffeeActions>(
  'coffee',
  {
    state: () => ({ coffeeList: [], initialCoffeeList: [], currentIndex: undefined }),
    getters: {
      getCoffeeList(state: CoffeeState) {
        return state.coffeeList
      },
    },
    actions: {
      addCoffee() {
        if (!this.initialCoffeeList.length) {
          return
        }

        if (this.currentIndex === undefined) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }

        const coffee = this.initialCoffeeList[this.currentIndex]

        if (coffee) {
          this.coffeeList.push(coffee)
        }
      },
      async loadAllCoffees() {
        this.initialCoffeeList = await api.request<Array<Coffee>>('/coffee/hot')
        this.addCoffee()
        return Promise.resolve()
      },
    },
  },
)
