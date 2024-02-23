<template lang="">
    <div class="form-data">
        <p v-if="Object.keys(data).length" v-for="(value, key) in data" :key="key">
            {{ `${key} => ${value}` }}
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