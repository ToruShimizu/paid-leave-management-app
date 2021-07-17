import { useValidationRules } from './../../modules/validationRules'
export const useAccountRules = () => {
  const {
    validateAtLeastOneAlphabet,
    validateAtLeastOneLowerCase,
    validateAtLeastOneNumber,
    validateOnlyAlphanumeric,
    validateRange,
    validateRequired
  } = useValidationRules()

  const accountValidationRules = {
    username: [validateRequired('username'), validateRange('username', 8, 190)],
    password: [
      validateRequired('password'),
      validateRange('password', 8, 255),
      validateAtLeastOneAlphabet('password'),
      validateOnlyAlphanumeric('password'),
      validateAtLeastOneLowerCase('password'),
      validateAtLeastOneNumber('password')
    ]
  }

  return { accountValidationRules }
}
