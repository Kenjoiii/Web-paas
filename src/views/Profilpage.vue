<script setup>
import { ref, reactive } from 'vue'
import { 
  User, Mail, School, Book, Settings, LogOut, 
  Camera, Shield, MessageSquare, Bell 
} from 'lucide-react-vue-next'

// State pengguna (menggunakan reactive untuk data objek)
const user = reactive({
  name: 'Ahmad Dzaki',
  email: 'ahmad@example.com',
  school: 'Universitas Indonesia',
  bio: 'Ready to learn and grow!',
  avatar: null
})

const isEditing = ref(false)
const formData = reactive({ ...user })

const handleSave = () => {
  // Update data user asli dengan data dari form
  Object.assign(user, formData)
  isEditing.value = false
}

const logout = () => {
  alert('Keluar dari sistem...')
  // Tambahkan logika navigasi atau logout di sini
}
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-8 pb-12 font-sans">
    <!-- Cover Profile & Header Section -->
    <div class="relative">
      <!-- Background Header / Cover -->
      <div class="h-48 md:h-64 bg-[#1E293B] rounded-[2.5rem] shadow-lg overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full opacity-10">
          <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
      
      <!-- Profile Picture & Identity -->
      <div class="flex flex-col md:flex-row items-end gap-6 -mt-20 px-8 relative z-10">
        <div class="relative group">
          <div class="w-40 h-40 rounded-full border-[6px] border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 shadow-xl overflow-hidden flex items-center justify-center">
            <img v-if="user.avatar" :src="user.avatar" class="w-full h-full object-cover" />
            <User v-else :size="64" class="text-slate-400" />
          </div>
          <button class="absolute bottom-2 right-2 p-2.5 bg-blue-600 text-white rounded-full border-4 border-white dark:border-slate-950 shadow-lg hover:scale-110 transition-transform">
            <Camera :size="16" />
          </button>
        </div>
        
        <div class="flex-1 mb-4 text-center md:text-left">
          <h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{{ user.name }}</h1>
          <p class="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
            <School :size="16" class="text-blue-500" /> {{ user.school || 'Belum diatur' }}
          </p>
        </div>

        <div class="flex gap-3 mb-4">
          <button 
            @click="isEditing ? handleSave() : isEditing = true"
            :class="[
              'px-8 py-3 rounded-2xl font-bold transition-all shadow-lg',
              isEditing ? 'bg-green-500 text-white shadow-green-500/20' : 'bg-blue-600 text-white shadow-blue-500/20 hover:bg-blue-700'
            ]"
          >
            {{ isEditing ? 'Simpan Profil' : 'Edit Profil' }}
          </button>
          <button 
            @click="logout"
            class="p-3 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-2xl hover:bg-red-200 transition-colors"
          >
            <LogOut :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Left Column: Form Info -->
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h2 class="text-xl font-bold dark:text-white mb-6 flex items-center gap-2">
            <Shield class="text-blue-500" :size="20" /> Informasi Dasar
          </h2>
          
          <div class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-black text-slate-400 uppercase mb-2">Nama Lengkap</label>
                <input 
                  v-if="isEditing"
                  v-model="formData.name"
                  class="w-full px-6 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white border-2 border-transparent focus:border-blue-500 outline-none"
                  placeholder="Nama Lengkap"
                />
                <p v-else class="px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl dark:text-white font-medium border border-transparent shadow-sm">{{ user.name }}</p>
              </div>
              <div>
                <label class="block text-xs font-black text-slate-400 uppercase mb-2">Alamat Email</label>
                <input 
                  v-if="isEditing"
                  v-model="formData.email"
                  class="w-full px-6 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white border-2 border-transparent focus:border-blue-500 outline-none"
                  placeholder="Email"
                />
                <p v-else class="px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl dark:text-white font-medium border border-transparent shadow-sm">{{ user.email }}</p>
              </div>
            </div>
            
            <div>
              <label class="block text-xs font-black text-slate-400 uppercase mb-2">Instansi / Sekolah</label>
              <input 
                v-if="isEditing"
                v-model="formData.school"
                class="w-full px-6 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white border-2 border-transparent focus:border-blue-500 outline-none"
              />
              <p v-else class="px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl dark:text-white font-medium border border-transparent shadow-sm">{{ user.school }}</p>
            </div>

            <div>
              <label class="block text-xs font-black text-slate-400 uppercase mb-2">Biodata Singkat</label>
              <textarea 
                v-if="isEditing"
                v-model="formData.bio"
                class="w-full px-6 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white border-2 border-transparent focus:border-blue-500 outline-none h-32 resize-none"
              />
              <p v-else class="px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl dark:text-white font-medium italic border border-transparent shadow-sm">
                "{{ user.bio || 'Belum ada bio.' }}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Sidebar Menus -->
      <div class="space-y-6">
        <div class="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h2 class="text-xl font-bold dark:text-white mb-6">Menu Pengguna</h2>
          <ul class="space-y-2">
             <li v-for="(item, i) in [
               { icon: Bell, label: 'Notifikasi' },
               { icon: Shield, label: 'Keamanan' },
               { icon: MessageSquare, label: 'Bantuan' },
               { icon: Settings, label: 'Pengaturan' },
             ]" :key="i">
                <button class="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-400 group">
                   <div class="flex items-center gap-3">
                      <span class="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <component :is="item.icon" :size="16" />
                      </span>
                      <span class="font-bold text-sm tracking-tight">{{ item.label }}</span>
                   </div>
                   <div class="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500" />
                </button>
             </li>
          </ul>
        </div>

        <!-- Premium Card -->
        <div class="bg-[#1E293B] p-8 rounded-[2.5rem] border border-slate-700 shadow-xl overflow-hidden relative group">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -mr-16 -mt-16" />
          <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
            <Book :size="24" class="text-white" />
          </div>
          <h3 class="text-lg font-bold text-white mb-2 relative z-10">EduDash Premium</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">Sinkronisasi catatan tanpa batas dan akses fitur khusus pelajar.</p>
          <button class="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/50">
            Upgrade Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transisi halus untuk mode gelap */
.max-w-5xl {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>