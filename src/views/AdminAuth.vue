<template>
  <div class="container">
    <form action="/dashboard/home">
      <img src="../components/images/RMES-logo.png" width="80px" alt="">
      <h1>Welcome back!</h1>
      <p>Incorrect Email or Password</p>
      <div>
        <label for="">Email</label><br>
        <input type="text" placeholder="Email">
      </div>
      <div class="wrap">
        <div>
          <label for="psw">Password</label><br>
          <input type="password" placeholder="Password"><br>
        </div>
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
  color: #56595c;
}

form{
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px;
  background: white;
  border-radius: 20px;
}

form label{
  font-size: 15px;
}

form h1{
  color: black;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
}

.wrap a{
  text-decoration: none;
  color: #56595c;
  font-size: 15px;
  display: flex;
  justify-content: right;
}

form input{
  padding: 13px 15px;
  background: #babfc44f;
  border: none;
  border-radius: 5px;
  width: 15rem;
}

form input:focus{
  outline-color: #126cc0;
}

form button{
  padding: 10px 30px;
  width: 15rem;
  border: none;
  background: #126cc0;
  color: white;
  border-radius: 5px;
}

form button:hover{
  background: #3491e7;
}

</style>
