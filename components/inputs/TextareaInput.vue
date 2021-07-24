<template>
  <div class="textarea-input">
    <v-row no-gutters>
      <v-col cols="10" align="start">
        <p class="mb-0 ml-2 text-caption">
          {{ label }}
          <span v-if="required" class="red--text">*</span>
        </p>
      </v-col>
    </v-row>
    <v-textarea
      :value="value"
      :type="type"
      :hint="hint"
      :rules="rules"
      :counter="counter"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      outlined
      no-resize
      persistent-hint
      class="mt-1"
      color="primary"
      height="5.625rem"
      @input="$emit('input', $event)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type ValidateFunction = (v: string) => true | string

export default defineComponent({
  name: 'TextareaInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    hint: {
      type: String,
      default: ''
    },
    rules: {
      type: Array as PropType<ValidateFunction[]>,
      default: () => []
    },
    counter: {
      type: [Boolean, Number, String],
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped>
.v-input.v-textarea.v-text-field.v-text-field--outlined {
  border-radius: 1.25rem;
}
.v-text-field--outlined >>> fieldset {
  border-color: #03a9f4;
}
.v-text-field__slot >>> textarea {
  margin-bottom: 10px;
}
.textarea >>> .v-text-field--rounded .v-input__control .v-input__slot {
  padding: 0 2rem;
}
.textarea-input >>> .v-text-field__details {
  margin-bottom: 0;
}
.textarea-input >>> .v-input__slot {
  padding: 0 12px;
  margin-bottom: 0;
}
</style>
