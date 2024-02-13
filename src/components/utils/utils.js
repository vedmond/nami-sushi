import { ref } from 'vue'

export const handlerCounter = (value, props) => {
  const count = ref(1)
  const store = JSON.parse(localStorage.getItem('cart'))
  if (value === 'plus' && count.value < 99) {
    count.value++
  } else if (count.value > 0 && value === 'minus') {
    count.value--
  }
  store.map((item) => {
    if (item.id === props.item.id) {
      item.count = count.value
    }
  })
  const newStore = store.filter((item) => item.count > 0)
  localStorage.setItem('cart', JSON.stringify(newStore))
  props.changeCart()
}
