<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  setup() {
    const pageNotFound = ref('404 Not Found')
    const otherError = ref('An error occurred')
    return {
      pageNotFound,
      otherError
    }
  }
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
