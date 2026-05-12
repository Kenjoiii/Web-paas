<script setup>
import { ref } from 'vue'
const mobileOpen = ref(false)
</script>

<template>
  <div id="app">
    <header class="site-header">
      <div class="brand">
        <router-link to="/">Student Dashboard</router-link>
      </div>
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen">Menu</button>
      <nav :class="{ open: mobileOpen }">
        <router-link to="/">Home</router-link>
        <router-link to="/notes">Catatan</router-link>
        <router-link to="/todo">To-Do</router-link>
        <router-link to="/flashcards">Flashcard</router-link>
        <router-link to="/calendar">Kalender</router-link>
        <router-link to="/wishlist">Wishlist</router-link>
      </nav>
    </header>

    <main class="page-container">
      <router-view />
    </main>

    <footer class="site-footer">
      <p>Student Personal Dashboard • Desain halaman untuk belajar, catatan, dan targetmu.</p>
    </footer>
  </div>
</template>

<style scoped>
:root {
  color-scheme: light;
}
#app {
  min-height: 100vh;
  background: linear-gradient(180deg, #f9f8ff 0%, #ffffff 100%);
  color: #1f2130;
  padding: 0 1.2rem 2rem;
}
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem 0;
}
.brand a {
  font-weight: 800;
  font-size: 1.25rem;
  color: #2d216d;
  text-decoration: none;
}
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-items: center;
}
nav a {
  color: #4b4f7b;
  text-decoration: none;
  font-weight: 600;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}
nav a.router-link-active,
nav a:hover {
  background: #f2ecff;
  color: #2f1f70;
}
.mobile-toggle {
  display: none;
  border: none;
  background: #6b53ff;
  color: white;
  border-radius: 999px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-weight: 700;
}
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.site-footer {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid #eceaf7;
  color: #6f7190;
  text-align: center;
}
@media (max-width: 860px) {
  nav {
    display: none;
    flex-direction: column;
    width: 100%;
    background: white;
    border-radius: 1.2rem;
    padding: 1rem;
    box-shadow: 0 24px 60px rgba(87, 69, 196, 0.08);
  }
  nav.open {
    display: flex;
  }
  .mobile-toggle {
    display: inline-flex;
  }
}
</style>
