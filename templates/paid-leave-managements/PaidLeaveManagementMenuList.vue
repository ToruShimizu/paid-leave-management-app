<template>
  <div class="paid-leave-management-menu-list">
    <v-menu top close-on-click>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="white--text px-1" text nav v-bind="attrs" v-on="on"> 有給管理メニュー </v-btn>
      </template>
      <v-list>
        <v-list-item @click="openCreatePaidLeaveDialog">
          <v-list-item-title>有給設定 </v-list-item-title>
        </v-list-item>
        <!-- TODO: 取得状況のダイアログを追加する -->
        <v-list-item>
          <v-list-item-title>取得状況 </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <LazyCreatePaidLeaveDialog v-model="isOpenedCreatePaidLeaveDialog" @close="closeCreatePaidLeaveDialog" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { setCreatePaidLeaveDialogCtx } from '~/useCases/paid-leave-managements/createPaidLeave'
export default defineComponent({
  name: 'LeaveManagementMenuList',
  setup() {
    return {
      ...setCreatePaidLeaveDialogCtx()
    }
  }
})
</script>
