








import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
  let [address, setAddress] = useState("");
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    let navLocation = () => {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
    }
    let latlong = await navLocation().then(res => {
      let latitude = res.coords.latitude;
      let longitude = res.coords.longitude;
      return [latitude, longitude];
    });
    // console.log(latlong)
    let [lat, long] = latlong;
    console.log(lat, long);
    try {
      const response = await fetch("http://localhost:5000/api/auth/getlocation", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ latlong: { lat, long } })
      });
      const { location } = await response.json();
      console.log(location);
      setAddress(location);
      setCredentials({ ...credentials, geolocation: location });
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation
        })
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        // Save the auth token to local storage and redirect
        localStorage.setItem('token', json.authToken);
        navigate("/login");
      } else {
        alert("Enter Valid Credentials");
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="name" className="form-label" style={{ color: 'white' }}>Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="m-3">
            <label htmlFor="email"  className="form-label" style={{ color: 'white' }}>Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="m-3">
            <label htmlFor="address" className="form-label" style={{ color: 'white' }}>Address</label>
            <fieldset>
              <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e) => setAddress(e.target.value)} aria-describedby="emailHelp" />
            </fieldset>
          </div>
          <div className="m-3">
            <button type="button" onClick={handleClick} name="geolocation" className="btn btn-success" >Click for current Location </button>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white' }}>Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </div>
  );
}






// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import Navbar from '../components/Navbar';
// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
//   let [address, setAddress] = useState("");
//   let navigate = useNavigate()

//   const handleClick = async (e) => {
//     e.preventDefault();
//     let navLocation = () => {
//       return new Promise((res, rej) => {
//         navigator.geolocation.getCurrentPosition(res, rej);
//       });
//     }
//     let latlong = await navLocation().then(res => {
//       let latitude = res.coords.latitude;
//       let longitude = res.coords.longitude;
//       return [latitude, longitude]
//     })
//     // console.log(latlong)
//     let [lat, long] = latlong
//     console.log(lat, long)
//     const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ latlong: { lat, long } })

//     });
//     const { location } = await response.json()
//     console.log(location);
//     setAddress(location);
//     setCredentials({ ...credentials, [e.target.name]: location })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/auth/createuser", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) {
//       //save the auth toke to local storage and redirect
//       localStorage.setItem('token', json.authToken)
//       navigate("/login")

//     }
//     else {
//       alert("Enter Valid Credentials")
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (
//     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
//       <div>
//       <Navbar />
//       </div>

//         <div className='container' >
//           <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//             <div className="m-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
//             </div>
//             <div className="m-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//             </div>
//             <div className="m-3">
//               <label htmlFor="address" className="form-label">Address</label>
//               <fieldset>
//                 <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
//               </fieldset>
//             </div>
//             <div className="m-3">
//               <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
//             </div>
//             <div className="m-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//               <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//             </div>
//             <button type="submit" className="m-3 btn btn-success">Submit</button>
//             <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//           </form>
//         </div>
//       </div>
//   )
// }












// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import Navbar from '../components/Navbar';
// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
//   let [address, setAddress] = useState("");
//   let navigate = useNavigate()

//   const handleClick = async (e) => {
//     e.preventDefault();
//     let navLocation = () => {
//       return new Promise((res, rej) => {
//         navigator.geolocation.getCurrentPosition(res, rej);
//       });
//     }
//     let latlong = await navLocation().then(res => {
//       let latitude = res.coords.latitude;
//       let longitude = res.coords.longitude;
//       return [latitude, longitude]
//     })
//     // console.log(latlong)
//     let [lat, long] = latlong
//     console.log(lat, long)
//     const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ latlong: { lat, long } })

//     });
//     const { location } = await response.json()
//     console.log(location);
//     setAddress(location);
//     setCredentials({ ...credentials, [e.target.name]: location })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/auth/createuser", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) {
//       //save the auth toke to local storage and redirect
//       localStorage.setItem('token', json.authToken)
//       navigate("/login")

//     }
//     else {
//       alert("Enter Valid Credentials")
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (
//     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
//       <div>
//       <Navbar />
//       </div>

//         <div className='container' >
//           <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//             <div className="m-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
//             </div>
//             <div className="m-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//             </div>
//             <div className="m-3">
//               <label htmlFor="address" className="form-label">Address</label>
//               <fieldset>
//                 <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
//               </fieldset>
//             </div>
//             <div className="m-3">
//               <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
//             </div>
//             <div className="m-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//               <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//             </div>
//             <button type="submit" className="m-3 btn btn-success">Submit</button>
//             <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//           </form>
//         </div>
//       </div>
//   )
// }






















// import React, {useState} from 'react';
// import {Link} from "react-router-dom";


// export default function Signup() {

//   const [credentials, setcredentials] = useState({name: "",email: "",password: "",geolocation: ""})

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const requestData = {
//   //     name: credentials.name,
//   //     email: credentials.email,
//   //     password: credentials.password,
//   //     location: credentials.geolocation
//   //   };
//   //   console.log("Request Data:", requestData); // Log the data

//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/createuser", {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(requestData)
//   //     });

//   //     const json = await response.json();
//   //     console.log(json);

//   //     if (!json.success) {
//   //       alert("Enter Valid Credentials");
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(JSON.stringify({name:credentials.name , email:credentials.email , password: credentials.password , location:credentials.geolocation}))
//     const requestData = {
//       name: credentials.name,
//       email: credentials.email,
//       password: credentials.password,
//       location: credentials.geolocation
//     };
//     console.log("Request Data:", requestData);
//     try{
//       const response = await fetch("http://localhost:5000/api/createuser", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestData
//           // {name: credentials.name,
//           // email: credentials.email,
//           // password: credentials.password,
//           // location: credentials.geolocation  }
//       )
//       });

//       const json = await response.json();
//       console.log(json);

//       if (!json.success) {
//         alert("Enter Valid Creddentials")
//       }
//     } 
//     catch(error) {
//       console.error('Error:', error);

//     }

//   }

//   const onChange = (event) => {
//     setcredentials({...credentials,[event.target.name]: event.target.value})
//   }

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
//             <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputAddress1"/>
//           </div>

//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a User
//           </Link>
//         </form>
//       </div>
//     </>
//   )
// }