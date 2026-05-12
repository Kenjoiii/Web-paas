<script setup>
import { ref, computed } from 'vue'
const query = ref('')
const authMode = ref('login')
const loginEmail = ref('')
const loginPassword = ref('')
const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')
const sections = [
  {
    title: 'Catatan Pribadi',
    description: 'Tulis dan simpan catatan belajar dalam format markdown.',
  },
  { title: 'To-Do & Deadline', description: 'Kelola tugas, deadline, dan jadwal penting.' },
  { title: 'Flashcard Cepat', description: 'Ulangi konsep penting dengan flashcard interaktif.' },
  { title: 'Kalender Ujian', description: 'Atur jadwal ujian dan persiapanmu.' },
  { title: 'Wishlist & Tabungan', description: 'Rencanakan barang impian dan target nabung.' },
]
const filteredSections = computed(() => {
  if (!query.value.trim()) return sections
  return sections.filter(
    (item) =>
      item.title.toLowerCase().includes(query.value.toLowerCase()) ||
      item.description.toLowerCase().includes(query.value.toLowerCase()),
  )
})
const submitLogin = () => {
  window.alert(`Masuk berhasil untuk ${loginEmail.value || 'user'}!`)
}
const submitRegister = () => {
  window.alert(`Pendaftaran berhasil. Halo ${registerName.value || 'pelajar'}!`)
}
</script>

<template>
  <section class="landing-hero">
    <div class="hero-copy">
      <p class="eyebrow">Student Personal Dashboard</p>
      <h1>Kelola semua aktivitas belajarmu dalam satu tempat.</h1>
      <p>
        Dashboard ini menyediakan Home, pencarian cepat, login/register, catatan markdown, to-do,
        flashcard, kalender ujian, dan wishlist tabungan.
      </p>
      <div class="hero-buttons">
        <router-link to="/notes" class="button primary">Mulai Catatan</router-link>
        <router-link to="/todo" class="button secondary">Lihat To-Do</router-link>
      </div>
    </div>
    <div class="hero-image">
      <div class="hero-box">
        <div class="search-card">
          <label>Search fitur</label>
          <input v-model="query" placeholder="Cari Home, Catatan, To-Do..." />
        </div>
        <div class="feature-list">
          <div v-for="section in filteredSections" :key="section.title" class="feature-item">
            <h3>{{ section.title }}</h3>
            <p>{{ section.description }}</p>
          </div>
          <div v-if="filteredSections.length === 0" class="feature-item empty">
            Tidak ada hasil pencarian.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="auth-panel">
    <div class="auth-tabs">
      <button :class="{ active: authMode === 'login' }" @click="authMode = 'login'">Login</button>
      <button :class="{ active: authMode === 'register' }" @click="authMode = 'register'">
        Register
      </button>
    </div>
    <div class="auth-form">
      <form @submit.prevent="authMode === 'login' ? submitLogin() : submitRegister()">
        <template v-if="authMode === 'login'">
          <label>Email</label>
          <input type="email" v-model="loginEmail" placeholder="email@domain.com" required />
          <label>Password</label>
          <input type="password" v-model="loginPassword" placeholder="••••••••" required />
        </template>
        <template v-else>
          <label>Nama</label>
          <input type="text" v-model="registerName" placeholder="Nama lengkap" required />
          <label>Email</label>
          <input type="email" v-model="registerEmail" placeholder="email@domain.com" required />
          <label>Password</label>
          <input type="password" v-model="registerPassword" placeholder="••••••••" required />
        </template>
        <button type="submit" class="button primary">
          {{ authMode === 'login' ? 'Masuk' : 'Daftar' }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.landing-hero {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 2rem 0;
}
.hero-copy {
  max-width: 620px;
}
.eyebrow {
  font-size: 0.95rem;
  font-weight: 700;
  color: #735dd0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}
.hero-copy h1 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  line-height: 1.05;
  margin-bottom: 1rem;
}
.hero-copy p {
  color: #555;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}
.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.button {
  border: none;
  border-radius: 999px;
  padding: 0.95rem 1.7rem;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.primary {
  background: linear-gradient(135deg, #5f3dff, #6727f5);
  margin-top: 20px;
  color: white;
}
.secondary {
  background: #f3f4ff;
  color: #2a2e4a;
}
.hero-image {
  display: flex;
  justify-content: center;
}
.hero-box {
  background: white;
  border: 1px solid #e8eaf4;
  border-radius: 1.5rem;
  box-shadow: 0 30px 80px rgba(65, 62, 140, 0.08);
  padding: 1.7rem;
}
.search-card label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #262a3b;
}
.search-card input {
  width: 100%;
  padding: 0.95rem 1rem;
  border: 1px solid #dce1f2;
  border-radius: 0.95rem;
}
.feature-list {
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
}
.feature-item {
  padding: 1rem 1.1rem;
  border-radius: 1rem;
  border: 1px solid #f0efff;
  background: #fcfbff;
}
.feature-item h3 {
  margin: 0 0 0.35rem;
}
.feature-item p {
  margin: 0;
  color: #5e6488;
}
.feature-item.empty {
  text-align: center;
  color: #8b92b2;
}
.auth-panel {
  margin-top: 2rem;
  padding: 2rem;
  background: #faf9ff;
  border-radius: 1.5rem;
  border: 1px solid #ecebff;
}
.auth-tabs {
  display: inline-flex;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid #dddaf5;
  margin-bottom: 1.5rem;
}
.auth-tabs button {
  background: transparent;
  border: none;
  padding: 0.9rem 1.4rem;
  cursor: pointer;
  font-weight: 700;
  color: #6b6f92;
}
.auth-tabs button.active {
  background: white;
  color: #231f3b;
}
.auth-form label {
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.45rem;
  font-weight: 700;
}
.auth-form input {
  width: 100%;
  border-radius: 0.9rem;
  border: 1px solid #dbe0f4;
  padding: 0.9rem 1rem;
}
.auth-form form {
  max-width: 520px;
}
</style>
