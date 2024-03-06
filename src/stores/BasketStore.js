import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
  state: () => ({
    basketItems: JSON.parse(localStorage.getItem('cart')) || []
  }),
  actions: {
    addToBasket(item) {
      const newItem = {
        id: item.id,
        title: item.title,
        description: item.description,
        image_link: item.image_link,
        price: item.price,
        weight: item.weight,
        type: item.type,
        count: 1
      }
      this.basketItems = [...this.basketItems, newItem]
      localStorage.setItem('cart', JSON.stringify(this.basketItems))
    },
    getCount(id) {
      const item = this.basketItems.find((item) => item.id === id)
      if (!item) return 0
      return item.count
    },
    changeCount(id, value) {
      const itemsLocalStorage = JSON.parse(localStorage.getItem('cart'))
      itemsLocalStorage.map((item) => {
        if (item.id === id) {
          if (value === 'plus' && item.count < 99) {
            item.count++
          } else if (item.count > 0 && value === 'minus') {
            item.count--
          }
        }
      })
      this.basketItems = itemsLocalStorage
      localStorage.setItem('cart', JSON.stringify(this.basketItems))
    },
    deleteItem(id) {
      const itemsLocalStorage = JSON.parse(localStorage.getItem('cart'))
      const newItems = itemsLocalStorage.filter((item) => item.id !== id)
      this.basketItems = newItems
      localStorage.setItem('cart', JSON.stringify(this.basketItems))
    },
    totalPrice() {
      return this.basketItems.reduce((acc, item) => acc + item.price * item.count, 0)
    },
    deleteItemsInBasket() {
      this.basketItems = []
      localStorage.setItem('cart', JSON.stringify(this.basketItems))
    }
  }
})
