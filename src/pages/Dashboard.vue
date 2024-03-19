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
    <!-- <div class="chart">

    </div> -->
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
    color: white;
    border-radius: 3px;
    display: grid;
    gap: 10px;
    width: 20%;
    align-content: start;
}
.students{
    background:  #9186f5;
}

.advisers{
    background:  #3183c7;
}

.barangay{
    background:  #3ca5ce;
}

.dash-con{
    display: flex;
    align-items: center;
    gap: 10px;
}

.dash-con i{
    padding: 10px 10px;
    background: #00000062;
    font-size: 25px;
    border-radius: 3px;
}

.dashboard p{
    font-size: 15px;
}

.chart{
    margin-top: 10px;
    height: 60vh;
    background: white;
}
</style>