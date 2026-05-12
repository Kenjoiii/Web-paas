<script setup>
import { ref, computed } from 'vue'
const showAddForm = ref(false)
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
  showAddForm.value = false
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
  <!-- Page Header -->
  <div class="flex justify-between items-end mb-xl">
    <div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Academic Pipeline</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Manage your tasks, deadlines, and academic goals with precision.
      </p>
    </div>
    <button
      class="vibrant-gradient text-white px-xl py-md rounded-xl font-label-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform"
      @click="showAddForm = !showAddForm"
    >
      <span class="material-symbols-outlined mr-sm">add</span>
      New Task
    </button>
  </div>

  <!-- Add Task Form -->
  <div v-if="showAddForm" class="energized-card p-lg mb-xl">
    <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Add New Task</h3>
    <form @submit.prevent="addTask" class="grid grid-cols-1 md:grid-cols-3 gap-md">
      <div>
        <label class="block font-label-bold text-label-bold text-on-surface mb-xs"
          >Task Title</label
        >
        <input
          v-model="newTask"
          class="w-full border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          placeholder="e.g., Study for Math Exam"
          required
          type="text"
        />
      </div>
      <div>
        <label class="block font-label-bold text-label-bold text-on-surface mb-xs">Deadline</label>
        <input
          v-model="newDue"
          class="w-full border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          required
          type="date"
        />
      </div>
      <div class="flex items-end">
        <button
          class="w-full vibrant-gradient text-white py-sm rounded-lg font-label-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
          type="submit"
        >
          Add Task
        </button>
      </div>
    </form>
  </div>

  <!-- Tasks Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap">
    <div
      v-for="(task, index) in sortedTasks"
      :key="task.title + task.due"
      class="energized-card p-lg"
    >
      <div class="flex justify-between items-start mb-md">
        <div class="flex-1">
          <h3
            :class="{ 'line-through text-on-surface-variant': task.done }"
            class="font-headline-md text-headline-md text-on-surface mb-xs"
          >
            {{ task.title }}
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Due:
            {{
              new Date(task.due).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </p>
        </div>
        <div class="flex gap-xs">
          <button
            class="text-secondary hover:text-primary transition-colors"
            @click="toggleDone(task)"
          >
            <span class="material-symbols-outlined" :class="{ 'text-primary': task.done }">{{
              task.done ? 'check_circle' : 'radio_button_unchecked'
            }}</span>
          </button>
          <button
            class="text-error hover:text-error/80 transition-colors"
            @click="removeTask(index)"
          >
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
      <div class="w-full bg-surface-container rounded-full h-2 mb-sm">
        <div
          :class="{ 'bg-tertiary': task.done, 'bg-primary': !task.done }"
          class="h-full rounded-full transition-all duration-300"
          :style="{ width: task.done ? '100%' : '0%' }"
        ></div>
      </div>
      <p class="font-label-sm text-label-sm text-on-surface-variant">
        {{ task.done ? 'Completed' : 'In Progress' }}
      </p>
    </div>
    <div v-if="sortedTasks.length === 0" class="col-span-full text-center py-xxl">
      <span class="material-symbols-outlined text-6xl text-outline-variant mb-md">task_alt</span>
      <h3 class="font-headline-lg text-headline-lg text-on-surface mb-sm">No tasks yet</h3>
      <p class="font-body-lg text-body-lg text-on-surface-variant mb-lg">
        Create your first task to get started with your academic pipeline.
      </p>
      <button
        class="vibrant-gradient text-white px-xl py-md rounded-xl font-label-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform"
        @click="showAddForm = true"
      >
        <span class="material-symbols-outlined mr-sm">add</span>
        Add Your First Task
      </button>
    </div>
  </div>
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
