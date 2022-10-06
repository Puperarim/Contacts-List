<template>
    <div class="dialog" @click="$emit('visible', false)">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'my-dialog'
}
</script>
<style scoped>
.dialog {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
}
.dialog__content {
    position: relative;
    margin: auto;
    min-height: 50px;
    min-width: 300px;
    background-color: #fff;
    padding: 30px;
    border-radius: 12px;
}
</style>