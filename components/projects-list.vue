<template>
    <ul class="project-list">
        <li v-for="project in projects" :key="project.url">
            <a :href="project.url" target="_blank">{{ project.url }}</a>
            <div class="project-description">{{ project.description }}</div>
        </li>
    </ul>
</template>

<script setup>
const projects = [
    {
        url: 'https://infldb.com',
        title: 'Infldb',
        description: 'European influencers database.',
    },
    {
        url: 'https://classical.sk',
        title: 'Classical.sk',
        description: 'Classical music concerts in Slovakia.',
    },
    {
        url: 'https://illuminovel.com',
        title: 'Illuminovel',
        description: 'Book to soundtrack generator. AI book illustrations.',
    },
    {
        url: 'https://bswatcher.com',
        title: 'Bswatcher',
        description: 'Notifications for staking on the Binance platform.',
    },
    {
        url: 'https://sparing.sk',
        title: 'Sparing',
        description: 'List of sport venues in Slovakia.',
    },
];
</script>

<style scoped>
.project-list {
    list-style-type: none;
    padding: 0;
}

.project-list li {
    margin-bottom: 3rem;
}

.project-list li a {
    margin-bottom: 1rem;
    display: inline-block;
}

.project-description {
    margin-bottom: 0.2rem;
}
</style>