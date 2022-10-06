<template>
    <div class="list" v-auto-animate>
        <list-item v-for="contact in contacts" :key="contact.id" :contact="contact" @remove="$emit('remove', contact)" />
    </div>
</template>
<script>
import ListItem from "./ListItem.vue"

export default {
    components: {
        ListItem
    },
    props: {
        contacts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>

</style>