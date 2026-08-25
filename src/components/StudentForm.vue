<script setup>
import { ref } from 'vue'
import StudentDisplay from './StudentDisplay.vue'

const emit = defineEmits(['student-submitted'])

const name = ref('')
const studID = ref('')
const email = ref('')
const course = ref('')
const yrLvl = ref('')

// for radio button to check if the value is true
function checkYes() {
  confirmation.value = true
}
// for radio button to check if the value is true
function checkNo() {
  confirmation.value = false
}

function submitEnroll() {
  alert('Form Submitted!')
  emit('student-submitted', {
    name: name.value,
    studId: studID.value,
    email: email.value,
    course: course.value,
    yr: yrLvl.value,
  })
}
</script>

<template>
  <div>
    <h2>Student Information:</h2>
    <form @submit.prevent="submitEnroll">
      <label>Student Name: </label>
      <input v-model="name" type="text" placeholder="Name" required />
      <br />

      <label>Student Id: </label>
      <input v-model="studID" type="number" placeholder="ID" required />
      <br />

      <label>Email:</label>
      <input v-model="email" type="email" placeholder="Email" required />
      <br />

      <label>Course:</label>
      <select id="course" v-model="course">
        <option>BSIT</option>
        <option>BSCS</option>
        <option>BSIS</option>
      </select>
      <br />

      <label>Year Level:</label>
      <label>
        <input type="radio" v-model="yrLvl" value="1st Year" name="yrLvl" required/> 1st Year
      </label>
      <label>
        <input type="radio" v-model="yrLvl" value="2nd Year" name="yrLvl" /> 2nd Year
      </label>
      <label>
        <input type="radio" v-model="yrLvl" value="3rd Year" name="yrLvl" /> 3rd Year
      </label>
      <label>
        <input type="radio" v-model="yrLvl" value="4th Year" name="yrLvl" /> 4th Year
      </label>      
      <br />

      <button type="submit">Click</button>
    </form>

    <hr></hr>
    <StudentDisplay 
    :name="name"
    :Id="studID"
    :course="course"
    :yrlvl="yrLvl" 
    :email="email"
    />
  </div>
</template>