export const handlerCounter = (value, count, props, isBasket) => {
  const store = JSON.parse(localStorage.getItem('cart'))
  if (value === 'plus' && count.value < 99) {
    count.value++
  } else if (count.value > 0 && value === 'minus') {
    count.value--
  }
  store.map((item) => {
    if (item.id === props.item.id) {
      item.count = count.value
      if (count.value === 0) {
        isBasket.value = false
      }
    }
  })
  const newStore = store.filter((item) => item.count > 0)
  localStorage.setItem('cart', JSON.stringify(newStore))
  props.changeCart()
}
