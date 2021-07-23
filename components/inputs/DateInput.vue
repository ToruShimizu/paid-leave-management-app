<template>
  <v-menu
    ref="menu"
    v-model="isOpened"
    :close-on-content-click="false"
    class="date-input"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="value"
        :rules="rules"
        :disabled="disabled"
        outlined
        rounded
        dense
        prepend-inner-icon="mdi-calendar"
        color="info"
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <v-date-picker
      :value="value"
      :landscape="landscape"
      no-title
      locale="jp-ja"
      :day-format="date => new Date(date).getDate()"
      @change="$emit('change', $event)"
    >
      <v-spacer />
      <v-btn text color="primary" @click="isOpened = false"> Close </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api'
type ValidateFunction = (v: string) => true | string

export default defineComponent({
  name: 'DateInput',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Date],
      default: ''
    },
    reactive: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array as PropType<ValidateFunction[]>,
      default: () => []
    },
    landscape: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const isOpened = ref(false)
    return { isOpened }
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
.v-text-field--rounded >>> .v-input__control > .v-input__slot {
  padding: 0 12px;
}
</style>
