<script setup>
import { ref, computed } from 'vue'
const newName = ref('')
const newPrice = ref('')
const savings = ref(580)
const items = ref([
  { name: 'Headphone Wireless', price: 450, saved: 220 },
  { name: 'Notebook Studi', price: 120, saved: 75 },
  { name: 'Meja Belajar', price: 900, saved: 390 },
])
const addItem = () => {
  const price = Number(newPrice.value)
  if (!newName.value.trim() || !price || price <= 0) return
  items.value.push({ name: newName.value.trim(), price, saved: 0 })
  newName.value = ''
  newPrice.value = ''
}
const totalTarget = computed(() => items.value.reduce((sum, item) => sum + item.price, 0))
const totalSaved = computed(
  () => savings.value + items.value.reduce((sum, item) => sum + item.saved, 0),
)
</script>

<template>
  <section class="wishlist-page">
    <header class="page-header">
      <div>
        <p class="eyebrow">Wishlist & Tabungan</p>
        <h1>Rencanakan Barang Impianmu</h1>
        <p>Tambahkan wishlist dan lihat progres tabungan untuk setiap item penting.</p>
      </div>
    </header>

    <div class="wishlist-grid">
      <div class="wishlist-summary">
        <div class="summary-card">
          <h3>Total Target</h3>
          <p>Rp {{ totalTarget.toLocaleString('id-ID') }}</p>
        </div>
        <div class="summary-card">
          <h3>Total Tabungan</h3>
          <p>Rp {{ totalSaved.toLocaleString('id-ID') }}</p>
        </div>
      </div>
      <div class="wishlist-panel">
        <div class="panel-title">Tambah Wishlist</div>
        <label>Nama Barang</label>
        <input v-model="newName" placeholder="Contoh: Tas Laptop" />
        <label>Harga Target (Rp)</label>
        <input type="number" v-model="newPrice" placeholder="0" />
        <button class="button primary" @click="addItem">Tambah Ke Wishlist</button>
      </div>
    </div>

    <div class="item-list">
      <div v-for="item in items" :key="item.name + item.price" class="item-card">
        <div>
          <h3>{{ item.name }}</h3>
          <p>Target: Rp {{ item.price.toLocaleString('id-ID') }}</p>
        </div>
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{
              width: Math.min(100, ((item.saved + savings.value) / item.price) * 100) + '%',
            }"
          ></div>
        </div>
        <p class="progress-label">
          Status:
          {{ Math.min(100, Math.round(((item.saved + savings.value) / item.price) * 100)) }}%
        </p>
      </div>
      <div v-if="items.length === 0" class="empty-state">Belum ada item di wishlist.</div>
    </div>
  </section>
</template>

<style scoped>
.wishlist-page {
  padding: 1rem 0;
}
.wishlist-grid {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.wishlist-summary {
  display: grid;
  gap: 1rem;
}
.summary-card {
  background: white;
  border-radius: 1.4rem;
  border: 1px solid #e8eafe;
  padding: 1.4rem;
  box-shadow: 0 18px 44px rgba(83, 65, 255, 0.06);
}
.summary-card h3 {
  margin: 0 0 0.5rem;
  color: #4d4c9d;
}
.summary-card p {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
}
.wishlist-panel {
  background: white;
  border-radius: 1.4rem;
  border: 1px solid #e8eafe;
  padding: 1.5rem;
}
.panel-title {
  font-weight: 700;
  margin-bottom: 1rem;
}
.wishlist-panel label {
  display: block;
  margin-top: 1rem;
  font-weight: 700;
}
.wishlist-panel input {
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #dbe1f4;
  padding: 0.95rem 1rem;
  margin-top: 0.5rem;
}
.item-list {
  display: grid;
  gap: 1rem;
}
.item-card {
  background: white;
  border: 1px solid #e5e8ff;
  border-radius: 1.4rem;
  padding: 1.3rem;
}
.progress-bar {
  width: 100%;
  height: 0.8rem;
  border-radius: 999px;
  background: #f3f2ff;
  margin: 1rem 0 0.5rem;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #5f49ff, #7a62ff);
}
.progress-label {
  margin: 0;
  color: #5a5f8b;
}
.empty-state {
  padding: 1rem;
  border-radius: 1rem;
  background: #f5f5ff;
  color: #6b6e9c;
}
</style>
