<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthMode } from '../composables/useAuthMode'

import profile from '../assets/profile image.png'
import polaris from '../assets/polaris.gif'
import dimensional from '../assets/dimentional.gif'
import power4 from '../assets/power4.gif'
import helpmyhomework from '../assets/helpmyhomework.png'
import utransfer from '../assets/project placeholder.png'
import qrcode from '../assets/project placeholder.png'
import docIcon from '../assets/document.svg'
import emailIcon from '../assets/email.svg'
import linkIcon from '../assets/generic link.svg'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/LinkedIn.webp'
import modrinthIcon from '../assets/modrinth.webp'
import curseforgeIcon from '../assets/curseforge.webp'

const router = useRouter()
const { mode, brandTitle, maskedName, relock } = useAuthMode()

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  if (mode.value === 'locked') router.replace({ name: 'home' })
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const lockButtonLabel = computed(() => (mode.value === 'lite' ? 'Unlock' : 'Lock'))

const onLockButton = () => {
  if (mode.value === 'lite') {
    relock()
    router.push({ name: 'home' })
    return
  }
  relock()
  router.push({ name: 'home' })
}

const goToUnlockPopup = () => {
  relock()
  router.push({ name: 'home' })
}

const downloadCV = async () => {
  const mod = await import('../assets/cv.pdf?url')
  const url = mod.default
  const res = await fetch(url)
  const blob = await res.blob()
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'Baptiste_De_Menorval_CV.pdf'
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(a.href)
  a.remove()
}

const showLiteBanner = computed(() => mode.value === 'lite')
</script>

<template>
  <div class="min-h-screen">
    <header :class="['sticky top-0 z-50 transition-all', scrolled ? 'glass-solid shadow-lg' : 'glass']">
      <nav class="container-std flex items-center justify-between py-3">
        <RouterLink to="/" class="text-white font-semibold tracking-wide">{{ brandTitle }}</RouterLink>

        <div class="flex items-center gap-2">
          <RouterLink
              to="/"
              class="hidden md:inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium bg-white/10 text-white hover:bg-white/15 border border-white/15"
          >
            Home
          </RouterLink>

          <button
              @click="onLockButton"
              class="hidden md:inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium border border-white/25 text-white/85 hover:bg-white/10"
          >
            {{ lockButtonLabel }}
          </button>

          <button
              class="md:hidden inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-white/80 hover:text-white hover:bg-white/10"
              type="button"
              @click="menuOpen = !menuOpen"
              aria-label="Toggle navigation"
          >
            <span class="block h-0.5 w-5 bg-white" />
          </button>
        </div>

        <ul class="hidden md:flex items-center gap-2">
          <li><a class="px-3 py-2 rounded-full text-white/85 hover:bg-white/10 hover:text-white transition" href="#identity">Identity</a></li>
          <li><a class="px-3 py-2 rounded-full text-white/85 hover:bg-white/10 hover:text-white transition" href="#projects">Projects</a></li>
          <li><a class="px-3 py-2 rounded-full text-white/85 hover:bg-white/10 hover:text-white transition" href="#education">Education</a></li>
          <li><a class="px-3 py-2 rounded-full text-white/85 hover:bg-white/10 hover:text-white transition" href="#network">Network</a></li>
          <li><a class="px-3 py-2 rounded-full text-white/85 hover:bg-white/10 hover:text-white transition" href="#experience">Experience</a></li>
          <li><a class="px-3 py-2 rounded-full text-white/85 hover:bg-white/10 hover:text-white transition" href="#skills">Skills</a></li>
          <li><a class="px-3 py-2 rounded-full text-white/85 hover:bg-white/10 hover:text-white transition" href="#interests">Interests</a></li>
          <li><a class="px-3 py-2 rounded-full text-white/85 hover:bg-white/10 hover:text-white transition" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div v-if="menuOpen" class="md:hidden border-t border-white/10">
        <div class="container-std py-2 grid grid-cols-2 gap-2">
          <a @click="menuOpen=false" class="px-3 py-2 rounded-lg text-white/85 hover:bg-white/10" href="#identity">Identity</a>
          <a @click="menuOpen=false" class="px-3 py-2 rounded-lg text-white/85 hover:bg-white/10" href="#projects">Projects</a>
          <a @click="menuOpen=false" class="px-3 py-2 rounded-lg text-white/85 hover:bg-white/10" href="#education">Education</a>
          <a @click="menuOpen=false" class="px-3 py-2 rounded-lg text-white/85 hover:bg-white/10" href="#network">Network</a>
          <a @click="menuOpen=false" class="px-3 py-2 rounded-lg text-white/85 hover:bg-white/10" href="#experience">Experience</a>
          <a @click="menuOpen=false" class="px-3 py-2 rounded-lg text-white/85 hover:bg-white/10" href="#skills">Skills</a>
          <a @click="menuOpen=false" class="px-3 py-2 rounded-lg text-white/85 hover:bg-white/10" href="#interests">Interests</a>
          <a @click="menuOpen=false" class="px-3 py-2 rounded-lg text-white/85 hover:bg-white/10" href="#contact">Contact</a>
          <RouterLink @click="menuOpen=false" class="col-span-2 rounded-lg px-3 py-2 font-medium bg-white/10 text-white hover:bg-white/15 border border-white/15 text-center" to="/">
            Home
          </RouterLink>
          <button @click="onLockButton" class="col-span-2 rounded-lg px-3 py-2 font-medium border border-white/25 text-white/85 hover:bg-white/10">
            {{ lockButtonLabel }}
          </button>
        </div>
      </div>
    </header>

    <main>
      <section v-if="showLiteBanner" class="border-b border-white/10 bg-white/5">
        <div class="container-std py-3 flex flex-wrap items-center justify-between gap-2">
          <div class="text-sm text-white/80">
            Public mode is enabled: some personal details are hidden.
          </div>
          <button
              type="button"
              class="text-sm rounded-lg px-3 py-1.5 bg-white/10 text-white hover:bg-white/15 border border-white/15"
              @click="goToUnlockPopup"
          >
            Enter access code
          </button>
        </div>
      </section>

      <section id="identity" class="relative py-16">
        <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_15%_-10%,rgba(14,165,233,.15),transparent_60%),radial-gradient(900px_300px_at_90%_0%,rgba(168,85,247,.15),transparent_60%)]"></div>
        <div class="container-std grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-center">
          <div class="w-48 h-48 rounded-full overflow-hidden ring-2 ring-white/15 shadow-2xl">
            <img :src="profile" alt="Profile photo" class="w-full h-full object-cover">
          </div>
          <div>
            <div class="flex items-center gap-3">
              <h1 class="text-3xl md:text-4xl font-semibold mb-2">
                <span v-if="mode==='full'">De Ménorval Baptiste</span>
                <span v-else>{{ maskedName }}</span>
              </h1>
              <button @click="onLockButton" class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium border border-white/25 text-white/85 hover:bg-white/10">
                {{ lockButtonLabel }}
              </button>
            </div>
            <p class="text-mute mb-6">Student · Toulouse, France</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="chip">Dev Student</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <button
                  v-if="mode==='full'"
                  type="button"
                  @click="downloadCV"
                  class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-white/10 text-white hover:bg-white/15 border border-white/15"
              >
                <img :src="docIcon" alt="" class="h-4 w-4 object-contain">
                <span>Download CV</span>
              </button>
              <span v-else class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-white/5 text-white/60 border border-white/10 select-none">
                <img :src="docIcon" alt="" class="h-4 w-4 object-contain opacity-60">
                <span>CV unavailable</span>
              </span>
              <a class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-brand text-white hover:brightness-110 shadow" href="#contact">
                <img :src="emailIcon" alt="" class="h-4 w-4 object-contain">
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr class="opacity-20">

      <section id="projects" class="py-14">
        <div class="container-std">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-semibold">Projects</h2>
            <span class="rule flex-1 ml-4"></span>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article class="card hover-lift">
              <div class="relative">
                <img :src="power4" alt="Power 4" class="project-media">
                <div class="overlay-fade"></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 class="text-lg font-semibold">Power 4 · 2025</h3>
                  <p class="text-sm text-white/80 mb-3">A modern Connect 4 website with Elo management and more.</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="chip-light">HTML</span>
                    <span class="chip-light">CSS</span>
                    <span class="chip-light">Go</span>
                  </div>
                  <div class="flex gap-2">
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium bg-brand text-white hover:brightness-110 shadow text-sm" href="https://www.palawi.fr/power4" target="_blank" rel="noopener noreferrer">
                      <img :src="linkIcon" alt="" class="h-4 w-4 object-contain">
                      <span>Live</span>
                    </a>
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium border border-white/25 text-white hover:bg-white/10 text-sm" href="https://github.com/Palawizard/power4" target="_blank" rel="noopener noreferrer">
                      <img :src="githubIcon" alt="" class="h-4 w-4 object-contain">
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="card hover-lift">
              <div class="relative">
                <img :src="helpmyhomework" alt="Help My Homework" class="project-media">
                <div class="overlay-fade"></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 class="text-lg font-semibold">Help My Homework · 2025</h3>
                  <p class="text-sm text-white/80 mb-3">Free and supportive homework help platform for all students.</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="chip-light">HTML</span>
                    <span class="chip-light">CSS</span>
                    <span class="chip-light">JS</span>
                    <span class="chip-light">Go</span>
                  </div>
                  <div class="flex gap-2">
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium bg-brand text-white hover:brightness-110 shadow text-sm" href="https://ydays.ynov.com/projects/6138" target="_blank" rel="noopener noreferrer">
                      <img :src="linkIcon" alt="" class="h-4 w-4 object-contain">
                      <span>More Info</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="card hover-lift">
              <div class="relative">
                <img :src="polaris" alt="POLARIS" class="project-media">
                <div class="overlay-fade"></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 class="text-lg font-semibold">POLARIS · 2025</h3>
                  <p class="text-sm text-white/80 mb-3">A small turn-based RPG that runs in the terminal with lore and chapters.</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="chip-light">Go</span>
                  </div>
                  <div class="flex gap-2">
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium border border-white/25 text-white hover:bg-white/10 text-sm" href="https://github.com/Palawizard/POLARIS" target="_blank" rel="noopener noreferrer">
                      <img :src="githubIcon" alt="" class="h-4 w-4 object-contain">
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="card hover-lift">
              <div class="relative">
                <img :src="dimensional" alt="Dimensional Roulette" class="project-media">
                <div class="overlay-fade"></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 class="text-lg font-semibold">Dimensional Roulette · 2025</h3>
                  <p class="text-sm text-white/80 mb-3">A chaotic Minecraft mod where taking damage teleports you to a random dimension.</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="chip-light">Java</span>
                  </div>
                  <div class="flex gap-2">
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium text-white bg-emerald-500 hover:brightness-110 shadow text-sm" href="https://modrinth.com/mod/dimensional_roulette" target="_blank" rel="noopener noreferrer">
                      <img :src="modrinthIcon" alt="" class="h-4 w-4 object-contain rounded">
                      <span>Modrinth</span>
                    </a>
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium text-white bg-amber-500 hover:brightness-110 shadow text-sm" href="https://www.curseforge.com/minecraft/mc-mods/dimensional-roulette" target="_blank" rel="noopener noreferrer">
                      <img :src="curseforgeIcon" alt="" class="h-4 w-4 object-contain rounded">
                      <span>CurseForge</span>
                    </a>
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium border border-white/25 text-white hover:bg-white/10 text-sm" href="https://github.com/Palawizard/DimensionalRoulette" target="_blank" rel="noopener noreferrer">
                      <img :src="githubIcon" alt="" class="h-4 w-4 object-contain">
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="card hover-lift">
              <div class="relative">
                <img :src="utransfer" alt="UTransfer" class="project-media">
                <div class="overlay-fade"></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 class="text-lg font-semibold">UTransfer · 2024</h3>
                  <p class="text-sm text-white/80 mb-3">Fast app for long-distance file sharing via Hamachi or port 5001.</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="chip-light">C#</span>
                  </div>
                  <div class="flex gap-2">
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium border border-white/25 text-white hover:bg-white/10 text-sm" href="https://github.com/Palawizard/Utransfer" target="_blank" rel="noopener noreferrer">
                      <img :src="githubIcon" alt="" class="h-4 w-4 object-contain">
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="card hover-lift">
              <div class="relative">
                <img :src="qrcode" alt="QRCode Generator" class="project-media">
                <div class="overlay-fade"></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 class="text-lg font-semibold">QRCode Generator · 2022</h3>
                  <p class="text-sm text-white/80 mb-3">Create QR codes from links or text.</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="chip-light">C#</span>
                  </div>
                  <div class="flex gap-2">
                    <a class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-medium border border-white/25 text-white hover:bg-white/10 text-sm" href="https://github.com/Palawizard/QRCode-generator" target="_blank" rel="noopener noreferrer">
                      <img :src="githubIcon" alt="" class="h-4 w-4 object-contain">
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr class="opacity-20">

      <section id="education" class="py-14" v-if="mode==='full'">
        <div class="container-std">
          <h2 class="text-2xl font-semibold mb-6">Education</h2>
          <div class="grid gap-4">
            <div class="card p-5 flex items-center justify-between">
              <div>
                <div class="font-semibold">Bachelor (B1) · Ynov Toulouse Campus</div>
                <div class="text-mute text-sm">Toulouse · Computer Science</div>
              </div>
              <div class="text-mute text-sm">2025–Now</div>
            </div>
            <div class="card p-5 flex items-center justify-between">
              <div>
                <div class="font-semibold">Baccalaureate · Lycée Saint-Exupéry</div>
                <div class="text-mute text-sm">Blagnac · Maths, NSI</div>
              </div>
              <div class="text-mute text-sm">2022–2025</div>
            </div>
          </div>
        </div>
      </section>

      <section v-else class="py-14">
        <div class="container-std">
          <h2 class="text-2xl font-semibold mb-6">Education</h2>
          <div class="card p-5 text-mute">Hidden in public mode</div>
        </div>
      </section>

      <hr class="opacity-20">

      <section id="network" class="py-14">
        <div class="container-std">
          <h2 class="text-2xl font-semibold mb-6">Network</h2>
          <div class="flex flex-wrap gap-3">
            <a class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-white/10 text-white hover:bg-white/15 border border-white/15" href="https://github.com/Palawizard" target="_blank" rel="noopener noreferrer">
              <img :src="githubIcon" alt="" class="h-5 w-5 object-contain">
              <span>GitHub</span>
            </a>
            <a v-if="mode==='full'" class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-brand text-white hover:brightness-110 shadow" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img :src="linkedinIcon" alt="" class="h-5 w-5 object-contain rounded">
              <span>LinkedIn</span>
            </a>
            <span v-else class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-white/5 text-white/60 border border-white/10 select-none">
              <img :src="linkedinIcon" alt="" class="h-5 w-5 object-contain opacity-60 rounded">
              <span>LinkedIn hidden</span>
            </span>
            <a class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-rose-600 text-white hover:brightness-110" href="#contact">
              <img :src="emailIcon" alt="" class="h-5 w-5 object-contain">
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      <hr class="opacity-20">

      <section id="experience" class="py-14">
        <div class="container-std">
          <h2 class="text-2xl font-semibold mb-6">Experience</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="card p-5">
              <div class="flex items-start justify-between">
                <h3 class="font-semibold">IT Maintenance · Aelion (Internship)</h3>
                <span class="text-mute text-sm">2021 and 2023</span>
              </div>
              <ul class="mt-3 list-disc pl-5 text-mute">
                <li>Maintained an IT fleet of 50+ workstations</li>
                <li>Configuration, troubleshooting, and system updates</li>
              </ul>
            </div>
            <div class="card p-5">
              <div class="flex items-start justify-between">
                <h3 class="font-semibold">Software Development Internship · Logyx</h3>
                <span class="text-mute text-sm">2022</span>
              </div>
              <ul class="mt-3 list-disc pl-5 text-mute">
                <li>Built a simulation game to train airport baggage security agents</li>
                <li>Developed a QR code generator application</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr class="opacity-20">

      <section id="skills" class="py-14">
        <div class="container-std">
          <h2 class="text-2xl font-semibold mb-6">Skills</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="card p-5">
              <h3 class="font-semibold mb-2">Programming Languages</h3>
              <p class="text-mute">Python, HTML, CSS, JavaScript, C#, C++ (intermediate)</p>
            </div>
            <div class="card p-5">
              <h3 class="font-semibold mb-2">IT Support</h3>
              <ul class="list-disc pl-5 text-mute">
                <li>Hardware knowledge and troubleshooting</li>
                <li>Software installation</li>
                <li>Network configuration</li>
              </ul>
            </div>
            <div class="card p-5">
              <h3 class="font-semibold mb-2">Tools & Personal Projects</h3>
              <ul class="list-disc pl-5 text-mute">
                <li>Private peer-to-peer data transfer software</li>
                <li>Minecraft server management with simple mods and plugins</li>
              </ul>
            </div>
            <div class="card p-5">
              <h3 class="font-semibold mb-2">Soft Skills</h3>
              <p class="text-mute">Curiosity, adaptability, autonomy, rigor</p>
            </div>
            <div class="card p-5 md:col-span-2">
              <h3 class="font-semibold mb-2">Languages</h3>
              <ul class="list-disc pl-5 text-mute">
                <li>French (native)</li>
                <li>English (fluent)</li>
                <li>Spanish (beginner)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr class="opacity-20">

      <section id="interests" class="py-14">
        <div class="container-std">
          <h2 class="text-2xl font-semibold mb-6">Interests</h2>
          <div class="grid gap-4">
            <div class="card p-5"><span class="font-semibold">Sports:</span> <span class="text-mute">Regular gym training, Volleyball</span></div>
            <div class="card p-5"><span class="font-semibold">Video editing and 3D modeling:</span> <span class="text-mute">Adobe Premiere Pro, Davinci Resolve, Blender, Unity</span></div>
            <div class="card p-5"><span class="font-semibold">Music:</span> <span class="text-mute">Mixing and mastering with FLStudio</span></div>
          </div>
        </div>
      </section>

      <hr class="opacity-20">

      <section id="contact" class="py-14">
        <div class="container-std">
          <h2 class="text-2xl font-semibold mb-6">Contact</h2>
          <form action="https://formsubmit.co/palawi.pro@gmail.com" method="POST" target="_blank" class="grid gap-4 md:grid-cols-2">
            <input type="hidden" name="_subject" value="Portfolio contact">
            <input type="hidden" name="_template" value="table">
            <input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off">
            <div class="card p-4">
              <label class="text-sm mb-1 block" for="name">Full name</label>
              <input id="name" name="name" type="text" class="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand" placeholder="Your full name" required>
            </div>
            <div class="card p-4">
              <label class="text-sm mb-1 block" for="email">Email</label>
              <input id="email" name="email" type="email" class="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand" placeholder="name@example.com" required>
            </div>
            <div class="card p-4 md:col-span-2">
              <label class="text-sm mb-1 block" for="subject">Subject</label>
              <input id="subject" name="subject" type="text" class="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand" placeholder="What is this about?">
            </div>
            <div class="card p-4 md:col-span-2">
              <label class="text-sm mb-1 block" for="message">Message</label>
              <textarea id="message" name="message" rows="6" class="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand" placeholder="Your message..." required></textarea>
            </div>
            <div class="md:col-span-2">
              <button type="submit" class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-brand text-white hover:brightness-110 shadow">
                <img :src="emailIcon" alt="" class="h-4 w-4 object-contain">
                <span>Send message</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/10 py-6 mt-6">
      <div class="container-std flex items-center justify-between">
        <small class="text-mute">
          <span v-if="mode==='full'">© De Ménorval Baptiste</span>
          <span v-else>© Palawi</span>
        </small>
        <div class="flex gap-4">
          <a class="text-white/80 hover:text-white transition inline-flex items-center gap-2" href="https://github.com/Palawizard" target="_blank" rel="noopener noreferrer">
            <img :src="githubIcon" alt="" class="h-5 w-5 object-contain"><span>GitHub</span>
          </a>
          <a v-if="mode==='full'" class="text-white/80 hover:text-white transition inline-flex items-center gap-2" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img :src="linkedinIcon" alt="" class="h-5 w-5 object-contain rounded"><span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
