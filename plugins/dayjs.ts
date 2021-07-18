import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import utc from 'dayjs/plugin/utc'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'
dayjs.locale('ja')
dayjs.extend(utc)
dayjs.extend(isSameOrBefore)

declare module 'vue/types/vue' {
  interface Vue {
    $dayjs: (date?: dayjs.ConfigType) => dayjs.Dayjs
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $dayjs: (date?: dayjs.ConfigType) => dayjs.Dayjs
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $dayjs: (date?: dayjs.ConfigType) => dayjs.Dayjs
  }
}

export default defineNuxtPlugin((_, inject) => {
  inject('dayjs', (date?: dayjs.ConfigType): dayjs.Dayjs => {
    return dayjs(date)
  })
})
