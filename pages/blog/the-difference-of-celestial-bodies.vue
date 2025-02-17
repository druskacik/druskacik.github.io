<template>
    <div class="blog-post">
        <h1>The Difference of Celestial Bodies</h1>
        <p class="date">17 February 2025</p>
        <div class="content">
            <p>A planet orbits around a star<br>
            That's me<br>
            You are the star</p>

            <p>The planet disappears and nothing happens to the star<br>
            That's like when I fade away</p>

            <p>But when the star disappears,<br>
            the planet stumbles and remains alone,<br>
            lost in this vast boundless world<br>
            That's like when you fade away</p>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'The Difference of Celestial Bodies',
})
</script>

<style scoped>
.blog-post {
    margin: 0 auto;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.date {
    margin-bottom: 2rem;
}

.content h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.content p {
    line-height: 1.6;
    margin-bottom: 1rem;
}
</style>
