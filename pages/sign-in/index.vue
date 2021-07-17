<template>
  <div id="sign-in" class="flex-column">
    <div class="text-center">
      <p class="text-h4 font-weight-bold light-blue--text text--darken-4">有給休暇管理</p>
    </div>
    <div class="text-caption text-center grey--text mt-n2 mb-10">
      <p>usernameとpasswordを入力してください</p>
    </div>
    <div align="center">
      <div><TextInput v-model="username" label="username" required /></div>
    </div>
    <div align="center">
      <div><TextInput v-model="password" type="password" label="password" required /></div>
    </div>
    <div align="center">
      <div>
        <AppBtn color="blue darken-1" @click="signIn">ログイン</AppBtn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PagesSignIn',
  layout: 'no-header',
  setup() {
    const { app } = useContext()
    const signInInput = reactive({
      username: '',
      password: ''
    })

    const signIn = () => {
      try {
        if (app.store) app.store.dispatch('user/signIn', signInInput)
      } catch (e) {
        console.error(e)
      }
    }
    return {
      /** data */
      ...toRefs(signInInput),
      /** methods */
      signIn
    }
  }
})
</script>
