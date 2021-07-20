<template>
  <div id="layouts-default">
    <v-app>
      <v-app-bar app color="light-blue darken-4">
        <v-spacer />
        <div class="navigation-btns d-flex">
          <LeaveManagementMenuList />
          <AccountMenuList />
        </div>
      </v-app-bar>
      <v-main>
        <v-container>
          <Nuxt />
          <AppLoader :message="message" :is-loading="isLoading" />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { defineComponent, provide } from '@nuxtjs/composition-api'
import { AppLoaderKey, useAppLoader } from '~/modules/util/appLoader'

export default defineComponent({
  name: 'LayoutsDefault',
  middleware: 'checkAuthentication',
  setup() {
    const { isLoading, message, appLoader } = useAppLoader()
    provide(AppLoaderKey, { appLoader })

    return { isLoading, message }
  }
})
</script>

<style scoped></style>
