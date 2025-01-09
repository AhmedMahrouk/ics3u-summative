import { ref } from "vue"
import { defineStore } from "pinia";

export const useStore = defineStore('store', () => {
    const email = ref("");
    const firstname = ref("");
    const lastname = ref("");
    const cart = ref(new Map());
  
    return { email, cart, firstname, lastname }
  })