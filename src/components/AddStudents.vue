<script setup>
import {ref} from 'vue'
defineProps({
    Add: Function
})
const emits = defineEmits('close')

const steps = ref(1)
const isFirstStep = ref(true)
const isSecondeStep = ref(false)
const isThird = ref(false)
const isSecond = ref(false)

function next(){
    if(isFirstStep){
        isFirstStep.value = false
        isSecondeStep.value = true
        isSecond.value = true
        steps.value += 1;
    }
    else if(isSecondeStep){
        isThird.value = !isThird.value
        isSecondeStep.value = !isSecondeStep.value
        isFirstStep.value = false
    } 
}

function back(){
    if(isSecondeStep){
        isFirstStep.value = !isFirstStep.value
        isSecond.value = !isSecondeStep.value
        isSecondeStep.value = !isSecondeStep.value
        steps.value -= 1;
    } else{
        isSecond.value = !isSecondeStep.value
        isSecondeStep.value = !isSecondeStep.value
        steps.value -= 1;
    }
}
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
                        <div :class="(isSecond) ? 'line' : 'line-disabled'"></div>
                        <div :class="(isThird) ? 'line' : 'line-disabled'"></div>
                    </div>
                </div>
                <div class="form form-1" v-if="isFirstStep">
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
                    <a href="#" class="next" @click.prevent="next">Nex step</a>
                </div>
                <div class="form form-2" v-if="isSecondeStep">
                    <a href="#" class="back" @click.prevent="back"><i class="fa-solid fa-arrow-left"></i> back</a>
                    <div class="input-wrap">
                        <label for="name">Parents/Guardian</label>
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
                    <a href="#" @click.prevent="next" class="next">Nex step</a>
                </div>
                <div class="form form-3" v-if="isThird">
                    <a href="#" class="back" @click.prevent="back"><i class="fa-solid fa-arrow-left"></i> back</a>
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
                    <a href="#" @click.prevent="next" class="next">Nex step</a>
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