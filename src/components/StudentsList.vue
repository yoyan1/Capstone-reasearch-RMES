<script>
import {computed} from 'vue'
export default{
    data () {
        return{
            active: 'active',
        }
    },
    props: ['filteredStudents', 'activeKey'],
    setup(props) {
        //define computed property based on a group
        const recievedFilteredStudents = computed(() => {
            return props.filteredStudents
        })
        return {
            recievedFilteredStudents
        }
    }
}
</script>
<template>
    <div class="dta-tble">
                <table  v-if="recievedFilteredStudents !== null">
                    <tr>
                        <th>Profile</th>
                        <th>name</th>
                        <th>LRN</th>
                        <th>Barangay</th>
                        <th>Street</th>
                        <th>Zone</th>
                    </tr>
                    <tr v-for="(student, index) in recievedFilteredStudents" :key="student.id" @click="emits('show', index)" class="list" :id="(activeKey == index) ? active : ''">
                        <td><img src="../components/images/avatar.avif" width="40px" alt=""></td>
                        <td>
                            <h4>{{ student.name }}</h4>
                            <p>Grade {{ student.gradeLevel }}</p>
                        </td>
                        <td><p>{{ student.LRN }}</p></td>
                        <td><p>{{ student.barangay }}</p></td>
                        <td><p>{{ student.street }}</p></td>
                        <td><p style="text-align:center">{{ student.zone }}</p></td>
                        
                    </tr>
                </table>
                <div style="text-align:center" v-else>
                   <div>No data found</div>
                </div>
            </div>
</template>
<style scoped>
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
</style>