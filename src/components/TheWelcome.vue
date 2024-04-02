<script setup>

</script>
<template>
  <div class="container">
    <div class="head">
      <div class="school-wrap">
        <img src="./images/RMES-logo.png" width="70px" alt="">
        <div>
          <h3>Ramon Magsaysay Elementary School</h3>
          <p>san carlos City</p>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="left">
        <div class="the-welcome">
          <h1>WELCOME</h1>
          <div class="btn">
            <a href="/admin" class="a1">Admin</a>
            <a href="/admn" class="a2">Lorem ipsum</a>
          </div>
        </div>
        <div class="contact">
          <h4>Ramon Magsaysay Elementary School</h4>
          <p>Email: www.ramon.edu.ph</p>
        </div>
      </div>
      <div class="right">
        <img src="./images/border.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  background: #126cc0;
}

.head{
  display: flex;
  justify-content: space-between;
  color: white;
}

.wrapper{
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  color: white;
}

h1{
  color: white;
  font-weight: 100;
  font-size: 50px;
}

.the-welcome{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
}

.school-wrap{
  display: flex;
  gap: 10px;
  align-items: center;
  background: #16161642;
  padding-right: 60px;
  margin-top: 10px;
}

.school-wrap img{
  padding-left: 50px;
  background: white;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px
}
.btn{
  display: flex;
  gap: 30px;
  margin-left: 20px;
}

.btn a{
  padding: 10px 20px;
  background: #18b0ec;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn .a2{
  background: #2f8fe9;
}

.left{
  padding: 50px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right{
  height: 86.4vh;
  background: white;
  width: 50%;
  border-top-left-radius: 100%;
}

.right img{
  padding: 30px 0 0 50px;
  width: 30rem;
}

.contact{
  text-align: center;
}

.contact h4, p{
  font-weight: 100;
}

.contact p{
  font-size: 13px;
}
</style>