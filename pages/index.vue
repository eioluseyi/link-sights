<script lang="ts" setup>
import {
  // useQueryClient,
  useQuery,
  UseQueryReturnType,
} from "@tanstack/vue-query";

// Access QueryClient instance
// const queryClient = useQueryClient();

const queryApi = ref("");

if (process.client) {
  queryApi.value = (window.location?.origin ?? "") + "/api/user/links";
}

// Query
const {
  isLoading,
  isError,
  data: linkList,
  error,
}: UseQueryReturnType<any, any> = useQuery({
  queryKey: ["get-link-list"],
  queryFn: async () => {
    if (process.client) {
      const response = await fetch(queryApi.value);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }

    return [];
  },
});

onMounted(() => {});
</script>

<template>
  <h1><a href="https://google.com">Run!</a></h1>
  <ClientOnly>
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <!-- We can assume by this point that `isSuccess === true` -->
    <pre v-else-if="linkList" class="bt">{{ linkList }}</pre>
  </ClientOnly>
</template>

<style scoped>
.bt {
  background: #202225;
  outline: none;
  border: none;
  color: #fff;
  font-family: proxima-nova, sans-serif;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 200ms;
  cursor: pointer;
}

.bt:hover {
  background: #272a2e;
}
</style>
