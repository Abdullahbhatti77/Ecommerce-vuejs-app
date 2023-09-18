<template>
    <div class="container">
        <h2 class="py-4">Update a Product</h2>
        <form>
            <div class="mb-3">
                <label for="productId" class="form-label">ID</label>
                <input type="number" class="form-control" id="productid" placeholder="Enter product ID" v-model="id"
                    required>
            </div>
            <div class="mb-3">
                <label for="productTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="productTitle" placeholder="Enter product title" v-model="title"
                    required>
            </div>
            <button type="submit" class="btn btn-primary" @click="updateProduct">Update Product</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            title: '',
        };
    },
    methods: {
    updateProduct(e) 
    {
        e.preventDefault();
        fetch(`https://dummyjson.com/products/${this.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: this.title,
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to update product');
            }
            return res.json();
        })
        .then(data => {
            console.log('Product updated successfully:', data);
            // Resetting form fields after successful update
            this.id = '';
            this.title = '';
            alert('Product updated successfully. Check the console.');
        })
        .catch(error => {
            console.error('Error updating product:', error);
        });
    }
}

}
</script>

<style></style>

  