<template>
    <div>
        <router-link :to="{name:'create'}"><button class="btn-header hover:translate-y-1 duration-200">Sign-Up</button></router-link>
    </div>
</template>

<script>
    export default {
        methods: {
            createAcc() {
                console.log("create");
            }
        },
    }
</script>