<script lang="ts" setup>
import { LinkListType } from "~~/types/types.server";
import {
  useQueryClient,
  useQuery,
  UseQueryReturnType,
} from "@tanstack/vue-query";

// Access QueryClient instance
const queryClient = useQueryClient();

// Query
const {
  isLoading,
  isError,
  data: linkList,
  error,
}: UseQueryReturnType<any, any> = useQuery({
  queryKey: ["get-link-list"],
  queryFn: async () => {
    const response = await fetch("http://localhost:3100/api/user/links");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
});

// const linkList = ref<LinkListType[]>([]);

onMounted(() => {});
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <pre v-else-if="linkList" class="bt">{{ linkList }}</pre>
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
