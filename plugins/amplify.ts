import Amplify from 'aws-amplify'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(() => {
  const region = process.env.AWS_AMPLIFY_AUTH_REGION
  const userPoolId = process.env.AWS_AMPLIFY_AUTH_USER_POOL_ID
  const userPoolWebClientId = process.env.AWS_AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID
  const identityPoolId = process.env.AWS_AMPLIFY_AUTH_ID_POOL_ID

  Amplify.configure({
    Auth: {
      region,
      userPoolId,
      userPoolWebClientId,
      identityPoolId
    },
    API: {
      aws_project_region: region,
      aws_appsync_region: region,
      aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_ENDPOINT,
      aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
    }
  })

  Amplify.configure({
    API: {
      graphql_headers: async () => {
        const session = await Amplify.Auth.currentSession()
        return {
          Authorization: session.getIdToken().getJwtToken()
        }
      }
    }
  })
})
