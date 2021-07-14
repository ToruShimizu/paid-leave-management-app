<template>
  <div id="sign-in" class="flex-column">
    <div class="text-center">
      <p class="text-h4 font-weight-bold light-blue--text text--darken-4">有給休暇管理</p>
    </div>
    <div class="text-caption text-center grey--text mt-n2 mb-10">
      <p>ユーザーネームとパスワードを入力してください</p>
    </div>
    <div align="center">
      <div><TextInput v-model="username" label="username" required /></div>
    </div>
    <div align="center">
      <div><TextInput v-model="password" label="password" required /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PagesSignIn',
  layout: 'no-header',
  setup() {
    const signInInput = reactive({
      username: '',
      password: ''
    })
    return {
      ...toRefs(signInInput)
    }
  }
})
</script>
