<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LayoutsNoHeader',
  setup() {
    return {}
  }
})
</script>

<style scoped>
.container.fill-height {
  justify-content: center;
}
</style>
