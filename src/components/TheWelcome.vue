<script setup>

</script>
<template>
  <div class="container">
    <div class="head">
      <img src="" alt="">
      <h2>STUDENTS MONITORING SYSTEM</h2>
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
        
      </div>
    </div>
  </div>
</template>

<style>
.container{
  background: #126cc0;
}

.head{
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
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
  font-size: 40px;
}

.btn{
  margin-top: 50px;
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
  display: grid;
}

.right{
  height: 100vh;
  background: white;
  width: 50%;
  border-top-left-radius: 100%;
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