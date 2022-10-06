<template lang="ru">
    <input class="input" @input="$emit('update:modelValue', $event.target.value)"/>
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    }
}
</script>
<style scoped>
.input{
    width: calc(100% - 30px);
    border: 1px solid rgb(0, 183, 64);
    padding: 15px;
}
</style>