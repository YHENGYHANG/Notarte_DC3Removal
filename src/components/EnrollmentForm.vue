<script setup>
import {ref} from 'vue'

const emit = defineEmits(['enroll'])

const name = ref('')
const studID = ref('')
const email = ref('')
const course = ref('')
const yrLvl = ref('')
const confirmation = ref(false)
const reason = ref('')

function submitEnroll(){
    alert('Form Submitted!')
        console.log(`
        name: ${name.value},
        studId: ${studID.value},
        email: ${email.value},
        course: ${course.value},
        yr: ${yrLvl.value},
        conirmation: ${confirmation},
        reason: ${reason.value}`)
    
}



</script>

<template>
    <div>
        <form @submit.prevent="submitEnroll">
            <label>Name:</label>
            <input v-model="name" type="text" placeholder="Name" required/>
            <br>

            <label>Id:</label>
            <input v-model="id" type="number" placeholder="ID" required/>
            <br>

            <label>Email:</label>
            <input v-model="email" type="email" placeholder="Email" required/>
            <br>

            <label>Course:</label>
            <select v-model="Course" >
                <option>BSIT</option>
                <option>BSED</option>
                <option>BSCS</option>
            </select>
            <br>
            
            <label>Year Level:</label>
            <input type="radio">1st Year</input>
            <input type="radio">2nd Year</input>  
            <input type="radio">3rd Year</input>                       
            <br>

            <label>Confirmation:</label>
            <input type="checkbox" v-model="Yes">Yes</input>
            <input type="checkbox" v-model="no">No</input>       
            <button @click="submitEnroll">CLick</button>

            
        </form>
    </div>
</template>