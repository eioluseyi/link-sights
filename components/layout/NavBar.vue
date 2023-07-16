<script setup lang="ts">
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { TransitionRoot } from '@headlessui/vue'

const isNavOpen = ref<boolean>(false);
const linkArray = [{
    href: "/",
    title: "Home"
}, {
    href: "/#about",
    title: "About"
}, {
    href: "/#features",
    title: "Features"
}, {
    href: "/#testimonials",
    title: "Testimonials"
}, {
    href: "/#contact",
    title: "Contact"
}];

const wrapper = ref<HTMLDivElement | null>(null);

const handleClickOutside = (event: Event) => {
    if (!wrapper.value || !wrapper.value.contains(event.target as Node)) {
        isNavOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
    <!-- Navbar -->
    <nav class="sticky top-0 z-20 w-full">
        <div class="flex justify-between items-center max-w-screen-2xl px-8 py-3 mx-auto backdrop-blur-lg">
            <div class="font-bold tracking-[7px] text-xs uppercase">
                <NuxtLink to="/">
                    <span>link</span>
                    <span class="text-primary">Sights</span>
                </NuxtLink>
            </div>
            <div
                class="flex justify-between gap-8 max-md:hidden [&>a]:transition [&>a]:text-slate-600 [&>a:hover]:text-primary">
                <NuxtLink v-for="itm in linkArray" :to="itm.href">{{ itm.title }}</NuxtLink>
            </div>
            <div ref="wrapper" class="md:hidden transition text-slate-600">
                <button class="relative transition [-webkit-tap-highlight-color:transparent]"
                    @click="isNavOpen = !isNavOpen">
                    <Bars3BottomRightIcon v-if="!isNavOpen" class="h-7" />
                    <XMarkIcon v-if="isNavOpen" class="h-7" />
                </button>
                <TransitionRoot :show="isNavOpen" class="absolute top-16 mt-2 right-8 grid gap-4 text-xs uppercase">
                    <LayoutMobileNavLink v-for="(itm, idx) in linkArray" :to="itm.href" :index="idx"
                        @click="isNavOpen = false">
                        {{ itm.title }}
                    </LayoutMobileNavLink>
                </TransitionRoot>
                <!-- </div> -->
            </div>
        </div>
    </nav>
    <!-- Navbar -->
</template>