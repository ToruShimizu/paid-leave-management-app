<template>
  <div class="account-menu-list">
    <v-menu top close-on-click>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="white--text" text nav v-bind="attrs" v-on="on"> アカウント管理メニュー </v-btn>
      </template>
      <v-list>
        <v-list-item @click="updateAccount">
          <v-list-item-title>アカウント編集 </v-list-item-title>
        </v-list-item>
        <v-list-item @click="signOut">
          <v-list-item-title> ログアウト </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AccountMenuList',
  setup() {
    const { app } = useContext()

    const signOut = () => {
      try {
        if (app.store) app.store.dispatch('user/signOut')
      } catch (e) {
        console.error(e)
      }
    }

    // TODO: アカウント編集機能を作成する
    const updateAccount = () => {
      console.log('アカウント編集昨日は未実装です')
    }

    return {
      /** methods */
      updateAccount,
      signOut
    }
  }
})
</script>
