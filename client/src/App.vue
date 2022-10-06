<template>
  <div class="app">
    <my-dialog v-if="isVisible" @visible="isVisible = false" class="dialog">
      <post-form @create="createContact"/>
    </my-dialog>
    <my-header @visible="isVisible = true"></my-header>
    <my-input class="search" placeholder="Поиск..." type="text" v-model="searchQuery"/>
    <contacts-list :contacts="searchedContacts" @remove="removeContact" class="list"/>
  </div>
</template>
<script>
import axios from "axios";
import ContactsList from './components/ContactsList.vue';
import PostForm from './components/PostForm.vue';
import MyHeader from './components/MyHeader.vue';
import MyDialog from './components/UI/MyDialog.vue';
import MyInput from './components/UI/MyInput.vue'


export default {
  components: {
    ContactsList,
    MyHeader,
    PostForm,
    MyDialog,
    MyInput
  },
  data() {
    return {
      contacts: [],
      isVisible: false,
      searchQuery: '',
    }
  },
  methods: {
    async createContact(contact) {
      const createdContact = await axios.post('http://localhost:3000/api/contacts', contact);
      this.contacts.push(createdContact.data);
      this.isVisible = false;
    },
    async removeContact(contact) {
      await axios.delete(`http://localhost:3000/api/contacts/${contact.id}`);
      this.contacts = this.contacts.filter((item) => item.id != contact.id);
    }
  },
  async mounted() {
    const contacts = await axios.get('http://localhost:3000/api/contacts');
    this.contacts = contacts.data;
  },
  computed: {
    searchedContacts() {
      return this.contacts.filter((contact) => (this.searchQuery !== "") ? contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : true);
    }
  }
}
</script>
<style>
.app {
  margin: 0 50px;
  font-family: sans-serif;
  font-size: 18px;
}
.search {
  margin-top: 20px;
  margin-bottom: 40px;
}
.dialog {
  z-index: 10;
}
.btn {
  font-size: 16px;
}
.list {
  width: 1200px;
  margin: 0 auto;
}
</style>