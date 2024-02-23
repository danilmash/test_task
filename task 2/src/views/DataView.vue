<template lang="">
    <form-data-component :data="this.formData"></form-data-component>
</template>
<script>
import FormDataComponent from '../components/FormDataComponent.vue';
export default {
    components: {
        FormDataComponent
    },

    props: {
        data: String
    }, 

    data() {
        return {
            formData: {}
        }
    },

    methods: {
        parseJSON(json) {
            if (json) {
            this.formData = JSON.parse(json); // Проверка является ли переданные параметры валидным json и его парсинг
        }
        }
    },

    mounted() {
        this.parseJSON(this.data)
    },
}
</script>
<style lang="">
    
</style>