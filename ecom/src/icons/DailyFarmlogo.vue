<template>
    <router-link  :to="{name: 'home'}" ><button class="hover:translate-y-1 duration-200">Daily Farm</button></router-link>
</template>

<script>
    export default {
        methods: {
            home() {
                console.log("returned home");
            }
        },
    }
</script>