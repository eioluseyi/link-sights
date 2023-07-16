<script setup lang="ts">
import { TransitionChild } from "@headlessui/vue";
import { NuxtLinkProps } from 'nuxt/dist/app/components';

type Props = {
    index?: number;
}

const props = withDefaults(defineProps<NuxtLinkProps & Props>(), {
    index: 0
});

const DELAY_MULTIPLIER = 50;

const directionPolarizer = ref(1);

const delayValue = computed(() => {
    return `${props.index * directionPolarizer.value * DELAY_MULTIPLIER}ms`
});

</script>

<template>
    <TransitionChild :style="`transition-delay: ${delayValue}`" enter-from="-mr-8 opacity-0" enter-to="mr-0 opacity-100"
        leave-from="mr-0 opacity-100" leave-to="-mr-8 opacity-0"
        class="flex origin-right transition-all ease-out duration-200 [&>a]:ml-auto [&>a]:mr-0 [&>a]:bg-black [&>a]:px-5 [&>a]:py-1 [&>a]:rounded [&>a]:ring-white [&>a]:ring-0 [&>a]:transition [&>a]:text-white"
        @before-enter="directionPolarizer = 1" @before-leave="directionPolarizer = -1">
        <NuxtLink :to="to">
            <slot />
        </NuxtLink>
    </TransitionChild>
</template>