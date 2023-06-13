<script lang="ts" setup>
onMounted(() => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "/linkSights.js";
  document.head.appendChild(script);
});
</script>

<template>
  <div ref="parentDiv">
    <h1>This is a demo page</h1>
    <div>
      Here are links to test with:<br />
      <ul>
        <li><a href="https://google.com">First link</a></li>
        <li><a href="https://youtube.com">Second link</a></li>
        <li><a href="https://gmail.com">Third link</a></li>
      </ul>
    </div>
  </div>
</template>
