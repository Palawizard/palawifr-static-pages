<script setup>
import { ref } from 'vue'

import pfp from './assets/pfp.png'
import featuredCover from './assets/featured cover.jpg'

import logoSpotify from './assets/spotify logo.png'
import logoYouTube from './assets/youtube logo.png'
import logoYouTubeMusic from './assets/youtubemusic logo.png'
import logoSoundCloud from './assets/soundcloud logo.png'
import logoApple from './assets/apple music logo.png'
import logoDeezer from './assets/deezer logo.png'
import logoAmazon from './assets/amazon music logo.jpg'

import smallYouTube from './assets/youtube small logo.svg'
import smallSoundCloud from './assets/soundcloud small logo.svg'
import smallApple from './assets/apple music small logo.svg'
import smallDeezer from './assets/deezer small logo.svg'
import smallSpotify from './assets/spotify small logo.svg'
import smallInstagram from './assets/instagram small logo.png'
import smallTiktok from './assets/tiktok small logo.png'

const showFeatured = ref(false)

const mainLinks = [
  { label: 'Spotify', href: 'https://open.spotify.com/artist/2pGLZYyPlXH1rkOsxRdZ0h', icon: logoSpotify },
  { label: 'YouTube', href: 'https://www.youtube.com/@PalawiMusic', icon: logoYouTube },
  { label: 'YouTube Music', href: 'https://music.youtube.com/channel/UC4O_rbQlWs5nA-Nz70WlbIQ', icon: logoYouTubeMusic },
  { label: 'SoundCloud', href: 'https://soundcloud.com/palawi', icon: logoSoundCloud },
  { label: 'Apple Music', href: 'https://music.apple.com/fr/artist/palawi/1707256536', icon: logoApple },
  { label: 'Deezer', href: 'https://www.deezer.com/us/artist/230627125', icon: logoDeezer },
  { label: 'Amazon Music', href: 'https://music.amazon.com/albums/B0FT1BB879?trackAsin=B0FT199B28', icon: logoAmazon }
]

const socialLinks = [
  { label: 'Spotify', href: 'https://open.spotify.com/artist/2pGLZYyPlXH1rkOsxRdZ0h', icon: smallSpotify },
  { label: 'YouTube', href: 'https://www.youtube.com/@PalawiMusic', icon: smallYouTube },
  { label: 'Deezer', href: 'https://www.deezer.com/us/artist/230627125', icon: smallDeezer },
  { label: 'Apple Music', href: 'https://music.apple.com/fr/artist/palawi/1707256536', icon: smallApple },
  { label: 'SoundCloud', href: 'https://soundcloud.com/palawi', icon: smallSoundCloud },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: smallInstagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: smallTiktok }
]

const featured = {
  title: 'fall (mylancore - hoodtrap remix)',
  cover: featuredCover,
  spotifyEmbedSrc: 'https://open.spotify.com/embed/track/6XKBBNWQeiDy0W4Ubbedvl?utm_source=generator',
  links: [
    { label: 'Spotify', href: 'https://open.spotify.com/intl-fr/track/6XKBBNWQeiDy0W4Ubbedvl?si=ebf772cca4e245be', icon: logoSpotify },
    { label: 'YouTube', href: 'https://www.youtube.com/watch?v=ewwfF2uW5CE', icon: logoYouTube },
    { label: 'YouTube Music', href: 'https://music.youtube.com/watch?v=ewwfF2uW5CE', icon: logoYouTubeMusic },
    { label: 'SoundCloud', href: 'https://soundcloud.com/palawi/fall-hoodtrap-mylancore-remix', icon: logoSoundCloud },
    { label: 'Apple Music', href: 'https://music.apple.com/us/song/fall-hoodtrap-mylancore-remix/1854591829', icon: logoApple },
    { label: 'Deezer', href: 'https://link.deezer.com/s/31JXjXmeWnfKm7ezjcqfm', icon: logoDeezer },
    { label: 'Amazon Music', href: 'https://music.amazon.fr/tracks/B0G2J4BRWH', icon: logoAmazon }
  ]
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
          <span>Return to menu</span>
        </a>
      </div>

      <header class="flex flex-col items-center gap-4">
        <img :src="pfp" alt="Palawi" class="h-24 w-24 rounded-full ring-2 ring-white/20 object-cover" />
        <h1 class="text-2xl font-extrabold tracking-tight">Palawi</h1>
        <p class="text-center text-slate-300">18yo singer from France, go stream my songs!</p>
        <nav class="mt-1 flex flex-wrap items-center justify-center gap-4">
          <a v-for="s in socialLinks" :key="s.label" :href="s.href" target="_blank" rel="noopener noreferrer" class="rounded-lg p-1.5 opacity-80 transition hover:opacity-100 active:scale-95">
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
              <span class="block text-xs uppercase tracking-[0.2em] text-slate-400">Featured</span>
              <span class="block text-lg font-bold leading-tight">{{ featured.title }}</span>
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/15 transition group-hover:bg-white/15">
              <svg viewBox="0 0 20 20" class="h-4 w-4 transform transition" :class="showFeatured ? 'rotate-180' : 'rotate-0'"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z" clip-rule="evenodd"/></svg>
              <span>{{ showFeatured ? 'Hide' : 'Show' }}</span>
            </span>
          </button>

          <div v-if="showFeatured" id="featured-panel" class="mt-4 space-y-4">
            <div class="rounded-2xl bg-[#121212]">
              <div class="overflow-hidden rounded-[inherit]">
                <iframe
                    :src="featured.spotifyEmbedSrc"
                    class="block h-[352px] w-full border-0 align-top"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
              </div>
            </div>

            <div class="grid gap-2">
              <a v-for="l in featured.links" :key="l.label" :href="l.href" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-3 transition hover:bg-slate-900/75">
                <img :src="l.icon" alt="" class="h-6 w-6 object-contain" />
                <span class="font-medium text-slate-100">{{ l.label }}</span>
              </a>
            </div>
          </div>
        </section>

        <section class="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-xl backdrop-blur">
          <div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Main</div>
          <div class="grid gap-3">
            <a v-for="m in mainLinks" :key="m.label" :href="m.href" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-3 text-white shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-slate-800/80 hover:shadow-black/40">
              <div class="flex items-center gap-3">
                <img :src="m.icon" alt="" class="h-7 w-7 object-contain" />
                <span class="text-base font-bold">{{ m.label }}</span>
              </div>
              <span class="text-sm text-slate-300">Open</span>
            </a>
          </div>
        </section>
      </main>

      <footer class="mt-8 flex items-center justify-center text-xs text-slate-400">
        <span>v1.1 • Music Links</span>
      </footer>
    </div>
  </div>
</template>