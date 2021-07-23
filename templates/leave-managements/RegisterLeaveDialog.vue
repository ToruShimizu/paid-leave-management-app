<template>
  <AppDialog :is-opened="isOpened" class="register-leave-dialog" title="有給登録" @close="$emit('close')">
    <DateInput v-model="date" />
    <SelectInput v-model="leaveUnit" :items="LEAVE_TYPES" label="休暇単位" required />
    <TextareaInput v-model="reason" label="理由" />
    <template v-slot:buttons>
      <AppBtn class="mr-2" @click="registerLeave">登録</AppBtn>
      <AppBtn outlined class="ml-2" @click="$emit('close')">キャンセル</AppBtn>
    </template>
  </AppDialog>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, toRefs, watch } from '@nuxtjs/composition-api'
import { AppLoaderKey } from '~/modules/util/appLoader'

const LEAVE_TYPES = [
  { text: '全休', value: 1 },
  { text: '半休', value: 0.5 }
]
export default defineComponent({
  name: 'RegisterLeaveDialog',
  model: {
    prop: 'isOpened',
    event: 'close'
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    selectedDate: {
      type: [Date, String],
      default: ''
    }
  },
  setup(props, { emit }) {
    const { appLoader, messageType } = inject(AppLoaderKey)!
    if (!appLoader && !messageType) throw new Error('AppLoaderKey is not provided')

    const registerLeaveInput = reactive({
      date: '',
      leaveUnit: 0,
      reason: ''
    })
    // TODO: 登録機能を実装する
    const registerLeave = () => {
      appLoader.start(messageType.register)
      try {
        console.log(registerLeaveInput)
        console.log('有給休暇登録機能は未実装')
        emit('close')
      } catch (e) {
        console.error(e)
      } finally {
        appLoader.finish()
      }
    }
    /*
    /** init
     */
    watch(
      () => props.isOpened,
      val => {
        if (val) registerLeaveInput.date = props.selectedDate
      }
    )
    return {
      /** data */
      LEAVE_TYPES,
      ...toRefs(registerLeaveInput),
      /** methods */
      registerLeave
    }
  }
})
</script>
