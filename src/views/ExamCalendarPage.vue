<script setup>
import { ref, computed } from 'vue'
const showEditModal = ref(false)
const showDatePicker = ref(false)
const selectedMonth = ref(4) // May (0-indexed)
const selectedYear = ref(2026)
const month = computed(() => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return `${monthNames[selectedMonth.value]} ${selectedYear.value}`
})
const days = ref(
  Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    exam: [
      { day: 10, subject: 'Mathematics' },
      { day: 16, subject: 'Indonesian Language' },
      { day: 22, subject: 'Physics' },
      { day: 28, subject: 'English' },
    ].find((item) => item.day === i + 1),
  })),
)
const weekRows = computed(() => {
  const rows = []
  const startOffset = 3
  let cells = Array(startOffset).fill(null)
  days.value.forEach((day) => {
    cells.push(day)
    if (cells.length === 7) {
      rows.push(cells)
      cells = []
    }
  })
  if (cells.length) {
    rows.push([...cells, ...Array(7 - cells.length).fill(null)])
  }
  return rows
})
const updateDate = () => {
  // Update days array based on selected month/year
  const daysInMonth = new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate()
  days.value = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    exam: null, // Reset exams when changing month
  }))
  showDatePicker.value = false
}
</script>

<template>
  <!-- Page Header -->
  <div class="flex justify-between items-end mb-xl">
    <div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Exam Calendar</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Stay organized with your exam schedule and preparation timeline.
      </p>
    </div>
    <div class="flex items-center gap-md">
      <div class="text-on-surface-variant font-label-md">
        {{ month }}
      </div>
      <button
        class="energized-card p-md hover:scale-105 transition-transform"
        @click="showDatePicker = true"
      >
        <span class="material-symbols-outlined text-primary">calendar_month</span>
      </button>
      <button
        class="vibrant-gradient text-white px-xl py-md rounded-xl font-label-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform"
        @click="showEditModal = true"
      >
        <span class="material-symbols-outlined mr-sm">edit</span>
        Edit Schedule
      </button>
    </div>
  </div>

  <!-- Date Picker Modal -->
  <div
    v-if="showDatePicker"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click="showDatePicker = false"
  >
    <div class="energized-card p-xl max-w-md w-full mx-md" @click.stop>
      <h3 class="font-headline-md text-headline-md text-on-surface mb-lg">Select Month & Year</h3>
      <div class="grid grid-cols-2 gap-md mb-lg">
        <div>
          <label class="block font-label-bold text-label-bold text-on-surface mb-xs">Month</label>
          <select
            v-model="selectedMonth"
            class="w-full border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          >
            <option
              v-for="(monthName, index) in [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]"
              :key="monthName"
              :value="index"
            >
              {{ monthName }}
            </option>
          </select>
        </div>
        <div>
          <label class="block font-label-bold text-label-bold text-on-surface mb-xs">Year</label>
          <select
            v-model="selectedYear"
            class="w-full border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          >
            <option v-for="year in [2024, 2025, 2026, 2027, 2028]" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex gap-md">
        <button
          class="flex-1 border border-outline-variant text-on-surface py-sm rounded-lg font-label-bold hover:bg-surface-container transition-colors"
          @click="showDatePicker = false"
        >
          Cancel
        </button>
        <button
          class="flex-1 vibrant-gradient text-white py-sm rounded-lg font-label-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
          @click="updateDate"
        >
          Update
        </button>
      </div>
    </div>
  </div>

  <!-- Edit Schedule Modal -->
  <div
    v-if="showEditModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click="showEditModal = false"
  >
    <div
      class="energized-card p-xl max-w-2xl w-full mx-md max-h-[80vh] overflow-y-auto"
      @click.stop
    >
      <h3 class="font-headline-md text-headline-md text-on-surface mb-lg">Edit Exam Schedule</h3>
      <div class="space-y-md mb-lg">
        <div
          v-for="(day, index) in days"
          :key="day.day"
          class="flex items-center gap-md p-md border border-outline-variant rounded-lg"
        >
          <div class="font-label-bold text-label-bold text-on-surface w-12">{{ day.day }}</div>
          <input
            v-model="day.exam.subject"
            :placeholder="`Exam on day ${day.day}`"
            class="flex-1 border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            type="text"
          />
          <button
            v-if="day.exam"
            class="text-error hover:text-error/80 transition-colors"
            @click="day.exam = null"
          >
            <span class="material-symbols-outlined">delete</span>
          </button>
          <button
            v-else
            class="text-primary hover:text-primary/80 transition-colors"
            @click="day.exam = { subject: '' }"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
      <div class="flex gap-md">
        <button
          class="flex-1 border border-outline-variant text-on-surface py-sm rounded-lg font-label-bold hover:bg-surface-container transition-colors"
          @click="showEditModal = false"
        >
          Cancel
        </button>
        <button
          class="flex-1 vibrant-gradient text-white py-sm rounded-lg font-label-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
          @click="showEditModal = false"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>

  <!-- Calendar Grid -->
  <div class="energized-card p-lg">
    <div class="grid grid-cols-7 gap-xs mb-md">
      <div
        v-for="dayName in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
        :key="dayName"
        class="text-center font-label-bold text-label-bold text-on-surface-variant py-sm"
      >
        {{ dayName }}
      </div>
    </div>
    <div class="grid grid-cols-7 gap-xs">
      <div v-for="week in weekRows" :key="week" class="contents">
        <div
          v-for="day in week"
          :key="day?.day || Math.random()"
          class="min-h-20 border border-outline-variant rounded-lg p-sm hover:bg-surface-container transition-colors"
        >
          <div v-if="day" class="h-full">
            <div class="font-label-bold text-label-bold text-on-surface mb-xs">{{ day.day }}</div>
            <div
              v-if="day.exam"
              class="bg-primary text-on-primary px-xs py-0.5 rounded text-xs font-label-sm mb-xs"
            >
              {{ day.exam.subject }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-page {
  padding: 1rem 0;
}
.calendar-shell {
  background: white;
  border-radius: 1.5rem;
  border: 1px solid #e6e8ff;
  padding: 1.75rem;
}
.calendar-header h2 {
  margin: 0;
  font-size: 2rem;
}
.calendar-header p {
  color: #5e6080;
  margin-top: 0.6rem;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.75rem;
  margin-top: 1.25rem;
}
.calendar-day-name,
.calendar-cell {
  min-height: 90px;
  border-radius: 1rem;
  padding: 0.9rem;
}
.calendar-day-name {
  font-weight: 700;
  color: #6c6f91;
  background: #f5f6ff;
  text-align: center;
}
.calendar-cell {
  background: #f8f8ff;
  color: #2d2f48;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.calendar-cell.exam {
  background: linear-gradient(135deg, #8c86ff 0%, #d8d6ff 100%);
  color: #1b1f3d;
}
.date-label {
  font-weight: 700;
}
.exam-label {
  margin: 0.8rem 0 0;
  font-size: 0.92rem;
}
.calendar-list {
  margin-top: 1.8rem;
}
.calendar-list h3 {
  margin-bottom: 0.8rem;
}
.calendar-list ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4f5074;
}
</style>
