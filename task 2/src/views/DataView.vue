<template lang="">
    <form-data-component :data="data"></form-data-component>
</template>
<script>
import FormDataComponent from '../components/FormDataComponent.vue';
export default {
    props: {
        data: Object
    },

    components: {
        FormDataComponent
    }
    

}
</script>
<style lang="">
    
</style>