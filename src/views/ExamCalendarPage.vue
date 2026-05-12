<script setup>
import { ref, computed } from 'vue'
const month = ref('Mei 2026')
const days = ref(
  Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    exam: [
      { day: 10, subject: 'Matematika' },
      { day: 16, subject: 'Bahasa Indonesia' },
      { day: 22, subject: 'Fisika' },
      { day: 28, subject: 'Bahasa Inggris' },
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
</script>

<template>
  <section class="calendar-page">
    <header class="page-header">
      <div>
        <p class="eyebrow">Kalender Ujian</p>
        <h1>Jadwal Ujian dan Persiapan</h1>
        <p>
          Lihat tanggal penting dan siapkan diri untuk setiap mata pelajaran dengan lebih mudah.
        </p>
      </div>
    </header>

    <div class="calendar-shell">
      <div class="calendar-header">
        <h2>{{ month }}</h2>
        <p>Perhatikan rincian tanggal ujian dan gunakan sebagai panduan persiapan.</p>
      </div>
      <div class="calendar-grid">
        <div
          class="calendar-day-name"
          v-for="name in ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']"
          :key="name"
        >
          {{ name }}
        </div>
        <template v-for="(week, rowIndex) in weekRows" :key="rowIndex">
          <div
            v-for="(day, cellIndex) in week"
            :key="cellIndex"
            class="calendar-cell"
            :class="{ exam: day && day.exam }"
          >
            <template v-if="day">
              <span class="date-label">{{ day.day }}</span>
              <p v-if="day.exam" class="exam-label">{{ day.exam.subject }}</p>
            </template>
          </div>
        </template>
      </div>
      <div class="calendar-list">
        <h3>Detail Jadwal</h3>
        <ul>
          <li v-for="day in days" :key="day.day" v-if="day.exam">
            {{ day.day }} Mei 2026 - {{ day.exam.subject }}
          </li>
        </ul>
      </div>
    </div>
  </section>
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
