<script setup>
import { ref } from 'vue'

const emit = defineEmits(['enroll'])

const name = ref('')
const studID = ref('')
const email = ref('')
const course = ref('')
const yrLvl = ref('')
const confirmation = ref(null) // null = not yet chosen, true = Yes, false = No
const reason = ref('')

// for radio button to check if the value is true
function checkYes() {
  confirmation.value = true
}
// for radio button to check if the value is true
function checkNo() {
  confirmation.value = false
}

function submitEnroll() {
    //if the checkbox is empty it will display an alert to check yes or no
  if (confirmation.value === null) {
    alert('Please confirm Yes or No before submitting.')
    return
  }

  //if the checkbox is false it will not be submitted to the console.log
  if (confirmation.value === false) {
    alert('Confirmation set to No — the form will not be submitted.')
    return
  }

  alert('Form Submitted!')
  emit('enroll', {
    name: name.value,
    studId: studID.value,
    email: email.value,
    course: course.value,
    yr: yrLvl.value,
    confirmation: confirmation.value,
    reason: reason.value
  })
}
</script>

<template>
  <div>
    <form @submit.prevent="submitEnroll">
      <label>Name:</label>
      <input v-model="name" type="text" placeholder="Name" required />
      <br />

      <label>Id:</label>
      <input v-model="studID" type="number" placeholder="ID" required />
      <br />

      <label>Email:</label>
      <input v-model="email" type="email" placeholder="Email" required />
      <br />

      <label>Course:</label>
      <select id="course" v-model="course">
        <option>BSIT</option>
        <option>BSED</option>
        <option>BSCS</option>
      </select>
      <br />

      <label>Year Level:</label>
      <label>
        <input type="radio" v-model="yrLvl" value="1st Year" name="yrLvl" /> 1st Year
      </label>
      <label>
        <input type="radio" v-model="yrLvl" value="2nd Year" name="yrLvl" /> 2nd Year
      </label>
      <label>
        <input type="radio" v-model="yrLvl" value="3rd Year" name="yrLvl" /> 3rd Year
      </label>
      <br />

      <label>Confirmation:</label>
      <label>
        <input type="checkbox" :checked="confirmation === true" @change="checkYes" /> Yes
      </label>
      <label>
        <input type="checkbox" :checked="confirmation === false" @change="checkNo" /> No
      </label>
      <br />

      <button type="submit">Click</button>
    </form>
  </div>
</template>