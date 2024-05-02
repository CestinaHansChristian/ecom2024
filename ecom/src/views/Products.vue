<script setup>
    import ProductCard from '@/components/ProductCard.vue';
    import Cart from '@/components/Cart.vue';
    import HeaderMain from '@/components/HeaderMain.vue';
    
</script>
<template>
    <HeaderMain :LogoutBtnDisable="true"/>
    <div class="h-screen">
        <div class="wrapper">
            <div class="product-container">
                <div class="grid-col 1">
                    <div class="content-wrapper grid grid-cols-4 m-2">
                        <div class="product-container-wrapper col-span-3">
                            <div class="product-card-container overflow-auto rounded-lg">
                                <div class="flex card-container shadow-md shadow-lime-700 rounded-lg m-2" >
                                    <ProductCard :productProp="product_list" />
                                </div>
                            </div>
                        </div>
                        <div class="cart-list grid grid-row-2 gap-y-2 border-2 border-blue-700 mx-1">
                            <div class="grid1">
                                <div class="grid cart-container">
                                    <div class="grid shopping-cart-list bg-slate-300">
                                        <h2 class="text-center bg-slate-100 m-1">Cart Items</h2>
                                        <div class="shopping-list mx-2 overflow-y-scroll h-60 space-y-2 py-4 m-2 shadow-md shadow-zinc-600 rounded-t-lg">
                                            <Cart />
                                            <Cart />
                                            <Cart />
                                            <Cart />
                                        </div>
                                        <div class="flex sticky bottom-0 justify-between bg-zinc-500 mx-2 p-1 rounded-b-lg">
                                            <div class="total-price">
                                                <p class="total-contain p-1 rounded-lg bg-neutral-300 font-semibold">
                                                    Total: <input type="number" value="900" class="w-16 bg-slate-100 rounded-md" disabled >
                                                </p>
                                            </div>
                                            <div class="checkout-btn grid place-content-center me-2">
                                                <button type="button" class="bg-green-500 p-1 rounded-lg font-semibold border-2 border-green-700 hover:bg-sky-400 duration-300 delay-150">CheckOut</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid2 border-2 border-black h-72">
                                <div class="grid grid-rows-2 cart-container">
                                    Transaction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090');

    const product_list = await pb.collection('products').getFullList()
</script>

<style scoped>
    .product-card-container {
        height: 580px
    }
</style>