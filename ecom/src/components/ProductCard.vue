<template>
    <div>
        
        <div class="product-card-container">
            
            <div class="grid grid-cols-3">
                <div class="scrollbar" v-for="(prod_card_details, index) in productDetails" :key="prod_card_details.index" >
                    <div class="card-container m-2 flex grid-cols-2 rounded-md shadow-md shadow-amber-600 duration-300 delay-200">
                        <div class="grid grid-row-2 ">
                            <!-- {{ prod_card_details.collectionId + '/'+ prod_card_details.id + '/' + prod_card_details.product_img }} -->
                            <div class="card-image bg-slate-200 rounded-t-lg">
                                <img :src="fileUrl +prod_card_details.collectionId + '/'+ prod_card_details.id + '/' + prod_card_details.product_img" alt="" class="h-52 w-80 rounded-t-lg img-prod-prev">
                            </div>
                            <div class="controller bg-gradient-to-t from-slate-500 to-green-200 grid grid-row-5 rounded-b-lg">
                                <div class="product-heading p-3">
                                    <h1 class="font-semibold">
                                        Item name:
                                    </h1>
                                    <p class="font-medium">
                                        <span class="font-thin">{{  prod_card_details.product_name }}</span>
                                    </p>
                                </div>
                                <div class="card-description px-3">
                                    <h3 class="font-semibold">
                                        Description:
                                    </h3>
                                    <p class="font-semibold">
                                        <span class="font-thin"> {{ prod_card_details.product_desc }}</span>
                                    </p>
                                </div>
                                <div class="product-price p-3" >
                                    <p class="price-container">
                                        Price:
                                    </p>
                                    ₱ <span>{{ prod_card_details.product_price }}</span>
                                </div>
                                <div class="product-price p-3" >
                                    <p class="text-green-800 font-bold" v-if="prod_card_details.product_stocks >= 10">
                                        On stock
                                    </p>
                                    <p class="text-red-900 font-bold" v-else-if="prod_card_details.product_stocks < 10 && prod_card_details.product_stocks >= 1">
                                        Almost sold out
                                    </p>
                                    <p class="text-red-900 font-bold" v-else>
                                        Out of stock
                                    </p>
                                    <h1>
                                        <!-- {{ prodStocksLeft == 0 ? prod_card_details.product_stocks: prodStocksLeft}} -->
                                        {{ prod_card_details.product_stocks }}
                                    </h1>
                                </div>
                                <div class="card-controller p-3">
                                    <div class="buttons-function">
                                        <div class="add-to-cart">
                                            <button v-show="prod_card_details.product_stocks > 0" @click="addToCart(index,parseInt(prod_card_details.product_price))" class="bg-black text-white p-2 rounded-md hover:-translate-y-1 duration-200">Add to Cart</button>
                                            <button v-show="prod_card_details.product_stocks <= 0" @click="addToCart(index,parseInt(prod_card_details.product_price))" class="bg-gray-400 text-white p-2 rounded-md" disabled>Add to Cart</button>
                                        </div>
                                    </div>
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
let grandTotal = 0
let count = 1
    export default {
        props: {
            productProp: Array,
            display_stock: Object
        },
        data() {
            return {
                // cow: 'http://127.0.0.1:8090/api/files/136m0uq5sta9cyo/pyb9xr0qbcoeejj/nyx_ixs3Kshd75.jpg',
                productGet: this.productProp,
                fileUrl: 'http://127.0.0.1:8090/api/files/',
                ordered_prod_card: [],
                prodStocksLeft: 0,
                productDetails: this.productProp
            }
        },
        methods: {
            addToCart(index,prod_prices) {

                this.productProp[index].product_stocks = this.productGet[index].product_stocks - 1
                parseInt(prod_prices)
                parseInt(count)
                grandTotal += prod_prices
                const ordered_product = {
                    'prod_img': this.fileUrl + this.productGet[index].collectionId + '/'+ this.productGet[index].id + '/' + this.productGet[index].product_img,
                    'prod_name': this.productGet[index].product_name,
                    // 'prod_price': this.productGet[index].prod,
                    'prod_grand_total': grandTotal,
                    'prod_stock': this.productGet[index].product_stocks 
                }

                // console.log('prodCard',prodCardPrice);
                // this.ordered_prod_card.push(ordered_product)
                this.$emit('product_order',ordered_product)
                this.prodStocksLeft = this.productProp[index].product_stocks;
                this.productProp[index].product_stocks = this.prodStocksLeft
                console.log('prod card',this.productDetails);
            },
        },
        computed: {

        },
    }
</script>

<style>
    .img-prod-prev {
        -webkit-user-drag: none
    }

    .item-heading {
        font-size: 35px
    }
</style>