<script setup>

</script>
<template>
  <div class="container">
    <div class="wrapper">
      <div class="left">
    <div class="head">
      <div class="school-wrap">
        <img src="./images/RMES-logo.png" width="70px" alt="">
        <div>
          <h3>Ramon Magsaysay Elementary School</h3>
          <h5>san carlos City</h5>
        </div>
      </div>
    </div>
        <div class="the-welcome">
          <h1>STUDENTS MONITORING SYSTEM</h1>
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

<style scoped>

.container{
  background: url(./images/children.jpg);
}

.head{
  display: flex;
  justify-content: space-between;
  color: white;
}
.school-wrap{
  display: flex;
  background: var(--primary-color);
  gap: 5px;
  width: 100vh;
  padding: 0;
  box-shadow:inset 0px 1px 5px #ffffff
}

.school-wrap img{
  padding-left: 50px;
  background: white;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  box-shadow:inset 0px 1px 5px #111111
}

.school-wrap h3{
  padding-top: 10px;
}

.school-wrap h5{
  text-align: center;
}

.wrapper{
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
}

.left{
  padding-bottom:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1{
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;
}

.the-welcome{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  gap: 5rem;
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
  font-size: 20px;
  box-shadow: 1px 1px 5px #242424;
}

.btn .a2{
  background: #2f8fe9;
}


.right{
  height: 100vh;
  background: rgb(255, 255, 255);
  width: 50%;
  border-top-left-radius: 100%;
}

.contact{
  text-align: center;
}

.contact h4, p{
  font-weight: 100;
  font-size: 20px;
}

.contact p{
  font-size: 13px;
}
</style>