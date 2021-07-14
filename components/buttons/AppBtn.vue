<template>
  <v-btn
    class="app-btn"
    :class="{ 'white--text': !outlined, 'bg-white-btn ': outlined }"
    :outlined="outlined"
    :disabled="disabled"
    :color="color"
    :width="width"
    height="2.1875rem"
    v-bind="bind"
    v-on="on"
    @click.stop="$emit('click')"
  >
    <span class="text-button font-weight-bold">
      <slot />
    </span>
  </v-btn>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppBtn',

  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: '300'
    },
    color: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bind: {
      type: Object,
      required: false
    },
    on: {
      type: Object,
      required: false
    }
  }
})
</script>

<style scoped>
.rounded-btn {
  border-radius: 20px;
}
</style>
