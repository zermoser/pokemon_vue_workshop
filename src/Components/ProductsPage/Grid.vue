<template>
      <div class="row justify-content-center">
        <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
          <div class="card-selector">
            <div class="card-body p-5">
              <div class="search-title">
                <h5>เลือกธาตุของ Pokemon</h5>
                <br>
                <h5 class="ele1" @click="sortI('fire')">- ไฟ</h5>
                <h5 class="ele1" @click="sortI('plant')">- พืช</h5>
                <h5 class="ele1" @click="sortI('water')">- น้ำ</h5>
                <h5 class="ele1" @click="sortI('thunder')">- สายฟ้า</h5>
                <h5 class="ele1" @click="sortI('psycho')">- พลังจิต</h5>
                <h5 class="ele1" @click="sortI('love')">- ความรัก</h5>
                <br><br><br>
                <h4 class="search-title">อยากได้สีอะไรล่ะ?</h4>
                  <h7>เลือกสีของ pokemon</h7><br>
                  <span class="circle" style="background-color:#e51c23" @click="sortI('red')"></span>
                  <span class="circle" style="background-color:#2baf2b" @click="sortI('green')"></span>
                  <span class="circle" style="background-color:#5677fc" @click="sortI('blue')" ></span>
                  <span class="circle" style="background-color:#ffee58" @click="sortI('yellow')"></span>
                  <span class="circle" style="background-color:white" @click="sortI('white')"></span>
                  <span class="circle" style="background-color:#dbbc8c" @click="sortI('brown')"></span>
              </div>

            </div>
          </div>
        </div>
        <div class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center">
          <div v-if="this.cards == 0" class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br><br><br><br><br><br><h3 style="margin-left:9rem;margin-right:9rem">ขอโทษนะ Pokemon ตัวนี้ไม่มี</h3>
             <br><h1 style="margin-left:9rem;margin-right:9rem">ก็เหมือนกับที่เขาที่ไม่มีใจให้คุณไง ♥</h1>
          </div>

            <Card :CardArray="slicedCards" />

        </div>
      </div>
</template>

<script>
import slider from './slider.vue'
import Card from './Card.vue'

export default {
  name:'Grid',
  components: {
    slider, Card
  },
  data() {
    return {
      cards: [],
      showCards: 6,
      sortButton: 'DEFAULT'
    }
  },
  created(){
    this.cards = this.it
  },
  computed: {
    it(){
    return this.$store.state.items
    },
    slicedCards(){
      return this.cards.slice(0, this.showCards)
    }
  },
  methods: {
    incCardNumber() {
      return this.showCards += 6
    },
    sortI(name){
      this.cards = this.it.filter((e) => e.type.match(name) || e.color.match(name))
    },
    reSet() {
      return this.cards = this.it
    }
  }
  }
</script>

<style>
.container.grid {
  min-height: 60rem;
}

.container.grid a {
  cursor: pointer !important;
}

.btn-light {
  color: black !important;
  background: white;
  border-radius: 0 !important;
  border: 1px solid grey !important;
}

.btn-outline-secondary {
  border-radius: 0 !important;
}

/*search options*/

.card-selector {
  color: #DCDCDC;
  height: 40rem;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {

  cursor: pointer;
}
.ele1:hover {
  color: #dbbc8c;
  background-color: aqua;
}

.circle {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  border: 0.7px solid #2c3539;
  display: inline-block;
  margin-left: 6px;
  cursor:pointer
}

</style>
