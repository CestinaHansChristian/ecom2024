<script setup>
    import HeaderMain from '@/components/HeaderMain.vue';
</script>
<template>
    <HeaderMain :loginBtnDisable="false" :createBtnDisable='true'/>
    <div class="signup-wrapper flex sm:h-screen items-center justify-center">
        <div class="container-wrapper m-1 grid place-content-center p-2">
            <div class="card sm:flex sm:grid-cols-2 grid grid-rows-2 rounded-lg shadow-lg shadow-neutral-500">
                <div class="">
                    <div class="img-container ">
                        <img :src="cow" alt="" srcset="" class="cow-img rounded-t-xl shrink h-72 sm:max-h-max w-full object-cover sm:rounded-tr-none sm:rounded-s-lg sm:h-72 sm:w-72">
                    </div>
                </div>
                <div class="bg-lime-500 h-auto rounded-b-md sm:rounded-br-lg sm:rounded-tr-lg sm:rounded-bl-none delay-500 duration-200 transition ease-in-out sm:bg-lime-600">
                    <div class="form-container flex justify-center m-2 px-2 pt-10">
                        <form action="" @submit.prevent="loginUserCred">
                            <div class="form-wrapper space-y-3 px-4">
                                <div class="form-field space-y-3 grid justify-items-center text-wrap">
                                    <div class="form-title">
                                        <h1 class="font-semibold text-center">
                                            Login
                                        </h1>
                                        <h1 v-if="isValid" class="text-white font-bold">Password is Strong.</h1>
                                        <h1 v-else class="text-red-800 font-mono">Password must be more than 5</h1>
                                    </div>
                                    <div class="username-field">
                                        <input v-model="usernamE" type="text" placeholder="USERNAME" class="input-field w-full placeholder:ps-2">
                                    </div>
                                    <div class="password-field">
                                        <input v-model="passworD" type="password" placeholder="PASSWORD" class="input-field w-full placeholder:ps-2">
                                    </div>
                                </div>
                                <div class="form-container">
                                    <div class="grid grid-cols-1 place-content-center mx-7">
                                        <!-- <button class="bg-neutral-300 btn-font w-full  rounded-lg font-semibold hover:bg-slate-400 hover:-translate-y-px delay-150 duration-200">Login</button> -->
                                        <router-link :to="{name: 'products'}">Login</router-link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                cow: '../../public/cowCTAbg.jpg',
                usernamE: '',
                passworD: '',
                emaiL: '',
                isValid: false
            }
        },
        methods: {
            loginUserCred() {
                console.log("hello");
            }
        },
        computed: {
            
        },
    }
</script>

<style scoped>
.font-semibold {
    font-weight: bold;
    font-size: 25px;
}

img {
    cursor: not-allowed;
}

.input-field {
    border-radius: 6px;
}
</style>