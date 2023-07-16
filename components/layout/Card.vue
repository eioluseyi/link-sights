<script lang="ts" setup>
type Props = {
    title?: string | null;
    details?: string | null;
}

withDefaults(defineProps<Props>(), {
    title: null,
    details: null
})

</script>

<template>
    <div class="overflow-hidden text-center">
        <div class="p-4 grid place-items-center text-primary ">
            <slot name="icon" />
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">
                {{ details }}
            </p>
        </div>
    </div>
</template>