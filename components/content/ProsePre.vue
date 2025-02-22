<template>
    <pre class="code-block">
        <code><slot /></code>
    </pre>
  </template>

<style scoped>
code {
    overflow-y: auto;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 0.5rem 0.5rem;
}

.code-block code {
    display: block;
    white-space: pre;
    font-family: monospace;
}
</style>
