<script setup>
import { ref, watch } from 'vue'
import { useBasketStore } from '@/stores/BasketStore'
const basketStore = useBasketStore()

const name = ref('')
const phoneNumber = ref('')
const informText = ref('')
const isPhoneFieldError = ref(false)
const isNameFieldError = ref(false)
const isPhonePatternValid = ref(true)
const isNamePatternValid = ref(true)

const phonePattern = /^\+?\d{11}$|^\d{11}$/
const namePattern = /^[a-zA-Zа-яА-Я]{2,}$/

const submitForm = () => {
  if (!phoneNumber.value) {
    isPhoneFieldError.value = true
  } else {
    isPhonePatternValid.value = phonePattern.test(phoneNumber.value)
  }
  if (!name.value) {
    isNameFieldError.value = true
  } else {
    isNamePatternValid.value = namePattern.test(name.value)
  }
  if (
    !isPhoneFieldError.value &&
    isPhonePatternValid.value &&
    !isNameFieldError.value &&
    isNamePatternValid.value
  ) {
    console.log(name.value)
    console.log(phoneNumber.value)
    console.log(informText.value.length)
  }
}
watch(phoneNumber, () => {
  isPhoneFieldError.value = false
  isPhonePatternValid.value = true
})
watch(name, () => {
  isNameFieldError.value = false
  isNamePatternValid.value = true
})
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-row gap-4 mt-10">
      <span class="text-black text-xl font-bold pt-[4px]">·</span>
      <h2 class="text-black text-2xl text-uppercase">Оформление заказа</h2>
      <span class="text-black text-xl font-bold pt-[4px]">·</span>
    </div>
    <div class="w-[500px] h-40 bg-white pl-2 mt-5">
      <div class="flex flex-row items-center gap-3 mt-2">
        <div class="w-6 h-6 bg-red-500 rounded-full text-white text-center">1</div>
        <span class="text-md pt-2">Способ доставки</span>
      </div>
      <div class="flex flex-row items-center gap-2 ml-5 mt-5">
        <div class="w-6 h-6 rounded-full border-2 border-slate-300"></div>
        <img src="@/assets/icons/delivery.png" alt="delivery" class="w-5 h-5" />
        <span class="text-md text-slate-300 pl-5">Курьер</span>
        <span class="text-xs text-red-400 italic pl-10">Временно недоступен</span>
      </div>
      <div class="flex flex-row items-center gap-2 ml-5 mt-5">
        <div class="flex w-6 h-6 rounded-full border-2 border-slate-300 bg-lime-600">
          <img src="@/assets/icons/check.png" alt="check" class="w-2 h-2 m-auto" />
        </div>
        <img src="@/assets/icons/shopping-bag.png" alt="shopping bag" class="w-5 h-5" />
        <span class="text-md text-slate-900 pl-5">Самовывоз</span>
        <div class="flex flex-col items-center pl-6">
          <span class="text-[15px] text-slate-900 font-bolt pl-5">Скидка - 10%</span>
          <span class="text-[10px] text-slate-900 font-bolt pl-5">на стоиомость покупки</span>
        </div>
      </div>
    </div>
    <form>
      <div class="w-[500px] h-[290px] bg-white pl-2 mt-5">
        <div class="flex flex-row items-center gap-3 mt-2">
          <div class="w-6 h-6 mt-[10px] bg-red-500 rounded-full text-white text-center">2</div>
          <span class="text-md mt-[12px] pt-2">Данные для доставки</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-col w-4/5 h-[70px]">
            <input
              v-model="name"
              type="text"
              class="prev__block name__icon w-4/5 h-10 border-b-2 border-slate-400 outline-none pl-9 text-md"
              placeholder="Имя"
            />
            <span v-if="isNameFieldError" class="text-red-500 text-[15px]"
              >Это обязательное поле</span
            >
            <span v-if="!isNamePatternValid" class="text-red-500 text-[15px]"
              >Некорректное имя</span
            >
          </div>

          <div class="flex flex-col w-4/5 h-[70px]">
            <input
              v-model="phoneNumber"
              type="text"
              class="prev__block phone__icon w-4/5 h-8 border-b-2 border-slate-400 outline-none pl-9 text-md"
              placeholder="Телефон"
            />
            <span v-if="isPhoneFieldError" class="text-red-500 text-[15px]"
              >Это обязательное поле</span
            >
            <span v-if="!isPhonePatternValid" class="text-red-500 text-[15px]"
              >Некорректный номер</span
            >
          </div>
          <div class="flex flex-col w-4/5 h-[80px]">
            <input
              v-model="informText"
              type="textArea"
              class="prev__block inform__icon w-4/5 h-10 border-b-2 border-slate-400 outline-none pl-9 text-sm"
              placeholder="Дополнительная информация"
            />
            <span v-if="informText.length" class="text-slate-400 text-[15px]"
              >[ {{ informText.length }} / 200 ]</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center w-[500px] h-[270px] bg-white pl-2 mt-5">
        <div class="flex flex-row w-[400px] gap-3 mt-5 text-md">
          <p>Стоимость товара:</p>
          <p>{{ basketStore.totalPrice() }} ₽</p>
        </div>
        <hr class="w-[400px] mt-3" />
        <div class="flex flex-row w-[400px] gap-3 mt-5 text-md">
          <p class="font-bold">Итого к оплате:</p>
          <p class="font-bold">{{ basketStore.totalPrice() }} ₽</p>
        </div>
        <button
          class="w-[460px] bg-[#0C334A] mt-10 px-2 py-2 rounded-md text-md text-slate-200 hover:transform hover:text-white hover:bg-black hover:duration-200"
          @click.prevent="submitForm"
        >
          Купить и оплатить
        </button>
        <span class="text-[10px] italic mt-2"
          >Создавая заказ, вы соглашаетесь с политикой обработки персональных данных</span
        >
      </div>
    </form>
  </div>
</template>

<style scoped>
.prev__block {
  background-repeat: no-repeat;
  background-position: left;
  background-size: 20px;
}
.name__icon {
  background-image: url('@/assets/icons/user.png');
}
.phone__icon {
  background-image: url('@/assets/icons/phone.png');
}
.inform__icon {
  background-image: url('@/assets/icons/information.png');
}
</style>
