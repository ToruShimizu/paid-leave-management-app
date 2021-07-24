<template>
  <div class="rounded-select">
    <!-- ラベル -->
    <p v-if="label" class="mb-0 ml-1 text-caption text-left">
      {{ label }}
      <span v-if="required" class="red--text">*</span>
    </p>
    <!-- セレクトボックス -->
    <v-select
      dense
      outlined
      clearable
      :color="color"
      :background-color="backgroundColor"
      :value="value"
      :items="items"
      :rules="rules"
      :placeholder="placeholder"
      :hint="hint"
      :persistent-hint="persistentHint"
      :readonly="readonly"
      :disabled="disabled"
      :multiple="multiple"
      :item-text="itemText"
      :item-value="itemValue"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type ValidateFunction = (v: string) => true | string
interface SelectableItem {
  value: string
  text: string
}

export default defineComponent({
  name: 'SelectInput',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    items: {
      type: Array as PropType<SelectableItem[]>,
      default: () => []
    },
    value: {
      type: [String, Array, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array as PropType<ValidateFunction[]>,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    persistentHint: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'info'
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    itemText: {
      type: String,
      default: 'text'
    },
    itemValue: {
      type: [String, Number],
      default: 'value'
    }
  }
})
</script>

<style scoped>
.v-text-field--outlined {
  border-radius: 10px;
}
.v-text-field--outlined >>> fieldset {
  border-color: #03a9f4;
}
.v-input >>> .v-input__slot {
  padding: 0 12px;
  margin-bottom: 0;
}
.v-input >>> .v-text-field__details {
  margin-bottom: 0;
}
</style>
