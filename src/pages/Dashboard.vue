<script setup>

</script>
<template>
    <h1>Welcome Admin!</h1>
    <div class="dashboard">
        <div class="students">
            <div class="dash-con">
                <i class="fa-solid fa-graduation-cap"></i>
                <div>
                    <p>Total Students</p>
                    <h4>1,300</h4>
                </div>
            </div>
            <div class="attnd">
                <p>Total absent: <b>10</b></p>
                <p>Present: <b>1290</b></p>
            </div>
        </div>
        <div class="advisers">
            <div class="dash-con">
                <i class="fa-solid fa-chalkboard-user"></i>
                <div>
                    <p>Total Advisers</p>
                    <h4>50</h4>
                </div>
            </div>
        </div>
        <div class="barangay">
            <div class="dash-con">
                <i class="fa-solid fa-landmark"></i>
                <div>
                    <p>Total Barangay</p>
                    <h4>12</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="chart">

        </div>
        <div class="analytics">

        </div>
    </div>
</template>

<style scoped>
h1{
    color: black;
    font-size: 20px;
    margin-bottom:10px ;
}

.dashboard{
    display: flex;
    gap: 30px;

}

.students, .advisers, .barangay{
    padding: 20px;
    border-radius: 3px;
    display: grid;
    gap: 10px;
    width: 20%;
    align-content: start;
    background: white;
    box-shadow: 0 0 5px #c5c5c5;
}
.students i{
    background:  #9186f5;
}

.advisers i{
    background:  #3183c7;
}

.barangay i{
    background:  #3ca5ce;
}

.students{
    border: 1px solid #9186f5;
}

.advisers{
    border: 1px solid #3183c7;
}

.barangay{
    border: 1px solid #3ca5ce;
}

.dash-con{
    display: flex;
    align-items: center;
    gap: 10px;
}

.dash-con i{
    padding: 10px 10px;
    font-size: 25px;
    border-radius: 3px;
    color: white;
}

.dashboard p{
    font-size: 15px;
}


.bottom{
    display: flex;
    gap: 20px;
}
.chart{
    margin-top: 10px;
    width: 45%;
    height: 60vh;
    background: white;
    box-shadow: 0px 0px 5px #c5c5c5;
}

.analytics{
    margin-top: 10px;
    width: 45%;
    height: 60vh;
    background: white;
    box-shadow: 0px 0px 5px #c5c5c5;
}
</style>