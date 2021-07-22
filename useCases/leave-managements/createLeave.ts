import { ref } from '@nuxtjs/composition-api'

export const useCreateLeave = () => {}

export const setCreateLeaveDialogCtx = () => {
  const isOpenedCreateLeaveDialog = ref(false)

  const openCreateLeaveDialog = () => {
    isOpenedCreateLeaveDialog.value = true
  }

  const closeCreateLeaveDialog = () => {
    isOpenedCreateLeaveDialog.value = false
  }

  return {
    isOpenedCreateLeaveDialog,
    openCreateLeaveDialog,
    closeCreateLeaveDialog
  }
}
