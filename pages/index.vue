<template>
  <div class="app-w">
    <div class="grid-container mx-auto">
      <h3 class="font-medium">{{ header }}</h3>
      <div v-if="products.length" class="flex flex-wrap justify-start">
        <!-- <div v-for="drug in products" :key="drug.id" class="rounded-lg shadow-md border flex flex-col items-center w-64 mb-10 cursor-pointer transform hover:-translate-y-2 transition duration-200"> -->
        <div v-for="drug in products" :key="drug.id" class="grid-item p-6" :class="compensate">
          <div class="p-5 h-full shadow-sm hover:shadow-lg border flex flex-col items-center cursor-pointer transform hover:-translate-y- hover:scale-105 transition duration-200" @click="openProductPage(drug.id)">
            <img :src="drug.image ? drug.image : '/no_image.jpg'" alt="" class="h-40 mb-10">
            <div class="text-left w-full mb-auto">{{ drug.name }}</div>
            <div class="flex justify-between items-center w-full">
              <div v-if="drug.discount" class="line-through text-gray-600 italic">{{ drug.price + ' &#8376;' }}</div>
              <div class="text-left  font-bold text-lg" :class="!drug.discount ? 'mx-auto' : ''">{{ price(drug) + ' &#8376;' }}</div>
            </div>
              <button class="rounded-full bg-secondary text-white px-4 py-1 mt-1 shadow-lg focus:outline-none hover:bg-primary transition duration-200" @click.stop="addToCart(drug)">Себетке қосу</button>
          </div>
        </div>
      </div>
      <div v-else class="mt-20">
        <h3>Сіздің сұранысыңызға сәйкес өнімдер табылмады :(</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    header() {
      return this.$store.state.mainHeader
    },
    compensate() {
      switch (this.products.length) {
        case 1:
          return 'fb-1'
          break;
        case 2:
          return 'fb-2'
          break;
        case 3:
          return 'fb-3'
          break;
        default:
          return ''
          break;
      }
    }
  },
  methods: {
    openProductPage(id){
      localStorage.productId = id
      this.$router.push({path: `products/${id}`});
    },
    addToCart(product){
      if (localStorage.cart) {
        var cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        var cart = []
      }
      console.log('CART', cart, typeof cart)
      cart.push(product)
      localStorage.setItem('cart', JSON.stringify(cart))
      this.$store.dispatch('updateCart', product)
    },
    price(product){
        return product.price - product.discount
    },
  }
}
</script>

<style lang="scss">
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.grid-item {
  height: 430px;
  flex-basis: 25%;
  -ms-flex: auto;
  width: 300px;
  position: relative;
  // padding: 10px;
  box-sizing: border-box;
  &>div{
    border-radius: 5px;
  }
}

.fb-1 {
    flex-basis: 100% !important;
}
.fb-2 {
    flex-basis: 50% !important;
}
.fb-3 {
    flex-basis: 33.33% !important;
}
@media(max-width: 1280px) {
  .grid-item {
    flex-basis: 33.33%;
  }
}

@media(max-width: 1024px) {
   .grid-item {
    flex-basis: 50%;
  }
}

// @media(max-width: 815px) {
//   .grid-item {
//     flex-basis: 50%;
//   }
// }

@media(max-width: 640px) {
  .grid-item {
    flex-basis: 100%;
  }
}
</style>
