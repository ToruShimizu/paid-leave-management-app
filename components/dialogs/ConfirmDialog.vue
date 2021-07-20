<template>
  <v-dialog class="confirm-dialog" :value="isOpened" width="306px" persistent>
    <v-card class="base-card pa-3" v-bind="$attrs">
      <v-toolbar dense flat>
        <span class="font-weight-bold">確認</span>
        <v-spacer />
        <v-btn text icon @click.stop="$emit('close', false)"><v-icon>mdi-close</v-icon></v-btn>
      </v-toolbar>
      <v-divider />

      <div class="pa-4">
        <slot>
          <p>{{ getConfirmType(confirmType) }}します。よろしいですか？</p>
        </slot>
        <slot name="append-message" />
      </div>

      <v-card-actions>
        <v-spacer />
        <v-btn
          ref="okBtn"
          text
          class="attention--text font-weight-bold"
          @click="
            $emit('ok')
            $emit('close', false)
          "
        >
          OK
        </v-btn>
        <v-btn
          text
          class="attention--text font-weight-bold"
          @click="
            $emit('cancel')
            $emit('close', false)
          "
        >
          キャンセル
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch, nextTick } from '@nuxtjs/composition-api'

type Operations = 'register' | 'create' | 'update' | 'delete' | 'cancel' | 'retry'
type OkBtn = {
  $el: HTMLButtonElement
}

export default defineComponent({
  name: 'ConfirmDialog',

  model: {
    prop: 'isOpened',
    event: 'close'
  },

  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    confirmType: {
      type: String as PropType<Operations>
    }
  },

  setup(props) {
    const okBtn = ref<OkBtn | null>(null)

    const getConfirmType = (confirmType: string) => {
      switch (confirmType) {
        case 'register':
          return '登録'
        case 'create':
          return '作成'
        case 'update':
          return '編集'
        case 'delete':
          return '削除'
        case 'retry':
          return 'リトライ'
        case 'cancel':
          return 'キャンセル'
      }
    }

    watch(
      () => props.isOpened,
      val => {
        if (val) {
          nextTick(() => {
            setTimeout(() => {
              if (okBtn.value) okBtn.value.$el.focus()
            }, 0)
          })
        }
      }
    )

    return { getConfirmType, okBtn }
  }
})
</script>
