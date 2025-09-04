<template>
    <template v-if="data">
        <div class="blog-post">
        <h1>{{ data.title }}</h1>
        <p class="date">{{ new Date(data.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) }}</p>
        <ContentRenderer :value="data" />
    </div>
    </template>
    <template v-else>
        <div class="empty-page">
            <h1>Not Found</h1>
            <p>Oops! It seems like this blog doesn't exist.</p>
            <NuxtLink to="/">Go back home</NuxtLink>
        </div>
    </template>
</template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData(`blog-${route.params.slug}`, () => queryCollection('content').path(`/${route.params.slug}`).first())

useSeoMeta({
  title: data.value?.title,
//   description: data.value?.description
})

useHead({
    title: data.value?.title,
})
</script>

<style scoped>
.blog-post {
    margin: 0 auto;
    margin-bottom: 4rem;
}

h1 {
    margin-bottom: 0.5rem;
}

.date {
    margin-bottom: 2rem;
    color: #666;
}

.content p {
    line-height: 1.6;
    margin-bottom: 1rem;
}

.code-block {
    overflow-y: auto;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 0 1rem;
}

.code-block code {
    display: block;
    white-space: pre;
    font-family: monospace;
}
</style>
