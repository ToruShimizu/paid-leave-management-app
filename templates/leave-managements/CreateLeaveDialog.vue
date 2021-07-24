<template>
  <AppDialog :is-opened="isOpened" class="create-leave-dialog" title="有給設定" @close="$emit('close')">
    <TextInput type="number" label="付与日数" />
    <TextInput label="取得目標" />
    <template v-slot:buttons>
      <AppBtn class="mr-2">作成</AppBtn>
      <AppBtn outlined class="ml-2" @click="$emit('close')">キャンセル</AppBtn>
    </template>
  </AppDialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CreateLeaveDialog',
  model: {
    prop: 'isOpened',
    event: 'close'
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  },

  setup() {}
})
</script>
