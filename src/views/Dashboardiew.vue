<script setup>
import {ref} from 'vue'
import Dashboard from '@/components/Dashboard.vue';
import Students from '@/components/Students.vue'
import Attendance from '@/components/Attendance.vue'
import Advisers from '@/components/Advisers.vue'
import GradeLevel from '@/components/GradeLevel.vue'

const indexs = ref(0)
const isDash = ref(true)
const isStudent = ref(false)
const isAttendance = ref(false)
const isTeacher = ref(false)
const isGradeLevel = ref(false)
const tagId = ref('')

function toggleDash() {
    if(!isDash.value){
        isDash.value = true
        isStudent.value =false
        isAttendance.value = false
        isTeacher.value = false
        isGradeLevel.value = false
    }
}
tagId.value = 'actv'

function toggleStudent() {
    if(!isStudent.value){
        isDash.value = false
        isStudent.value = true
        isAttendance.value = false
        isTeacher.value = false
        isGradeLevel.value = false
    }
}
function toggleAttend() {
    if (!isAttendance.value) {
        isDash.value = false
        isStudent.value =false
        isAttendance.value = true
        isTeacher.value = false
        isGradeLevel.value = false
    }
}
function toggleAdvsr() {
    if (!isTeacher.value) {
        isDash.value = false
        isStudent.value =false
        isAttendance.value = false
        isTeacher.value = true
        isGradeLevel.value = false
    }
}
function toggleGrd() {
    if (!isGradeLevel.value) {
        isDash.value = false
        isStudent.value =false
        isAttendance.value = false
        isTeacher.value = false
        isGradeLevel.value = true
    }
}
</script>

<template>
    <div class="container">
        <div class="sidebar">
            <div class="profile">
                <img src="../components/images/helloCutie.jpg" width="70px" alt="">
                <h1>Admin</h1>
            </div>
            <div class="buttons">
                <a href="#" :id="tagId" @click.prevent="toggleDash">
                    <i class="fa-brands fa-microsoft"></i>
                    <p><b>Dashboard</b></p>
                </a>
                <a href="#"  id="stdnt" @click.prevent="toggleStudent">
                    <i class="fa-solid fa-users"></i>
                    <p><b>Students</b></p>
                </a>
                <a href="#"  id="attnd" @click.prevent="toggleAttend">
                    <i class="fa-solid fa-clipboard-user"></i>
                    <p><b>Attendance</b></p>
                </a>
                <a href="#" @click.prevent="toggleAdvsr">
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <p><b>Advisers</b></p>
                </a>
                <a href="#" @click.prevent="toggleGrd">
                    <i class="fa-solid fa-chart-simple"></i>
                    <p><b>Grade Level</b></p>
                </a>
            </div><br><br><br><hr>
            <div class="btn-bot">
                <i class="fa-solid fa-gear"></i>
                <a href="#">Setting</a>
            </div>

        </div>
        <div class="main">
            <div class="head">
                <img src="../components/images/HelloCutie.jpg" class="logo" width="50px" height="50px" alt="">
                <img src="../components/images/deped.png" width="50px" height="50px" alt="">
            </div>
            <div class="center">
                <Dashboard v-if="isDash"/>
                <Students v-if="isStudent"/>
                <Attendance v-if="isAttendance"/>
                <Advisers v-if="isTeacher"/>
                <GradeLevel v-if="isGradeLevel"/>
            </div>
        </div>
    </div>
</template>
<style>
#actv{
    background: #d8dbdf;
}

.container{
    background:  #d8dbdf;
    display: flex;
}

.sidebar{
    background: white;
    width: 20%;
    text-align: center;
}

.sidebar .profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0 0 30px 0;
    border-bottom: 1px solid rgb(212, 204, 204);
}

.sidebar img{
    border-radius: 100%;
    margin-top: 10px;
}

.sidebar h1{
    color: black;
    font-weight: 600;
    font-size: 18px;
}

.buttons{
    display: flex;
    flex-direction: column;
    text-align: left;
}

.buttons a{
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: 600;
    padding: 15px 70px;
    display: flex;
    gap: 10px;
}

.btn-bot{
    padding: 20px;
    display: flex;
    gap: 10px;
    padding: 20px 70px;
    font-size: 18px;
}

.btn-bot a{
    text-decoration: none;
    color: black;
}

#active{
    background: #a9b3c0;
}

.main{
    width: 80%;
}

.main .head{
    background: white;
    padding: 10px 50px;
    display: flex;
    justify-content: right;
    gap: 20px;
}

.logo{
    border-radius: 100%;
}

.center{
    padding: 20px;
}
</style>