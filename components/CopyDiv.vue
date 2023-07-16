<script lang="ts" setup>
import { ClipboardIcon } from "@heroicons/vue/20/solid";

type Props = {
    title?: string | null;
    value: string;
    isCode?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    title: null,
    isCode: false,
});

const copyText = () => {
    navigator.clipboard.writeText(props.value);
};
</script>

<template>
    <button class="relative text-sm overflow-hidden group flex justify-between items-center border border-dashed border-slate-300 rounded-md py-1 px-2 w-full max-w-xs text-slate-600 cursor-pointer hover:border-slate-500 transition active:border-slate-700"
        @click="copyText">
        <div class="absolute opacity-0 group-active:opacity-100 group-active:delay-0 group-active:transition-none transition delay-500 flex items-center px-2 top-0 left-0 h-full right-7 text-slate-400 bg-white">Copied to clipboard</div>
        <code class="truncate text-left w-full" v-if="isCode">{{ title ?? value }}</code>
        <span class="truncate text-left w-full" v-else>{{ title ?? value }}</span>
        <span>
            <ClipboardIcon class="h-4 w-4" />
        </span>
    </button>
</template>
