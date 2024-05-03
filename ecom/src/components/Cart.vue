<script setup>
    let count = 0
</script>
<template>
    <div class="loop-container grid">
        {{ display_order.prod_price }}
        <div class="grid py-1 my-1">
            <div v-for="(product_cart_item, index) in display_order" :key="product_cart_item.index" class=" flex relative items mx-2  justify-between shadow-sm shadow-neutral-600 p-1 rounded-md">
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
                    <!-- <button class="bg-neutral-400 p-2 rounded-lg hover:bg-zinc-500">+</button>
                    <button class="bg-neutral-400 p-2 rounded-lg hover:bg-zinc-500">-</button> -->
                </div>
            </div>
            <div class="flex sticky bottom-0 h-14 justify-between bg-zinc-200 mx-2 p-1 rounded-b-lg">
                <p>
                    Total: 
                </p>
                <span class="total-contain flex p-1 rounded-lg bg-neutral-300 font-semibold">
                    <p class="grid">
                        <p>
                            
                        </p>
                        <!-- {{ item.prod_price ? total_order_prices(display_order.prod_price,item.index) : 'No order/s' }} -->
                        <!-- {{ item.prod_price }} -->
                        
                    </p>
                    
                </span>
                <button type="button" class="bg-green-500 p-1 rounded-lg font-semibold border-2 border-green-700 hover:bg-sky-400 duration-300 delay-150">CheckOut</button>
            </div>
        </div>
        
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

