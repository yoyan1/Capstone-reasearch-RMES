<script setup>
import {ref, computed} from 'vue'
defineProps({
    Add: Function
})
const emits = defineEmits('close')
const steps = ref(1)

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



</script>
<template>
    <transition>
        <div class="add-wrap">
            <div class="add">
                <div class="title">
                    <h4>Add Students</h4>
                    <a href="#" @click.prevent="emits('close')">x</a>
                </div>
                <div class="steps">
                    <div class="step-count">
                        <p>Student information</p>
                        <p>step {{ steps }}/3</p>
                    </div>
                    <div class="lines">
                        <div class="line"></div>
                        <div :class="(steps >= 2) ? 'line' : 'line-disabled'"></div>
                        <div :class="(steps >= 3) ? 'line' : 'line-disabled'"></div>
                    </div>
                </div>
                <div class="form form-1" v-if="steps == 1">
                    <div class="input-wrap">
                        <label for="name">Fullname</label>
                        <input type="text" id="name">
                    </div>
                    <div class="input-wrap">
                        <label for="grd-lvl">Grade level</label>
                        <select name="" id="grdlvl">
                            <option value="">Grade I</option>
                            <option value="">Grade II</option>
                            <option value="">Grade III</option>
                        </select>
                    </div>
                    <div class="input-wrap">
                        <label for="section">Section</label>
                        <select name="" id="section">
                            <option value="">Kamatis</option>
                            <option value="">Manga</option>
                            <option value="">Lomboy</option>
                        </select>
                    </div>
                    <div class="input-wrap">
                        <label for="lrn">LRN</label>
                        <input type="text" id="lrn">
                    </div>
                    <a href="#" class="next" @click.prevent="steps++">Nex step</a>
                </div>
                <div class="form form-2" v-if="steps == 2">
                    <a href="#" class="back" @click.prevent="steps--"><i class="fa-solid fa-arrow-left"></i> back</a>
                    <div class="input-wrap">
                        <label for="name">Parents/Guardian</label>
                        <input type="text"  id="name">
                    </div>
                    <div class="input-wrap">
                        <label for="grd-lvl">barangay</label>
                        <select id="grdlvl" v-model="barangayInput">
                            <option v-for="barangay in addressess"  :key="barangay.barangayName" :value="barangay.barangayName">{{ barangay.barangayName }}</option>
                        </select>
                    </div>
                    <div class="input-wrap">
                        <label for="section">Street</label>
                        <select name="" id="section" v-model="streetInput">
                            <template v-for="(barangay, index) in filteredAddressess" :key="index" >
                                <option v-for="street in barangay.streets" :key="street.streetName"> {{ street.streetName }} </option>
                            </template>
                        </select>
                    </div>
                    <div class="input-wrap">
                        <label for="section">Zone</label>
                        <select name="" id="section" >
                            <template v-for="(barangay, index) in filteredAddressess" :key="index" >
                                <template v-for="street in barangay.streets">
                                    <option v-for="zone in street.zones" :key="zone">{{ zone }}</option>
                                </template>
                            </template>
                        </select>
                    </div>
                    <a href="#" @click.prevent="steps++" class="next">Nex step</a>
                </div>
                <div class="form form-3" v-if="steps==3">
                    <a href="#" class="back" @click.prevent="steps--"><i class="fa-solid fa-arrow-left"></i> back</a>
                    <!-- <div class="input-wrap">
                        <label for="name">Parents/Guardi</label>
                        <input type="text" id="name">
                    </div>
                    <div class="input-wrap">
                        <label for="grd-lvl">Grade level</label>
                        <select name="" id="grdlvl">
                            <option value="">Grade I</option>
                            <option value="">Grade II</option>
                            <option value="">Grade III</option>
                        </select>
                    </div>
                    <div class="input-wrap">
                        <label for="section">Section</label>
                        <select name="" id="section">
                            <option value="">Kamatis</option>
                            <option value="">Manga</option>
                            <option value="">Lomboy</option>
                        </select>
                    </div>
                    <div class="input-wrap">
                        <label for="lrn">LRN</label>
                        <input type="text" id="lrn">
                    </div> -->
                    <a href="#" @click.prevent="steps++" class="next">Nex step</a>
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
.add-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00000070;
    height: 100vh;
}

.add{
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: white;
    border-radius: 5px;
    width: 50vh;
    padding: 15px;
}

.title{
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
}
.title a:hover{
    color: red;
}

.step-count{
    display: flex;
    justify-content: space-between;
}

.lines{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
}

.lines .line{
    height: 3px;
    background: #1079db;
    width: 33%;
    border-radius: 20px;
}
.lines .line-disabled{
    height: 3px;
    background: #d3d5d6;
    width: 33%;
    border-radius: 10px;
}

.form{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.input-wrap{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input-wrap label{
    font-size: 15px;
}

.input-wrap input, .input-wrap select{
    border: 1px solid #d3d5d6;
    padding: 9px;
    border-radius: 5px;
}

.form .next{
    text-align: center;
    padding: 9px;
    background: #1079db;
    color: white;
    font-weight: 400;
    border-radius: 5px;
    margin-top: 10px;
}

.form .back{
    text-align: left;
    color: #1079db;
    font-weight: 400;
}
</style>