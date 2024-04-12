<script setup>
import { defineComponent } from 'vue'
import QrCodeVue from 'qrcode.vue'

defineProps({
    id: Number
})
defineComponent({
    name:'printQr'
})
const emits = defineEmits()
</script>
<template>
    <transition>
        <div class="qr-wrap">
            <div class="qr-id-wrap">
                <div class="id-img">
                    <div class="front">

                    </div>
                    <div class="back">
                        <QrCodeVue :value="id.toString()" width="100px"></QrCodeVue>
                    </div>
                </div>
                <div class="row-btn">
                    <button class="print">Print</button>
                    <button class="cancel" @click="emits('close')">cancel</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
.qr-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #00000041;
    display: flex;
    justify-content: center;
}

.qr-id-wrap{
    width: 50%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.id-img{
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.front{
    width: 15rem;
    height: 20rem;
    background: var(--primary-color);
}
.back{
    width: 15rem;
    height: 20rem;
    background: var(--primary-color);
}

.row-btn{
    display: flex;
    justify-content: center;
    gap: 30px;
}

.row-btn button{
    padding: 5px 10px;
    border: none;
    color: white;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
}

.print{
    background: var(--primary-color);
}

.cancel{
    background: #497481;
}
</style>