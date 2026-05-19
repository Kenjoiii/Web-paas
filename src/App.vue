<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const mobileOpen = ref(false)
</script>

<template>
  <div id="app" class="text-on-background">
    <!-- SideNavBar Shell -->
    <aside
      class="w-[280px] h-screen fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full py-md z-[60]"
    >
      <div class="px-lg mb-xl">
        <h1 class="font-headline-md text-headline-md font-bold text-primary">StudyPro</h1>
        <p class="text-on-surface-variant font-label-sm uppercase tracking-widest opacity-70">
          Academic Excellence
        </p>
      </div>
      <nav class="flex-grow space-y-1">
        <router-link
          to="/"
          class="flex items-center px-lg py-sm text-on-surface-variant hover:text-primary mx-2 hover:bg-primary/5 transition-all duration-200 rounded-lg group active:scale-95"
          :class="{
            'bg-primary text-on-primary rounded-lg mx-2 active:scale-95 transition-transform shadow-lg shadow-primary/20':
              $route.path === '/',
          }"
        >
          <span class="material-symbols-outlined mr-sm">dashboard</span>
          <span class="font-body-md text-body-md">Dashboard</span>
        </router-link>
        <router-link
          to="/notes"
          class="flex items-center px-lg py-sm text-on-surface-variant hover:text-primary mx-2 hover:bg-primary/5 transition-all duration-200 rounded-lg group active:scale-95"
          :class="{
            'bg-primary text-on-primary rounded-lg mx-2 active:scale-95 transition-transform shadow-lg shadow-primary/20':
              $route.path === '/notes',
          }"
        >
          <span class="material-symbols-outlined mr-sm">description</span>
          <span class="font-body-md text-body-md">Notes</span>
        </router-link>
        <router-link
          to="/todo"
          class="flex items-center px-lg py-sm text-on-surface-variant hover:text-primary mx-2 hover:bg-primary/5 transition-all duration-200 rounded-lg group active:scale-95"
          :class="{
            'bg-primary text-on-primary rounded-lg mx-2 active:scale-95 transition-transform shadow-lg shadow-primary/20':
              $route.path === '/todo',
          }"
        >
          <span class="material-symbols-outlined mr-sm">checklist</span>
          <span class="font-body-md text-body-md">Tasks</span>
        </router-link>
        <router-link
          to="/flashcards"
          class="flex items-center px-lg py-sm text-on-surface-variant hover:text-primary mx-2 hover:bg-primary/5 transition-all duration-200 rounded-lg group active:scale-95"
          :class="{
            'bg-primary text-on-primary rounded-lg mx-2 active:scale-95 transition-transform shadow-lg shadow-primary/20':
              $route.path === '/flashcards',
          }"
        >
          <span class="material-symbols-outlined mr-sm">quiz</span>
          <span class="font-body-md text-body-md">Flashcards</span>
        </router-link>
        <router-link
          to="/calendar"
          class="flex items-center px-lg py-sm text-on-surface-variant hover:text-primary mx-2 hover:bg-primary/5 transition-all duration-200 rounded-lg group active:scale-95"
          :class="{
            'bg-primary text-on-primary rounded-lg mx-2 active:scale-95 transition-transform shadow-lg shadow-primary/20':
              $route.path === '/calendar',
          }"
        >
          <span class="material-symbols-outlined mr-sm">calendar_month</span>
          <span class="font-body-md text-body-md">Calendar</span>
        </router-link>
        <router-link
          to="/wishlist"
          class="flex items-center px-lg py-sm text-on-surface-variant hover:text-primary mx-2 hover:bg-primary/5 transition-all duration-200 rounded-lg group active:scale-95"
          :class="{
            'bg-primary text-on-primary rounded-lg mx-2 active:scale-95 transition-transform shadow-lg shadow-primary/20':
              $route.path === '/wishlist',
          }"
        >
          <span class="material-symbols-outlined mr-sm">payments</span>
          <span class="font-body-md text-body-md">Piggy Bank</span>
        </router-link>
      </nav>
      <div class="px-lg mt-auto space-y-4">
        <button
          class="w-full py-md bg-secondary-container text-on-secondary-container rounded-xl font-label-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md"
        >
          <span class="material-symbols-outlined">add</span>
          Quick Note
        </button>
        <div class="border-t border-outline-variant pt-md space-y-1">
          <a
            class="flex items-center px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg"
            href="#"
          >
            <span class="material-symbols-outlined mr-sm">settings</span>
            <span class="font-label-sm">Settings</span>
          </a>
          <a
            class="flex items-center px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg"
            href="#"
          >
            <span class="material-symbols-outlined mr-sm">logout</span>
            <span class="font-label-sm">Logout</span>
          </a>
        </div>
        <div class="flex items-center gap-3 py-sm">
          <img
            alt="Student Profile Avatar"
            class="w-10 h-10 rounded-full border-2 border-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWnDvunnGvqc7Djo3zX4AnJqUtiQaJEaNRcALzD0T_Vo7Y8BdEUMWop7ys88UaDLf3kWZnuUQ1b6VYuiV4KdioEk9uMhamVSRRrive_mikS6uoHnzcUNaXA-hwZO8m9QQxNME_3-yxSiHvQN6TxrmNVcHwDK56puvySmMfFNrL4Jj_F3dY5e-qj1ZDQI9xmcl5oeA6gnfHbUC4CraVFSvI0088MTMnms6fXAbNb-pcOAbjDAjkos8IdBuWCpaSy-_QZO_lw_7-C3oN"
          />
          <div>
            <p class="font-label-bold text-on-surface">Alex Rivera</p>
            <p class="text-xs text-on-surface-variant">Computer Science</p>
          </div>
        </div>
      </div>
    </aside>
    <!-- TopNavBar Shell -->
    <header
      class="flex justify-between items-center h-16 ml-[280px] px-gutter bg-background/90 backdrop-blur-md sticky top-0 z-50"
    >
      <div class="flex items-center gap-gutter w-1/2">
        <div class="relative w-full max-w-md">
          <span
            class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
            >search</span
          >
          <input
            class="w-full bg-surface-container border border-outline-variant rounded-full py-2 pl-10 pr-4 text-label-bold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline"
            placeholder="Search tasks or deadlines..."
            type="text"
          />
        </div>
      </div>
      <div class="flex items-center gap-gutter">
        <div class="flex gap-4">
          <span
            class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
            >notifications</span
          >
          <span
            class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
            >help</span
          >
        </div>
        <img
          alt="User Profile"
          class="w-8 h-8 rounded-full border-2 border-primary shadow-sm"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsKu-p4V3fnOp7BaQ4YAnP1g41UYvUrf52U95-UamtMDpsl-UqM9GTM3P5blMY-UpMYnO4PO4YyoH_408_O7tAeY_J1sDQX48kmJGhput7z3rCG2MBcgGLyynhhCrfXrSMC7n4Atdjlp3WqQOs1CI0iHS-lMm8kTOAjzLzRIvRfRD2l6xHm-3PByBExw0rT3K6xaKmyCl2KjBKiWHyt77DMByq4Ebj-rWbLdeRyX1mMm1Apb3lfsyt0GqowBh9Aq89XUkvfhpYS95r"
        />
      </div>
    </header>
    <!-- Main Content Canvas -->
    <main class="ml-[280px] p-gutter min-h-[calc(100vh-64px)]">
      <router-view :key="route.path" />
    </main>
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
