<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthMode } from '../composables/useAuthMode'

import profile from '../assets/profile image.png'
import power4 from '../assets/power4.gif'
import helpmyhomework from '../assets/helpmyhomework.png'
import polaris from '../assets/polaris.gif'
import dimensional from '../assets/dimentional.gif'
import utransfer from '../assets/project placeholder.png'
import qrcode from '../assets/project placeholder.png'
import emailIcon from '../assets/email.svg'

import streamScheduleMakerImage from '../assets/schedule.gif'
import groupieTrackerImage from '../assets/groupie.gif'

const router = useRouter()
const { mode, password, showRequest, currentUrl, errorMsg, isSubmitting, realName, setCurrentUrl, unlock, continueLite, onRequestSubmit } = useAuthMode()

onMounted(() => {
  setCurrentUrl()
})

const displayName = computed(() => (mode.value === 'full' ? realName : 'Name Hidden'))

const enter = () => {
  if (mode.value === 'locked') return
  router.push({ name: 'portfolio' })
}

const unlockOnly = async () => {
  await unlock()
}

const continuePublic = () => {
  continueLite()
}

const projects = computed(() => [
  { key: 'streamschedulemaker', title: 'Pala’s Stream Schedule Maker', year: '2026', media: streamScheduleMakerImage },
  { key: 'helpmyhomework', title: 'Help My Homework', year: '2025', media: helpmyhomework },
  { key: 'groupietracker', title: 'Pala’s Groupie Tracker', year: '2025-2026', media: groupieTrackerImage },
  { key: 'power4', title: 'Power 4', year: '2025', media: power4 },
  { key: 'polaris', title: 'POLARIS', year: '2025', media: polaris },
  { key: 'dimensional', title: 'Dimensional Roulette', year: '2025', media: dimensional },
  { key: 'utransfer', title: 'UTransfer', year: '2024', media: utransfer },
  { key: 'qrcode', title: 'QRCode Generator', year: '2022', media: qrcode }
])
</script>

<template>
  <div class="min-h-screen bg-bg text-text">
    <div v-if="mode === 'locked'" class="fixed inset-0 z-[100] grid place-items-center bg-black/70 backdrop-blur-md px-4">
      <div class="w-full max-w-lg rounded-2xl bg-surface p-6 ring-1 ring-white/10 shadow-2xl">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-white/15 bg-white/5">
            <img :src="profile" alt="Profile photo" class="h-full w-full object-cover">
          </div>
          <div>
            <div class="text-white font-semibold">Private details locked</div>
            <div class="text-mute text-sm">
              Since the website is public, some personal details are hidden to protect my privacy. Enter the access code to view them. You can find the access code on my Linkedin or you can request it.
            </div>
          </div>
        </div>

        <label class="block text-sm text-mute mb-1">Access code</label>
        <input
            v-model="password"
            type="password"
            class="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter code"
            @keydown.enter.prevent="unlockOnly"
        >
        <p v-if="errorMsg" class="mt-2 text-sm text-rose-400">{{ errorMsg }}</p>

        <div class="mt-4 grid gap-2 sm:grid-cols-2">
          <button type="button" class="btn btn-primary w-full" @click="unlockOnly">Unlock</button>
          <button type="button" class="btn btn-soft w-full" @click="continuePublic">Enter public</button>
        </div>

        <button
            type="button"
            class="mt-3 text-sm text-white/70 hover:text-white underline underline-offset-4"
            @click="showRequest = !showRequest"
        >
          Request access code
        </button>

        <form
            v-if="showRequest"
            action="https://formsubmit.co/palawi.pro@gmail.com"
            method="POST"
            target="_blank"
            class="mt-4 grid gap-3"
            @submit="onRequestSubmit"
        >
          <input type="hidden" name="_subject" value="Portfolio access code request">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="page" :value="currentUrl">
          <label class="text-sm text-mute">Your email</label>
          <input
              name="requester_email"
              type="email"
              required
              class="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand"
              placeholder="name@example.com"
          >
          <button :disabled="isSubmitting" type="submit" class="btn btn-primary disabled:opacity-70">
            <img :src="emailIcon" alt="" class="h-4 w-4 object-contain">
            <span>{{ isSubmitting ? 'Sending...' : 'Send request' }}</span>
          </button>
        </form>
      </div>
    </div>

    <main class="relative min-h-screen overflow-hidden">
      <div class="pointer-events-none absolute inset-0 z-0">
        <div class="absolute inset-0 bg-[radial-gradient(900px_450px_at_15%_-10%,rgba(14,165,233,.22),transparent_60%),radial-gradient(1000px_500px_at_95%_10%,rgba(168,85,247,.18),transparent_60%)]"></div>
        <div class="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)]"></div>

        <div class="absolute inset-0 flex items-center">
          <div class="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] opacity-85">
            <div class="marquee-track marquee-big animate-[marqueeLeft_46s_linear_infinite]">
              <div class="marquee-content">
                <div v-for="p in projects" :key="p.key" class="marquee-card marquee-card-big">
                  <div class="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img :src="p.media" :alt="p.title" class="h-full w-full object-cover opacity-95">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                    <div class="absolute left-6 right-6 bottom-5">
                      <div class="flex items-center justify-between gap-3">
                        <div class="text-white/95 font-semibold text-lg">{{ p.title }}</div>
                        <div class="text-sm text-white/60">{{ p.year }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="marquee-content" aria-hidden="true">
                <div v-for="p in projects" :key="`${p.key}-dup`" class="marquee-card marquee-card-big">
                  <div class="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img :src="p.media" :alt="p.title" class="h-full w-full object-cover opacity-95">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                    <div class="absolute left-6 right-6 bottom-5">
                      <div class="flex items-center justify-between gap-3">
                        <div class="text-white/95 font-semibold text-lg">{{ p.title }}</div>
                        <div class="text-sm text-white/60">{{ p.year }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute inset-0 bg-black/45"></div>
        </div>
      </div>

      <div class="relative z-10 container-std min-h-screen grid place-items-center py-16">
        <div class="text-center w-full max-w-xl">
          <div class="mx-auto h-28 w-28 overflow-hidden rounded-3xl ring-1 ring-white/15 bg-white/5 shadow-2xl">
            <img :src="profile" alt="Profile" class="h-full w-full object-cover">
          </div>

          <h1 class="mt-6 text-4xl sm:text-6xl font-semibold text-white">{{ displayName }}</h1>

          <div class="mt-8">
            <button type="button" class="btn btn-primary px-10 py-3.5 text-base" :disabled="mode === 'locked'" @click="enter">
              Enter
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
