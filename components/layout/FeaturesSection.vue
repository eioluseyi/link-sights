<script setup lang="ts">
import { CheckBadgeIcon } from "@heroicons/vue/24/outline";
</script>

<template>
    <div id="features" class="text-center mt-40 scroll-m-56">
        <div class="font-thin font-title-set">What we offer</div>
        <div
            class="mx-auto px-6 max-w-screen-lg flex flex-wrap mt-10 gap-10 justify-center [&>div]md:w-1/3 [&>div]:flex [&>div]:mb-4] [&>div]:gap-2 [&>div]:items-center [&>div]:font-bold">
            <div>
                <CheckBadgeIcon class="text-primary h-6" /> Link tracking
            </div>
            <div>
                <CheckBadgeIcon class="text-primary h-6" /> User insights
            </div>
            <div>
                <CheckBadgeIcon class="text-primary h-6" /> Data integration
            </div>
        </div>
    </div>
</template>