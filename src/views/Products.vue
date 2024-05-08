<template>
  <div>
    <ProductCard />
    <Grid />
  </div>
</template>

<script>
import ProductCard from '@/Components/ProductsPage/ProductCard.vue'
import Grid from '@/Components/ProductsPage/Grid.vue'

export default {
  components: {
    ProductCard, Grid
  }
}
</script>
