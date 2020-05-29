<template>
  <section class="app-w flex flex-col">
    <h3 class="font-medium">Себет</h3>
    <div v-if="cartItems && cartItems.length" class="flex flex-col mt-10">
      <div class="flex mb-10 font-medium text-xs sm:text-base">
        <span>Тауар аты</span>
        <span class="ml-auto">Жеңілдік(&#8376;)</span>
        <span class="w-20 sm:w-32 text-right">Бағасы(&#8376;)</span>
        <div class="w-4 sm:w-6 ml-5"></div>
      </div>
      <div v-for="(item, index) in cartItems" :key="item.id" class="flex items-center text-left text-xs sm:text-base py-2 border-b">
        <span class="break-words w-2/5 sm:w-1/2 lg:w-auto">{{ item.name }}</span>
        <span class="ml-auto">{{ item.discount ? item.discount : '-' }}</span>
        <span class="w-20 sm:w-32 text-right">{{ item.price }}</span>
        <svg viewBox="0 0 512 512" class="w-4 sm:w-6 h-6 ml-5 fill-current text-red-500 cursor-pointer" @click="removeItem(index)">
          <g>
            <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M359.54,329.374
              c4.167,4.165,4.167,10.919,0,15.085L344.46,359.54c-4.167,4.165-10.919,4.165-15.086,0L256,286.167l-73.374,73.374
              c-4.167,4.165-10.919,4.165-15.086,0l-15.081-15.082c-4.167-4.165-4.167-10.919,0-15.085l73.374-73.375l-73.374-73.374
              c-4.167-4.165-4.167-10.919,0-15.085l15.081-15.082c4.167-4.165,10.919-4.165,15.086,0L256,225.832l73.374-73.374
              c4.167-4.165,10.919-4.165,15.086,0l15.081,15.082c4.167,4.165,4.167,10.919,0,15.085l-73.374,73.374L359.54,329.374z"/>
          </g>
        </svg>
      </div>
      <div class="flex items-center font-medium mt-10 text-sm">
        <span>Барлығы</span>
        <span class="ml-auto">{{ total.discount ? total.discount : '' }}</span>
        <span class="w-20 sm:w-32 text-right text-base sm:text-2xl font-semibold">{{ total.amount + ' &#8376;'}}</span>
        <div class="w-4 sm:w-6 ml-5"></div>
      </div>
      <button class="rounded-full w-56 self-end mt-10 bg-secondary text-white px-4 py-3 shadow-lg focus:outline-none hover:bg-primary transition duration-200" @click.stop="pay">Төлеу</button>

    </div>
    <div v-else class="mt-10">
      <h3>Сіздің себетіңіз бос</h3>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      cartItems: []
    }
  },
  computed: {
    total() {
      let total = { amount: 0, discount: 0}
      this.cartItems.forEach(el => {
        total.amount += el.price
        total.discount += el.discount
      });

      return total
    }
  },
  created(){
    this.cartItems = JSON.parse(localStorage.getItem('cart'))
  },
  methods: {
    removeItem(index) {
      this.cartItems.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
      this.$store.commit('refreshCart', this.cartItems)
    },
    pay() {
      localStorage.setItem('orderPrice', this.total.amount)
      this.$router.push({ name: 'checkout'});
    }
  }
}
</script>

<style>

</style>