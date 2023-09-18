<template>
    <div class="container">
        <h2 class="py-4">Products for {{ category }}</h2>
        <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.id">
                <div class="card mb-3 h-75">
                    <img :src="product.thumbnail" class="card-img-top h-50" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text">{{ product.description }}</p>
                        <p class="card-text">Price: ${{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
async function fetchProducts(category) {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        return data.products; // Return the fetched products
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export default {
    data() {
        return {
            products: [],  // For storing all products of selected category
        };
    },
    created() {
        const category = this.$route.params.category; // Getting the category from the route
        this.loadProducts(category); // Fetching products based on the category
    },

    methods: {
        async loadProducts(category) {
            try {
                this.products = await fetchProducts(category);
            } catch (error) {
                console.error('Error loading products:', error);
            }
        },
    },

    computed: {
        category() {
            return this.$route.params.category;
        },
    },
};
</script>
  