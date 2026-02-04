<script setup>
import { RouterLink } from 'vue-router'
import { HomeIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <main class="min-h-screen relative overflow-hidden flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
    <!-- Ambient Light Blooms -->
    <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/20 blur-[150px] rounded-full animate-pulse"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/20 blur-[180px] rounded-full animate-pulse" style="animation-delay: 1s;"></div>

    <div class="max-w-4xl w-full relative z-10">
      <div class="text-center space-y-8 md:space-y-12">
        
        <!-- 3D Floating 404 -->
        <div class="relative inline-block perspective-container">
          <h1 class="text-[120px] md:text-[220px] font-black leading-none select-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-400 dark:from-white dark:to-slate-700 animate-float drop-shadow-2xl">
            404
          </h1>
          <div class="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-30 blur-2xl animate-glow">
            <span class="text-[120px] md:text-[220px] font-black text-primary-500">404</span>
          </div>
        </div>

        <!-- Glass Content Card -->
        <div class="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/20 dark:border-white/5 backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 shadow-2xl reveal-up">
          <div class="space-y-6 max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight" dir="rtl">
              أووووه! الصفحة التي تبحث عنها <span class="text-primary-600 dark:text-primary-400">غير موجودة</span>
            </h2>
            <p class="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
             Oh no! The page you are looking for does not exist..
            </p>
          </div>

          <!-- Actions -->
          <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <RouterLink 
              to="/" 
              class="group relative flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 dark:shadow-white/10"
            >
              <HomeIcon class="w-5 h-5" />
              <span>العودة للرئيسية</span>
            </RouterLink>
            
            <button 
              @click="$router.back()" 
              class="flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors duration-300"
            >
              <ArrowLeftIcon class="w-5 h-5" />
              <span>رجوع للخلف</span>
            </button>
          </div>
        </div>

        <!-- Helpful Links Grid (Extra Info) -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
           <RouterLink to="/projects" class="text-xs font-bold hover:text-primary-600">المشاريع</RouterLink>
           <RouterLink to="/skills" class="text-xs font-bold hover:text-primary-600">المهارات</RouterLink>
           <RouterLink to="/blog" class="text-xs font-bold hover:text-primary-600">المدونة</RouterLink>
           <RouterLink to="/contact" class="text-xs font-bold hover:text-primary-600">اتصل بي</RouterLink>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-1/4 left-10 w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
    <div class="absolute bottom-1/4 right-10 w-2 h-2 bg-cyan-500 rounded-full animate-ping" style="animation-delay: 0.5s;"></div>
  </main>
</template>

<style scoped>
.perspective-container {
  perspective: 1000px;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotateX(0deg); }
  50% { transform: translateY(-20px) rotateX(10deg); }
}

.animate-glow {
  animation: glow 4s ease-in-out infinite alternate;
}

@keyframes glow {
  from { opacity: 0.1; filter: blur(20px); }
  to { opacity: 0.4; filter: blur(40px); }
}

.glass-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.25);
}

.dark .glass-card:hover {
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.6);
}

.reveal-up {
  animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
