import { Auth } from 'aws-amplify'
import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

// 認証チェックしないページ
const excludedNames = ['sign-in']

export default defineNuxtMiddleware(async ({ route, redirect }) => {
  const currentRouteName = route.name as string

  if (excludedNames.includes(currentRouteName)) return
  try {
    await Auth.currentAuthenticatedUser()
  } catch (e) {
    redirect(200, '/sign-in')
  }
})
