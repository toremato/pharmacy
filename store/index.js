export const state = () => ({
    products: [],
    categories: [],
    cartItems: [],
    mainHeader: 'Тауарлар'
})

export const mutations = {
    setProducts( state, products ){
        state.products = products
    },
    setCategories( state, categories ){
        state.categories = categories
    },
    updateCart(state, item){
        state.cartItems.push(item)
    },
    refreshCart(state, items){
        state.cartItems = items
    },
    changeHeader(state, header){
        state.mainHeader = header
    }
}

export const actions = {
    getCategories({commit}) {
        return new Promise( resolve => {
            this.$axios
                .$get('categories/').then( res => {
                    commit('setCategories', res)
                    resolve(res)
                })
        })
    },
    getProducts({commit}, categoryId = '') {
        return new Promise( resolve => {
            this.$axios
                .$get(`products/${categoryId ? ('?category=' + categoryId ) : ''}`).then( res => {
                    commit('setProducts', res)
                    resolve(res)
                })
        })
    },
    searchProducts({commit}, string) {
        return new Promise( resolve => {
            this.$axios
                .$get(`products/?search=${string}`).then( res => {
                    commit('setProducts', res)
                    resolve(res)
                })
        })
    },
    getProduct({commit}, id) {
        return new Promise( resolve => {
            this.$axios
                .$get(`products/${id}/`).then( res => {
                    resolve(res)
                })
        })
    },
    purchase({}, payload) {
        return new Promise( resolve => {
            this.$axios
                .$post(`purchase/`, payload).then( res => {
                    resolve(res)
                })
        })
    },

    updateCart({commit}, item){
        commit('updateCart', item)
    }
}