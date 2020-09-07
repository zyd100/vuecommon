<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png">
    Home
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods:{

  },

  created: function created (){
      this.$api.home.menuList().then(res=>{
          console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }
}
</script>
