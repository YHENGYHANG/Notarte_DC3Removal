<script setup>
import EnrollmentForm from './components/EnrollmentForm.vue';
import {ref, defineProps} from 'vue'

defineProps({
  name: String,
  age: Number,
  email: String
})


const info = ref({
  name: '',
  id: '',
  email: '',
  course: '',
  yrlvl: '',
  reason: ''
})

function display(data){
    console.log(info.value = data)
  }


</script>



<template>
<EnrollmentForm @notify="display"/>

<hr></hr>

<h4>PROPS</h4>
<p>Name: {{ name }}</p>
<p>Age: {{ age }}</p>
<p>Email: {{ email }}</p>
</template>
