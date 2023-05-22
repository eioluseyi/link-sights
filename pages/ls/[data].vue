<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <h1>Base64 content below</h1>
  <code>
    <pre>{{ route.params.data }}</pre>
  </code>
</template>
