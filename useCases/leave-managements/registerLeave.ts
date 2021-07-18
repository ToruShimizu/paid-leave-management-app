import { ref } from '@nuxtjs/composition-api'

export const useRegisterLeave = () => {}

export const setRegisterLeaveDialogCtx = () => {
  const isOpenedRegisterLeaveDialog = ref(false)

  const openRegisterLeaveDialog = () => {
    isOpenedRegisterLeaveDialog.value = true
  }

  const closeRegisterLeaveDialog = () => {
    isOpenedRegisterLeaveDialog.value = false
  }

  return {
    isOpenedRegisterLeaveDialog,
    openRegisterLeaveDialog,
    closeRegisterLeaveDialog
  }
}
