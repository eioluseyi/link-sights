<script setup lang="ts">
import { PresentationChartLineIcon, BanknotesIcon, UsersIcon } from "@heroicons/vue/24/outline";
</script>

<template>
    <div id="about"
        class="flex flex-wrap gap-10 justify-center scroll-m-56 [&>div]:max-w-xs [&>div]:min-w-[20rem] [&>div]:flex-1 [&>div]:mb-4]">
        <LayoutCard title="Count" details="LinkSights shows you how many people are clicking on your page links.">
            <template #icon>
                <UsersIcon class="h-16" />
            </template>
        </LayoutCard>
        <LayoutCard title="Caption"
            details="LinkSights can help you identify which link captions are driving the most traffic on your website.">
            <template #icon>
                <PresentationChartLineIcon class="h-16" />
            </template>
        </LayoutCard>
        <LayoutCard title="Track"
            details="LinkSight helps you identify high-quality outbound links, so you can better manage 'pay per click' revenue stream.">
            <template #icon>
                <BanknotesIcon class="h-16" />
            </template>
        </LayoutCard>
    </div>
</template>
