<script setup lang="ts">
import profileImage from '~/assets/images/nishimiya.jpeg'

import { hyperspeedPresets } from '~/components/bits/Backgrounds/Hyperspeed/HyperspeedPresets'

useHead({
  title: 'home',
  meta: [
    { name: "description", content: 'Personal portfolio of Ikhwan Satrio - Frontend Developer' }
  ]
})

</script>

<template>
  <main class="w-full min-h-screen">
    <section
      class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,_var(--sidebar),_var(--background))] overflow-hidden">
      <!-- Background Rays -->
      <div class="absolute top-0 w-full h-full z-10">
        <ClientOnly>
          <BitsBackgroundsHyperspeed :effect-options="hyperspeedPresets.two" />
        </ClientOnly>
      </div>

      <!-- Profile Image with Circular Text -->
      <div class="relative flex items-center justify-center z-10">
        <ClientOnly>
          <BitsTextAnimationsCircularText text="*ikhwan*satrio*" :spin-duration="20" class="custom-class" />
        </ClientOnly>
        <div class="absolute inset-0 flex items-center justify-center">
          <img :src="profileImage" alt="Profile" class="h-[130px] w-[130px] rounded-full object-cover shadow-lg" />
        </div>
      </div>

      <!-- Text Block -->
      <div class="flex flex-col items-center gap-4 p-3 z-10">
        <!-- Heading -->
        <h2 class="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold">
          hello, i'm Ikhwan satrio
        </h2>

        <!-- Typing Text -->
        <ClientOnly>
          <BitsTextAnimationsTextType class-name="font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground"
            :text="[
              'Young Programmer',
              'Frontend Developer',
              'Loves Qwik & Svelte',
              'Happy coding!',
            ]" :typing-speed="75" :pause-duration="1500" :show-cursor="true" cursor-character="|" />
        </ClientOnly>
      </div>

      <!-- Call to Action -->
      <div class="mt-8 flex flex-wrap gap-4 justify-center z-10">
        <NuxtLink to="/projects"
          class="min-w-[150px] text-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          View Projects
        </NuxtLink>
        <a href="https://github.com/wanto-production" target="_blank" rel="noopener noreferrer"
          class="min-w-[150px] text-center px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2">
          <Icon name="fa:github" size="20" />
          Github
        </a>
      </div>
    </section>
  </main>
</template>
