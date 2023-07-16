<script setup lang="ts">
const testimonialActive = ref(2);
</script>

<template>
    <div id="testimonials" class="mt-10 md:mt-48 w-full px-8 scroll-m-56">
        <div class="max-w-screen-xl mx-auto container relative z-0 flex flex-col md:flex-row overflow-hidde">
            <div class="relative mx-auto pt-24 md:py-24 max-md:max-w-sm md:w-1/2 flex flex-col item-center justify-center">

                <div class="absolute top-0 left-0 z-10 grid-dot-bg text-primary max-md:hidden w-40 h-40 ml-20 mt-24">
                </div>

                <div class="font-title-set md:hidden text-center py-2 px-6">
                    What Our Customers<br />
                    Are Saying!
                </div>

                <div
                    class="relative max-md:hidden font-title-set py-2 px-6 md:py-6 max-md:text-center md:px-1 md:w-80 md:mx-auto font-thin leading-tight tracking-tight mb-0 z-20">
                    <span class="block">What Our</span>
                    <span class="block">Customers</span>
                    <span class="block">Are Saying!</span>
                </div>

                <div class="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
                    <button
                        class="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-primary font-bold w-12 h-10"
                        @click="testimonialActive = testimonialActive === 1 ? 3 : testimonialActive - 1">
                        &#8592;
                    </button><button
                        class="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-primary font-bold w-12 h-10"
                        @click="testimonialActive = testimonialActive >= 3 ? 1 : testimonialActive + 1">
                        &#8594;
                    </button>
                </div>
            </div>

            <div class="max-md:max-w-md mx-auto md:border-l md:w-1/2">
                <div class="flex flex-col h-full relative">

                    <div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="text-slate-200 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24">
                            <path
                                d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                        </svg>
                    </div>

                    <div class="h-full relative text-center z-10">
                        <div v-if="testimonialActive === 1">
                            <p class="text-slate-500 font-thin px-6 py-6 md:px-16 md:py-10 text-lg md:text-xl !leading-relaxed tracking-wide"
                                v-if="testimonialActive == 1">
                                LinkSights has helped me show my clients how much traffic their links are generating from my
                                website. This has helped me close more deals.
                            </p>
                        </div>

                        <div v-else-if="testimonialActive === 2">
                            <p class="text-slate-500 font-thin px-6 py-6 md:px-16 md:py-10 text-lg md:text-xl !leading-relaxed tracking-wide"
                                v-if="testimonialActive == 2">
                                LinkSights is the easiest way to track external link clicks. The data is easy to understand
                                and use, and the export function is a lifesaver.
                            </p>
                        </div>

                        <div v-else-if="testimonialActive === 3">
                            <p class="text-slate-500 font-thin px-6 py-6 md:px-16 md:py-10 text-lg md:text-xl !leading-relaxed tracking-wide"
                                v-if="testimonialActive == 3">
                                LinkSights has helped us identify which links are driving the most traffic to our website
                                and we've been able to optimize our marketing campaigns accordingly.
                            </p>
                        </div>
                    </div>

                    <div class="flex my-4 justify-center items-center">
                        <button @click.prevent="testimonialActive = 1"
                            class="text-center grid place-items-center font-bold shadow-xs focus:outline-none focus:shadow-outline rounded-full mx-2"
                            :class="{ 'h-12 w-12 opacity-25 bg-slate-300 text-slate-500': testimonialActive != 1, 'h-16 w-16 opacity-100 bg-primary text-white': testimonialActive == 1 }">JD</button>
                        <button @click.prevent="testimonialActive = 2"
                            class="text-center grid place-items-center font-bold shadow-xs focus:outline-none focus:shadow-outline bg-primary rounded-full mx-2"
                            :class="{ 'h-12 w-12 opacity-25 bg-slate-300 text-slate-500': testimonialActive != 2, 'h-16 w-16 opacity-100 bg-primary text-white': testimonialActive == 2 }">WD</button>
                        <button @click.prevent="testimonialActive = 3"
                            class="text-center grid place-items-center font-bold shadow-xs focus:outline-none focus:shadow-outline bg-primary rounded-full mx-2"
                            :class="{ 'h-12 w-12 opacity-25 bg-slate-300 text-slate-500': testimonialActive != 3, 'h-16 w-16 opacity-100 bg-primary text-white': testimonialActive == 3 }">JW</button>
                    </div>

                    <div class="flex justify-center px-6 pt-2 pb-6 md:py-6">
                        <div class="text-center" v-if="testimonialActive == 1">
                            <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">John Doe</h2>
                            <small class="text-gray-500 text-xs md:text-sm truncate">CEO, ABC Inc.</small>
                        </div>

                        <div class="text-center" v-if="testimonialActive == 2">
                            <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">Winter Doe</h2>
                            <small class="text-gray-500 text-xs md:text-sm truncate">CTO, XYZ Corp.</small>
                        </div>

                        <div class="text-center" v-if="testimonialActive == 3">
                            <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">John Wick</h2>
                            <small class="text-gray-500 text-xs md:text-sm truncate">Product Manager, Fake Corp.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-dot-bg {
    background-image: radial-gradient(currentColor 2px, transparent 2px);
    background-size: 16px 16px;
}
</style>