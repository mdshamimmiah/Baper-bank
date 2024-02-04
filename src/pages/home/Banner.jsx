import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Banner = () => {
  const navigate = useNavigate();
  // const [inputValue, setInputValue] = useState('');
  // const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email);
    const password = form.password.value;
    const value = {email, password}
    console.log(value);
    // setInputValue(form)
    
    // setIsSubmitDisabled(!inputValue.trim())
    
    // console.log(email,password);
    if (email === "shamim@gmail.com" & password === "75859") {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "you are login successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/balance")
     
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You some mistake!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
   
   
   
  }
 

  return (
    <div>
      <h1 className="text-5xl text-purple-600 text-center">Welcome To Baper Bank</h1>
      <form  onSubmit={handleSubmit}>
        <div className=" bg-blue-300 p-10 w-9/12 mx-auto mt-7">
          <h1 className="text-3xl">Please Login</h1>
          <div>
            <input className="w-1/2 p-2 mt-5" type="email" placeholder="email please" name="email" /> <br />
            <input className="w-1/2 mt-2 p-2" type="password" placeholder="password" name="password" />
          </div>
          <div>

       
      <input className="btn btn-primary w-28 mt-4 text-white" type="submit" value="Submit" /> 
          
      
          {/* disabled={isSubmitDisabled} */}
              
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
