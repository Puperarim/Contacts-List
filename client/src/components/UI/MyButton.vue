<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style scoped>
.btn {
    border: 1px solid rgb(0, 183, 64);
    color: rgb(0, 183, 64);
    padding: 10px 15px;
    background-color: #fff;
}
.btn:active {
    position: relative;
    top: 1px;
}
.btn:hover {
    color: #fff;
    background-color: rgb(0, 183, 64);
}
</style>