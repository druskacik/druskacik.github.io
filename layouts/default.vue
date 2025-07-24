<template>
  <div class="layout-container">
    <AppNavbar />
    <slot />
  </div>
</template>

<style>

body {
  background-color: #f5f5f5;
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
