<template lang="ru">
    <form @submit.prevent>
        <h2>Добавление контакта</h2>
        <my-input class="input" placeholder="имя" v-model="contact.name" v-focus/>
        <my-input class="input" placeholder="номер телефона" v-model="contact.phoneNumber"/>
        <my-button-green @click="createContact" class="btn">Добавить</my-button-green>
    </form>
</template>
<script>
import MyButtonGreen from './UI/MyButtonGreen.vue'
import MyInput from './UI/MyInput.vue'

export default {
    components: {
        MyButtonGreen,
        MyInput
    },
    data() {
        return {
            contact: {
                name: '',
                phoneNumber: ''
            }
        }
    },
    methods: {
        createContact() {
            this.$emit('create', this.contact)
            this.contact.name = this.contact.phoneNumber = '';
        }
    }
}
</script>
<style scoped>
.input {
    margin-bottom: 15px;
}
form {
    width: 400px;
    display: flex;
    flex-direction: column;
}
h2 {
    margin-top: 0;
    margin-bottom: 40px;
    align-self: center;
}
.btn {
    margin-top: 20px;
}
</style>