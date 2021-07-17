import { useContext } from '@nuxtjs/composition-api'

export const useValidationRules = () => {
  const {
    app: { i18n }
  } = useContext()
  /**
   * 与えられた文字列が, 引数で指定した範囲以内かどうかを返す
   * @param label フォームの項目名にあたり、i18nメッセージに埋め込まれる
   * @param min 最低文字数
   * @param max 最大文字数
   * @param optional デフォルトは `false` . `false` の場合, `v` が空の場合に条件を評価せず `true` を返す. 必須項目の場合trueにする.
   */

  /** 必須項目 */
  const validateRequired =
    (label: string) =>
    <T>(v: T) => {
      return !!v || i18n.tc('validationMessages.required', 1, { label })
    }

  /** 最低文字数と最大文字数 */
  const validateRange =
    (label: string, min: number, max: number, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.length.range', 1, { label, min, max })
      const condition = (v.length >= min && v.length <= max) || message
      return optional ? !v || condition : condition
    }

  /** 半角英数字のみ */
  const validateOnlyAlphanumeric =
    (label: string, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.only.alphanumeric', 1, { label })
      const condition = !!/^[a-zA-Z0-9]+$/.test(v) || message
      return optional ? !v || condition : condition
    }

  /** 最低1文字は半角英語が必須 */
  const validateAtLeastOneAlphabet =
    (label: string, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.atLeastOne.alphabet', 1, { label })
      const condition = /[a-zA-Z]/.test(v) || message
      return optional ? !v || condition : condition
    }

  /** 最低1文字は半角数字が必須 */
  const validateAtLeastOneNumber =
    (label: string, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.atLeastOne.number', 1, { label })
      const condition = /[0-9]/.test(v) || message
      return optional ? !v || condition : condition
    }

  /** 最低1文字は半角英語の小文字が必須 */
  const validateAtLeastOneLowerCase =
    (label: string, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.atLeastOne.lowerCase', 1, { label })
      const condition = /[a-z]/.test(v) || message
      return optional ? !v || condition : condition
    }

  return {
    validateAtLeastOneAlphabet,
    validateAtLeastOneLowerCase,
    validateAtLeastOneNumber,
    validateOnlyAlphanumeric,
    validateRange,
    validateRequired
  }
}
