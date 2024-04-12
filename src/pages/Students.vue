<script setup>
import StudentsListVue from '@/components/StudentsList.vue'
import {ref, computed, onMounted} from 'vue'
import addOrUpdate from '../components/AddOrUpdateStudents.vue'
import StudentsList from '../components/StudentsList.vue'
import StudentInfo from '../components/StudentInfo.vue'
import printQr from '../components/printQr.vue'

const gradeLevels = ref(['','I', 'II', 'III', 'IV', 'V', 'VI'])
const students = ref([
    {
        id: '6322721',
        LRN: '374287346',
        name: 'Roland Clarion',
        gender: 'male',
        parents: 'Rosmarie Panilagao',
        city: 'San Carlos City',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        province: 'Negros Occidental',
        zone: '1',
        phoneNumber: '09349432722',
        gradeLevel: 'III',
        section: 'manga',
        adviser: 'Christian Mark Nepa',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            }
        ]
    },
    {
        id: '6322822',
        LRN: '374287346',
        name: 'Roland Clarion',
        gender: 'male',
        parents: 'Rosmarie Panilagao',
        city: 'San Carlos City',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        province: 'Negros Occidental',
        zone: '1',
        phoneNumber: '09349432722',
        gradeLevel: 'III',
        section: 'manga',
        adviser: 'Christian Mark Nepa',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            },
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            },
        ]
    },

])

const key = ref(0);
const isShow = ref(false);
const active = ref('active')
const notFound = ref(true)
const isToggle = ref(true)
const isAdd = ref(false)
const isPrint = ref(false)
const QrID = ref(null)
function show(id){
    key.value = id;
}
function print(id){
    isPrint.value = !isPrint.value
    QrID.value = id
}

const searchInput = ref('')
const filterLevel = ref('')
// Define a computed property to filter students based on search query
const filteredStudents = computed(() => {
  const search = searchInput.value.toLowerCase()
  const level = filterLevel.value
  if (search && level){
    return students.value.filter(student =>
        student.name.toLowerCase().includes(search) && student.gradeLevel == level || student.LRN.includes(search) && student.gradeLevel == level
      )
  } else if(level){
     return students.value.filter(student =>
        student.gradeLevel == level
      )
  } else if  (search){
      return students.value.filter(student =>
        student.name.toLowerCase().includes(search) || student.LRN.includes(search)
      )
  }
  else{
    return students.value.filter(student =>
        student.name.toLowerCase().includes(search) || student.LRN.includes(search) || student.gradeLevel == level
      )
  }
})


if (!filteredStudents) {
    notFound.value = !notFound.value
}
//toggle add
function toggleComponent(isAdd, id){
    isToggle.value = !isToggle.value
    isAdd.value = isAdd
}

//delete data from  array
function DeleteStudent(id) {
    students.value = students.value.filter(student => student.id !== id)
    key.value = 0
}
</script>
<template>
    <add-or-update v-if="!isToggle" @close="toggleComponent" :gradeLevels="gradeLevels" :isAdd="isAdd" class="add-students"></add-or-update>
    <printQr class="print-qr" v-if="isPrint" @close="print" :id="QrID"></printQr>
    <div class="container">
        <div class="students-list">
            <div class="top">
                <h4>Students</h4>
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" v-model="searchInput" placeholder="Enter LRN or Name">
                </div>
                <div class="filter">
                    <select name="" id="" v-model="filterLevel">
                        <option  v-for="gradeLevel in gradeLevels" :key="gradeLevel" :value="gradeLevel"> {{ (gradeLevel != '')? 'Grade ' + gradeLevel : 'All' }}</option>
                    </select>
                    <a href="" @click.prevent="toggleComponent()"><i class="fa-solid fa-plus"></i> Student</a>
                </div>
            </div>
            <studentsList :filteredStudents="filteredStudents" :activeKey="key" @show="show"/>
            
        </div>
        <div class="side">
            <student-info :studentData="students[key]" @edit="toggleComponent" @print="print" @delete="DeleteStudent"></student-info>
        </div>
        <div class="log">
            <h5>Logs</h5><br>
            <div class="log-info" v-for="(log, i) in students[key].logs" :key="i">
                <div class="line" v-if="i != 0"></div>
                <p :class="log.status" :title="log.time+' on '+log.date">{{ log.status }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.add-students{
    z-index: 100;
}

.print-qr{
    z-index: 100;
}
.container{
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    font-variation-settings: "slnt" 0;
    display: flex;
    gap: 15px;
}

.students-list{
    width: 60%;
    height: 88.5vh;
    background: white;
    border-radius: 3px;
    box-shadow:  5px 0 20px #80808080;
}


.person-info{
    background: white;
    max-height: 88.5vh;
    width: 50vh;
    border-radius: 3px;
    box-shadow:  5px 0 20px #80808080;
}



.log{
    background: white;
    width: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    border: 1px solid #3da1ff;
    border-radius: 10px;
    max-height: 84vh;
}

.log-info{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.log p{
    width: 35px;
    font-size: 12px;
    padding: 10px 0;
    border-radius: 100%;
    text-align: center;
    background: #00b7ff9c;
    border: 1px solid #0a82c7;
    color: white;
    cursor: pointer;
    transition: ease-in-out 1s;
}


.log .out{
    background: #00aeff;
    border: 1px solid #00aeff;
}

.log .none{
    background: #ff0000d5;
    border: 1px solid #ff0000;
}
.line{
    border-left: 1px solid rgb(187, 184, 184);
    height: 10px;
    width: 0;
}
.top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px 10px 10px;
    border-bottom: 1px solid #bbb7b7;
}

.search{
    padding: 0 5px;
    border: 1px solid gray;
    display: flex;
    gap: 10px;
    align-items: center;
    background: #f2f2f3;
    border-radius: 3px;
}

.search input{
    background: none;
    border: none;
    padding: 5px 0;
}

.search input:focus{
    outline: 0;
    border: 0;
}

.filter{
    display: flex;
    gap: 10px;
    justify-content: right;
    padding: 10px 15px;
}

.filter a{
    background: #1079db;
    padding: 5px 10px;
    color: white;
    border-radius: 3px;
    font-size: 15px;
}

.filter a:hover{
    background: #3da1ff;
}


</style>
