<template>
    <ul class="article-list">
        <li v-for="article in articles" :key="article.id">
            <div class="article-date">{{ article.date }}</div>
            <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>
const articles = [
    { id: 1, slug: 'claude-as-a-video-editor', title: 'Claude as a video editor', date: '17 February 2025' },
    { id: 2, slug: 'the-difference-of-celestial-bodies', title: 'The Difference of Celestial Bodies (poem)', date: '15 February 2025' },
];
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