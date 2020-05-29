<template>
  <div>
    <the-header class="border-b shadow-s"></the-header>
    <nuxt class="min-h-screen py-16 shadow-m border-r border-l bg-white"/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  mounted() {
    if (!localStorage.cart) {
      // localStorage.setItem('cart', '')
    }
  },
  created() {
    this.$store.dispatch('getCategories').then( res => {

    })
    this.$store.dispatch('getProducts').then( res => {

    })
  }
}
</script>

<style lang="scss">
html {
  // font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  //   Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply text-gray-800;
  // @apply antialiased;
  @apply subpixel-antialiased;

  background-color: lighten($secondary, 19.5%);
}
</style>
