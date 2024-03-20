<script setup>
import {ref, computed} from 'vue'
import addStudents from '../components/AddStudents.vue'

const gradeLevels = ref(['','I', 'II', 'III', 'IV', 'V', 'VI'])
const students = ref([
    {
        id: '6322721',
        profile: './images/helloCutie.jpg',
        name: 'Roland Clarion',
        gradeLvl: 'I',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'male',
        section: 'kamatis',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            }
        ]
    },
    {
        id: '7323772',
        profile: './images/helloCutie.jpg',
        name: 'Rosmarie Panilagao',
        gradeLvl: 'II',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'female',
        section: 'buongon',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            }
        ]
    },
    {
        id: '3267423',
        profile: './images/helloCutie.jpg',
        name: 'Christian Mark Nepa',
        gradeLvl: 'III',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'male',
        section: 'manga',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            }
        ]
    },
    {
        id: '6322721',
        profile: './images/helloCutie.jpg',
        name: 'Roland Clarion',
        gradeLvl: 'IV',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'male',
        section: 'kamatis',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            }
        ]
    },
    {
        id: '7323772',
        profile: './images/helloCutie.jpg',
        name: 'Rosmarie Panilagao',
        gradeLvl: 'V',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'female',
        section: 'buongon',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            }
        ]
    },
    {
        id: '3267423',
        profile: './images/helloCutie.jpg',
        name: 'Christian Mark Nepa',
        gradeLvl: 'VI',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'male',
        section: 'manga',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            }
        ]
    }, 
    {
        id: '3267423',
        profile: './images/helloCutie.jpg',
        name: 'Christian Mark Nepa',
        gradeLvl: 'III',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'male',
        section: 'manga',
        logs: [
            {
                status: 'in',
                time: '06 : 00 am',
                date: 'march 12, 2024'
            }
        ]
    }
])

const key = ref(0);
const isShow = ref(false);
const active = ref('active')
const notFound = ref(true)
const isAdd = ref(true)

function show(id){
    key.value = id;
}
const searchInput = ref('')
const filterLevel = ref('')
// Define a computed property to filter students based on search query
const filteredStudents = computed(() => {
  const search = searchInput.value.toLowerCase()
  const level = filterLevel.value
  if (search && level){
    return students.value.filter(student =>
        student.name.toLowerCase().includes(search) && student.gradeLvl == level || student.lrn.includes(search) && student.gradeLvl == level
      )
  } else if(level){
     return students.value.filter(student =>
        student.gradeLvl == level
      )
  } else if  (search){
      return students.value.filter(student =>
        student.name.toLowerCase().includes(search) || student.lrn.includes(search)
      )
  }
  else{
    return students.value.filter(student =>
        student.name.toLowerCase().includes(search) || student.lrn.includes(search) || student.gradeLvl == level
      )
  }
})


if (!filteredStudents.value ) {
    notFound.value = !notFound.value
}
//toggle add
function add(){
    isAdd.value = !isAdd.value
}

</script>
<template>
    <add-students v-if="!isAdd" @close="add" class="add-students"></add-students>
    <div class="container">
        <div class="students-list">
            <div class="top">
                <h4>Students</h4>
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" v-model="searchInput" placeholder="Enter ID or Name">
                </div>
                <div class="filter">
                    <select name="" id="" v-model="filterLevel">
                        <option  v-for="gradeLevel in gradeLevels" :key="gradeLevel" :value="gradeLevel"> {{ (gradeLevel != '')? 'Grade ' + gradeLevel : 'All' }}</option>
                    </select>
                    <a href="" @click.prevent="add"><i class="fa-solid fa-plus"></i> Student</a>
                </div>
            </div>
            <div class="dta-tble">
                <table v-if="notFound" >
                    <tr>
                        <th>Profile</th>
                        <th>name</th>
                        <th>LRN</th>
                        <th>Barangay</th>
                        <th>Street</th>
                        <th>Zone</th>
                    </tr>
                    <tr v-for="(student, index) in filteredStudents" :key="student.id" @click="show(index)" class="list" :id="(key == index) ? active : ''">
                        <td><img src="../components/images/avatar.avif" width="40px" alt=""></td>
                        <td>
                            <h4>{{ student.name }}</h4>
                            <p>Grade {{ student.gradeLvl }}</p>
                        </td>
                        <td><p>{{ student.lrn }}</p></td>
                        <td><p>{{ student.barangay }}</p></td>
                        <td><p>{{ student.street }}</p></td>
                        <td><p style="text-align:center">{{ student.zone }}</p></td>
                        
                    </tr>
                </table>
                <div style="text-align:center" v-else>
                   <div>No data found</div>
                </div>
            </div>
        </div>
        <div class="side">
            <div class="person-info">
                <h1>Students Information</h1>
                <div class="profile">
                    <img src="../components/images/avatar.avif" width="80px" alt="">
                    <h2>{{ students[key].name }}</h2>
                    <p>Stud id: {{ students[key].id }}</p>
                </div>
                <div class="details">
                    <h3>Basic Details</h3>
                    <div>
                        <div>
                            <p class="label-details">Grade Level</p>:
                            <p class="info-details">{{ students[key].gradeLvl }}</p>
                        </div>
                        <div>
                            <p class="label-details">Section</p>:
                            <p class="info-details">{{ students[key].section }}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p class="label-details">Gender</p>:
                            <p class="info-details">{{ students[key].gender }}</p>
                        </div>
                        <div>
                            <p class="label-details">LRN No.</p>:
                            <p class="info-details">{{ students[key].lrn }}</p>
                        </div>
                    </div>
                    <div>
                        <p class="label-details">Address</p>:
                        <p class="info-details">{{ students[key].barangay }}, {{ students[key].street }}</p>
                    </div>
                </div>
                <div class="action">
                    <i>d</i>
                    <i>d</i>
                    <i>s</i>
                </div>
            </div>
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

.action{
    display: flex;
    gap: 10px;
    justify-content: right;
    padding: 10px 15px;
}

.action i{
    cursor: pointer;
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

.dta-tble{
    max-height:75vh;
    overflow-y: scroll;
    transition: 0.3s;
}
::-webkit-scrollbar{
    display: none;
}

table{
    border-collapse: collapse; 
    width: 100%;
}

table tr th{
    position: sticky;
    top: 0;
    background: white;
    box-shadow: 0px 3px 3px #bbb7b7;
    color: gray;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    font-variation-settings: "slnt" 0;
    overflow: hidden;
    text-overflow: ellipsis; /* Truncate text with an ellipsis if it overflows */
    white-space: nowrap; 
}

table tr th, tr td{
    cursor: pointer;
    text-align: left;
    padding:10px 10px ;
    outline: 0;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    font-variation-settings: "slnt" 0;
}

tr td img{
    border-radius: 100%;
}

tr th, p{
    font-size: 15px;
}

.list{   
    border-bottom: 1px solid #d0d3d3;
    transition:ease-in-out 0.3s;
}

table .list:hover{
    background: #1079db;
    color: white;
    padding: 20px;
    box-shadow: 0px 0px 20px #474747;
    
}

#active{
    background: #1079db;
    color: white;
    border-bottom: none;
}

.person-info h1{
    padding: 20px;
    font-size: 20px;
    font-weight: 400;
}

.profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: ease-in-out 1s;
}

.profile img{
    border-radius: 100%;
}

.profile h2{
    font-size: 15px;
}

.profile p{
    color: gray;
    font-size: 12px;
}

.details {
    padding: 10px 20px;
    display: grid;
    gap: 10px;
}

.details h3{
    font-size: 15px;
}

.details div{
    display: flex;
    gap: 10px;
}

.details div p{
    font-size: 12px;
    color: gray;
}


.info-details{
    font-weight: 600;
}
</style>
