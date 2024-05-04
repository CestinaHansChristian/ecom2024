<script setup>
</script>
<template>
    <div class="loop-container grid grid-row-3 relative overflow-y-scroll h-60">
        <div class="grid grid-rows-2 py-2 pb-10">
            <div v-for="(product_cart_item, index) in order_desc" :key="product_cart_item.index" class=" flex relative items mx-2 py-4 justify-center shadow-sm shadow-neutral-600 p-1 rounded-md">
                <div class="product-image mx-1">
                    <img :src='product_cart_item.prod_img' alt="" class="h-14 w-24">
                </div>
                <div class="item-name grid place-content-center font-semibold">
                    <p class="item-name text-center">
                        {{ product_cart_item.prod_name }}
                    </p>
                </div>
            </div>
        </div>
        <div class="sticky grid bottom-0  align-bottom">
            <div class="controller-wrapper grid-flow-col controller bottom-0 absolute w-full">
                <div class=" bg-slate-400 place-items-stretch grid rounded-md" >
                    <div class="grid grid-cols-3 justify-between space-x-3">
                        <div class="total-wrapper py-1 ps-1"> 
                            
                            <div class="total-wrapper bg-white rounded-md ps-2 ">
                                Total: {{ !display_order.prod_grand_total ? 0 : display_order.prod_grand_total }}
                            </div>
                        </div>
                        <div class="checkout-wrapper">
                            <button class="bg-green-300 p-0.5 w-full rounded-lg font-semibold border-2 border-green-400 hover:bg-green-400 duration-300 delay-150">CheckOut</button>
                        </div>
                        <div class="clear-all">
                            <button @click.prevent="clearBasket" class="bg-red-300 p-0.5 w-full rounded-lg font-semibold border-2 border-red-400 hover:bg-red-400 duration-300 delay-150">Clear-all</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            display_order: Object,
            order_desc: Array
        },
        data() {
            return {
                
            }
        },
        methods: {
            clearBasket() {
                location.reload()
            }
        },
    }
</script>

<style scoped>
.text-area {
    resize: none
}


</style>