<template>
  <v-dialog :value="isOpened" :width="width" no-click-animation class="app-dialog" persistent>
    <v-card color="grey50" tile>
      <!-- ダイアログのヘッダ -->
      <v-toolbar flat>
        <!-- タイトル -->
        <span> {{ title }}</span>
        <v-spacer />
        <!-- 閉じるボタン -->
        <v-btn text icon @click.stop="$emit('close', false)"><v-icon>mdi-close</v-icon></v-btn>
      </v-toolbar>
      <!-- 内容表示部 -->

      <div class="app-dialog-contents px-4 pt-6">
        <slot />
      </div>

      <!-- ボタン -->
      <v-card-actions class="d-flex justify-center px-4 pb-12">
        <slot name="buttons" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppDialog',
  model: {
    prop: 'isOpened',
    event: 'close'
  },
  props: {
    isOpened: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  setup() {}
})
</script>
