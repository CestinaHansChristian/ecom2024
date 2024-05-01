<script setup>
    import LoginBtn from '@/icons/LoginBtn.vue';
    import SignUpbtn from '@/icons/SignUpbtn.vue';
    import DailyFarmlogo from '@/icons/DailyFarmlogo.vue';
</script>
<template>
    <div>
        <header>
            <div class="header-container border-2 border-amber-7000 pt-2 bg-amber-700 mt-2 rounded-md mx-3">
                <div class="flex grid-col-2 justify-between ">
                    <div class="logo p-3 px-4">
                        <h1 class="title-header">
                            <DailyFarmlogo />
                        </h1>
                    </div>
                    <div class="option-btns flex flex-row-reverse gap-x-2 p-2 px-4 ">
                        <div class="sign-up-btn">
                            <SignUpbtn />
                         </div>
                         <div class="login-btn">
                            <LoginBtn />
                         </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped>
    .btn-header {
        border: 2px solid;
        padding: 5px 20px;
        font-size: 20px;
        font-weight: 600;
        font-family: 'lumanisomo';
        border-radius: 16px;
    }

    .title-header {
        font-family: 'lumanisomo';
        font-weight: bolder;
        font-size: 30px;
    }

    .title-header,.btn-header, .sign-up-btn, .login-btn {
        color: whitesmoke;
    }
</style>