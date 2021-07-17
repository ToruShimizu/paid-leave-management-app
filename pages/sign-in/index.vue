<template>
  <div id="sign-in" class="flex-column">
    <div class="text-center">
      <p class="text-h4 font-weight-bold light-blue--text text--darken-4">有給休暇管理</p>
    </div>
    <div class="text-caption text-center grey--text mt-n2 mb-10">
      <p>usernameとpasswordを入力してください</p>
    </div>
    <v-form v-model="isValid">
      <div align="center">
        <div><TextInput v-model="username" :rules="accountValidationRules.username" label="username" required /></div>
      </div>
      <div align="center">
        <div>
          <TextInput
            v-model="password"
            :rules="accountValidationRules.password"
            type="password"
            label="password"
            required
          />
        </div>
      </div>
    </v-form>
    <div align="center">
      <div>
        <AppBtn :disabled="!isValid" color="blue darken-1" @click="signIn">ログイン</AppBtn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, useContext } from '@nuxtjs/composition-api'
import { useAccountRules } from '~/useCases/accounts/validation'

export default defineComponent({
  name: 'PagesSignIn',
  layout: 'no-header',
  setup() {
    const {
      app: { store }
    } = useContext()

    const { accountValidationRules } = useAccountRules()

    const isValid = ref(false)

    const signInInput = reactive({
      username: '',
      password: ''
    })

    const signIn = () => {
      try {
        if (store) store.dispatch('user/signIn', signInInput)
      } catch (e) {
        console.error(e)
      }
    }
    return {
      /** data */
      isValid,
      ...toRefs(signInInput),
      /** methods */
      signIn,
      accountValidationRules
    }
  }
})
</script>
