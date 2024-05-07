import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/001.png'),
        title: 'น้องเขียดยิ้มหวาน',
        price: 100,
        color: 'green',
        type: 'plant'
      }, {
        id:1,
        img: require('@/assets/004.png'),
        title: 'แย้แดงหางไม้',
        price: 120,
        color: 'red',
        type: 'fire'
      }, {
        id:2,
        img: require('@/assets/007.png'),
        title: 'เต่างอยรอคอยอ้าย',
        price: 112,
        color: 'blue',
        type: 'water'
      }, {
        id:3,
        img: require('@/assets/150.png'),
        title: 'จิ้งเหลนหน้ายาก',
        price: 9999,
        color: 'white',
        type: 'psycho'
      }, {
        id:4,
        img: require('@/assets/025.png'),
        title: 'หนูสายฟ้าหน้าแบ๊ว',
        price: 5,
        color: 'yellow',
        type: 'thunder'
      },
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    outCart2(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 100)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },
})
