<script setup>
import { defineProps } from 'vue';

defineProps({
  name: String,
  Id: Number,
  email: String,
  course: String,
  yrlvl: String
})

</script>

<template>
    <h4>PROPS</h4>
    <p>Student Name: {{ name }}</p>
    <p>Student ID: {{ Id }}</p>
    <p>Course {{course}}</p>
    <p>Year Level: {{ yrlvl }}</p>
    <p>Email: {{ email }}</p>
    <!-- <App name="Precious Baliar" age="20" email="email@gmail.com"/> -->
     

</template>