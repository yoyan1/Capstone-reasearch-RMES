<script setup>
import { defineComponent } from 'vue';

defineComponent({
    title: 'Report'
})

const emits = defineEmits()
</script>
<template>
    <transition>
        <div class="report-con">
            <div class="form-report">
                <div class="title">
                    <h4>Report student</h4>
                    <i class="fa-solid fa-xmark" @click="emits('close')"></i>
                </div>
                <form action="">
                    <div class="input-wrap">
                        <label for="">send to</label>
                        <select title="" id="">
                            <option value="">All</option>
                            <option value="">Parents Only</option>
                            <option value="">Principal Only</option>
                            <option value="">Barangay Only</option>
                        </select>
                    </div>
                    <div class="title">
                        <h4>Your Message</h4>
                        <p>report Roland Clarion</p>
                    </div>
                    <textarea title="" id="" cols="30" rows="10" placeholder="Write Something Here...."></textarea>
                    <div class="btn">
                        <button> <i class="fa-solid fa-paper-plane"></i> Send</button>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>
<style scoped>
.report-con{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #00000041;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-report{
    padding: 20px;
    border-radius: 5px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}


form{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title{
    width:80vh;
    text-align: left;
    display: flex;
    justify-content: space-between;
}

form .title{
    width:76vh;
    padding: 5px 0;

}

.title p{
    font-size: 12px;
    color: #5f5f5f;
}

.title i:hover{
    color:red;
}

.title h4{
    font-size: 15px;
    color: #1d1d1d;
}

form textarea{
    width: 70vh;
    max-width: 70vh;
    min-width: 70vh;
    height: 20vh;
    min-height: 15vh;
    max-height: 15vh;
    padding: 20px;
    border: 1px solid #a8a6a6;
    border-radius: 10px;
    background: #f2f2f37c;
}

textarea:focus{
    outline: 0;
    border: 1px solid #a8a6a6;
}

.input-wrap{
    display: flex;
    align-items: center;
    gap: 10px;
    width:75vh;
    padding: 10px 0;
}

.input-wrap select{
    padding: 5px 20px;
    width: 80%;
    border: 1px solid #a8a6a6;
    border-radius: 5px;
    background: none;
}


.btn{
    width: 75vh;
    padding: 10px 0;
    display: flex;
    justify-content: right;
}

.btn button{
    padding: 5px 20px;
    border: none;
    background: var(--primary-color);
    color: white;
    border-radius: 5px;
    font-size: 15px;
}
</style>