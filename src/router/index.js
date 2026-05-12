import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import NotesPage from '../views/NotesPage.vue'
import TodoPage from '../views/TodoPage.vue'
import FlashcardsPage from '../views/FlashcardsPage.vue'
import ExamCalendarPage from '../views/ExamCalendarPage.vue'
import WishlistPage from '../views/WishlistPage.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/notes', name: 'Notes', component: NotesPage },
  { path: '/todo', name: 'Todo', component: TodoPage },
  { path: '/flashcards', name: 'Flashcards', component: FlashcardsPage },
  { path: '/calendar', name: 'Calendar', component: ExamCalendarPage },
  { path: '/wishlist', name: 'Wishlist', component: WishlistPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
