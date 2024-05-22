import React from 'react'

export default function Carousel() {
    return (
        <div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

                <div className="carousel-inner " id='carousel'>
                    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                        <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active" >
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}





// // 2 
//  import React from "react";
// export default function Carousel(){ 
//    return (
//     <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//       </div>
//       <div className="carousel-inner" id="carousel">
//         <div className="carousel-caption" style={{zIndex:"10"}}>
//         <form className="d-flex">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//     </form>
//         </div>
//       <div className="carousel-item active">
//         <img src="https://source.unsplash.com/random/500x500/?burger" className="d-block w-100" style={{filter: "brightness(30%"}} alt="..." />
//       </div>
//       <div className="carousel-item active">
//         <img src="https://source.unsplash.com/random/500x500/?pastry" className="d-block w-100" style={{filter: "brightness(30%"}} alt="..." />
//       </div>
//       <div className="carousel-item active">
//         <img src="https://source.unsplash.com/random/500x500/?chocolates" className="d-block w-100" style={{filter: "brightness(30%"}} alt="..." />
//       </div>
//         {/* <div className="carousel-item active">
//           <img src="https://source.unsplash.com/random/500x500/?burger" className="d-block w-100" alt="Burger" />
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src="https://source.unsplash.com/random/500x500/?pastry" className="d-block w-100" alt="Pastry" />
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src="https://source.unsplash.com/random/500x500/?chocolates" className="d-block w-100" alt="Chocolates" />
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div> */}
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//     );
// }











// import React from "react";

// export default function Carousel() {
//   return (
//     <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//       </div>
//       <div className="carousel-inner" id="carousel">
//         <div className="carousel-item active">
//           <img src="https://source.unsplash.com/random/500x500/?burger" className="d-block w-100" alt="Burger" />
//           {/* Carousel Caption with Search Bar */}
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               {/* Search Input */}
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               {/* Search Button */}
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src="https://source.unsplash.com/random/500x500/?pastry" className="d-block w-100" alt="Pastry" />
//           {/* Carousel Caption with Search Bar */}
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               {/* Search Input */}
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               {/* Search Button */}
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src="https://source.unsplash.com/random/500x500/?chocolates" className="d-block w-100" alt="Chocolates" />
//           {/* Carousel Caption with Search Bar */}
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               {/* Search Input */}
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               {/* Search Button */}
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* Previous Button */}
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       {/* Next Button */}
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

















// import React from "react";

// export default function Carousel() {
//   return (
//     <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel"  style={{objectFit:"contain !important"}}>
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//       </div>
//       <div className="carousel-inner" id="carousel">
//         <div className="carousel-item active">
//           <img src="https://source.unsplash.com/random/500x500/?burger" className="d-block w-100" alt="Burger" />
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src="https://source.unsplash.com/random/500x500/?pastry" className="d-block w-100" alt="Pastry" />
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src="https://source.unsplash.com/random/500x500/?chocolates" className="d-block w-100" alt="Chocolates" />
//           <div className="carousel-caption d-flex justify-content-center align-items-center">
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }
