<script lang="ts" setup>
type Props = {
    title?: string;
    level?: "primary" | "secondary" | "default";
    href?: string | null;
};

const props = withDefaults(defineProps<Props>(), {
    level: "default",
    href: null,
    title: ""
});

const classes = computed(() => {
    if (props.level === "primary") return "bg-black text-white hover:ring-black ";
    if (props.level === "secondary") return "bg-white text-black hover:ring-black ";
    return "bg-black text-white hover:ring-black ";
})
</script>

<template>
    <a v-if="href"
        class="mb-2 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-200 md:mr-2 md:mb-0"
        :class="classes" :href="href" role="button">
        {{ title }}
    </a>
    <button v-else
        class="mb-2 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-200 md:mr-2 md:mb-0"
        :class="classes" :href="href" role="button">
        {{ title }}
    </button>
</template>