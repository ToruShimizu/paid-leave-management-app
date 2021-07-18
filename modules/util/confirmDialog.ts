import { reactive } from '@nuxtjs/composition-api'

type Operations = 'create' | 'update' | 'delete' | 'cancel' | 'retry'

interface ConfirmDialog {
  isOpened: boolean
  confirmType: Operations
  onOk: () => any
  onCancel: () => any
}

export const useConfirmDialog = () => {
  // OKボタン押下時のデフォルトの処理
  const DEFAULT_ON_OK = () => {}

  // キャンセルボタン押下時のデフォルトの処理
  const DEFAULT_ON_CANCEL = () => {
    confirmDialog.isOpened = false
  }
  const DEFAULT_CONFIRM_TYPE: Operations = 'create'

  /**
   * 確認ダイアログの開閉フラグと、ボタン押下時の処理を持つReactiveオブジェクト
   */
  const confirmDialog = reactive<ConfirmDialog>({
    isOpened: false,
    confirmType: DEFAULT_CONFIRM_TYPE,
    onOk: DEFAULT_ON_OK,
    onCancel: DEFAULT_ON_CANCEL
  })

  /**
   * 確認ダイアログの開閉フラグをtrueにする。
   * 引数として、OK/キャンセルボタン押下時の処理を受け取る。
   * @param onOk ダイアログのOK押下時に実行する関数
   * @param onCancel ダイアログのキャンセル押下時に実行する関数
   */
  const openConfirmDialog = (type: Operations, onOk: () => any, onCancel: () => any = DEFAULT_ON_CANCEL) => {
    confirmDialog.confirmType = type
    confirmDialog.onOk = onOk
    confirmDialog.onCancel = onCancel
    confirmDialog.isOpened = true
  }

  /**
   * 確認ダイアログのを閉じる。
   * ボタン押下時に実行する関数をクリアする。
   */
  const closeConfirmDialog = () => {
    confirmDialog.isOpened = false
    confirmDialog.onOk = DEFAULT_ON_OK
    confirmDialog.onCancel = DEFAULT_ON_CANCEL
  }

  return {
    confirmDialog,
    openConfirmDialog,
    closeConfirmDialog
  }
}
