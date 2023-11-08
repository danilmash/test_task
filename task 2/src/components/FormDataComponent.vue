<template lang="">
    <div class="form-data">
        <p v-if="Object.keys(data).length" v-for="key in dataKeys" :key="key">
            {{ `${key} => ${formData[key]}` }}
        </p>
        <p v-else>Данных не отправлено</p>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({}),
        }
    },

    data() {
        return {
            dataKeys: null,
            formData: {}
        }
    },

    methods: {
        getData() {
            if(Object.keys(this.data).length) {
                this.dataKeys = Object.keys(this.data)
                this.formData = this.data
            }
        }
    },   
    created() {
        this.getData()
    },

}
</script>
<style lang="">
    
</style>