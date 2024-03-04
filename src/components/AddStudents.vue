<script setup>
defineProps({
    Add: Function
})
const emits = defineEmits('close')

</script>
<template>
    <transition>
        <div class="add-wrap">
            <div class="add">
                <div class="title">
                    <h1>Add Students</h1>
                    <a href="#" @click.prevent="Add()">x</a>
                </div><hr>
                <div class="form">
                    <div class="input-wrap">
                        <div>
                            <label for="">firstame</label><br>
                            <input type="text" name="" id="">
                        </div>
                        <div>
                            <label for="">lastname</label><br>
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<style>
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
    display: grid;
    gap: 10px;
    background: white;
    border-radius: 5px;
}

.title{
    display: flex;
    justify-content: space-between;
    width: 85%;
    padding: 10px 30px 0 30px;
}
.title a:hover{
    color: red;
}

.input-wrap{
    padding: 10px 30px;
    display: flex;
    gap: 20px;
}

.input-wrap label{
    font-size: 12px;
    color: gray;
}

.input-wrap input{
    padding: 5px 10px;
    background: #bfc2c5;
    border: none;
    border-radius: 3px;
}
</style>