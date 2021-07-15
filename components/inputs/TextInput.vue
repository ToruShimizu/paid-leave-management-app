<template>
  <div class="text-input">
    <v-row no-gutters>
      <v-col cols="10" align="start">
        <p class="mb-0 ml-1 text-caption">
          {{ label }}
          <span v-if="required" class="red--text">*</span>
        </p>
      </v-col>
    </v-row>

    <v-text-field
      :value="value"
      :placeholder="placeholder"
      :counter="counter"
      :hint="hint"
      :persistent-hint="persistentHint"
      :rules="rules"
      :type="type"
      :readonly="readonly"
      :disabled="disabled"
      outlined
      rounded
      dense
      color="info"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type ValidateFunction = (v: string) => true | string

export default defineComponent({
  name: 'TextInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    counter: {
      type: [Boolean, Number, String],
      default: false
    },
    hint: {
      type: String,
      default: ''
    },
    persistentHint: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array as PropType<ValidateFunction[]>,
      default: () => []
    },
    type: {
      type: String,
      default: 'text'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
.text-input >>> .v-text-field__details {
  margin-bottom: 0;
}
.text-input >>> .v-input__slot {
  padding: 0 12px;
  margin-bottom: 0;
}
</style>
