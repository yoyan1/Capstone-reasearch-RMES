<script setup>

</script>
<template>
    <div class="wrapper">
        <div class="request-wrapper">
            <div class="request">
                <div class="title">
                    <h2>Requests</h2>
                    <div class="action">
                        <button class="accept">Accept All</button>
                        <button class="decline">Decline All</button>
                    </div>
                </div>
                <div class="request-list">
                    <div class="request-body">
                        <img src="../components/images/avatar.avif" width="70px" alt="">
                        <div class="text">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div class="action">
                            <button class="accept">Accept</button>
                            <button class="decline">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-wrap">
            <div class="request">
                <div class="title">
                    <h4>Account creation requests</h4>
                    <div class="action">
                        <button class="accept">Accept All</button>
                        <button class="decline">Decline All</button>
                    </div>
                </div>
                <div class="request-list">
                    <div class="request-body">
                        <img src="../components/images/avatar.avif" width="50px" alt="">
                        <div class="text">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div class="action">
                            <button class="accept">Accept</button>
                            <button class="decline">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper{
    display: flex;
    justify-content: space-between;
}

.request-wrapper{
    width: 50%;
    height: 80vh;
    background: white;
    padding: 20px;
    border-radius:3px;
    box-shadow:  0 0 5px #babbbb;
}

.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  10px 0;
    border-bottom:  1px solid gray;
}

.action{
    display: flex;
    gap: 20px;

}

.action button{
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
}

.action .accept{
    background: #1079db;
    color: white;
}

.accept:hover{
    background: #60abf1;
}

.action .decline{
    background: #e06363;
    color: white;
}

.decline:hover{
    background: #f73838;
}

.request-list{
    max-height: 72vh;
    overflow-y: scroll;
}

.request-body{
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 20px;
}

/* request infromation */
.info-wrap{
    width: 40%;
    height: 80vh;
    background: white;
    padding: 20px;
    border-radius:3px;
    box-shadow:  0 0 5px #babbbb;
}
</style>