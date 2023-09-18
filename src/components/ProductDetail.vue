<template>
    <div>
      <h2>{{ selectedProduct.title }}</h2>
      <div class="row">
        <div class="col-md-4">
          <img :src="selectedProduct.thumbnail" class="img-fluid" alt="Product Image">
        </div>
        <div class="col-md-8">
          <p>{{ selectedProduct.description }}</p>
          <p>Price: ${{ selectedProduct.price }}</p>
        </div>
      </div>
      <button @click="goBack" class="btn btn-primary">Back to Products</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object, // Product details passed as a prop
    },
    computed: {
      selectedProduct() {
        return this.product || {}; // Default to an empty object
      },
    },
    methods: {
      goBack() {
        this.$router.push('/products'); // Navigate back to the products page
      },
    },
  };
  </script>
  