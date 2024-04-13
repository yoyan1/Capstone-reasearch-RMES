<script setup>
import {defineComponent} from 'vue'
const emits = defineEmits('edit')
defineComponent({
    name: 'StudentInfo'
})

defineProps({
    studentData: Object
})

</script>
<template>
    <div class="person-info">
        <h1>Students Information</h1>
        <div class="profile">
            <img src="../components/images/avatar.avif" width="80px" alt="">
            <h2>{{ studentData.name }}</h2>
            <p>Stud id: {{ studentData.id }}</p>
        </div>
        <div class="details">
            <h3>Basic Details</h3>
            <div>
                <div>
                    <p class="label-details">Grade Level</p>:
                    <p class="info-details">{{ studentData.gradeLevel }}</p>
                </div>
                
            </div>
            <div>
                <div>
                    <p class="label-details">Section</p>:
                    <p class="info-details">{{ studentData.section }}</p>
                </div>
            </div>
            <div>
                <div>
                    <p class="label-details">Gender</p>:
                    <p class="info-details">{{ studentData.gender }}</p>
                </div>
            </div>
            <div>
                <div>
                    <p class="label-details">LRN No.</p>:
                    <p class="info-details">{{ studentData.LRN }}</p>
                </div>
            </div>
            <div>
                <div>
                    <p class="label-details">Parents/Guardian</p>:
                    <p class="info-details">{{ studentData.parents }}</p>
                </div>
            </div>
            <div>
                <div>
                    <p class="label-details">Phone #</p>:
                    <p class="info-details">{{ studentData.phoneNumber }}</p>
                </div>
            </div>
            <div>
                <p class="label-details">Address</p>:
                <p class="info-details">{{ studentData.street }}, Brgy. {{ studentData.barangay }}, {{ studentData.city }}, {{ studentData.province }}</p>
            </div>
        </div>
        <div class="action">
            <i @click.prevent="emits('edit', true, studentData.id)"  class="fa-regular fa-pen-to-square" style="color: var(--primary-color)"></i>
            <i @click="emits('report', studentData.id)" class="fa-solid fa-triangle-exclamation" style="color:orange"></i>
            <i @click="emits('delete', studentData.id)" class="fa-solid fa-trash" style="color:red"></i>
        </div>
        <div class="btn-download">
            <button @click="emits('print', studentData.id)">Print Qr</button>
        </div>
    </div>
</template>
<style scoped>
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
.action{
    display: flex;
    gap: 10px;
    justify-content: right;
    padding: 10px 15px;
}

.action i{
    cursor: pointer;
}

.btn-download{
    display: flex;
    justify-content: right;
    padding:10px 20px;
}

.btn-download button{
    padding: 5px 10px;
    border:none;
    background: var(--primary-color);
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
</style>