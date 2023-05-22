<script lang="ts" setup>
const route = useRoute();
const routeData: string = route.params.data as string;

const decodedData = ref(Buffer.from(routeData, "base64").toString());
</script>

<template>
  <h1>Base64 content below</h1>
  <code>
    <pre>{{ route.params.data }}</pre>
  </code>
  <br />
  <h1>Decoded object content below</h1>
  <code>
    <pre>{{ decodedData }}</pre>
  </code>
</template>
