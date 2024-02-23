<template lang="">
    <div class="form-data">
        <p v-if="Object.keys(data).length" v-for="key in getDataKeys" :key="key">
            {{ `${key} => ${data[key]}` }}
        </p>
        <p v-else>Данных не отправлено</p>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object
        }
    },

    computed: {
        getDataKeys() { // Получить ключи из переданного объекта
            if(Object.keys(this.data).length) {
                return Object.keys(this.data)
            }
        },
    },
}
</script>
<style lang="scss">
    .form-data {
    margin: 200px auto 0;
    border: 2px solid black;
    border-radius: 30px;
    max-width: 500px;
    padding: 20px 30px;
    
    font-family: "Roboto";
    font-size: 1.25rem;

    &_visible {
        visibility: visible;
    }
}
</style>