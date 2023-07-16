<script setup lang="ts">
import { SparklesIcon } from "@heroicons/vue/24/outline";
</script>

<template>
    <section class="h-screen">
        <!-- Jumbotron -->
        <div
            class="w-100 mt-0 mx-auto px-6 pt-[180px] sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
            <div class="text-center">
                <div class="block px-6 pt-12 md:pt-16 md:px-12">
                    <SparklesIcon class="h-28 mx-auto text-primary" />
                    <h1 class="mt-6 mb-16 font-thin tracking-tight font-title-set">
                        Get valuable Insights<br />
                        <span class="text-primar"> on <span class="text-primary">your
                                links</span>
                        </span>
                    </h1>
                    <FormButton level="primary" title="Get Started" href="/demo" />
                    <FormButton level="secondary" title="Learn more" href="/#about" />
                </div>
            </div>
        </div>
        <!-- Jumbotron -->
    </section>
</template>