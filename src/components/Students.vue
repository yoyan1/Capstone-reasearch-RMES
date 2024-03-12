<script setup>
import {ref, computed} from 'vue'

const gradeLevels = ref(['Grade I', 'Grade II', 'Grade III', 'Grade IV', 'Grade V', 'Grade VI'])
const students = ref([
    {
        id: '6322721',
        profile: './images/helloCutie.jpg',
        name: 'Roland Clarion',
        gradeLvl: 'III',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'male',
        section: 'kamatis'
    },
    {
        id: '7323772',
        profile: './images/helloCutie.jpg',
        name: 'Rosmarie Panilagao',
        gradeLvl: 'III',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1',
        gender: 'female',
        section: 'buongon'
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
        section: 'manga'
    }
])

const key = ref(0);
const isShow = ref(false);
const notFound = ref(true)

function show(id){
    key.value = id;
}
const searchInput = ref('')

// Define a computed property to filter students based on search query
const filteredStudents = computed(() => {
  const search = searchInput.value.toLowerCase()
  return students.value.filter(student =>
    student.name.toLowerCase().includes(search) || student.lrn.includes(search)
  )
})

// Define a computed property to filter grade based on search query
const filteredLevel = computed(() => {
  const level = filtered.value.toLowerCase()
  return gradeLevels.value.filter(grdLvl =>
    grdLvl.toLowerCase().includes(level)
  )
})

if (!filteredStudents) {
    notFound.value = !notFound.value
}
</script>
<template>
    <div class="container">
        <div class="students-list">
            <div class="top">
                <h4>Students</h4>
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" v-model="searchInput" placeholder="Enter ID or Name">
                </div>
            </div>
            <div class="filter">
                <select name="" id="" v-model="filtered">
                    <option value="" v-for="gradeLevel in filteredLevel">{{ gradeLevel }}</option>
                </select>
            </div>
                <table>
                    <tr>
                        <th>Profile</th>
                        <th>name</th>
                        <th>LRN</th>
                        <th>Barangay</th>
                        <th>Street</th>
                    </tr>
                    <tr v-for="(student, index) in filteredStudents" class="list" v-if="notFound">
                        <td><img src="./images/helloCutie.jpg" width="40px" alt=""></td>
                        <td>
                            <h4>{{ student.name }}</h4>
                            <p>Grade {{ student.gradeLvl }}</p>
                        </td>
                        <td><p>{{ student.lrn }}</p></td>
                        <td><p>{{ student.barangay }}</p></td>
                        <td><p>{{ student.street }}</p></td>
                    </tr>
                    <tr v-if="!notFound">
                        <td></td>
                        <td><p>No data found</p></td>
                        <td><p>No data found</p></td>
                        <td><p>No data found</p></td>
                        <td><p>No data found</p></td>
                    </tr>
                </table>
                <!-- <div class="list">
                    <div class="label">
                        <div width="50px">Profile</div>
                        <div  width="200px">Name</div>
                        <div width="100px">LRN</div>
                        <div  width="100px">Barangay</div>
                        <div  width="50px">Zone</div>
                    </div>
                    <div class="students" v-for="(student, index) in filteredStudents" @click="show(index)">
                        <div><img src="./images/helloCutie.jpg" width="40px" alt=""></div>
                        <div class="name"><h4>{{ student.name }}</h4><p>{{ student.gradeLvl }}</p></div>
                        <div class="label1">{{ student.lrn }}</div>
                        <div class="label1">{{ student.barangay }}</div>
                        <div class="label1">{{ student.zone }}</div>
                    </div>
                </div> -->
        </div>
        <div class="side">
            <div class="person-info">
                <h1>Students Information</h1>
                <div class="profile">
                    <img src="./images/helloCutie.jpg" width="80px" alt="">
                    <h2>{{ students[key].name }}</h2>
                    <p>Stud id: {{ students[key].id }}</p>
                </div>
                <div class="details">
                    <h3>Basic Details</h3>
                    <div>
                        <p class="label-details">Grade Level</p>:
                        <p class="info-details">{{ students[key].gradeLvl }}</p>
                    </div>
                    <div>
                        <p class="label-details">Section</p>:
                        <p class="info-details">{{ students[key].section }}</p>
                    </div>
                    <div>
                        <p class="label-details">Gender</p>:
                        <p class="info-details">{{ students[key].gender }}</p>
                    </div>
                    <div>
                        <p class="label-details">LRN No.</p>:
                        <p class="info-details">{{ students[key].lrn }}</p>
                    </div>
                    <div>
                        <p class="label-details">Address</p>:
                        <p class="info-details">{{ students[key].barangay }}, {{ students[key].street }}</p>
                    </div>
                </div>
            </div>
            <!-- <div class="logs">

            </div> -->
        </div>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    gap: 20px;
}

.students-list{
    width: 60%;
    height: 81vh;
    background: white;
    border-radius: 3px;
    box-shadow:  0 5px 5px #80808080;
}

.side{
    display: grid;
    gap: 20px;
    width: 40%;
}

.person-info{
    background: white;
    height: 81vh;
    border-radius: 3px;
    box-shadow:  0 5px 5px #80808080;
}

.logs{
    background: white;
    height: 26vh;
    border-radius: 3px;
    box-shadow:  0 5px 5px #80808080;
}

.top{
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    border-bottom: 1px solid #8f8e8e;
}

.search{
    padding: 0 5px;
    border: 1px solid gray;
    display: flex;
    gap: 10px;
    align-items: center;
}

.search input{
    border: none;
    padding: 5px 0;
}

.search input:focus{
    outline: 0;
    border: 0;
}


/* .list .label{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}
.list .students{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
}

.students:hover{
    background: #3da1ff;
}

.students .label1{
    text-align: center;
    width: 90px;
    max-width: 90px;
}

.students .name{
    width: 200px;
}

.name h4{
    font-size: 15px;
}

.name p{
    font-size: 12px;
} */

table tr th{
    color: gray;
    font-family: 100;
}

table tr th, tr td{
    text-align: left;
    padding:10px 10px ;
    outline: 0;
}

tr th, p{
    color: #8f8e8e;
}

table .list:hover{
    background: #3da1ff;
    border: none;
    color: white;
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
}

.profile img{
    border-radius: 100%;
}

.profile h2{
    font-size: 20px;
}

.profile p{
    color: gray;
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
    width: 100px;
}
</style>
