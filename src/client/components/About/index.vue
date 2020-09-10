<template>
  <div class="about">
    <h1>This is an about page </h1>
  </div>
</template>

<script>
export default {
  created:function created() {
    this.$store.dispatch("login",{name:"user",password:"test123"})
  },
}
</script>
