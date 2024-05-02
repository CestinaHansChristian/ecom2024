<script setup>
    import HeaderMain from '@/components/HeaderMain.vue';
</script>
<template>
    <HeaderMain :createBtnDisable='false' :loginBtnDisable='true'/>
    <div class="signup-wrapper flex sm:h-screen items-center justify-center">
        <div class="container-wrapper m-1 grid place-content-center p-2">
            <div class="card sm:flex sm:grid-cols-2 grid grid-col-2 rounded-lg shadow-lg shadow-neutral-500">
                <div class="">
                    <div class="img-container ">
                        <img :src="cow" alt="" srcset="" class="cow-img rounded-t-xl shrink h-80 sm:max-h-max w-full object-cover sm:rounded-tr-none sm:rounded-s-lg sm:h-72 sm:w-72">
                    </div>
                </div>
                <div class="bg-lime-500 h-auto rounded-b-md sm:rounded-br-lg sm:rounded-tr-lg sm:rounded-bl-none delay-500 duration-200 transition ease-in-out sm:bg-lime-600">
                    <div class="form-container flex justify-center m-2 px-2 py-5">
                        <form action="" @submit.prevent="display">
                            <div class="form-wrapper space-y-3 px-4">
                                <div class="form-field space-y-3 grid justify-items-center text-wrap">
                                    <div class="form-title">
                                        <h1 class="font-semibold text-center">
                                            Create Account
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
                                    <div class="email-field">
                                        <input v-model="emaiL" type="email" placeholder="EMAIL" class="input-field w-full placeholder:ps-2">
                                    </div>
                                    <div class="address-field">
                                        <input type="text" name="" id="" placeholder="Address" class="input-field placeholder:ps-2">
                                    </div>
                                </div>
                                <div class="form-container">
                                    <CreateBtn />
                                    <!-- <button class="bg-sky-200 w-full rounded-lg font-semibold hover:bg-slate- h">Create</button> -->
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
import CreateBtn from '@/icons/CreateBtn.vue'
    export default {
        components: {
            CreateBtn
        },
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
            display() {
                const userPayload = {
                    'username': this.usernamE,
                    'pasword': this.passworD,
                    'email': this.emaiL
                }
                console.log(userPayload);
            }
        },
        watch: {
            passworD(string) {
                this.isValid = string.length > 5 ? true: false 
            }
        }
    }
</script>

<style scoped>
.font-semibold {
  font-family: "lumanisomo";
}

img {
    cursor: not-allowed;
}

.input-field {
    border-radius: 6px;
}
</style>
