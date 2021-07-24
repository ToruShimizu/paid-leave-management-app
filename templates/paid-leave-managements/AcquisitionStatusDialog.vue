<template>
  <AppDialog :is-opened="isOpened" class="acquisition-status-dialog" title="取得状況" @close="$emit('close')">
    <!-- TODO: 取得状況の情報を追加する -->
    <template v-slot:buttons>
      <!-- TODO: 編集ダイアログ -->
      <AppBtn class="mr-2">編集</AppBtn>
      <AppBtn outlined class="ml-2" @click="$emit('close')">キャンセル</AppBtn>
    </template>
  </AppDialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AcquisitionStatusDialog',
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
