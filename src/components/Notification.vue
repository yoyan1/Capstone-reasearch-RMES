<script>

</script>
<template>
    <transition>
        <div class="wrap">
            <div class="notif-wrap">
                <div class="title">
                    <h2>Notification</h2>
                </div>
                <div class="notif-list">
                    <div class="notif">
                        <div><i class="fa-solid fa-circle"></i></div>
                        <div>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                            <p>Mar 18, 2024 at 6:00 AM</p>
                        </div>
                        <i class="fa-solid fa-circle-exclamation"></i>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.wrap{
    position: fixed;
    top: 64px;
    right: 0;
    width: 35%;
    display: flex;
    align-items: left;
    padding: 0 20px;
    height: 100vh;
    z-index: 1;
}

.notif-wrap{
    background: white;
    width: 65vh;
    height: 90vh;
    box-shadow: 0px 2px 5px #acadad;
}

.title{
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;

}

.title h2{
    font-weight: 100;
}



.notif-list{
    padding: 0 20px;
}

.notif{
    display: flex;
    gap: 20px;
    align-items: center;
    border-bottom: 1px solid #b2b4b6;
    padding: 15px 0;
}

.notif div{
    display: grid;
    gap: 5px;
}

.notif p{
    font-size: 15px;
    color: gray;
}

.notif i{
    color: #ff0000;
    font-size: 30px;
}

.notif div i{
    color: #2f78e4;
    font-size: 12px;
}
</style>