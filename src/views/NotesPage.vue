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
  <section class="notes-page">
    <header class="page-header">
      <div>
        <p class="eyebrow">Catatan Pelajar</p>
        <h1>Catatan Markdown Pribadi</h1>
        <p>Simpan ringkasan, materi, dan ide belajar di sini. Lihat preview secara langsung.</p>
      </div>
      <button class="button primary" @click="saveNote">Simpan Catatan</button>
    </header>

    <div class="notes-grid">
      <div class="editor-card">
        <div class="panel-title">Tulis Catatan</div>
        <textarea v-model="noteText" rows="18" />
      </div>
      <div class="preview-card">
        <div class="panel-title">Preview</div>
        <div class="preview-content" v-html="renderedMarkdown"></div>
      </div>
    </div>
  </section>
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
