<template>
    <div class="container">
        <h2 class="py-4">Search a Product</h2>
        <form>
            <div class="mb-3">
                <label for="productTitle" class="form-label">ID</label>
                <input type="number" class="form-control" id="productid" placeholder="Enter product ID" v-model="id"
                    required>
            </div>
            <button type="submit" class="btn btn-primary" @click="searchProduct">Search Product</button>
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
    searchProduct(e) 
    {
        e.preventDefault();
        fetch(`https://dummyjson.com/products/${this.id}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to search product');
            }
            return res.json();
        })
        .then(data => {
            console.log('Product searched successfully:', data);
            // Resetting form fields after successful searching
            this.id = '';
            alert('Product searched successfully. Check the console.');
        })
        .catch(error => {
            console.error('Error searching product:', error);
        });
    }
}

}
</script>

<style></style>

  