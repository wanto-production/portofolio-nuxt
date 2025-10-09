<script setup lang="ts">
import type { BlogsCollectionItem } from '@nuxt/content'

interface Props {
  blogs: BlogsCollectionItem[]
}

const { blogs } = defineProps<Props>()

const search = ref('')
const selectedTag = ref('')

// Get unique tags
const tags = computed(() => {
  const tagSet = new Set<string>()
  blogs.forEach(blog => {
    blog.tags?.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
})

// Filter and sort blogs
const filteredBlogs = computed(() => {
  const keyword = search.value.toLowerCase().trim()
  const tag = selectedTag.value

  return [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter(blog => {
      const titleMatch = blog.title.toLowerCase().includes(keyword)
      const tagMatch = !tag || blog.tags?.includes(tag)
      return titleMatch && tagMatch
    })
})

// Format date
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Filter Section -->
    <div
      class="mb-12 sticky top-20 z-20 bg-card/90 backdrop-blur-md py-4 rounded-xl shadow-lg px-4 border border-border">
      <div class="grid gap-4 md:grid-cols-2 items-center">
        <input v-model="search" type="text" placeholder="Search by title..."
          class="w-full border border-input bg-background rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all" />
        <select v-model="selectedTag"
          class="w-full border border-input bg-background rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all">
          <option value="">All Tags</option>
          <option v-for="tag in tags" :key="tag" :value="tag">
            {{ tag }}
          </option>
        </select>
      </div>
    </div>

    <!-- Blog Grid -->
    <div class="grid gap-6" :class="filteredBlogs.length === 1
      ? 'grid-cols-1 place-items-center'
      : 'sm:grid-cols-2 lg:grid-cols-3'">
      <!-- No Results -->
      <div v-if="filteredBlogs.length === 0" class="col-span-full text-center text-muted-foreground py-12">
        <div class="text-6xl mb-4">🔍</div>
        <p class="text-lg">
          No results found for "<strong class="text-primary">{{ search }}</strong>"
        </p>
      </div>

      <!-- Blog Cards -->
      <template v-else>
        <NuxtLink v-for="(blog, index) in filteredBlogs" :key="blog.path" :to="blog.path" v-motion
          :initial="{ opacity: 0, y: 30 }" :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 100,
              duration: 500,
              ease: 'easeOut'
            }
          }"
          class="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col w-full max-w-md group border border-border hover:border-primary/50">
          <!-- Thumbnail -->
          <div v-if="blog.thumbnail" class="h-48 w-full overflow-hidden">
            <NuxtImg :src="blog.thumbnail" :alt="blog.title" loading="lazy"
              class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div v-else class="flex justify-center items-center h-48 w-full bg-muted">
            <p class="text-muted-foreground">No image</p>
          </div>

          <!-- Content -->
          <div class="p-5 flex flex-col justify-between flex-1">
            <div class="space-y-2">
              <h2 class="text-xl font-semibold text-primary group-hover:text-chart-3 transition-colors">
                {{ blog.title }}
              </h2>

              <div class="flex items-center gap-3 text-xs text-muted-foreground">
                <time>{{ formatDate(blog.date) }}</time>
                <span v-if="blog.lang" class="text-chart-3">lang: {{ blog.lang }}</span>
              </div>

              <p class="text-sm text-foreground/80 line-clamp-3 leading-relaxed">
                {{ blog.description }}
              </p>

              <!-- Tags -->
              <div v-if="blog.tags && blog.tags.length > 0" class="flex flex-wrap gap-2 pt-2">
                <span v-for="tag in blog.tags.slice(0, 3)" :key="tag"
                  class="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border">
                  {{ tag }}
                </span>
              </div>
            </div>

            <p class="mt-4 text-chart-3 text-sm group-hover:underline flex items-center gap-1">
              📖 Read more
              <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
