import { InjectionKey, reactive, ref } from '@nuxtjs/composition-api'

enum MessageType {
  REGISTER = 'register',
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LOAD = 'load'
}

export const useAppLoader = () => {
  const isLoading = ref(false)
  const message = ref('')

  const messageType = reactive({
    register: MessageType.REGISTER,
    create: MessageType.CREATE,
    update: MessageType.UPDATE,
    delete: MessageType.DELETE,
    load: MessageType.LOAD
  })

  const appLoader = {
    start: (type: MessageType) => {
      isLoading.value = true
      // 画面に表示するメッセージ
      switch (type) {
        case 'register':
          message.value = '登録しています。'
          break
        case 'create':
          message.value = '作成しています。'
          break
        case 'update':
          message.value = '更新しています。'
          break
        case 'delete':
          message.value = '削除しています。'
          break
        case 'load':
          message.value = '読み込んでいます。'
      }
    },
    finish: () => {
      isLoading.value = false
    }
  }
  return { isLoading, message, appLoader, messageType }
}
export type UseAppLoader = ReturnType<typeof useAppLoader>
export const AppLoaderKey: InjectionKey<Pick<UseAppLoader, 'appLoader' | 'messageType'>> = Symbol('AppLoader')
