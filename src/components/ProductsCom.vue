<template>
  <div>
    <h2 class="py-4">Products</h2>
    <div class="row">
      <div v-for="item in paginatedItems" :key="item.id" class="col-md-4">
        <div class="card mb-3 h-100">
          <img :src="item.thumbnail" class="card-img-top h-50" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text">Price: ${{ item.price }}</p>
            <button type="button" class="btn btn-success" @click="showProductDetail(item.id)">View</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination controls -->
    <nav aria-label="Page navigation" class="mt-5">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click="prevPage">Previous</a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click="gotoPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click="nextPage">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],       // All products
      currentPage: 1, // Current page number
      itemsPerPage: 6, // Number of items per page
    };
  },
  computed: {
    // Calculating the total number of pages
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    // Calculating the array of items for the current page
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
  },
  methods: {
    // Go to the previous page
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    // Go to the next page
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    // Go to a specific page
    gotoPage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => (this.items = data.products));
  },
  showProductDetail(productId) {
    this.$router.push({ component: 'ProductDetail', params: { id: productId } });
  },
};
</script>

<style scoped>
#flex {
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  justify-content: center;
}
</style>
