
function validateEmail(email){
    return email.includes("@gmail.com") ? "Valid Email" : "Non valid email"
 }



function Login() {
    return (
      <>
        <input type="text" placeholder="Enter your E-mail" />
        <br />
        <input type="text" placeholder="Enter your password" />
        <br />
        <button> Enter </button>
      </>
    );
  }
  
  export default Login;
  