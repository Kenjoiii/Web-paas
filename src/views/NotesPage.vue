<script setup>
import { ref, computed, watch } from 'vue'
const noteText = ref(
  localStorage.getItem('student-notes') || '# Catatan Belajar\nTuliskan catatanmu di sini...',
)
const saveNote = () => {
  localStorage.setItem('student-notes', noteText.value)
  window.alert('Catatan berhasil disimpan ke browser.')
}
watch(noteText, (value) => {
  localStorage.setItem('student-notes', value)
})
const escapeHtml = (text) =>
  text.replace(
    /[&<>"]+/g,
    (match) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[match],
  )
const renderedMarkdown = computed(() => {
  let output = escapeHtml(noteText.value)
  output = output.replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
  output = output.replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
  output = output.replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
  output = output.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  output = output.replace(/\*(.*?)\*/g, '<em>$1</em>')
  output = output.replace(/\n/g, '<br />')
  return output
})
</script>

<template>
  <!-- Page Header -->
  <div class="flex justify-between items-end mb-xl">
    <div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Knowledge Vault</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Capture your thoughts, ideas, and study notes in a structured markdown format.
      </p>
    </div>
    <button
      class="vibrant-gradient text-white px-xl py-md rounded-xl font-label-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform"
      @click="saveNote"
    >
      <span class="material-symbols-outlined mr-sm">save</span>
      Save Notes
    </button>
  </div>

  <!-- Notes Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-card-gap">
    <!-- Editor Panel -->
    <div class="energized-card p-lg">
      <div class="flex items-center mb-md">
        <span class="material-symbols-outlined text-primary mr-sm">edit_note</span>
        <h3 class="font-headline-md text-headline-md text-on-surface">Editor</h3>
      </div>
      <textarea
        v-model="noteText"
        class="w-full h-96 border border-outline-variant rounded-lg p-md focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none font-mono text-sm"
        placeholder="Write your markdown notes here..."
      ></textarea>
    </div>

    <!-- Preview Panel -->
    <div class="energized-card p-lg">
      <div class="flex items-center mb-md">
        <span class="material-symbols-outlined text-secondary mr-sm">visibility</span>
        <h3 class="font-headline-md text-headline-md text-on-surface">Preview</h3>
      </div>
      <div
        class="preview-content h-96 overflow-y-auto border border-outline-variant rounded-lg p-md bg-surface-container"
        v-html="renderedMarkdown"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.notes-page {
  padding: 1rem 0;
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}
.eyebrow {
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7554f7;
  margin-bottom: 0.65rem;
}
.page-header h1 {
  margin: 0;
  font-size: 2rem;
}
.page-header p {
  color: #5d608b;
  margin: 0.5rem 0 0;
  max-width: 640px;
}
.notes-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1.2fr 0.8fr;
}
.editor-card,
.preview-card {
  background: white;
  border: 1px solid #e6e8ff;
  border-radius: 1.4rem;
  padding: 1.3rem;
  box-shadow: 0 20px 50px rgba(93, 92, 130, 0.08);
}
.panel-title {
  font-weight: 700;
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  min-height: 420px;
  border-radius: 1rem;
  border: 1px solid #d9ddf4;
  padding: 1rem;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  font-size: 0.96rem;
  resize: vertical;
}
.preview-content {
  min-height: 420px;
  border-radius: 1rem;
  padding: 1rem;
  background: #f8f7ff;
  color: #2d3048;
  line-height: 1.75;
}
.preview-content h1,
.preview-content h2,
.preview-content h3 {
  margin: 0.85rem 0 0.45rem;
}
.preview-content strong {
  color: #2a2d42;
}
.preview-content em {
  color: #5f5fc4;
}
</style>
