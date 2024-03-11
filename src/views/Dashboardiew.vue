<script setup>
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
                    <router-link v-for="button in buttons" :to="button.link" class="btn">
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
    .dash-wrap{
        background: #e2e5e7;
    }

    .head{
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        background: white;
    }
    .head img{
        border-radius: 100%;
    }
    .head .title, .head-right{
        display: flex;
        align-items: center;
        gap: 20px;
        text-align: center;
    }
    
    .head-right i{
        font-size: 20px;
    }

    .head-right label{
        position: relative;
        top: -10px;
        left: -5px;
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
    }

    .sidebar .buttons{
        display: grid;
        gap: 10px;
        text-align: left;
        padding: 10px 0;
    }

    .buttons .btn{
        padding:15px 0px 15px 40px;
        width: 84%;
    }
    .btn i{
        width: 40px;
        text-align: center;
    }
    .btn:hover{
        background: #126cc0;
        color: white;
    }

    .action{
        padding: 15px;
        background: #d1d2d3;
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
        border: 1px solid red;
        background: #ff000052;
    }
    .action .accept{
        border: 1px solid green;
        background: #00ff0052;
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
        padding: 30px;
        width: 80%;
    }
</style>