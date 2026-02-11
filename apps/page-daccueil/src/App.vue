<script setup>
import gifPortfolio from './assets/portfolio.gif'
import gifPower4 from './assets/power4.gif'
import gifMusic from './assets/music.gif'
import gifStream from './assets/youtube.gif'
import gifSchedule from './assets/schedule.gif'
import gifGroupie from './assets/groupie.gif'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl"></div>
    </div>
    <div class="relative mx-auto grid min-h-screen max-w-5xl place-items-center px-6">
      <main class="w-full rounded-2xl border border-white/20 bg-white/60 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50">
        <div class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">www.palawi.fr</div>
        <h1 class="text-3xl font-extrabold leading-tight sm:text-4xl">Welcome to the Palawi domain</h1>
        <p class="mt-3 text-slate-600 dark:text-slate-400">What are you looking for?</p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <a href="/portfolio" class="group relative block overflow-hidden rounded-2xl ring-1 ring-white/15 lg:col-span-2">
            <div class="aspect-video"></div>
            <div class="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.03]" :style="{ backgroundImage: `url(${gifPortfolio})` }"></div>
            <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30"></div>
            <div class="absolute inset-0 grid place-items-center">
              <span class="px-4 py-2 text-xl font-bold tracking-wide text-white drop-shadow-lg">My Portfolio</span>
            </div>
          </a>

          <a href="/power4" class="group relative block overflow-hidden rounded-2xl ring-1 ring-white/15 lg:col-span-2">
            <div class="aspect-video"></div>
            <div class="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.03]" :style="{ backgroundImage: `url(${gifPower4})` }"></div>
            <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30"></div>
            <div class="absolute inset-0 grid place-items-center">
              <span class="px-4 py-2 text-xl font-bold tracking-wide text-white drop-shadow-lg">Power 4</span>
            </div>
          </a>

          <a href="/musiclinks" class="group relative block overflow-hidden rounded-2xl ring-1 ring-white/15 lg:col-span-2">
            <div class="aspect-video"></div>
            <div class="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.03]" :style="{ backgroundImage: `url(${gifMusic})` }"></div>
            <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30"></div>
            <div class="absolute inset-0 grid place-items-center">
              <span class="px-4 py-2 text-xl font-bold tracking-wide text-white drop-shadow-lg">My Music</span>
            </div>
          </a>

          <a href="/streamlinks" class="group relative block overflow-hidden rounded-2xl ring-1 ring-white/15 lg:col-span-2 lg:col-start-1">
            <div class="aspect-video"></div>
            <div class="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.03]" :style="{ backgroundImage: `url(${gifStream})` }"></div>
            <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30"></div>
            <div class="absolute inset-0 grid place-items-center">
              <span class="px-4 py-2 text-xl font-bold tracking-wide text-white drop-shadow-lg">Stream Links</span>
            </div>
          </a>

          <a href="/schedule-maker" class="group relative block overflow-hidden rounded-2xl ring-1 ring-white/15 lg:col-span-2 lg:col-start-3">
            <div class="aspect-video"></div>
            <div class="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.03]" :style="{ backgroundImage: `url(${gifSchedule})` }"></div>
            <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30"></div>
            <div class="absolute inset-0 grid place-items-center">
              <span class="px-4 py-2 text-xl font-bold tracking-wide text-white drop-shadow-lg">Stream Schedule Maker</span>
            </div>
          </a>

          <a href="/groupie-tracker" class="group relative block overflow-hidden rounded-2xl ring-1 ring-white/15 lg:col-span-2 lg:col-start-5">
            <div class="aspect-video"></div>
            <div class="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.03]" :style="{ backgroundImage: `url(${gifGroupie})` }"></div>
            <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30"></div>
            <div class="absolute inset-0 grid place-items-center">
              <span class="px-4 py-2 text-xl font-bold tracking-wide text-white drop-shadow-lg">Groupie Tracker</span>
            </div>
          </a>
        </div>

        <div class="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>v1.3</span>
        </div>
      </main>
    </div>
  </div>
</template>
