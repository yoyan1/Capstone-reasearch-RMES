<template>
  <div class="container">
    <form action="/dashboard">
      <img src="" alt="">
      <h1>LOG IN</h1>
      <input type="text" placeholder="Email: ex (ramon@gmail.com)">
      <div class="wrap">
        <input type="password" placeholder="Password"><br>
        <a href="">forgot Password?</a>
      </div>
      <button>Log In</button>
    </form>
  </div>
</template>

<style>
.container{
  background: #126cc0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form{
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 40px;
  background: white;
  border-radius: 3px;
}

form h1{
  color: black;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
}

.wrap{
  text-align: right;
}

.wrap a{
  text-decoration: none;
  color: #56595c;
  font-size: 12px;
}

form input{
  padding: 10px 15px;
  background: #babfc4;
  border: none;
  border-radius: 5px;
  width: 13rem;
}

form button{
  padding: 10px;
  border: none;
  background: #126cc0;
  color: white;
  border-radius: 5px;
}

form button:hover{
  background: #3491e7;
}

</style>
