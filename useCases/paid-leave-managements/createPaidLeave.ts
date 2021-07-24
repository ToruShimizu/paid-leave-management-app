import { ref } from '@nuxtjs/composition-api'

export const useCreatePaidLeave = () => {}

export const setCreatePaidLeaveDialogCtx = () => {
  const isOpenedCreatePaidLeaveDialog = ref(false)

  const openCreatePaidLeaveDialog = () => {
    isOpenedCreatePaidLeaveDialog.value = true
  }

  const closeCreatePaidLeaveDialog = () => {
    isOpenedCreatePaidLeaveDialog.value = false
  }

  return {
    isOpenedCreatePaidLeaveDialog,
    openCreatePaidLeaveDialog,
    closeCreatePaidLeaveDialog
  }
}
