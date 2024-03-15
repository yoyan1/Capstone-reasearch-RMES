<script setup>
import { ref } from 'vue'
import {RouterLink, RouterView } from 'vue-router'

const buttons = [
    {
        name: 'Dashboard',
        link: 'home',
        icon: 'fa-brands fa-microsoft'
    },
    {
        name: 'Students Information',
        link: 'students',
        icon: 'fa-solid fa-user-graduate'
    },
    {
        name: 'Teachers Information',
        link: '',
        icon: 'fa-solid fa-chalkboard-user'
    },
    {
        name: 'Dashboard',
        link: '',
        icon: 'fa-brands fa-microsoft'
    },
]
const active = ref('active')
const key = ref(0)
function click(keyBtn){
    key.value = keyBtn;
}
</script>
<template>
    <div class="dash-wrap">
        <div class="head">
            <div class="title">
                <img src="../components/images/helloCutie.jpg" width="40px" alt="">
                <h2>RMES</h2>
            </div>
            <div class="head-right">
                <div class="notif">
                    <i class="fa-solid fa-bell"></i>
                    <label for="">2</label>
                </div>
                 <img src="../components/images/helloCutie.jpg" width="45px" alt="">
                <div>
                    <h4>Richard Dolocanog</h4>
                    <p>Principal</p>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="sidebar">
                <div class="buttons">
                    <router-link  v-for="(button, index) in buttons" :to="button.link" @click="click(index)" v-bind="index" class="btn" :id="(index == key)? active : ''">
                        <i :class="button.icon"></i>
                        {{ button.name }}
                    </router-link>
                </div>
                <div class="action">
                    <i class="fa-solid fa-hand-sparkles"></i>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa?</p>
                    <div>
                        <button class="decline">Decline</button>
                        <button class="accept">Accept</button>
                    </div>
                </div>
                <div class="others">
                    <a href="">
                        <i class="fa-solid fa-gear"></i>
                        Setting
                    </a>
                    <a href="">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Logout
                    </a>
                </div>
            </div>
            <div class="view">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #active{
        background: #3da1ff;;
        color: white;
    }

    .dash-wrap{
        background: #f8f9fa;
    }

    .head{
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        background: white;
        box-shadow: 0px 0px 3px #646566;
    }
    .head img{
        border-radius: 100%;
    }
    .head .title, .head-right{
        display: flex;
        align-items: center;
        gap: 15px;
        text-align: center;
    }
    
    .head-right i{
        font-size: 20px;
        padding: 10px;
        background: #e6e7e7;
        border-radius: 100%;
    }

    .head-right label{
        position: relative;
        top: -10px;
        left: -10px;
        padding: 3px 5px;
        background: red;
        color: white;
        border-radius: 100px;
        font-size: 12px;
    }

    .head-right p{
        color: gray;
    }

    .main{
        display: flex;
    }

    .sidebar{
        width: 20%;
        background: white;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow:  1px 0px 3px #a9acac;
    }

    .sidebar .buttons{
        display: grid;
        text-align: left;
        padding: 10px 0;
    }

    .buttons .btn{
        padding:15px 0px 15px 15px;
        width: 94%;
    }
    .btn i{
        width: 40px;
        text-align: center;
    }
    .btn:hover{
        background: #3da1ff;
        color: white;
        
    }

    .action{
        padding: 15px;
        background: #e6e7e7;
        margin: 20px;
        display: grid;
        gap: 10px;
        border-radius: 10px;
    }

    .action div{
        display: flex;
        justify-content: space-around;
    }

    .action i{
        font-size: 25px;
        color: #ffbb00;
    }

    .action button{
        padding: 5px 10px;
        border-radius: 10px;
    }

    .action .decline{
        border: 1px solid #ff1100ad;
        background: #ffffff52;
    }
    .action .accept{
        border: 1px solid #126cc0;
        background: #126cc0;
        color: white;
    }

    .others{
        display: grid;
        text-align: bottom;
        gap: 10px;
        padding: 20px;
        height: 10%;
        border-top: 1px solid gray;
    }

    .view{
        padding: 10px;
        width: 80%;
    }
</style>