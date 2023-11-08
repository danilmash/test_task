<template lang="">
  <header-component />
  
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  components: {
    HeaderComponent
  },

  data() {
    return {
      data: {}
    }
  },
  
  methods: {
    updateData() {

    }
  }

}
</script>
<style lang="">
  
</style>