<template>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/projects">Projects</a></li>
            <!-- <li><a href="/about">About</a></li> -->
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar'
}
</script>

<style scoped>
ul {
    border-top: 1px solid;
    border-bottom: 1px solid;
    list-style-type: none;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin: 0;
    display: flex;
    justify-content: center;
}

li {
    margin-right: 1rem;
}

a {
    text-decoration: none;
    /* color: #333; */
}

a:hover {
    color: #007bff;
}
</style>
