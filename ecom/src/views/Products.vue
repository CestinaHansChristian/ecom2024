<script setup>
    import ProductCard from '@/components/ProductCard.vue';
    import Cart from '@/components/Cart.vue';
    import HeaderMain from '@/components/HeaderMain.vue';
    import Transaction from './Transaction.vue';
</script>
<template>
    <HeaderMain :LogoutBtnDisable="true"/>
    <div class="h-screen">
        <div class="wrapper">
            <div class="product-container">
                <div class="grid-col 1">
                    <div class="content-wrapper grid grid-cols-4 m-2">
                        <div class="product-container-wrapper col-span-3">
                            <div class="product-card-container overflow-auto rounded-lg ms-1">
                                <div class="heading-container sticky top-0">
                                    <h1 class="item-heading  text-center text-slate-100 font-semibold tracking-wider bg-amber-600 rounded-t-md shadow-sm shadow-amber-600">Product List</h1>
                                </div>
                                <div class="flex card-container shadow-md shadow-lime-700 rounded-b-lg m-2" >
                                    <ProductCard @product_order="pass_to_cart" :display_stock="order_price" :productProp="product_list" />
                                </div>
                            </div>
                        </div>
                        <div class="cart-list grid grid-row-1 gap-y-2 mx-1">
                            <div class="grid1">
                                <div class="grid cart-container">
                                    <div class="grid grid-rows-1 shopping-cart-list bg-slate-300 rounded-md">
                                        <h2 class="text-center font-style-format bg-slate-100 m-1">Your Cart</h2>
                                        <div class="shopping-list grid mx-2 h-60 space-y-2 m-2 shadow-md shadow-zinc-600 rounded-lg pt-1">
                                            <Cart :display_order="order_price" :order_desc="order_desc" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid h-72">
                                <Transaction />
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

    // console.log(product_list);

    export default {
        emits: ['product_order'],
        methods: {
            pass_to_cart(id) {
                this.order_price = id
                this.order_desc.push(id)
                // console.log('products',id);
            },
            // clear_all_basket(basketObject){
            //     this.order_desc.push(basketObject)
            // }
        },
        data() {
            return {
                order_price: [],
                order_desc: [],
            }
        },
    }
</script>

<style scoped>
    .font-style-format {
        font-family: 'lumanisomo'
    }

    .product-card-container {
        height: 580px
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        background-color: whitesmoke
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgb(168, 152, 152);
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #ec9696; 
      }
</style>