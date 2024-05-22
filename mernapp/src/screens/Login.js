// import React, { useState } from 'react'
// import Navbar from '../components/Navbar';
// import { useNavigate, Link } from 'react-router-dom'
// export default function Login() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" })
//   let navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/auth/login", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })

//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) {
//       //save the auth toke to local storage and redirect
//       localStorage.setItem('userEmail', credentials.email)
//       localStorage.setItem('token', json.authToken)
//       navigate("/");

//     }
//     else {
//       alert("Enter Valid Credentials")
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (
//     <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
//       <div>
//         <Navbar />
//       </div>
//       <div className='container'>
//         <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//           <div className="m-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
//           </div>
//           <div className="m-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//           </div>
//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
//         </form>

//       </div>
//     </div>
//   )
// }


// // , 'Accept': 'application/json',
// //         'Access-Control-Allow-Origin': 'http://localhost:3000/login', 'Access-Control-Allow-Credentials': 'true',
// //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'











import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom'
export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()

  // e.preventDefault();
  const handleSubmit = async (e) => {
  //   const response = await fetch("http://localhost:5000/api/auth/login", {
  //     // credentials: 'include',
  //     // Origin:"http://localhost:3000/login",
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email: credentials.email, password: credentials.password })

  //   });
  //   const json = await response.json()
  //   console.log(json);
  //   if (json.success) {
  //     //save the auth toke to local storage and redirect
  //     localStorage.setItem('userEmail', credentials.email)
  //     localStorage.setItem('token', json.authToken)
  //     navigate("/");

  //   }
  //   else {
  //     alert("Enter Valid Credentials")
  //   }
  // }
  e.preventDefault();
    console.log(JSON.stringify({ email:credentials.email , password: credentials.password }))
    try{
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password})
      });
      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter Valid Creddentials")
      }
      if (json.success) {
        localStorage.setItem("userEmail",credentials.email);
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/");
      }
      
    }
    catch(error){
      console.error('Error:',error)
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'white' }}>Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white' }}>Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>

      </div>
    </div>
  )
}


// , 'Accept': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:3000/login', 'Access-Control-Allow-Credentials': 'true',
//         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'



















// import React,{useState} from 'react'
// import {Link,useNavigate} from "react-router-dom";

// export default function Login() {
//   const [credentials, setcredentials] = useState({email: "",password: ""});

//   let navigate= useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(JSON.stringify({ email:credentials.email , password: credentials.password }))
//     try{
//       const response = await fetch("http://localhost:5000/api/loginuser", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: credentials.email,
//           password: credentials.password})
//       });
//       const json = await response.json();
//       console.log(json);

//       if (!json.success) {
//         alert("Enter Valid Creddentials")
//       }
// if (json.success) {
//   //save the auth toke to local storage and redirect
//   localStorage.setItem('userEmail', credentials.email)
//   localStorage.setItem('token', json.authToken)
//   navigate("/");

// }
// else {
//   alert("Enter Valid Credentials")
// }
//       if (json.success) {
//         localStorage.setItem("authToken",json.authToken);
//         console.log(localStorage.getItem("authToken"))
//         navigate("/");
//       }
      
//     }
//     catch(error){
//       console.error('Error:',error)
//     }
//   }

//   const onChange = (event) => {
//     setcredentials({...credentials,[event.target.name]: event.target.value})
//   }

//   return (
//     <div>
//        <div className="container">
//         <form onSubmit={handleSubmit}>
  

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
//           </div>
          
//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/createuser" className="m-3 btn btn-danger">
//             I'm a new User
//           </Link>
//         </form>
//       </div>

//     </div>
//   )
// }
