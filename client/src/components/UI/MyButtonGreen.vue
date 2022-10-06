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
    color: #fff;
    padding: 10px 15px;
    background-color: rgb(0, 183, 64);
}
.btn:active {
    position: relative;
    top: 1px;
}
.btn:hover {
    color: rgb(0, 183, 64);
    background-color: #fff;
}
</style>