import { useConfirmDialog } from '~/modules/util/confirmDialog'

describe('ユニットテスト: confirmDialog', () => {
  /** ダイアログを開く => okボタンを押す */
  test('openConfirmDialogで渡した関数が、confirmDialog.onOK()で実行される', () => {
    const { confirmDialog, openConfirmDialog } = useConfirmDialog()

    const mockFuncOk = jest.fn(() => {})

    openConfirmDialog('create', mockFuncOk)
    confirmDialog.onOk()
    expect(mockFuncOk).toHaveBeenCalled()
  })

  /** ダイアログを開く => cancelボタンを押す */
  test('openConfirmDialogで第三引数に渡した関数が、confirmDialog.onCancel()で実行される', () => {
    const { confirmDialog, openConfirmDialog } = useConfirmDialog()
    const mockFuncOk = jest.fn(() => {})
    const mockFuncCancel = jest.fn(() => [])

    openConfirmDialog('cancel', mockFuncOk, mockFuncCancel)
    confirmDialog.onCancel()
    expect(mockFuncCancel).toHaveBeenCalled()
  })

  /** ダイアログを開く */
  test('openConfirmDialogを実行して確認ダイアログを開く', () => {
    const { confirmDialog, openConfirmDialog } = useConfirmDialog()

    const func = () => {}
    openConfirmDialog('create', func)
    expect(confirmDialog.isOpened).toEqual(true)
  })

  /** ダイアログを閉じる */
  test('closeConfirmDialogを実行して確認ダイアログを閉じる', () => {
    const { confirmDialog, closeConfirmDialog } = useConfirmDialog()
    closeConfirmDialog()
    expect(confirmDialog.isOpened).toEqual(false)
  })
})
