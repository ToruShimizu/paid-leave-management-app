import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Auth } from 'aws-amplify'
interface SignInInput {
  username: string
  password: string
}
// TODO: ユーザーができたら更新する
export const state = () => ({
  username: ''
})

export type RootState = ReturnType<typeof state>
export const mutations: MutationTree<RootState> = {
  setUser(state, user) {
    state.username = user.username
  },
  resetUser(state) {
    state.username = ''
  }
}
export const getters: GetterTree<RootState, RootState> = {
  user: state => state.username
}

export const actions: ActionTree<RootState, RootState> = {
  async signIn({ commit }, user: SignInInput) {
    console.debug('arg: ', user)
    const userData = await Auth.signIn(user.username, user.password)
    console.debug('userData: ', userData)
    commit('setUser', userData)

    if (userData.challengeParam === 'NEW_PASSWORD`REQUIRED') {
      await Auth.completeNewPassword(userData, user.password)
    }
  },
  async signOut({ commit }) {
    await Auth.signOut()
    commit('resetUser')
  }
}
