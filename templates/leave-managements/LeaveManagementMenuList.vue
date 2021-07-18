<template>
  <div class="leave-management-menu-list">
    <v-menu top close-on-click>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="white--text px-1" text nav v-bind="attrs" v-on="on"> 有給管理メニュー </v-btn>
      </template>
      <v-list>
        <v-list-item @click="openRegisterLeaveDialog">
          <v-list-item-title>有給設定 </v-list-item-title>
        </v-list-item>
        <!-- TODO: 取得状況のダイアログを追加する -->
        <v-list-item>
          <v-list-item-title>取得状況 </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <LazyRegisterLeaveDialog v-model="isOpenedRegisterLeaveDialog" @close="closeRegisterLeaveDialog" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { setRegisterLeaveDialogCtx } from '~/useCases/leave-managements/registerLeave'
export default defineComponent({
  name: 'LeaveManagementMenuList',
  setup() {
    return {
      ...setRegisterLeaveDialogCtx()
    }
  }
})
</script>
