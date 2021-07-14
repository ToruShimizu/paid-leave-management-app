import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'
import { Amplify } from 'aws-amplify'
import { CognitoUserSession } from 'amazon-cognito-identity-js'

export const ERROR_BAD_REQUEST = {
  code: 400,
  type: 'ERROR_BAD_REQUEST',
  message: 'bad request'
}

export const ERROR_NOT_FOUND = {
  code: 404,
  type: 'NOT_FOUND',
  message: 'not found'
}
export const client = new AWSAppSyncClient({
  url: process.env.AWS_APPSYNC_ENDPOINT!,
  region: process.env.AWS_AMPLIFY_AUTH_REGION!,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      await Amplify.Auth.currentSession().then((session: CognitoUserSession) => session.getIdToken().getJwtToken())
  }
})
