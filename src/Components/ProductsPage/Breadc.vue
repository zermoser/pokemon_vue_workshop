<template>
  <div>
    <br>
  <h1 class="pt-3 text-center">สินค้าจากเรา</h1>
  <nav class="row justify-content-center" aria-label="breadcrumb">
    <ol class="breadcrumb">
    </ol>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Breadc'
}
</script>

<style scoped>
.breadcrumb {
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 20px;
}

.breadcrumb>li>a {
  text-decoration: none !important;
  color: #2c3539 !important;
}

.breadcrumb>li {
  text-decoration: none !important;
  color: #f2be00 !important;
}

.pt-3{
  border: 5px solid #f2be00;
  width: 20%;
  margin: auto;
}
</style>
