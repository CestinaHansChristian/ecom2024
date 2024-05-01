<script setup>
    import Header from '@/components/Header.vue';
</script>
<template>
    <div class="">
        <Header />
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

    .ctaBtn {
        font-family: 'Trebuchet MS';
        color: rgb(215, 210, 210);
    }
</style>