import { InjectionKey, ref } from '@nuxtjs/composition-api'

type MessageType = 'register' | 'create' | 'update' | 'delete' | 'fetch'

export const useAppLoader = () => {
  const isLoading = ref(false)
  const message = ref('')

  const appLoader = {
    start: (type: MessageType) => {
      isLoading.value = true
      switch (type) {
        case 'register':
          message.value = '登録しています。'
        case 'create':
          message.value = '作成しています。'
        case 'update':
          message.value = '更新しています。'
        case 'delete':
          message.value = '削除しています。'
        case 'fetch':
          message.value = '読み込んでいます。'
      }
    },
    finish: () => {
      isLoading.value = false
    }
  }
  return { isLoading, message, appLoader }
}
export type UseAppLoader = ReturnType<typeof useAppLoader>
export const AppLoaderKey: InjectionKey<UseAppLoader> = Symbol('AppLoader')
