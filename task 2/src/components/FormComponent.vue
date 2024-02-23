<template lang="">
    <button class="start-button" @click="showCloseModal">Начать</button>
    <div class="popup" @click.self="showCloseModal" v-show="popupIsShown">
        <div class="popup__content">
        <form @submit.prevent="sendData" action="#" class="popup__form form">
            <div class="form__input-container">
            <label for="#name" class="form__label">Имя</label>
            <input
                size="1"
                id="name"
                type="text"
                class="form__input"
                name="name"
                required
                v-model="name"
            />
            </div>
            <div class="form__input-container">
            <label for="#nickname" class="form__label">Ник</label>
            <input
                size="1"
                id="nickname"
                type="text"
                class="form__input"
                name="nickname"
                required
                v-model="nickname"
            />
            </div>
            <div class="form__input-container">
            <label for="#city" class="form__label">Город</label>
            <input
                size="1"
                id="city"
                type="text"
                class="form__input"
                name="city"
                required
                v-model="city"
            />
            </div>
            <div class="form__input-container">
            <label for="#email" class="form__label">Почта</label>
            <input
                size="1"
                id="email"
                type="email"
                class="form__input"
                name="mail"
                required
                v-model="mail"
            />
            </div>
            <div class="form__input-container">
            <label for="#phone" class="form__label">Телефон</label>
            <input
                size="1"
                id="phone"
                type="phone"
                class="form__input"
                name="telephone"
                required
                v-model="telephone"
            />
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
        };
    },
    methods: {
        showCloseModal() {
            this.popupIsShown = !this.popupIsShown;
        },
        sendData() {
            const formData = {
                name: this.name,
                nickname: this.nickname,
                city: this.city,
                mail: this.mail,
                phone: this.telephone,
            };
            const encodedformData = JSON.stringify(formData);
            this.$router.push({
                name: "data",
                params: { data: encodedformData },
            });
        },
    },
};
</script>
<style lang="scss">
.form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    // .form__input-container

    &__input-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
        flex: 1 1 170px;
        box-sizing: border-box;
    }

    // .form__label

    &__label {
        font-size: 1.25rem;
        font-weight: 500;
    }

    // .form__input

    &__input {
        font-family: "Roboto";
        min-width: 0;
        border: none;
        border-bottom: 2px solid rgb(153, 153, 153);
        outline: none;

        &:focus {
            border-bottom: 2px solid rgb(20, 20, 20);
        }
    }

    &__submit-button {
        font-family: "Roboto";
        font-weight: 600;
        font-size: 1.2rem;
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 3px;
        background: rgb(64, 199, 129);
        transition: 0.2s;
        margin: 0 auto;
        cursor: pointer;
        border: none;
        flex: 1 1 100%;
        margin-top: 10px;

        &:hover {
            background: rgb(53, 167, 110);
        }

        &:active {
            background: rgb(33, 147, 90);
        }
    }
}

.popup {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 10;

    &__content {
        position: relative;
        max-width: 500px;
        background: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        margin: 0 10px;
        z-index: 11;
    }

    // .popup__form

    &__form {}

    &_visible {
        opacity: 1;
        visibility: visible;
    }
}

.start-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Roboto";
    font-weight: 600;
    font-size: 2rem;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 3px;
    background: rgb(64, 199, 129);
    transition: 0.2s;
    margin: 0 auto;
    cursor: pointer;
    border: none;

    &:hover {
        background: rgb(53, 167, 110);
    }

    &:active {
        background: rgb(33, 147, 90);
    }
}
</style>
