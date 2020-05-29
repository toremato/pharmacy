<template>
    <div class="app-w flex flex-col">
        <div class="flex flex-col md:flex-row mb-10">
            <div class="w-full md:w-1/2 flex justify-center items-center mr-16 border rounded mb-10 md:mb-0">
                <div class="image-wrapper flex justify-center items-center">
                    <img :src="product.image ? product.image : '/no_image.jpg'" alt=":(" class="w-full h-full object-contain">
                </div>
            </div>
            <div class="flex flex-col text-left flex-grow borde justify-between">
                <h4 class="font-bold mb-5">{{ product.name }}</h4>
                <div class="flex flex-wrap text-gray-700">
                    <div class="flex w-5/12 mb-1">Қолжетімділігі</div>
                    <div class="flex w-5/12 mb-1" :class="product.is_available ? 'text-green-400' : 'text-red-500'">{{ product.is_available ? 'Сатылымда бар' : 'Сатылымда жоқ' }}</div>
                    <div class="flex w-5/12 mb-1">Үлгі</div>
                    <div class="flex w-5/12 mb-1">{{ product.features[0].value }}</div>
                    <div class="flex w-5/12 mb-1">Елі</div>
                    <div class="flex w-5/12 mb-1">{{ product.features[1].value }}</div>
                    <div class="flex w-5/12 mb-1">Өндіруші</div>
                    <div class="flex w-5/12 mb-1">{{ product.manufacturer }}</div>
                </div>
                <div class="flex text-xl my-6 items-center">
                    <div v-if="product.discount" class="line-through text-gray-600 italic mr-10">{{ product.price }} &#8376;</div>
                    <div class="font-bold text-2xl">{{ price(product) }} &#8376;</div>
                </div>
                <button class="w-64 self-center md:self-auto rounded-full bg-secondary text-white px- py-2 shadow-lg focus:outline-none hover:bg-primary" @click.stop="addToCart(product)">Себетке қосу</button>
            </div>

        </div>
        <div>
            <!-- <pre v-html="product.description" class="text-left">
            </pre> -->
            <h3 class="font-bold mb-10">Сипаттамасы</h3>
            <pre class="text-left w-full font-sans px-10">{{ product.description }}</pre>
            <!-- <div class="text-left" v-html="product.description"></div> -->
        </div>
        <!-- <div>{{product}}</div> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            loading: true,
            product: {
                features: [{value: ''}, {value: ''}]
            }
        }
    },
    mounted(){
        if (this.$route.params.id) {
            this.$store.dispatch('getProduct', this.$route.params.id).then( res => {
                this.product = res
                this.loading =
                console.log('Params product: ', res)
            })
        }else if(localStorage.productId){
            this.$store.dispatch('getProduct', localStorage.productId).then( res => {
                this.product = res
                this.loading =
                console.log('LocalStorage product: ', res)
            })
        }
    },
    methods: {
        price(product){
            return product.price - product.discount
        },
        addToCart(product){
            if (localStorage.cart) {
                var cart = JSON.parse(localStorage.getItem('cart'))
            } else {
                var cart = []
            }
            cart.push(product)
            localStorage.setItem('cart', JSON.stringify(cart))
            this.$store.dispatch('updateCart', product)
        }
    }
}
</script>

<style lang="scss" scoped>
.image-wrapper {
    width: 400px;
    height: 400px;
}

pre {
    white-space: -moz-pre-wrap; /* Mozilla, supported since 1999 */
    white-space: -pre-wrap; /* Opera */
    white-space: -o-pre-wrap; /* Opera */
    white-space: pre-wrap; /* CSS3 - Text module (Candidate Recommendation) http://www.w3.org/TR/css3-text/#white-space */
    word-wrap: break-word; /* IE 5.5+ */
}
</style>