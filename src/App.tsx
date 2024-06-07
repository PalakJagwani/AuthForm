import {useForm} from 'react-hook-form'

function App(){
  let name : string;
  const {register, handleSubmit, getValues, formState : {errors}, reset} = useForm({});

  const handleSubmitData = (data : Object) => {
    console.log(data);
    name = getValues('firstname') + getValues('lastname')
    reset();
    alert(`${name} your details are filled, ThankYou!`)
  }

  return(
    <div className=" h-[100vh] w-[100vw]">
      <h1 className=" text-slate-400 text-2xl pt-[15%] md:pt-[2%] md:pb-[2%] pb-[10%] text-center">Fill Your Details Below..</h1>
      <form 
        className="block w-[90%] md:w-[40%] mx-auto bg-blue-950 opacity-60 p-7 rounded-lg"
        onSubmit={handleSubmit(handleSubmitData)}
      >
      <input 
          type="text"
          id="first-name" 
          className=" w-full h-8 px-2 outline-none border-none text-blue-950 my-3 placeholder-slate-900" 
          placeholder="First Name"
          {...register('firstname', {
            required : {
              value : true,
              message : "First Name is Required!"
          }
          })}
        />
        <p className=' text-red-500'>{errors.firstname?.message?.toString()}</p>
        <input 
          type="text"
          id="last-name" 
          className=" w-full h-8 px-2 outline-none border-none text-blue-950 my-3 placeholder-slate-900" 
          placeholder="Last Name"
          {...register('lastname', {
            required : {
              value : true,
              message : "Last Name is Required!"
            }
          })}
        />
        <p className=' text-red-500'>{errors.lastname?.message?.toString()}</p>
        <input 
          type="email"  
          id="email" 
          className=" w-full h-8 px-2 outline-none border-none text-blue-950 my-3 placeholder-slate-900" 
          placeholder="Email"
          {...register('email', {
            required : {
              value : true,
              message : "Email is Required!"
            },
            pattern : {
              value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message : "Please enter a valid email!"
            }
          })}
        />
        <p className=' text-red-500'>{errors.email?.message?.toString()}</p>
        <input 
          type="number" 
          id="contact" 
          className=" w-full h-8 px-2 outline-none border-none text-blue-950 my-3 placeholder-slate-900" 
          placeholder="Contact Number"
          {...register('contact', {
            required : {
              value : true,
              message : "Contact Number is Required!"
            },
            minLength : {
              value : 10,
              message : "Enter valid 10 digit Contact Number!"
            },
            maxLength : {
              value : 10,
              message : "Enter valid 10 digit Contact Number!"
            }
          })}
        />
        <p className=' text-red-500'>{errors.contact?.message?.toString()}</p>
        <textarea
          id="address" 
          rows={3}
          className=" w-full px-2 outline-none border-none text-blue-950 my-3 placeholder-slate-900" 
          placeholder="Address"
          {...register('address', {
            required : {
              value : true,
              message : "Address is required!"
            }
          })}
        />
        <p className=' text-red-500'>{errors.address?.message?.toString()}</p>
        <input 
          type="password" 
          id="password" 
          className=" w-full h-8 px-2 outline-none border-none text-blue-950 my-3 placeholder-slate-900" 
          placeholder="Password"
          {...register('password', {
            required : {
              value : true,
              message : "Password is Required!"
            },
            maxLength : {
              value : 16,
              message : "Password should be atmost 16 character long!"
            },
            minLength : {
              value : 8,
              message : "Password should be atleast 8 characters long!"
            }
          })}
        />
        <p className=' text-red-500'>{errors.password?.message?.toString()}</p>
        <input 
          type="password" 
          id="confirm" 
          className=" w-full h-8 px-2 outline-none border-none text-blue-950 my-3 placeholder-slate-900" 
          placeholder="Confirm Password"
          {...register('confirm', {
            required : {
              value : true,
              message : "Confirm your password"
            },
            validate : (val) => {
              return val === getValues('password') || "Password don't match";
            }
          })}
        />
        <p className=' text-red-500'>{errors.confirm?.message?.toString()}</p>
        <input 
          type="checkbox" 
          id="agree"
          {...register('agree', {
            required : {
              value : true,
              message : "Agree to the terms and conditions"
            }
          })}
        />
        <label htmlFor="agree" className=" px-2 text-slate-300">I have read and agree to the terms.</label>
        <p className=' text-red-500'>{errors.agree?.message?.toString()}</p>
        <button type="submit" className=" block bg-blue-100 text-blue-950 px-3 py-1 rounded-md mx-auto mt-5">Submit</button>
      </form>
    </div>
  )
}

export default App;