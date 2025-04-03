import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { GrSecure } from 'react-icons/gr';
import { FaRegAddressCard } from 'react-icons/fa';
import { FiUser, FiPhone } from 'react-icons/fi';

function ProviderRegistration(){
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [providerLogo, setProviderLogo] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents default form submission
//     Checks if passwords match. If they don’t, passwordMatch is set to false, displaying an error message.
// If passwords match, an alert shows a success message. Then it resets all form fields.
    if(password !== confirmPassword){
      setPasswordMatch(false);
    }
    else{
      alert("Registration Successful! (This is a frontend-only demo)");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
    setPasswordMatch(true);
    setAddress("");
    setProviderLogo("");
    }
  }


  return(
    <div>
      {/* header */}
      <div className='py-2 sm:px-8 px-2 shadow flex justify-between items-center'>
        <Link to='/' className='flex items-center'>
          <img src="/TiffinWalaLogo.png" className='h-8 object-contain' alt='Tiffin Wala Logo' />
          <h1 className='font-bold text-xl font-mono'>Tiffin Wala</h1>
        </Link>

        <Link to='/' className='flex items-center gap-2'>
          <BiArrowBack />
          <span>Back to home</span>
        </Link>
      </div>

      {/* set page to center */}
      <div className='flex flex-col gap-4 sm:justify-center items-center sm:py-0 py-8' style={{ height: 'calc(100vh - 50px)' }}>
        <p className='font-semibold'>Register with us to bring your tiffin service online</p>
        <div className='lg:w-1/3 md:w-2/5 sm:w-2/3 w-4/5'>
        {/* form design with logo and input type */}
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2'><FiUser /></span>
              <input type='text' value={name} placeholder='Enter Your Name' className='w-full px-2 py-2 border-l focus:outline-none' required onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2'><MdEmail /></span>
              <input type='email' value={email} placeholder='Enter Your Email' className='w-full px-2 py-2 border-l focus:outline-none' required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2'><FiPhone /></span>
              <input type='number' value={phoneNumber} placeholder='Enter Your Mobile Number' className='w-full px-2 py-2 border-l focus:outline-none' required onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2'><FaRegAddressCard /></span>
              <input type='text' value={address} placeholder='Enter Your Address' className='w-full px-2 py-2 border-l focus:outline-none' required onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2'><GrSecure /></span>
              <input type='password' value={password} placeholder='Enter New Password' className='w-full px-2 py-2 border-l focus:outline-none' required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <div className='flex items-center border bg-white w-full'>
                <span className='px-2'><GrSecure /></span>
                <input type='password' value={confirmPassword} placeholder='Confirm Your Password' className='w-full px-2 py-2 border-l focus:outline-none' required onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              {/* If passwords don’t match, a red warning appears. */}
              {!passwordMatch && <small className='text-red-600'>* Passwords do not match</small>}  
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-semibold text-slate-800'>Add Logo</label>
              <input type='file' onChange={(e) => setProviderLogo(e.target.files)} />
            </div>
            <button className='bg-slate-800 text-white py-2 shadow rounded-full'>Register</button>
            <div className='text-slate-900 font-semibold text-center'>
              <Link to='/loginProvider'>Already Have an Account? Sign In here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProviderRegistration;
