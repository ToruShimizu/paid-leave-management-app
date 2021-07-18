<template></template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {}
})

export const setRegisterLeaveDialogCtx = () => {
  const isOpendRegisterLeaveDialog = ref(false)

  const openRegisterLeaveDialog = () => {
    isOpendRegisterLeaveDialog.value = true
  }

  const closeRegisterLeaveDialog = () => {
    isOpendRegisterLeaveDialog.value = false
  }

  return {
    isOpendRegisterLeaveDialog,
    openRegisterLeaveDialog,
    closeRegisterLeaveDialog
  }
}
</script>
