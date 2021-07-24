import { VCalender } from '../../types/component'
import { computed, reactive, ref, useContext } from '@nuxtjs/composition-api'

export const usePaidLeaveManagement = () => {
  const { app } = useContext()

  const calenderInput = reactive({
    date: new Date()
  })

  const calenderRef = ref<VCalender | null>(null)

  const convertedDate = computed(() => app.$dayjs(calenderInput.date).format('YYYY/MM/DD'))

  const prev = () => {
    if (calenderRef.value) calenderRef.value.prev()
  }
  const next = () => {
    if (calenderRef.value) calenderRef.value.next()
  }

  return {
    /** data */
    calenderRef,
    calenderInput,
    convertedDate,
    /** methods */
    prev,
    next
  }
}
