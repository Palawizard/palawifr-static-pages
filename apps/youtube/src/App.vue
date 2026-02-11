<script setup>
import { ref } from 'vue'

import pfp from './assets/pfp2.png'
import featuredThumb from './assets/featured thumbnail.jpg'

import logoYouTube from './assets/youtube logo.png'
import logoTwitch from './assets/twitch logo.png'
import logoTiktok from './assets/tiktok logo.webp'
import logoInstagram from './assets/instagram logo.png'
import logoX from './assets/x logo.png'
import logoDiscord from './assets/discord logo.webp'

import smallYouTube from './assets/youtube small logo.svg'
import smallTwitch from './assets/logo-twitch.svg'
import smallTiktok from './assets/tiktok small logo.png'
import smallInstagram from './assets/instagram small logo.png'
import smallX from './assets/x logo.png'

const showFeatured = ref(true)

const mainLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@PalawiYT', icon: logoYouTube },
  { label: 'Twitch', href: 'https://www.twitch.tv/Palawii', icon: logoTwitch },
  { label: 'TikTok', href: 'https://www.tiktok.com/@palawiii', icon: logoTiktok },
  { label: 'Instagram', href: 'https://www.instagram.com/palawi_yt/', icon: logoInstagram },
  { label: 'X', href: 'https://x.com/Palawiii', icon: logoX },
  { label: 'Discord', href: 'https://discord.gg/kDxVMHz3gG', icon: logoDiscord }
]

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@PalawiYT', icon: smallYouTube },
  { label: 'Twitch', href: 'https://www.twitch.tv/Palawii', icon: smallTwitch },
  { label: 'TikTok', href: 'https://www.tiktok.com/@palawiii', icon: smallTiktok },
  { label: 'Instagram', href: 'https://www.instagram.com/palawi_yt/', icon: smallInstagram },
  { label: 'X', href: 'https://x.com/Palawiii', icon: smallX }
]

const featured = {
  title: 'Nouvelle vidéo',
  cover: featuredThumb,
  youtubeEmbedSrc: 'https://www.youtube.com/embed/mFY1k4lSGO8?rel=0',
  link: 'https://www.youtube.com/watch?v=mFY1k4lSGO8'
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <div class="relative mx-auto max-w-xl px-6 py-10">
      <div class="mb-4">
        <a href="/" class="inline-flex items-center gap-2 rounded-xl bg-slate-800/70 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/10 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12h16"/>
            <path d="M10 6l-6 6 6 6"/>
          </svg>
          <span>Retourner au menu</span>
        </a>
      </div>
      <header class="flex flex-col items-center gap-4">
        <img :src="pfp" alt="Palawi" class="h-24 w-24 rounded-full ring-2 ring-white/20 object-cover" />
        <h1 class="text-2xl font-extrabold tracking-tight">Palawi</h1>
        <p class="text-center text-slate-300">Ce gars qui essaye d'être connu sans succès mdr</p>
        <nav class="mt-1 flex flex-wrap items-center justify-center gap-4">
          <a v-for="s in socialLinks" :key="s.label" :href="s.href" target="_blank" rel="noopener" class="rounded-lg p-1.5 opacity-80 transition hover:opacity-100 active:scale-95">
            <img :src="s.icon" :alt="s.label" class="h-6 w-6 object-contain" />
          </a>
        </nav>
      </header>

      <main class="mt-8 space-y-6">
        <section class="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-xl backdrop-blur">
          <button
              class="group flex w-full items-center gap-4 rounded-xl p-2 transition hover:bg-white/5 active:scale-[0.99]"
              @click="showFeatured = !showFeatured"
              :aria-expanded="showFeatured"
              aria-controls="featured-panel"
          >
            <img :src="featured.cover" alt="" class="h-14 w-14 rounded-lg object-cover" />
            <span class="grow text-left">
              <span class="block text-xs uppercase tracking-[0.2em] text-slate-400">Mis en avant</span>
              <span class="block text-lg font-bold leading-tight">Nouvelle vidéo</span>
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/15 transition group-hover:bg-white/15">
              <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 transform transition" :class="showFeatured ? 'rotate-180' : 'rotate-0'"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z" clip-rule="evenodd"/></svg>
              <span>{{ showFeatured ? 'Cacher' : 'Montrer' }}</span>
            </span>
          </button>

          <div v-if="showFeatured" id="featured-panel" class="mt-4 space-y-4">
            <div class="rounded-2xl bg-[#0f0f0f]">
              <div class="overflow-hidden rounded-[inherit]">
                <iframe
                    :src="featured.youtubeEmbedSrc"
                    title="YouTube video player"
                    class="block w-full aspect-video border-0 align-top"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    loading="lazy"
                    allowfullscreen
                ></iframe>
              </div>
            </div>

            <a :href="featured.link" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 font-semibold text-white shadow-lg shadow-red-900/30 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-red-500">
              Regarder sur Youtube
            </a>
          </div>
        </section>

        <section class="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-xl backdrop-blur">
          <div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Principal</div>
          <div class="grid gap-3">
            <a v-for="m in mainLinks" :key="m.label" :href="m.href" target="_blank" rel="noopener" class="flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-3 text-white shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-slate-800/80 hover:shadow-black/40">
              <div class="flex items-center gap-3">
                <img :src="m.icon" alt="" class="h-7 w-7 object-contain" />
                <span class="text-base font-bold">{{ m.label }}</span>
              </div>
              <span class="text-sm text-slate-300">Ouvrir</span>
            </a>
          </div>
        </section>
      </main>

      <footer class="mt-8 flex items-center justify-center text-xs text-slate-400">
        <span>v1.0 • Stream Links</span>
      </footer>
    </div>
  </div>
</template>
