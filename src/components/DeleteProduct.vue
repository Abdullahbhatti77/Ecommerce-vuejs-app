<template>
    <div class="container">
        <h2 class="py-4">Delete a Product</h2>
        <form>
            <div class="mb-3">
                <label for="productId" class="form-label">Id</label>
                <input type="number" class="form-control" id="productId" placeholder="Enter product ID" v-model="id"
                    required>
            </div>
            <button type="submit" class="btn btn-primary" @click="deleteProduct">Delete Product</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
        };
    },
    methods: {
        deleteProduct(e) {
            e.preventDefault();

            fetch(`https://dummyjson.com/products/${this.id}`, {
                method: 'DELETE',
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to delete product');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log('Product deleted successfully:', data);
                    // Resetting form fields after successful deleting
                    this.id = '';
                    alert('Product deleted successfully. Check the console.');
                })
                .catch(error => {
                    console.error('Error deleting product:', error);
                });
        }
    }

}
</script>

<style></style>

  