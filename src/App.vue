<script setup>
import StudentForm from './components/StudentForm.vue';
import {ref, defineProps} from 'vue'



const info = ref({
  name: '',
  id: '',
  email: '',
  course: '',
  yrlvl: '',
})

function display(data){
    console.log(info.value = data)
  }


</script>



<template>
<StudentForm @student-submitted="display"/>
<hr></hr>


</template>
