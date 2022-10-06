<template>
    <div class="header">
        <h1>Список контактов</h1>
        <my-button-green @click="$emit('visible', true)">Добавить контакт</my-button-green>
    </div>
</template>
<script>
import MyButtonGreen from './UI/MyButtonGreen.vue'

export default {
    components: {
        MyButtonGreen,
    }
}
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(0, 183, 64);
}
</style>