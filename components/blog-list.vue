<template>
    <ul class="article-list">
        <li v-for="article in articles" :key="article.id">
            <div class="article-date">{{ article.date }}</div>
            <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>

const { data } = await useAsyncData(() => queryCollection('content').order('date', 'DESC').all())

const articles = data.value.map(article => ({
    id: article.id,
    slug: article.stem,
    title: article.title,
    date: new Date(article.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}))

</script>

<style scoped>
.article-list {
    list-style-type: none;
    padding: 0;
}

.article-list li {
    margin-bottom: 2rem;
}

.article-date {
    margin-bottom: 0.2rem;
}
</style>