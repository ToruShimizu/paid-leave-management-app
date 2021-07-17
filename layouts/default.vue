<template>
  <div id="layouts-default">
    <v-app>
      <v-app-bar app color="light-blue darken-4">
        <v-spacer />
        <div class="navigation-btns d-flex">
          <v-btn class="white--text" text nav> 有給管理メニュー </v-btn>
          <AccountMenuList />
        </div>
      </v-app-bar>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LayoutsDefault',
  middleware: 'checkAuthentication'
})
</script>

<style scoped></style>
