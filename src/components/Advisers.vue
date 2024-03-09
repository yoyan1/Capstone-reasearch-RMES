<script setup>
import AddStudents from './AddStudents.vue';
import {ref} from 'vue';

const isAdd = ref(false)

function Add() {
    isAdd.value = !isAdd.value
}
</script>
<template>
    <!-- <AddStudents v-if="isAdd" @close="Add"/> -->
    <h1>Advisers</h1>
    <div class="studentList">
        <table>
            <tr>
                <th>ALL ADVISERS</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><a href="#" @click.prevent="Add" :Add="Add" class="Add">Add Adviser</a></th>
                <th><a href="#" class="print">Print</a></th>
            </tr>
            <tr>
                <th>ID</th>
                <th></th>
                <th>NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>LEVEL</th>
                <th>BARANGAY</th>
                <th>ACTION</th>
            </tr>
            <tr class="body">
                <td>1BS9237</td>
                <td><img src="../components/images/HelloCUtie.jpg" width="30px" alt=""></td>
                <td>John doe</td>
                <td>13</td>
                <td>Male</td>
                <td>GRADE III</td>
                <td>Guadalupe</td>
                <td><a href="">EDIT</a>  <a href="">DELETE</a></td>
            </tr>
            <tr class="body">
                <td>1BS9237</td>
                <td><img src="../components/images/HelloCUtie.jpg" width="30px" alt=""></td>
                <td>John doe</td>
                <td>13</td>
                <td>Male</td>
                <td>GRADE III</td>
                <td>Guadalupe</td>
                <td><a href="">EDIT</a>  <a href="">DELETE</a></td>
            </tr>
            <tr class="body">
                <td>1BS9237</td>
                <td><img src="../components/images/HelloCUtie.jpg" width="30px" alt=""></td>
                <td>John doe</td>
                <td>13</td>
                <td>Male</td>
                <td>GRADE III</td>
                <td>Guadalupe</td>
                <td><a href="">EDIT</a>  <a href="">DELETE</a></td>
            </tr>
            <tr class="body">
                <td>1BS9237</td>
                <td><img src="../components/images/HelloCUtie.jpg" width="30px" alt=""></td>
                <td>John doe</td>
                <td>13</td>
                <td>Male</td>
                <td>GRADE III</td>
                <td>Guadalupe</td>
                <td><a href="">EDIT</a>  <a href="">DELETE</a></td>
            </tr>
        </table>
    </div>
</template>
<style>
.studentList{
    background: white;
    padding: 20px;
    height: 60vh;
    box-shadow: 0px 3px 5px gray;
    border-radius: 3px;
}


table tr th, tr td{
    width: 150px;
    font-size: 15px;
    text-align: center;
}

table tr th{
    padding: 10px 0;
}

table tr td{
    padding: 10px 0;
}
table .body{
    background: #cfd0d1;
}


.Add{
    padding: 5px 10px;
    background: #126cc0;
    border-radius: 2px;
    color: white;
    text-decoration: none;
    font-weight: 100;
    font-size: 15px;
}

.print{
    background: #06a006;
    padding: 5px 10px;
    border-radius: 3px;
    color: white;
    text-decoration: none;
    font-weight: 100;
    font-size: 15px;
}
</style>