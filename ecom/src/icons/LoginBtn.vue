<template>
    <div>
        <router-link  :to="{name:'login'}"><button class="btn-header bg-slate-500 hover:translate-y-1 duration-200">Login</button></router-link>
        <!-- <button  type="button">Login</button> -->
    </div>
</template>
<style>
    .btn-header {
        border: 2px solid;
        padding: 5px 20px;
        font-size: 20px;
        font-weight: 600;
        font-family: 'lumanisomo';
        border-radius: 16px;
    }
</style>