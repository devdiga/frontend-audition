import { ref, computed } from 'vue'

export const data = ref("")

export const textoAtualizado = computed(() => data.value)