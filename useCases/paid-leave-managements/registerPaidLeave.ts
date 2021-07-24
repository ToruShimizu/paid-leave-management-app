import { ref } from '@nuxtjs/composition-api'

export const useRegisterPaidLeave = () => {}

export const setRegisterPaidLeaveDialogCtx = () => {
  const isOpenedRegisterPaidLeaveDialog = ref(false)

  const openRegisterPaidLeaveDialog = () => {
    isOpenedRegisterPaidLeaveDialog.value = true
  }

  const closeRegisterPaidLeaveDialog = () => {
    isOpenedRegisterPaidLeaveDialog.value = false
  }

  return {
    isOpenedRegisterPaidLeaveDialog,
    openRegisterPaidLeaveDialog,
    closeRegisterPaidLeaveDialog
  }
}
