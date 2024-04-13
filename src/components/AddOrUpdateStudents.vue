<script setup>
import { defineComponent, ref, computed, onMounted} from 'vue'

defineProps({
    // student: Object,
    isAdd: Boolean,
    gradeLevels: Array,
})

defineComponent({
    name: 'addOrUpdate'
})

// Define emits to close the component
const emits = defineEmits('close')
const step = ref(1)
const studentData = ref({
        LRN: '',
        name: '',
        gender: '',
        parents: '',
        city: '',
        barangay: '',
        street: '',
        province: '',
        zone: '',
        phoneNumber: '',
        gradeLevel: '',
        section: '',
        adviser: '',
    })

// onMounted(() =>{
//     studentData.name.value = student.name
// })

const addressess = ref([
    {
        barangayName: 'Guadalupe',
        streets: [
            {
                streetName: 'Mabuni',
                zones: [1, 2, 3, 4]
            },
            {
                streetName: 'Panuolan',
                zones: [1, 2, 3, 4]
            }
        ]
    },
    {
        barangayName: 'Vuluangan',
        streets: [
            {
                streetName: 'ambot',
                zones: [4, 3, 2, 1]
            },
            {
                streetName: 'Mabuni',
                zones: [1, 2, 3, 4]
            }
        ]
    }
])
const barangayInput = ref('')
const streetInput = ref('')
const zoneInput = ref('')

const filteredAddressess = computed(() => {
    const selectedBarangay = barangayInput.value.toLowerCase()
    const selectedStreet = streetInput.value.toLowerCase()
    return addressess.value.filter(address =>
        address.barangayName.toLowerCase().includes(selectedBarangay) &&
        (selectedStreet === '' || address.streets.some(street => street.streetName.toLowerCase().includes(selectedStreet)))
    )
})

function addOrUpdate(){
    if (isAdd) {
        
    } else{
        studentData
    }
}

const fileInput = ref(null);
const selectedFile = ref(null);
const image = ref(null)

function onFileChange(e) {
              const file = e.target.files[0];
              if (!file) {
                return;
              }
              const reader = new FileReader();
          
              reader.onload = (e) => {
                image.value = e.target.result;
              };
          
              reader.readAsDataURL(file);
            }

function edit(key){
    step.value = key
}

</script>
<template>
    <transition>
        <div class="container">
            <div class="steps">
                <div class="step-wrap" :class=" step >= 1 ? 'mark-done' : ''">
                    <i :class="step >= 2 ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check'"></i>
                    <p>Personal Details</p>
                </div>
                <div class="step-wrap" :class=" step >= 2 ? 'mark-done' : ''">
                    <i :class="step >= 3 ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check'"></i>
                    <p>Educational Details
                    </p>
                </div>
                <div class="step-wrap" :class=" step >= 3 ? 'mark-done' : ''">
                    <i :class="step >= 4 ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check'"></i>
                    <p>Upload Documents</p>
                </div>
                <div class="step-wrap" :class=" step >= 4 ? 'mark-done' : ''">
                    <i :class="step >= 5 ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check'"></i>
                    <p>Previe Form</p>
                </div>
            </div>
            <div class="form-wrap">
                <form action="">
                    <div class="step-1 form" :style="step == 1? 'display: block' : 'display: none'">
                        <p>1. Personal Detail</p>
                        <div class="input">
                            <div class="left">
                                <div class="input-wrap">
                                    <label for="name">Name of the Student</label><br>
                                    <input type="text" v-model="studentData.name">
                                </div>
                                <div class="input-wrap">
                                    <label for="token">Mobile Token</label><br>
                                    <input type="text" v-model="studentData.phoneNumber">
                                </div>
                                <div class="input-wrap selection">
                                    <label for="gender">Gender</label><br>
                                    <div>
                                        <input type="radio" name="gender" id="male">
                                        <label for="male">Male</label>
                                        <input type="radio" name="gender" id="female">
                                        <label for="female">Female</label>
                                    </div>
                                </div>
                                <div class="input-wrap">
                                    <label for="token">Date of Birth</label><br>
                                    <input type="date">
                                </div>
                            </div>
                            <div class="right">
                                <div class="input-wrap">
                                    <label for="city/province">City / Province</label><br>
                                    <select name="" id="city/province">
                                        <option value="">San Carlos City, Negros Occidental</option>
                                        <option value="">Canlaon City, Negros Oriental</option>
                                    </select>
                                </div>
                                <div class="input-wrap">
                                    <label for="barangay">Barangay</label><br>
                                    <select name="" id="barangay">
                                        <option value="">Guadalupe</option>
                                        <option value="">Buluangon</option>
                                    </select>
                                </div>
                                <div class="input-wrap">
                                    <label for="street">Street</label><br>
                                    <select name="" id="street">
                                        <option value="">Mabuni</option>
                                        <option value="">Panuolan</option>
                                    </select>
                                </div>
                                <div class="input-wrap">
                                    <label for="zonw">Zone</label><br>
                                    <select name="" id="zone">
                                        <option value="">Guadalupe</option>
                                        <option value="">Buluangon</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="btn">
                            <a href="" @click.prevent="emits('close')">Cancel</a>
                            <a href="" class="button" @click.prevent="step++">Proceed</a>
                        </div>
                    </div>
                    <div class="step-2 form" :style="step == 2? 'display: block' : 'display: none'">
                        <p>2. Educational Detail</p>
                        <div class="input">
                            <div class="left">
                                <div class="input-wrap">
                                    <label for="lrn">LRN</label><br>
                                    <input type="number">
                                </div>
                                <div class="input-wrap">
                                    <label for="grdlvl">grade Level</label><br>
                                    <select name="" id="grdlvl">
                                        <option value="" v-for="grade in gradeLevels" :key="grade">Grade {{grade}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="right">
                                <div class="input-wrap">
                                    <label for="section">Section</label><br>
                                    <input type="text" id="section">
                                </div>
                                <div class="input-wrap">
                                    <label for="adviser">Adviser</label><br>
                                    <input type="text" id="adviser">
                                </div>
                            </div>
                        </div>
                        <div class="btn">
                            <a href="" @click.prevent="step--">Back</a>
                            <a href="" class="button" @click.prevent="step++">Proceed</a>
                        </div>
                    </div>
                    <div class="step-3 form" :style="step == 3? 'display: block' : 'display: none'">
                        <p>3. Upload Documents</p>
                        <div class="input">
                            <label for="image">
                                <div v-if="!image">
                                    <i class="fa-solid fa-cloud-arrow-up"></i>
                                    <p>upload your profile</p>
                                </div>
                                <img class="img" :src="image" alt="" v-else>
                            </label>
                            <input type="file" @change="onFileChange"  name="" id="image" style="display:none">
                        </div>
                        <div class="btn">
                            <a href="" @click.prevent="step--">Back</a>
                            <a href="" class="button" @click.prevent="step++">Proceed</a>
                        </div>
                    </div>
                    <div class="step-4 form" :style="step == 4? 'display: block' : 'display: none'">
                        <p>4. Preview form</p>
                        <div class="form-info">
                            <div class="profile-wrap">
                                <div class="profile">
                                    <img :src="image" width="60px" height="60px" alt="">
                                    <div class="profile-name">
                                        <h4>Roland Clarion</h4>
                                        <p>Grade III</p>
                                    </div>
                                </div>
                                <i class="fa-regular fa-pen-to-square" @click="edit(3)"></i>
                            </div>
                            <div class="add-info">
                                <div class="action-info">
                                    <h4>Educational Details</h4>
                                    <i class="fa-regular fa-pen-to-square" @click="edit(2)"></i>
                                </div>
                                <div class="info-wrap">
                                    <div class="info-left">
                                        <h5>LRN: </h5>
                                        <h5>Adviser: </h5>
                                    </div>
                                    <div class="info-right">
                                        <h5>Grade: </h5>
                                        <h5>Section: </h5>
                                    </div>
                                </div>
                                <div class="action-info">
                                    <h4>Personal Details</h4>
                                    <i class="fa-regular fa-pen-to-square" @click="edit(1)"></i>
                                </div>
                                <div class="info-wrap">
                                    <div class="info-left">
                                        <h5>LRN: </h5>
                                        <h5>Adviser: </h5>
                                    </div>
                                    <div class="info-right">
                                        <h5>Grade: </h5>
                                        <h5>Section: </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn">
                            <button class="button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>
<style scoped>
    .container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #797b7c8f;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .steps{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 30px;
        background: white;
    }

    .steps .step-wrap{
        display: flex;
        gap: 20px;
        padding: 20px 20px;
        font-size: 15px;
    }

    .mark-done{
        border-bottom: 3px solid var(--primary-color);
    }

    .mark-done i{
        color: var(--primary-color);
    }

    .mark-done p{
        font-weight: 600;
    }

    .form-wrap{
        background: white;
        width: 60%;
    }

    .form p{
        font-weight: 600;
        padding: 20px;
        border-bottom:1px solid #e9e6e6 ;
    }

    .input{
        display: flex;
        gap: 10rem;
        padding: 15px 20px;
    }

    .input label{
        font-size: 14px;
        color: #414040;
    }

    .left, .right{
        padding: 10px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .form-wrap input, select{
        padding: 8px 10px;
        border: 1px solid #e5e7e7;
        background: #e5e7e7;
        width: 15rem;
        border-radius: 3px;
    }

    .input-wrap{
        padding: 20px 0;
    }

    .form-wrap input:focus, select:focus{
        outline: 0;
        border: 0;
        border: 1px solid var(--primary-color);
    }

    .selection div{
        display: flex;
        width: 10rem;
        padding: 10px;
    }

    .btn{
        padding: 20px;
        display: flex;
        justify-content: right;
        gap: 30px;
        border-top: 1px solid #e9e6e6;
    }

    .btn a, .btn .button{
        padding: 5px 10px;
        color: white;
    }

    .btn a{
        background: #55a0c0;
    }
    .btn a:hover{
        background: var(--primary-color);
    }
    .btn .button{
        background:  var(--primary-color);
        border: none;
        font-size: 15px;
    }

    .btn .button:hover{
        background: #69b4d4;
    }
    .step-3 .input{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .step-3 .input label{
        width: 100%;
        height: 45vh;
        padding: 10px;
        border: dotted rgb(223, 220, 220);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
    }

    .step-3 i{
        font-size: 50px;
        padding: 50px;
        border-radius: 50%;
        border: dotted #c0b9b9;
    }

    .step-3 .img{
        height: 40vh;
    }

    .step-4 img{
        border-radius: 100%;
    }

    .form-info{
        padding: 10px 20px;
    }

    .profile-wrap{
        display: flex;
        justify-content: space-between;
    }

    .step-4 .profile p{
        padding: 0;
        color: #676868;
        font-size: 13px;
        border: none;
    }

    .add-info{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 0;
    }

    .action-info{
        display: flex;
        justify-content: space-between;
    }

    .info-wrap{
        display: flex;
        gap: 10rem;
    }

    .add-info h5{
        font-family: 100;
        color: #414040;
    }

    .step-4 i{
        cursor:pointer;
    }

    .step-4 i:hover{
        color: var(--primary-color)
    }
</style>