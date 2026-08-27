<script setup>
    const products = ['Tide', 'Ariel', 'Breeze']
</script>

<template>
    <div>
        <h4>Products:</h4>
        <p v-for="product in products" :key="product">{{ product }}</p>
    </div>
</template>