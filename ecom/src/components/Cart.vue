<script setup>
    let count = 0
</script>
<template>
    <div class="loop-container grid grid-row-3 relative">
        {{ display_order.prod_price }}
        <div class="grid grid-rows-2 py-2 pb-10">
            <div v-for="(product_cart_item, index) in display_order" :key="product_cart_item.index" class=" flex relative items mx-2 py-4 justify-between shadow-sm shadow-neutral-600 p-1 rounded-md">
                <div class="product-image mx-1">
                    <img :src='product_cart_item.prod_img' alt="" class="h-14 w-24">
                </div>
                <!-- {{ product_cart_item[index] }} -->
                <div class="item-name grid place-content-center font-semibold">
                    <p class="item-name text-center">
                        {{ product_cart_item.prod_name }}
                    </p>
                </div>
                <div class="item-controller grid grid-cols-2 place-content-center gap-x-1 me-2">
                </div>
            </div>
        </div>
        <div class="sticky grid bottom-0  align-bottom">
            <div class="controller-wrapper grid-flow-col controller bottom-0 absolute w-full">
                <div class=" bg-slate-400 place-items-stretch grid rounded-md">
                    <div class="grid grid-cols-2 justify-between space-x-3 m-0.5">
                        <div class="total-wrapper py-1 ps-1">
                            <textarea disabled class="text-area bg-white h-6 w-36 placeholder:ps-1 rounded-md" placeholder="Price"></textarea>
                        </div>
                        <div class="checkout-wrapper">
                            <button class="bg-green-500 p-0.5 w-full rounded-lg font-semibold border-2 border-green-700 hover:bg-sky-400 duration-300 delay-150">CheckOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="flex sticky bottom-0 h-14 justify-between bg-zinc-200 mx-2 p-1 rounded-b-lg">
            <p>
                Total: 
            </p>
            <span class="total-contain flex p-1 rounded-lg bg-neutral-300 font-semibold">
                
                
            </span>
            <button type="button" class="bg-green-500 p-1 rounded-lg font-semibold border-2 border-green-700 hover:bg-sky-400 duration-300 delay-150">CheckOut</button>
        </div> -->
    </div>
</template>

<script>
    export default {
        props: {
            display_order: Array
        },
        data() {
            return {
                final_price: [],
            }
        },
        methods: {
            total_order_prices(total_price) {
                
                if(this.final_price.push(total_price),()=> {
                    console.log(this.final_price);
                })
                
                // let lastIndex = this.final_price.length - 1

                console.log(this.final_price[lastIndex],index, lastIndex);
                
                // items_price += this.final_price[index]
                // console.log(items_price,index);
                // items_price += parseInt(this.final_price[index])
                // console.log(items_price,index);
                // sum += this.final_price[index]
                // console.log(this.final_price[index]);
                // console.log('first',sum,index);
                index++
            }
            
        },
        computed: {
            grand_total() {
                return this.display_order
            }
        },
    }
</script>

<style>
.text-area {
    resize: none
}
</style>