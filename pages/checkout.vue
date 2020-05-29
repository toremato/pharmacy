<template>
  <section class="app-w flex flex-col">
    <transition name="fade">
      <div v-if="step === 1" class="flex flex-col mx-auto ">
        <div class="flex items-center mb-4 ml-3">
          <label for="" class="flex-grow text-right mr-5">Аты</label>
          <input type="text" class="w-64 border rounded bg-gray-100 py-1 px-5" v-model="info.name">
        </div>
        <div class="flex items-center mb-4 ml-3">
          <label for="" class="flex-grow text-right mr-5">Телефон</label>
          <input type="text" class="w-64 border rounded bg-gray-100 py-1 px-5" v-model="info.phone" v-mask="'+7(7##)-###-##-##'">
        </div>
        <div class="flex items-center mb-4 ml-3">
          <label for="" class="flex-grow text-right mr-5">E-mail</label>
          <input type="text" class="w-64 border rounded bg-gray-100 py-1 px-5" v-model="info.email">
        </div>
        <div class="flex items-center mb-4 ml-3">
          <label for="" class="flex-grow text-right mr-5">Мекен жайы</label>
          <!-- <input type="text" class="w-64 border rounded bg-gray-100 py-1 px-5" v-model="info.address"> -->
          <textarea name="" id="" cols="30" rows="4" class="w-64 border rounded bg-gray-100 py-1 px-5" v-model="info.address"></textarea>
        </div>
      <button class="rounded-full w-56 self-end mt-10 bg-secondary text-white px-4 py-3 shadow-lg focus:outline-none hover:bg-primary transition duration-200" @click.stop="nextStep">Келесі қадам</button>


      </div>
    </transition>
    <transition name="fade">
      <div v-if="step === 2" @click="" class="mx-auto flex flex-col">
        <div class="card bg-gray-200 rounded-large border p-10">
          <input type="text" class="card-number mt-20 py-1 px-2 w-full bg-white border" v-mask="'####  -  ####  -  ####  -  ####'" placeholder="Карта нөмірі">
          <div class="flex justify-between">
            <input type="text" class="bg-white flex border py-1 px-2 w-1/2 mt-6 mr-6" v-mask="'## / ##'" placeholder="Дейін жарамды">
            <input type="text" class="bg-white flex border py-1 px-2 w-1/2 mt-6" placeholder="CVV" v-mask="'###'">
          </div>
        </div>
        <div class="flex justify-between items-center mt-10">
          <div>Барлығы:
            <span class="font-medium">{{ price + ' &#8376;' }}</span>
          </div>
          <button class="rounded-full w-56 self-end bg-secondary text-white px-4 py-3 shadow-lg focus:outline-none hover:bg-primary transition duration-200" @click.stop="finish">Төлеу</button>

        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  directives: { mask },
  data() {
    return {
      step: 1,
      info: {
        name: '',
        address: '',
        email: '',
        products: [],
        price: null,
        phone: '',
      }
    }
  },
  computed: {
    price() {
      return localStorage.getItem('orderPrice')
    }
  },
  methods: {
    nextStep(){
      this.step = 0
      console.log('step', this.step)
      setTimeout(() => {
        this.step = 2
      console.log('step', this.step)
      }, 200);
    },
    finish(){
      let payload = this.info
      payload.price = parseInt(this.price)
      payload.phone = '+' + this.info.phone.replace(/\D/g,'')
      let products = JSON.parse(localStorage.getItem('cart'))
      products.forEach(el => {
        payload.products.push(el.id)
      });
      this.$store.dispatch('purchase', payload).then( res => {
        localStorage.setItem('cart', JSON.stringify([]))
        this.$store.commit('refreshCart', [])
        this.$router.push({name: 'index'})
      })

    }
  }
}
</script>

<style>
.card {
  width: 400px;
}
.card-number {
  /* width: 300px; */
}
</style>