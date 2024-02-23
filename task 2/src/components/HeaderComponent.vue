<template lang="">
    <header class="header">
        <div class="wrapper">
            <ul class="menu">
                <li class="menu__item">
                    <router-link to="/" class="menu__link">Главная</router-link>
                </li>
                <li class="menu__item">
                    <router-link :to="{ name: 'data', params: { data: null } }" class="menu__link">Данные</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .menu {
        display: flex;
        flex-direction: row;
        margin: 0;
        list-style: none;


    // .menu__item

    &__item {
        flex: 1 1 0;
        text-align: center;
    }

    // .menu__link

    &__link {
        font-size: 1.5rem;
        display: block;
        width: 100%;
        padding: 0.5rem 0;
        cursor: pointer;
        color: black;
        text-decoration: none;
        &:hover {
            background-color: rgb(212, 212, 212);
        }
    }
}
</style>