<template>
    <div class="container">
        <h2 class="py-4">Add a Product</h2>
        <form>
            <div class="mb-3">
                <label for="productTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="productTitle" placeholder="Enter product title" v-model="title"
                    required>
            </div>
            <div class="mb-3">
                <label for="productDescription" class="form-label">Description</label>
                <textarea class="form-control" id="productDescription" rows="4" placeholder="Enter product description"
                    v-model="description" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click="addProduct">Add Product</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: '',
        };
    },
    methods: {
    addProduct(e) 
    {
        e.preventDefault();
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: this.title,
                description: this.description,
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to add product');
            }
            return res.json();
        })
        .then(data => {
            console.log('Product added successfully:', data);
            // Resetting form fields after successful add
            this.title = '';
            this.description = '';
            alert('Product added successfully. Check the console.');
        })
        .catch(error => {
            console.error('Error adding product:', error);
        });
    }
}

}
</script>

<style></style>

  