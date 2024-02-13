import axios from 'axios'
export const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://a080addcf3278a62.mokky.dev/items')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchItemsCart = async (params) => {
  try {
    const { data } = await axios.get('https://a080addcf3278a62.mokky.dev/items?' + params)
    console.log('data1', data)
    return data
  } catch (error) {
    console.log(error)
  }
  //разобраться с передачей в компонент, чтобы не было задержки в асинхронности
}
