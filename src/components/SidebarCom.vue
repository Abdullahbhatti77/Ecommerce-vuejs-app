<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" @click="showProducts" :class="{ active: activeOption === 'Products' }">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="showCategories" :class="{ active: activeOption === 'Categories' }">
                Categories
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="addProduct" :class="{ active: activeOption === 'addProduct' }">
                Add Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="updateProduct" :class="{ active: activeOption === 'updateProduct' }">
                Update Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="searchProduct" :class="{ active: activeOption === 'searchProduct' }">
                Search Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="deleteProduct" :class="{ active: activeOption === 'deleteProduct' }">
                Delete Product
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Toggle button for mobile -->
      <button class="btn btn-dark d-md-none" id="sidebarToggle" @click="toggleSidebar">
        Toggle Sidebar
      </button>

      <!-- Content -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div v-if="activeOption === 'Products'">
          <ProductsCom />
        </div>
        <div v-else-if="activeOption === 'Categories'">
          <CategoriesCom />
        </div>
        <div v-else-if="activeOption === 'addProduct'">
          <AddProduct />
        </div>
        <div v-else-if="activeOption === 'updateProduct'">
          <UpdateProduct />
        </div>
        <div v-else-if="activeOption === 'searchProduct'">
          <SearchProduct />
        </div>
        <div v-else-if="activeOption === 'deleteProduct'">
          <DeleteProduct />
        </div>
        
      </main>
    </div>
  </div>
</template>
  
<script>
import ProductsCom from './ProductsCom.vue';
import CategoriesCom from './CategoriesCom.vue';
import AddProduct from './AddProduct.vue';
import UpdateProduct from './UpdateProduct.vue';
import DeleteProduct from './DeleteProduct.vue';
import SearchProduct from './SearchProduct.vue';
export default {
  components: {
    ProductsCom,
    CategoriesCom,
    AddProduct,
    UpdateProduct,
    SearchProduct,
    DeleteProduct,
  },
  data() {
    return {
      activeOption: 'Products', // Initially selected option
    };
  },
  methods: {
    showProducts() {
      this.activeOption = 'Products';
    },
    showCategories() {
      this.activeOption = 'Categories';
    },
    addProduct() {
      this.activeOption = 'addProduct';
    },
    updateProduct() {
      this.activeOption = 'updateProduct';
    },
    deleteProduct() {
      this.activeOption = 'deleteProduct';
    },
    searchProduct() {
      this.activeOption = 'searchProduct';
    },
    toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  },
  },
};
</script>
  
<style scoped>
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  z-index: 1000;
  padding-top: 20px;
}

#sidebar .nav-link {
  color: #333;
}

#sidebar .nav-link.active {
  background-color: #007bff;
  color: #fff;
}

a {
  cursor: pointer;
}
/* CSS for collapsed sidebar on mobile screens */
@media (max-width: 768px) {
  #sidebar.active {
    display: none;
  }
  #sidebar.active + .btn {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 999;
  }
}

</style>
  