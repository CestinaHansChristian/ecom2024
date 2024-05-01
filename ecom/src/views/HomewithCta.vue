<script setup>
    import BuyNow from '@/icons/BuyNow.vue';
    import HeaderMain from '@/components/HeaderMain.vue';
</script>
<template>
    <HeaderMain :loginBtnDisable="true" :createBtnDisable="true"/>
    <div class="m-5">
        <div class="rounded-lg grid md:grid-cols-2 border-2 border-black">
            <div class="grid md:grid-rows-1 m-3">
                <div class=" border-green-300 rounded-lg">
                    <div class="cta-bg-img object-cover flex w-full justify-center md:w-full h-svh md:h-dvh">
                        <div class="flex place-content-center relative grid-cols-2 shadow-xl">
                            <BuyNow />    
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-rows-2 my-3 gap-y-2 mx-3">
                <div class="flex grid-row-2 justify-stretch about-container rounded-bl-lg border-2 border-black">
                    <div class="flex wrapper-mission-vision grid-cols-2 gap-x-1 m-2 h-auto">
                        <div class="mission shadow-lg shadow-neutral-400 bg-white m-2 rounded-md hover:-translate-y-2 delay-150 duration-500 hover:bg-lime-200">
                            <div class="content p-2 grid gap-y-2">
                                <div class="heading-wrapper flex justify-center">
                                    <h1 class="font-semibold text-lg">Misson</h1>
                                </div>
                                <div class="content lg:text-xl">
                                    <p>
                                        Our mission is to commit to organic farming practices that ensure our products are not not only good for you, but also good for the environment. So come, join us as we create a healthier world with one organic product at a time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class=" vission shadow-lg shadow-neutral-400 bg-white m-2 rounded-md hover:-translate-y-2 delay-150 duration-500 hover:bg-lime-200">
                            <div class="content p-2 grid gap-y-2">
                                <div class="heading-wrapper flex justify-center">
                                    <h1 class="font-semibold text-lg">Vission</h1>
                                </div>
                                <div class="content lg:text-xl">
                                    <p>
                                        Our vision is for the daily farm to reach new heights in expanding the coverage of new customers through more accessible means in selecting and purchasing local dairy produce, allowing us to extend our reach in providing fresh and nutritious dairy goods. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-container shadow-lg shadow-neutral-500 rounded-br-lg flex rounded-bl-xl gap-x-1 grid-cols-2 rounded-t-xl md:grid hover:-translate-y-2 delay-100 duration-500">
                    <div class="map-header col-span-3 md:rounded-tr-xl pe-1 rounded-tr-none rounded-bl-xl md:rounded-bl-none bg-gradient-to-b from-slate-500 to-green-300 grid place-content-center rounded-t-xl">
                        <h1 class="font-semibold location-heading text-lime-800 hover:text-blue-500 delay-100 duration-300">WE ARE LOCATED AT!</h1>
                    </div>
                    <div class="map-contaier w-full shadow-lg shadow-neutral-500 col-span-3 rounded-b-lg">
                        <iframe src="https://www.google.com/maps/embed/v1/place?q=Malilipot,+Albay,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" class="aspect-auto w-full h-full roundeblg" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cta-bg-img {
    background-image: url('../../public/cowCTAbg.jpg');
    background-size: cover;
    background-repeat: round;
    border-radius: 10px;
}

.location-heading {
    font-family: 'lumanisomo';
    font-size: 35px;
}

.wrapper-mission-vision {
    user-select: none;
}

.mission, .vission {
    letter-spacing: 2px;
    line-height: 200%;
}
</style>