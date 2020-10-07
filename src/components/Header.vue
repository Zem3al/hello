<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #63C3FE;" fixed="top" >
      <a class="navbar-brand">Small-Project</a>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="tag" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="button" :disabled="tag.length==0" @click="find(tag)" style="background: antiquewhite">Search</button>
      </form>
    </nav>
  </div>

</template>

<script>
export default {
name: "Header",
  props: {
  alt : String,
  find : Function
  },
  data() {
  return {
    tag : ''
  }
  }
}
</script>

<style scoped>

</style>