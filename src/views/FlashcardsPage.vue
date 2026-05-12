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
  <section class="flashcards-page">
    <header class="page-header">
      <div>
        <p class="eyebrow">Flashcard</p>
        <h1>Belajar Cepat dengan Flashcard</h1>
        <p>Beralih antara pertanyaan dan jawaban untuk mengingat konsep penting secara efisien.</p>
      </div>
    </header>

    <div class="flashcard-shell">
      <div class="card-meta">Flashcard {{ currentIndex + 1 }} / {{ cards.length }}</div>
      <div class="flashcard" :class="{ flipped }" @click="flipCard">
        <div class="card-face card-front">
          <p>{{ currentCard.front }}</p>
        </div>
        <div class="card-face card-back">
          <p>{{ currentCard.back }}</p>
        </div>
      </div>
      <div class="card-controls">
        <button class="button secondary" @click="prevCard">Sebelumnya</button>
        <button class="button primary" @click="flipCard">
          {{ flipped ? 'Balik Lagi' : 'Lihat Jawaban' }}
        </button>
        <button class="button secondary" @click="nextCard">Selanjutnya</button>
      </div>
    </div>
  </section>
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
