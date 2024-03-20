<script setup>
import {ref, computed} from 'vue'

const gradeLevels = ref(['I', 'II', 'III', 'IV', 'V', 'VI'])
const teachers = ref([
    {
        id: '362365',
        name: 'Roland Clarion',
        image: '',
        gender: 'male',
        section: 'kamatis',
        advisory: 'none',
        email: 'roland@gmail.com',
        position: 'teacher'
    },
    {
        id: '362365',
        name: 'John Doe',
        image: '',
        gender: 'male',
        section: 'kamatis',
        advisory: 'I',
        email: 'roland@gmail.com',
        position: 'adviser'
    },
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

// Define a computed property to filter teachers based on search query
const filteredteachers = computed(() => {
  const search = searchInput.value.toLowerCase()
//   const level = filterLevel.value.toLowerCase()
  return teachers.value.filter(teacher =>
    teacher.name.toLowerCase().includes(search) || teacher.id.includes(search) 
  )
})

if (!filteredteachers) {
    notFound.value = !notFound.value
}


</script>
<template>
    <!-- <add-teachers v-if="!isAdd" class="add-teachers"></add-teachers> -->
    <div class="container">
        <div class="teachers-list">
            <div class="top">
                <h4>Parents Account</h4>
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" v-model="searchInput" placeholder="Enter ID or Name">
                </div>
            </div>
            <div class="dta-tble">
                <table v-if="notFound" >
                    <tr>
                        <th>Profile</th>
                        <th>name</th>
                        <th>Advisory</th>
                        <th>email</th>
                        <th>position</th>
                    </tr>
                    <tr v-for="(teacher, index) in filteredteachers" :key="teacher.id" @click="show(index)" class="list" :id="(key == index) ? active : ''">
                        <td><img src="../components/images/avatar.avif" width="40px" alt=""></td>
                        <td><h4>{{ teacher.name }}</h4></td>
                        <td><p style="text-align:center">{{ teacher.advisory }}</p></td>
                        <td><p>{{ teacher.email }}</p></td>
                        <td><p>{{ teacher.position }}</p></td>
                        
                    </tr>
                </table>
                <div style="text-align:center" v-else>
                   <div>No data found</div>
                </div>
            </div>
        </div>
        <div class="side">
            <div class="person-info">
                <h1>teachers Information</h1>
                <div class="profile">
                    <img src="../components/images/avatar.avif" width="80px" alt="">
                    <h2>{{ teachers[key].name }}</h2>
                    <p>Stud id: {{ teachers[key].id }}</p>
                </div>
                <div class="details">
                    <h3>Basic Details</h3>
                    <div>
                        <p class="label-details">Advisory</p>:
                        <p class="info-details">{{ teachers[key].advisory }}</p>
                    </div>
                    <div>
                        <p class="label-details">Section</p>:
                        <p class="info-details">{{ teachers[key].section }}</p>
                    </div>
                    <div>
                        <p class="label-details">Gender</p>:
                        <p class="info-details">{{ teachers[key].gender }}</p>
                    </div>
                    <div>
                        <p class="label-details">LRN No.</p>:
                        <p class="info-details">{{ teachers[key].position }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.add-teachers{
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

.teachers-list{
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
    padding: 20px;
}

table tr td{
    padding: 5px 20px;
}

table tr th, tr td{
    cursor: pointer;
    text-align: left;
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
    transition: ease-in-out 0.3s;
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
.details div .label-details{
    width: 70px;
}

.info-details{
    font-weight: 600;
}
</style>
