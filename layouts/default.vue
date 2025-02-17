<template>
  <div class="layout-container">
    <AppNavbar />
    <slot />
  </div>
</template>

<style>

body {
  background-color: #f0f0f0; /* Very light gray */
}


.layout-container {
  max-width: 60vw;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .layout-container {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>
