<template>
    <div class="block">
        <div class="info">
            <strong>{{contact.name}}</strong>
            <strong>{{contact.phoneNumber}}</strong>
        </div>
        <my-button @click="$emit('remove', contact)">Удалить</my-button>
    </div>
</template>
<script>
import MyButton from './UI/MyButton.vue'
export default {
    components: { MyButton },
    props: {
        contact: {
            type: Object,
            required: true
        }
    },

}
</script>
<style scoped>
.block{
    padding: 15px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 184, 64, 0.25);
}
.block:hover {
    background-color: rgba(0, 184, 64, 0.18);
}
.info {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>