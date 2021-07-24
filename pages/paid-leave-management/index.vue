<template>
  <div id="pages-paid-leave-management">
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
      <v-calendar
        ref="calenderRef"
        v-model="date"
        color="primary"
        type="month"
        locale="ja-jp"
        :day-format="timestamp => new Date(timestamp.date).getDate()"
        :month-format="timestamp => new Date(timestamp.date).getMonth() + 1 + ' /'"
        @click:date="openRegisterPaidLeaveDialog"
      />
    </v-sheet>
    <LazyRegisterLeaveDialog v-model="isOpenedRegisterPaidLeaveDialog" :selected-date="date" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api'
import { usePaidLeaveManagement } from '~/useCases/paid-leave-managements/paidLeaveManagement'
import { setRegisterPaidLeaveDialogCtx } from '~/useCases/paid-leave-managements/registerPaidLeave'

export default defineComponent({
  name: 'PagesPaidLeaveManagement',
  setup() {
    const { calenderRef, calenderInput, convertedDate, prev, next } = usePaidLeaveManagement()
    return {
      /** data */
      calenderRef,
      convertedDate,
      ...toRefs(calenderInput),
      /** methods */
      prev,
      next,
      ...setRegisterPaidLeaveDialogCtx()
    }
  }
})
</script>

<style scoped></style>
