<template>
  <div>
    {{ apidata }}
    <v-btn color="success"> getdata </v-btn>
  </div>
</template>

<script>
export default {
    data() {
        return{
            apidata: []
        }
    },
    methods: {
        async getDatas ()
        {
            try{
                const {data} = await this.axios.get('http:localhost:8080/products')
                this.apidata = data
            } catch (error) {
                console.log (error)
            }
        }
    },

}
</script>

<style>

</style>