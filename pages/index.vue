<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Index',
  middleware({ redirect }) {
    redirect(200, '/leave-management/')
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
