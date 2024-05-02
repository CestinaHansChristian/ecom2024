<template>
    <div>
        <div class="product-card-container">
            
            <div class="grid grid-cols-3">
                <div class="scrollbar" v-for="(prod_card_details, index) in productGet" :key="prod_card_details.index" >
                    <div class="card-container m-2 flex grid-cols-2 rounded-md">
                        <div class="grid grid-row-2 ">
                            Item {{ index }}
                            <!-- {{ prod_card_details.collectionId + '/'+ prod_card_details.id + '/' + prod_card_details.product_img }} -->
                            <div class="card-image">
                                <img :src="'http://127.0.0.1:8090/api/files/'+prod_card_details.collectionId + '/'+ prod_card_details.id + '/' + prod_card_details.product_img" alt="" class="h-52 w-full rounded-t-lg">
                            </div>
                            <div class="controller bg-slate-400 grid grid-row-4 rounded-b-lg">
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
                                    <p class="font-medium">
                                        <span class="font-thin"> {{ prod_card_details.product_desc }}</span>
                                    </p>
                                </div>
                                <div class="product-price p-3" >
                                    <p class="price-container">
                                        Price:
                                    </p>
                                    ₱ <span>{{ prod_card_details.product_price }}</span>
                                </div>
                                <div class="card-controller p-3">
                                    <div class="buttons f">
                                        <div class="add-to-car">
                                            <button @click="addToCart(prod_card_details.product_price)" class="bg-black text-white p-2 rounded-md hover:-translate-y-1 duration-200">Add to Cart</button>
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
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090');


    // const fileName = productGet.documents[0]
    // console.log(productProp);

// const url = pb.files.getUrl(productGet.product_img,fileName)

    export default {
        props: {
            productProp: Array
        },
        data() {
            return {
                cow: 'http://127.0.0.1:8090/api/files/136m0uq5sta9cyo/pyb9xr0qbcoeejj/nyx_ixs3Kshd75.jpg',
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