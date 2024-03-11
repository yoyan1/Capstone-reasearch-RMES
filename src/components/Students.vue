<script setup>
import {ref, computed} from 'vue'

const students = ref([
    {
        id: '632272',
        profile: './images/helloCutie.jpg',
        name: 'Roland Clarion',
        gradeLvl: 'Grade III',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1'
    },
    {
        id: '7323772',
        profile: './images/helloCutie.jpg',
        name: 'Rosmarie Panilagao',
        gradeLvl: 'Grade III',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1'
    },
    {
        id: '32674237',
        profile: './images/helloCutie.jpg',
        name: 'Christian Mark Nepa',
        gradeLvl: 'Grade III',
        lrn: '7462548723',
        barangay: 'Guadalupe',
        street: 'So. Mabuni',
        zone: '1'
    }
])

const searchInput = ref('')

// Define a computed property to filter students based on search query
const filteredStudents = computed(() => {
  const search = searchInput.value.toLowerCase()
  return students.value.filter(student =>
    student.name.toLowerCase().includes(search) || student.id.includes(search)
  )
})
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
                <div class="list">
                    <div class="label">
                        <div width="100px">id</div>
                        <div width="50px">Profile</div>
                        <div  width="200px">Name</div>
                        <div width="100px">LRN</div>
                        <div  width="100px">Barangay</div>
                        <div  width="50px">Zone</div>
                    </div>
                    <div class="students" v-for="student in filteredStudents">
                        <div width="100px">{{ student.id }}</div>
                        <div width="50px"><img src="./images/helloCutie.jpg" width="40px" alt=""></div>
                        <div width="200px" style="text-align: left"><h4>{{ student.name }}</h4><p>{{ student.gradeLvl }}</p></div>
                        <div width="100px">{{ student.lrn }}</div>
                        <div width="100px">{{ student.barangay }}</div>
                        <div width="50px">{{ student.zone }}</div>
                    </div>
                </div>
        </div>
        <div class="side">
            <div class="person-info">

            </div>
            <div class="logs">

            </div>
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
    height: 50vh;
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
table{
    text-align: center;
}

table tr{
    border-bottom:1px solid gray;
}

table tr td{
    text-align: center;
    padding: 10px 5px;
}

table tr td:hover{
    background: #126cc0;
    color: white;
}

.list .label{
    display: flex;
    justify-content: space-around;
}
.list .students{
    display: flex;
    justify-content: space-around;
    text-align: left;

}
</style>
