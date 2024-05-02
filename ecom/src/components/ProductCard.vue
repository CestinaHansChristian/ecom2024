<template>
    <div>
        <div class="product-card-container">
            <div class="grid grid-cols-3">
                <div class="scrollbar" v-for="(prod_card_details, index) in productGet" :key="prod_card_details.index" >
                    <div class="card-container m-2 flex grid-cols-2 rounded-md">
                        <div class="grid grid-row-2 ">
                            Item {{ index}}
                            <div class="card-image">
                                <img :src="cow" alt="" class="h-52 w-full rounded-t-lg">
                            </div>
                            <div class="controller bg-slate-400 grid grid-row-4 rounded-b-lg">
                                <div class="product-heading p-3">
                                    <h1 class="font-semibold">
                                        Item name:
                                    </h1>
                                    <p class="font-medium">
                                        <span class="font-thin">{{  prod_card_details.prod_name }}</span>
                                    </p>
                                </div>
                                <div class="card-description px-3">
                                    <h3 class="font-semibold">
                                        Description:
                                    </h3>
                                    <p class="font-medium">
                                        <span class="font-thin"> {{ prod_card_details.prod_desc }}</span>
                                    </p>
                                </div>
                                <div class="product-price p-3" >
                                    <p class="price-container">
                                        Price:
                                    </p>
                                    <span>{{ prod_card_details.prod_price }}</span>
                                </div>
                                <div class="card-controller p-3">
                                    <div class="buttons f">
                                        <div class="add-to-car">
                                            <button @click="addToCart(prod_card_details.id)" class="bg-black text-white p-2 rounded-md hover:-translate-y-1 duration-200">Add to Cart</button>
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
    export default {
        props: {
            productProp: {
                    id: Number,
                    prod_name: String,
                    prod_desc: String,
                    prod_price: Number
                }
            
        }
        // props: {
        //     productProp: Object
        // }
        ,
        data() {
            return {
                cow: '../../public/cowCTAbg.jpg',
                productGet: this.productProp,
            }
        },
        methods: {
            addToCart(id) {
                console.log(id);
            }
        },
    }
</script>