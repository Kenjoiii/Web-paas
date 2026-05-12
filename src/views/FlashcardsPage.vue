<script setup>
import { ref, computed } from 'vue'
const cards = ref([
  { front: 'Apa rumus luas segitiga?', back: 'Luas = 1/2 × alas × tinggi' },
  {
    front: 'Definisi fotosintesis?',
    back: 'Proses tumbuhan mengubah cahaya menjadi energi dan oksigen.',
  },
  { front: 'Satuan gaya dalam SI?', back: 'Newton (N)' },
  {
    front: 'Apa fungsi sistem peredaran darah?',
    back: 'Mengangkut oksigen dan nutrisi ke seluruh tubuh.',
  },
])
const currentIndex = ref(0)
const flipped = ref(false)
const currentCard = computed(() => cards.value[currentIndex.value])
const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.value.length
  flipped.value = false
}
const prevCard = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.value.length) % cards.value.length
  flipped.value = false
}
const flipCard = () => {
  flipped.value = !flipped.value
}
</script>

<template>
  <!-- Page Header -->
  <div class="flex justify-between items-end mb-xl">
    <div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Flashcard Mastery</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Master key concepts through interactive flashcard learning with instant feedback.
      </p>
    </div>
    <div class="text-on-surface-variant font-label-md">
      {{ currentIndex + 1 }} of {{ cards.length }}
    </div>
  </div>

  <!-- Flashcard Container -->
  <div class="flex flex-col items-center">
    <div class="flashcard-container mb-lg" :class="{ flipped }" @click="flipCard">
      <div
        class="flashcard-front energized-card p-xl flex items-center justify-center min-h-80 cursor-pointer hover:scale-[1.02] transition-transform"
      >
        <div class="text-center">
          <span class="material-symbols-outlined text-4xl text-primary mb-md">help_center</span>
          <h3 class="font-headline-lg text-headline-lg text-on-surface mb-sm">Question</h3>
          <p class="font-body-lg text-body-lg text-on-surface-variant">{{ currentCard.front }}</p>
        </div>
      </div>
      <div
        class="flashcard-back energized-card p-xl flex items-center justify-center min-h-80 cursor-pointer hover:scale-[1.02] transition-transform"
      >
        <div class="text-center">
          <span class="material-symbols-outlined text-4xl text-secondary mb-md">lightbulb</span>
          <h3 class="font-headline-lg text-headline-lg text-on-surface mb-sm">Answer</h3>
          <p class="font-body-lg text-body-lg text-on-surface-variant">{{ currentCard.back }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="flex gap-md">
      <button
        class="energized-card p-md hover:scale-105 transition-transform"
        @click="prevCard"
        :disabled="cards.length <= 1"
      >
        <span class="material-symbols-outlined text-primary">chevron_left</span>
      </button>
      <button
        class="vibrant-gradient text-white px-xl py-md rounded-xl font-label-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform"
        @click="flipCard"
      >
        <span class="material-symbols-outlined mr-sm">{{
          flipped ? 'visibility_off' : 'visibility'
        }}</span>
        {{ flipped ? 'Hide Answer' : 'Show Answer' }}
      </button>
      <button
        class="energized-card p-md hover:scale-105 transition-transform"
        @click="nextCard"
        :disabled="cards.length <= 1"
      >
        <span class="material-symbols-outlined text-primary">chevron_right</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.flashcards-page {
  padding: 1rem 0;
}
.flashcard-shell {
  display: grid;
  gap: 1.4rem;
  justify-items: center;
  text-align: center;
}
.card-meta {
  font-weight: 700;
  color: #5c58d8;
}
.flashcard {
  width: min(560px, 100%);
  min-height: 280px;
  perspective: 1200px;
  cursor: pointer;
}
.card-face {
  width: 100%;
  min-height: 280px;
  border-radius: 1.5rem;
  background: white;
  box-shadow: 0 30px 80px rgba(75, 69, 174, 0.12);
  display: grid;
  place-items: center;
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #2b2e4a;
  backface-visibility: hidden;
  transition: transform 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
}
.card-front {
  transform: rotateY(0deg);
}
.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #6c63ff 0%, #9e8dff 100%);
  color: white;
}
.flashcard.flipped .card-front {
  transform: rotateY(-180deg);
}
.flashcard.flipped .card-back {
  transform: rotateY(0deg);
}
.flashcard {
  position: relative;
}
.card-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.button.secondary {
  background: #f5f3ff;
  color: #312e72;
}
</style>
