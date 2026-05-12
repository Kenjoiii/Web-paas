<script setup>
import { ref, computed } from 'vue'
const newTask = ref('')
const newDue = ref('')
const tasks = ref([
  { title: 'Buat ringkasan bab 4', due: '2026-05-18', done: false },
  { title: 'Latihan soal Matematika', due: '2026-05-20', done: false },
  { title: 'Persiapan presentasi', due: '2026-05-22', done: true },
])
const addTask = () => {
  if (!newTask.value.trim() || !newDue.value) return
  tasks.value.push({ title: newTask.value.trim(), due: newDue.value, done: false })
  newTask.value = ''
  newDue.value = ''
}
const toggleDone = (task) => {
  task.done = !task.done
}
const removeTask = (index) => {
  tasks.value.splice(index, 1)
}
const sortedTasks = computed(() =>
  [...tasks.value].sort((a, b) => new Date(a.due) - new Date(b.due)),
)
</script>

<template>
  <section class="todo-page">
    <header class="page-header">
      <div>
        <p class="eyebrow">To-Do List</p>
        <h1>Kelola Deadline dan Tugasmu</h1>
        <p>
          Tambahkan tugas, atur tanggal deadline, dan tandai yang sudah selesai agar fokus belajarmu
          tetap terjaga.
        </p>
      </div>
    </header>

    <div class="todo-panel">
      <div class="todo-form">
        <label>Judul Tugas</label>
        <input v-model="newTask" placeholder="Contoh: Pelajari bab 5" />
        <label>Tanggal Deadline</label>
        <input type="date" v-model="newDue" />
        <button class="button primary" @click="addTask">Tambah Tugas</button>
      </div>
      <div class="task-list">
        <div v-for="(task, index) in sortedTasks" :key="task.title + task.due" class="task-item">
          <div>
            <h3 :class="{ done: task.done }">{{ task.title }}</h3>
            <p>
              Deadline:
              {{
                new Date(task.due).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              }}
            </p>
          </div>
          <div class="task-actions">
            <button class="button tertiary" @click="toggleDone(task)">
              {{ task.done ? 'Batal' : 'Selesai' }}
            </button>
            <button class="button danger" @click="removeTask(index)">Hapus</button>
          </div>
        </div>
        <div v-if="sortedTasks.length === 0" class="empty-state">
          Belum ada tugas. Tambahkan tugas baru untuk mulai.
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.todo-page {
  padding: 1rem 0;
}
.todo-panel {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 1.5rem;
}
.todo-form,
.task-list {
  background: white;
  border-radius: 1.4rem;
  border: 1px solid #e9ebff;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(95, 70, 255, 0.07);
}
.todo-form label {
  display: block;
  margin-top: 1rem;
  font-weight: 700;
}
.todo-form input {
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #dde1fb;
  padding: 0.95rem 1rem;
  margin-top: 0.45rem;
}
.task-item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid #f1f3ff;
  padding: 1rem 0;
}
.task-item:last-child {
  border-bottom: none;
}
.task-item h3 {
  margin: 0;
  font-size: 1rem;
}
.task-item h3.done {
  text-decoration: line-through;
  color: #7b7eb0;
}
.task-item p {
  margin: 0.35rem 0 0;
  color: #5d608b;
}
.task-actions {
  display: grid;
  gap: 0.6rem;
  align-items: center;
}
.button.tertiary {
  background: #eef0ff;
  color: #3b3f6a;
}
.button.danger {
  background: #ffe5e8;
  color: #a62740;
}
.empty-state {
  color: #7e82a7;
  padding: 1rem 0;
}
</style>
