<template>
    <h2 :id="props.id" class="text-2xl font-bold mb-4">
      <!-- <a
        v-if="generate"
        :href="`#${props.id}`"
      >
        <slot />
      </a>
      <slot v-else /> -->
      <slot />
    </h2>
  </template>
  
  <script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'
  
  const props = defineProps<{ id?: string }>()
  
  const { headings } = useRuntimeConfig().public.mdc
  const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
  </script>