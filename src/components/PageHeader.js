import { ref, computed } from 'vue'

export const searchText = ref("")

export const updatedSearchText = computed(() => searchText.value)

export const photocardDisplay = ref(true)

export const updatedPhotocardDisplay = computed(() => ref(photocardDisplay.value))
