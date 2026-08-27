<script setup>
// import StudentForm from './components/StudentForm.vue';
// import {ref, defineProps} from 'vue'


// const info = ref({
  //   name: '',
  //   id: '',
  //   email: '',
  //   course: '',
  //   yrlvl: '',
  // })
  
  // function display(data){
  //     console.log(info.value = data)
  //   }

</script>



<template>

<!-- <StudentForm @student-submitted="display"/> -->
<!-- <hr></hr> -->

  <div>
    <nav>
    <RouterLink to="/">EcoM</RouterLink> |
    <RouterLink to="/product">Product</RouterLink> |
    <RouterLink to="/basketPage">BasketPage</RouterLink> |
    <RouterLink to="/orders">Orders</RouterLink>


    <!-- <RouterLink :to="{name: 'Home'}">Home</RouterLink> |
    <RouterLink :to="{name: 'About'}">About</RouterLink> |
    <RouterLink :to="{name: 'Contact'}">Contact</RouterLink> -->
    </nav>

    <hr></hr>
    <RouterView />

  </div>
</template>
