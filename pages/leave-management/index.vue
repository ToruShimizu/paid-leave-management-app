<template>
  <div id="pages-leave-management">
    <v-toolbar flat>
      <v-sheet>
        <div class="d-flex">
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <p class="pt-2">
            {{ convertedDate }}
          </p>
        </div>
      </v-sheet>
    </v-toolbar>
    <v-sheet height="600">
      <v-calendar ref="calenderRef" v-model="date" color="primary" type="month" @click:date="openRegisterLeaveDialog" />
    </v-sheet>
    <!-- TODO: 有給登録コンポーネントを作成する -->
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api'
import { useLeaveManagement } from '~/useCases/leave-managements/leaveManagement'
import { setRegisterLeaveDialogCtx } from '~/useCases/leave-managements/registerLeave'

export default defineComponent({
  name: 'PagesLeaveManagement',
  setup() {
    const { calenderRef, calenderInput, convertedDate, prev, next } = useLeaveManagement()
    return {
      /** data */
      calenderRef,
      convertedDate,
      ...toRefs(calenderInput),
      /** methods */
      prev,
      next,
      ...setRegisterLeaveDialogCtx()
    }
  }
})
</script>

<style scoped></style>
