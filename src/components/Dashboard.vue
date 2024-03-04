<script setup>

</script>
<template>
    <h1>Welcome Admin!</h1>
    <div class="dashboard">
        <div class="students">
            <div>
                <h4>Students</h4>
                <p>1,300</p>
            </div>
            <i>icon</i>
        </div>
        <div class="advisers">
            <div>
                <h4>Advisers</h4>
                <p>50</p>
            </div>
            <i>icon</i>
        </div>
        <div class="barangay">
            <div>
                <h4>Barangay</h4>
                <p>12</p>
            </div>
            <i>icon</i>
        </div>
    </div>
    <div class="chart">

    </div>
</template>
<style>
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
    display: flex;
    gap: 50px;
    align-items: center;
    padding: 10px;
    color: white;
    border-radius: 3px;
}
.students{
    background:  #126cc0;
}

.advisers{
    background:  #a6c731;
}

.barangay{
    background:  red;
}

.students div, .advisers div, .barangay div{
    display: grid;
    gap: 10px;
}

.chart{
    margin-top: 10px;
    height: 57vh;
    background: white;
}
</style>