<template lang="">
    <button class="start-button" @click="showCloseModal">Начать</button>
    <div class="popup" @click.self="showCloseModal" v-show="popupIsShown">
        <div class="popup__content" >
            <form @submit.prevent="sendData" action="#" class="popup__form form">
                <div class="form__input-container">
                    <label for="#name" class="form__label">Имя</label>
                    <input size="1" id="name" type="text" class="form__input" name="name" required v-model="name">
                </div>
                <div class="form__input-container">
                    <label for="#nickname" class="form__label">Ник</label>
                    <input size="1" id="nickname" type="text" class="form__input" name="nickname" required v-model="nickname">
                </div>
                <div class="form__input-container">
                    <label for="#city" class="form__label">Город</label>
                    <input size="1" id="city" type="text" class="form__input" name="city" required v-model="city"> 
                </div>
                <div class="form__input-container">
                    <label for="#email" class="form__label">Почта</label>
                    <input size="1" id="email" type="email" class="form__input" name="mail" required v-model="mail">
                </div>
                <div class="form__input-container">
                    <label for="#phone" class="form__label">Телефон</label>
                    <input size="1" id="phone" type="phone" class="form__input" name="telephone" required v-model="telephone"> 
                </div>
                <button class="form__submit-button" type="submit">Отправить!</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "",
            nickname: "",
            city: "",
            mail: "",
            telephone: null,
            popupIsShown: false,
        }
        
    },
    methods: {
        showCloseModal() {
            this.popupIsShown = !this.popupIsShown
        },
        sendData() {
            const formData = {
                        name: this.name,
                        nickname: this.nickname,
                        city: this.city,
                        mail: this.mail,
                        phone: this.telephone,
            } 

            const encodedFormData = JSON.stringify(formData)
            this.$router.push({
                name: 'data',
                query: {
                    data: encodedFormData
                }
            }) 
        }
    }
}
</script>
<style lang="">
    
</style>