<template>
  <header class="sticky top-0 z-50 bg-white select-none">
    <div class="app-w flex flex-col font-medium">
      <nuxt-link to="/" class="flex items-center justify-center my-2" @click.native="refresh">
        <svg class="w-12 h-12 mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 144.41 144.37"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}.cls-6{fill:url(#linear-gradient-6);}.cls-7{fill:url(#linear-gradient-7);}.cls-8{fill:url(#linear-gradient-8);}</style><linearGradient id="linear-gradient" x1="57.62" y1="57.06" x2="57.86" y2="1.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#74ebd5"/><stop offset="0.49" stop-color="#acb6e5"/></linearGradient><linearGradient id="linear-gradient-2" x1="85.71" y1="28.88" x2="23.08" y2="28.88" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#74ebd5"/><stop offset="1" stop-color="#acb6e5" stop-opacity="0.4"/></linearGradient><linearGradient id="linear-gradient-3" x1="18.46" y1="77.86" x2="18.7" y2="22.29" gradientTransform="translate(165.26 39.29) rotate(90.12)" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="46.55" y1="49.67" x2="-16.08" y2="49.67" gradientTransform="translate(165.26 39.29) rotate(90.12)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-5" x1="39.34" y1="116.97" x2="39.57" y2="61.41" gradientTransform="matrix(-1, 0, 0, -1, 125.63, 204.47)" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-6" x1="67.43" y1="88.79" x2="4.8" y2="88.79" gradientTransform="matrix(-1, 0, 0, -1, 125.63, 204.47)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-7" x1="78.41" y1="96.02" x2="78.65" y2="40.45" gradientTransform="matrix(0.01, -1, 1, 0.01, -39.47, 164.5)" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-8" x1="106.5" y1="67.84" x2="43.87" y2="67.84" gradientTransform="matrix(0.01, -1, 1, 0.01, -39.47, 164.5)" xlink:href="#linear-gradient-2"/></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M57.8,0h0A28.86,28.86,0,0,0,29,28.88h0V57.74H57.8V28.88C57.8,14.45,72.23,0,86.66,0Z"/><path class="cls-2" d="M29,28.9h0A28.86,28.86,0,0,1,57.78,0h0L86.64,0l0,28.86-28.86,0C43.38,28.89,29,43.33,29,57.76Z"/><path class="cls-3" d="M144.41,57.89h0A28.86,28.86,0,0,0,115.61,29h0l-28.86-.06-.06,28.86,28.86.06c14.43,0,28.83,14.49,28.8,28.92Z"/><path class="cls-4" d="M115.58,29h0a28.87,28.87,0,0,1,28.83,28.89h0l0,28.86-28.86,0,0-28.86c0-14.43-14.39-28.88-28.82-28.9Z"/><path class="cls-5" d="M86.36,144.37h0a28.86,28.86,0,0,0,29-28.74h0l.12-28.85L86.6,86.66l-.12,28.85c-.06,14.43-14.55,28.8-29,28.74Z"/><path class="cls-6" d="M115.34,115.61h0a28.86,28.86,0,0,1-28.95,28.76h0l-28.86-.1.09-28.85,28.86.09c14.43,0,28.91-14.33,29-28.76Z"/><path class="cls-7" d="M0,86.15H0a28.84,28.84,0,0,0,28.68,29h0l28.86.18.17-28.85-28.85-.18C14.43,86.24.09,71.72.18,57.29Z"/><path class="cls-8" d="M28.7,115.18h0A28.84,28.84,0,0,1,0,86.17H0L.16,57.32,29,57.47l-.15,28.86c-.08,14.43,14.27,28.93,28.7,29Z"/></g></g></svg>
        <h3 class="font-bold">PharmaCare</h3>
      </nuxt-link>

      <nav class="w-full relative flex justify-center lg:justify-between items-center my-2 flex-wrap ">
        <div class="flex md:w-56">
          <nuxt-link to="/" class="mr-8" @click.native="refresh">Басты бет</nuxt-link>
          <div class="pr-10 cursor-pointer" @click="toggle" v-click-outside="close">

            <div class="relative flex items-center">
              <span>
                Санаттар
              </span>
              <svg
                :class="isOpen ? 'transform rotate-180' : ''"
                class="absolute right-0 -mr-6 transition linear duration-300"
                width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64563 0.219304L4.99999 3.71889L1.35435 0.219304C1.12185 -0.00396084 0.807736 -0.0614257 0.530344 0.0685557C0.252952 0.198537 0.0544223 0.496218 0.00953849 0.849464C-0.0353453 1.20271 0.0802359 1.55786 0.312744 1.78112L4.47919 5.78065C4.78362 6.07312 5.21637 6.07312 5.5208 5.78065L9.68724 1.78112C10.0467 1.43598 10.1049 0.806569 9.81723 0.375286C9.5296 -0.0559981 9.00506 -0.125834 8.64563 0.219304Z" fill="#8492A6"/>
              </svg>
            </div>


            <transition name="select">
              <div v-if="isOpen" class="absolute top-0 left-0 mt-10 md:mt-12 bg-white border w-full md:w-auto">
                <div v-for="cat in categories" :key="cat.id" @click="chooseCategory(cat)" class="w-auto text-left py-2 px-6 hover:bg-gray-200">
                  <span class="whitespace-no-wrap">
                    {{ cat.name }}
                  </span>
                </div>
              </div>
            </transition>
          </div>
          <!-- <nuxt-link to="/">Танымал өнімдер</nuxt-link> -->
        </div>
        <div class="flex border rounded-full pl-5 bg-gray-100 order-last mt-2 lg:mt-0 lg:order-none md:mx-20 lg:mx-auto flex-grow lg:flex-grow-0">
          <input type="text" class="w-full focus:outline-none rounded-full bg-transparent pl-1 mr-4" v-model="searchString" @keydown="keyPressed">
          <div class="bg-secondary p-2 px-4 rounded-full cursor-pointer" @click="search">
            <svg viewBox="0 0 513.28 513.28" class="w-6 fill-current text-white">
                <g>
                  <path d="M495.04,404.48L410.56,320c15.36-30.72,25.6-66.56,25.6-102.4C436.16,97.28,338.88,0,218.56,0S0.96,97.28,0.96,217.6
                    s97.28,217.6,217.6,217.6c35.84,0,71.68-10.24,102.4-25.6l84.48,84.48c25.6,25.6,64,25.6,89.6,0
                    C518.08,468.48,518.08,430.08,495.04,404.48z M218.56,384c-92.16,0-166.4-74.24-166.4-166.4S126.4,51.2,218.56,51.2
                    s166.4,74.24,166.4,166.4S310.72,384,218.56,384z"/>
                </g>
            </svg>
          </div>
        </div>
        <div class="flex items-center md:w-56 justify-end ml-auto lg:ml-0">
          <!-- <nuxt-link to="/contacts">Байланыс</nuxt-link> -->
          <nuxt-link to="/cart" class="relative ml-6">
            <svg class="w-8 h-8 fill-current text-secondary hover:text-primary transition duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -31 512.00033 512">
              <path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0"/>
              <path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0"/>
              <path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0"/>
            </svg>
            <div v-if="cartItemCount" class="cart-badge hidde absolute bg-blue-50 bg-white rounded-full flex justify-center items-center">
              <div class="bg-red-500 w-5 h-5 rounded-full p-2 text-white text-xs flex justify-center items-center">
                <span class="font-bold">{{cartItemCount}}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      cartItemCount: null,
      isOpen: false,
      searchString: ''
    }
  },
  created(){
    if (localStorage.cart) {
      this.getCartItemCount()
    }
  },
  watch: {
    cartItems(newValue){
      this.getCartItemCount()
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems
    },
    categories() {
      return this.$store.state.categories
    }
  },
  methods: {
    getCartItemCount() {
      this.cartItemCount = JSON.parse(localStorage.getItem('cart')).length
    },
    close() {
      this.isOpen = false
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    chooseCategory(cat){
      this.$store.dispatch('getProducts', cat.id).then( res => {
        this.$store.commit('changeHeader', cat.name)
        this.$router.push({ name: 'index'})
      })
    },
    search(){
      this.$store.dispatch('searchProducts', this.searchString).then( res => {
          this.searchString = ''
          this.$store.commit('changeHeader', 'Іздеу нәтижесі')
          this.$router.push({ name: 'index'})
      })
    },
    keyPressed(e){
      if (e.key === 'Enter') {
        this.search()
      }
    },
    refresh(){
      this.$store.dispatch('getProducts').then( res => {
        this.$store.commit('changeHeader', 'Тауарлар')
      })
    }
  }
}
</script>

<style lang="scss">
.cart-badge {
  top: -7px;
  right: -15px;
  div {
    margin: 1.85px;
  }
}
</style>