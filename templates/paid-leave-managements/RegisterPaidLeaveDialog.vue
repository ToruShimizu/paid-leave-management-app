<template>
  <AppDialog
    :is-opened="isOpened"
    class="register-paid-leave-dialog"
    width="500px"
    title="有給登録"
    @close="$emit('close')"
  >
    <DateInput v-model="date" />
    <SelectInput v-model="leaveUnit" :items="LEAVE_TYPES" label="休暇単位" required />
    <TextareaInput v-model="reason" label="理由" />
    <template v-slot:buttons>
      <AppBtn class="mr-2" width="200px" @click="registerPaidLeave">登録</AppBtn>
      <AppBtn outlined class="ml-2" width="200px" @click="$emit('close')">キャンセル</AppBtn>
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
  name: 'RegisterPaidLeaveDialog',
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

    const registerPaidLeaveInput = reactive({
      date: '',
      leaveUnit: 0,
      reason: ''
    })
    // TODO: 登録機能を実装する
    const registerPaidLeave = () => {
      appLoader.start(messageType.register)
      try {
        console.log(registerPaidLeaveInput)
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
        if (val) registerPaidLeaveInput.date = props.selectedDate
      }
    )
    return {
      /** data */
      LEAVE_TYPES,
      ...toRefs(registerPaidLeaveInput),
      /** methods */
      registerPaidLeave
    }
  }
})
</script>
