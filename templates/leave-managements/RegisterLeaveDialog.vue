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
import { defineComponent, reactive, toRefs, watch } from '@nuxtjs/composition-api'

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
    const registerLeaveInput = reactive({
      date: '',
      leaveUnit: 0,
      reason: ''
    })
    const registerLeave = () => {
      console.log(registerLeaveInput)
      console.log('有給休暇登録機能は未実装')
      emit('close')
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
