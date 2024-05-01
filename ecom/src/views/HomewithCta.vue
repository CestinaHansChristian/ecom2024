<script setup>
    import BuyNow from '@/icons/BuyNow.vue';
</script>
<template>
    <div class="m-5">
        <div class="rounded-lg grid md:grid-cols-2">
            <div class="grid md:grid-rows-1 m-3">
                <div class="border-2 border-green-300 rounded-lg">
                    <div class="cta-bg-img relative object-cover flex w-full justify-center p-5 md:w-full">
                        <div class="flex place-content-center relative grid-cols-2 shadow-xl">
                            <BuyNow />    
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-rows-2 justify-stretch my-3 gap-y-2 mx-3">
                <div class=" about-container border-2 border-black rounded-bl-lg">
                    <div class="wrapper grid grid-cols-2 gap-x-1">
                        <div class="mission border-2 border-black">
                            <h1>Misson</h1>
                            <div class="content lg:text-3xl">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, dignissimos. At earum maiores, iste reprehenderit iusto quidem dolor quisquam voluptate!
                                </p>
                            </div>
                        </div>
                        <div class="vission border-2 border-black">
                            <h1>Vission</h1>
                            <div class="content lg:text-3xl">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, dignissimos. At earum maiores, iste reprehenderit iusto quidem dolor quisquam voluptate!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-container shadow-lg shadow-neutral-500 rounded-br-lg flex grid-cols-2 rounded-t-xl md:grid hover:-translate-y-2 delay-100 duration-500">
                    <div class="map-header col-span-2 bg-gradient-to-b from-slate-500 to-green-300 grid place-content-center rounded-t-xl">
                        <h1 class="font-semibold location-heading text-lime-800  hover:text-blue-500 delay-100 duration-300">WE ARE LOCATED AT!</h1>
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
    height: 100vh;
}

.location-heading {
    font-family: 'lumanisomo';
    font-size: 40px;
}
</style>