<template>
  <div>
    <h2 class="py-4">Categories</h2>
    <div class="row">
      <div class="col-md-4" v-for="item in items" :key="item.id">
        <div class="card mb-3" @click="showProductsForCategory(item)">
          <div class="card-body">
            <h5 class="card-title">{{ item }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],       // For storing all categories
    };
  },
  methods: {
    showProductsForCategory(categoryName) {
      // Using Vue Router to navigate to the products page for the selected category
      this.$router.push({ name: 'ProductsOfCategory', params: { category: categoryName } });
    }
  },
  mounted() {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => (this.items = data));
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
