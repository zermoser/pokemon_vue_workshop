<template>
  <div class="container">
     <br>
      <div class="card-h text-center">
        <h1>สินค้าจากเรา</h1>
      </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 28%;
  min-width: 400px;
}

.card-h {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  border-radius: 5px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
