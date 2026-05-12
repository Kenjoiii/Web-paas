<script setup>
import { ref, computed } from 'vue'
const showSavingsModal = ref(false)
const showHistoryModal = ref(false)
const savingsAmount = ref('')
const savingsType = ref('add') // 'add' or 'subtract'
const savingsNote = ref('')
const newName = ref('')
const newPrice = ref('')
const savings = ref(580)
const savingsHistory = ref([
  { id: 1, amount: 100, type: 'add', note: 'Weekly allowance', date: '2026-05-01' },
  { id: 2, amount: 50, type: 'subtract', note: 'Bought snacks', date: '2026-05-03' },
  { id: 3, amount: 200, type: 'add', note: 'Birthday gift', date: '2026-05-05' },
  { id: 4, amount: 30, type: 'subtract', note: 'Transportation', date: '2026-05-08' },
])
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
const manageSavings = () => {
  const amount = Number(savingsAmount.value)
  if (!amount || amount <= 0) return

  if (savingsType.value === 'add') {
    savings.value += amount
  } else {
    if (amount > savings.value) {
      alert('Cannot subtract more than current savings!')
      return
    }
    savings.value -= amount
  }

  // Add to history
  savingsHistory.value.unshift({
    id: Date.now(),
    amount,
    type: savingsType.value,
    note: savingsNote.value || `${savingsType.value === 'add' ? 'Added' : 'Subtracted'} savings`,
    date: new Date().toISOString().split('T')[0],
  })

  // Reset form
  savingsAmount.value = ''
  savingsNote.value = ''
  showSavingsModal.value = false
}
const totalTarget = computed(() => items.value.reduce((sum, item) => sum + item.price, 0))
const totalSaved = computed(
  () => savings.value + items.value.reduce((sum, item) => sum + item.saved, 0),
)
const totalHistorySavings = computed(() => {
  return savingsHistory.value.reduce((total, entry) => {
    return entry.type === 'add' ? total + entry.amount : total - entry.amount
  }, 0)
})
</script>

<template>
  <!-- Page Header -->
  <div class="flex justify-between items-end mb-xl">
    <div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Dream Fund</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Track your savings goals and turn your wishlist items into reality.
      </p>
    </div>
    <div class="flex items-center gap-md">
      <div class="text-right">
        <div class="font-headline-md text-headline-md text-on-surface">
          {{ totalSaved.toLocaleString() }}
        </div>
        <div class="font-label-sm text-label-sm text-on-surface-variant">Total Saved</div>
      </div>
      <button
        class="energized-card p-md hover:scale-105 transition-transform"
        @click="showHistoryModal = true"
      >
        <span class="material-symbols-outlined text-secondary">history</span>
      </button>
      <button
        class="vibrant-gradient text-white px-xl py-md rounded-xl font-label-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform"
        @click="showSavingsModal = true"
      >
        <span class="material-symbols-outlined mr-sm">account_balance_wallet</span>
        Manage Savings
      </button>
    </div>
  </div>

  <!-- Savings Management Modal -->
  <div
    v-if="showSavingsModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click="showSavingsModal = false"
  >
    <div class="energized-card p-xl max-w-md w-full mx-md" @click.stop>
      <h3 class="font-headline-md text-headline-md text-on-surface mb-lg">Manage Savings</h3>
      <div class="space-y-md mb-lg">
        <div>
          <label class="block font-label-bold text-label-bold text-on-surface mb-xs">Action</label>
          <div class="flex gap-xs">
            <button
              :class="
                savingsType === 'add'
                  ? 'vibrant-gradient text-white'
                  : 'border border-outline-variant text-on-surface'
              "
              class="flex-1 py-sm rounded-lg font-label-bold transition-all"
              @click="savingsType = 'add'"
            >
              Add Money
            </button>
            <button
              :class="
                savingsType === 'subtract'
                  ? 'bg-error text-white'
                  : 'border border-outline-variant text-on-surface'
              "
              class="flex-1 py-sm rounded-lg font-label-bold transition-all"
              @click="savingsType = 'subtract'"
            >
              Spend Money
            </button>
          </div>
        </div>
        <div>
          <label class="block font-label-bold text-label-bold text-on-surface mb-xs"
            >Amount ($)</label
          >
          <input
            v-model="savingsAmount"
            class="w-full border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            placeholder="0.00"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <label class="block font-label-bold text-label-bold text-on-surface mb-xs"
            >Note (Optional)</label
          >
          <input
            v-model="savingsNote"
            class="w-full border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            placeholder="e.g., Weekly allowance"
            type="text"
          />
        </div>
      </div>
      <div class="flex gap-md">
        <button
          class="flex-1 border border-outline-variant text-on-surface py-sm rounded-lg font-label-bold hover:bg-surface-container transition-colors"
          @click="showSavingsModal = false"
        >
          Cancel
        </button>
        <button
          class="flex-1 vibrant-gradient text-white py-sm rounded-lg font-label-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
          @click="manageSavings"
        >
          {{ savingsType === 'add' ? 'Add' : 'Subtract' }} Savings
        </button>
      </div>
    </div>
  </div>

  <!-- Savings History Modal -->
  <div
    v-if="showHistoryModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click="showHistoryModal = false"
  >
    <div
      class="energized-card p-xl max-w-2xl w-full mx-md max-h-[80vh] overflow-y-auto"
      @click.stop
    >
      <h3 class="font-headline-md text-headline-md text-on-surface mb-lg">Savings History</h3>
      <div class="mb-lg">
        <div class="flex justify-between items-center p-md bg-surface-container rounded-lg mb-md">
          <span class="font-label-bold text-label-bold text-on-surface">Total from History</span>
          <span class="font-body-lg text-body-lg text-primary">{{
            totalHistorySavings.toLocaleString()
          }}</span>
        </div>
        <div class="space-y-xs max-h-96 overflow-y-auto">
          <div
            v-for="entry in savingsHistory"
            :key="entry.id"
            class="flex justify-between items-center p-md border border-outline-variant rounded-lg"
          >
            <div class="flex items-center gap-md">
              <span
                :class="entry.type === 'add' ? 'text-primary' : 'text-error'"
                class="material-symbols-outlined"
                >{{ entry.type === 'add' ? 'add' : 'remove' }}</span
              >
              <div>
                <div class="font-label-bold text-label-bold text-on-surface">{{ entry.note }}</div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">
                  {{ entry.date }}
                </div>
              </div>
            </div>
            <span
              :class="entry.type === 'add' ? 'text-primary' : 'text-error'"
              class="font-body-md text-body-md"
            >
              {{ entry.type === 'add' ? '+' : '-' }}{{ entry.amount.toLocaleString() }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="border border-outline-variant text-on-surface px-xl py-sm rounded-lg font-label-bold hover:bg-surface-container transition-colors"
          @click="showHistoryModal = false"
        >
          Close
        </button>
      </div>
    </div>
  </div>

  <!-- Summary Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-card-gap mb-xl">
    <div class="energized-card p-lg text-center">
      <span class="material-symbols-outlined text-4xl text-primary mb-sm">savings</span>
      <h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Total Savings</h3>
      <p class="font-body-lg text-body-lg text-primary">{{ totalSaved.toLocaleString() }}</p>
    </div>
    <div class="energized-card p-lg text-center">
      <span class="material-symbols-outlined text-4xl text-secondary mb-sm">target</span>
      <h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Total Target</h3>
      <p class="font-body-lg text-body-lg text-secondary">{{ totalTarget.toLocaleString() }}</p>
    </div>
    <div class="energized-card p-lg text-center">
      <span class="material-symbols-outlined text-4xl text-tertiary mb-sm">trending_up</span>
      <h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Progress</h3>
      <p class="font-body-lg text-body-lg text-tertiary">
        {{ Math.round((totalSaved / totalTarget) * 100) }}%
      </p>
    </div>
  </div>

  <!-- Add Item Form -->
  <div class="energized-card p-lg mb-xl">
    <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Add New Item</h3>
    <form @submit.prevent="addItem" class="grid grid-cols-1 md:grid-cols-3 gap-md">
      <div>
        <label class="block font-label-bold text-label-bold text-on-surface mb-xs">Item Name</label>
        <input
          v-model="newName"
          class="w-full border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          placeholder="e.g., Wireless Headphones"
          required
          type="text"
        />
      </div>
      <div>
        <label class="block font-label-bold text-label-bold text-on-surface mb-xs"
          >Target Price ($)</label
        >
        <input
          v-model="newPrice"
          class="w-full border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          placeholder="0"
          required
          type="number"
          min="1"
        />
      </div>
      <div class="flex items-end">
        <button
          class="w-full vibrant-gradient text-white py-sm rounded-lg font-label-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
          type="submit"
        >
          Add Item
        </button>
      </div>
    </form>
  </div>

  <!-- Wishlist Items -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap">
    <div v-for="(item, index) in items" :key="item.name" class="energized-card p-lg">
      <div class="flex justify-between items-start mb-md">
        <div class="flex-1">
          <h3 class="font-headline-md text-headline-md text-on-surface mb-xs">{{ item.name }}</h3>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Target: ${{ item.price.toLocaleString() }}
          </p>
        </div>
        <button
          class="text-error hover:text-error/80 transition-colors"
          @click="items.splice(index, 1)"
        >
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div class="w-full bg-surface-container rounded-full h-3 mb-sm">
        <div
          class="bg-primary h-full rounded-full transition-all duration-300"
          :style="{ width: `${Math.min((item.saved / item.price) * 100, 100)}%` }"
        ></div>
      </div>
      <div class="flex justify-between items-center">
        <p class="font-label-sm text-label-sm text-on-surface-variant">
          Saved: ${{ item.saved.toLocaleString() }}
        </p>
        <p class="font-label-sm text-label-sm text-primary">
          {{ Math.round((item.saved / item.price) * 100) }}%
        </p>
      </div>
    </div>
    <div v-if="items.length === 0" class="col-span-full text-center py-xxl">
      <span class="material-symbols-outlined text-6xl text-outline-variant mb-md"
        >shopping_bag</span
      >
      <h3 class="font-headline-lg text-headline-lg text-on-surface mb-sm">No wishlist items yet</h3>
      <p class="font-body-lg text-body-lg text-on-surface-variant mb-lg">
        Add your first dream item to start saving towards it.
      </p>
    </div>
  </div>
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
