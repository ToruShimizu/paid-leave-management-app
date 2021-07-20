<template>
  <v-overlay class="app-loader text-center" :value="isLoading" color="grey lighten-5">
    <v-progress-circular indeterminate size="100" color="primary" width="12" />
    <p class="mt-6 primary--text caption font-weight-bold text-center">
      {{ message }}
    </p>
  </v-overlay>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppLoader',
  props: {
    message: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped></style>
