// // import { useRef } from "react";
// import { useRef } from "react";



// function App() {

//   // const name = useRef();                  imp  :-  imput box mai se value pakdne ke lia refrensh lene ke
//    //                                                 lia input field mai
//   // const age = useRef();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();                              imp :-  page ko reload hone se rokne ke lia 
//   //   console.log(name.current.value);
//   //   console.log(age.current.value);

//   // }
//   const name = useRef();
//   const age = useRef();

//   const submit = (e) => {
//     e.preventDefault();
//     console.log(e);
//   }

//   return (
//     <>
//       {/* <h1 align="center">Form</h1>
//    <form onSubmit={handleSubmit} >
//     <table align="center" border={1}>
//      <tbody>
//      <tr>
//         <td>First name :-</td>
//        <td> <input type="text"  ref={name}/></td>
        
//       </tr>
//       <tr>
//         <td align="center">Age:-</td>
//        <td> <input type="number" ref={age}/></td>

//       </tr>
//    <tr>
//     <td> <input type="submit" /></td>
//    </tr>
//      </tbody>
//     </table>
//    </form> */}


//       <form onSubmit={submit}>
//         <table align="center" border={1}>
//           <tbody>
//             <tr>
//               <td>name:-</td>
//               <td><input type="text" ref={name} /></td>
//             </tr>

//             <tr>
//               <td>age:-</td>
//               <td><input type="number" ref={age} /></td>
//             </tr>
//             <tr>
//               <td><input type="submit" /></td>
//             </tr>
//           </tbody>


//         </table>
//       </form>
//     </>
//   )
// }

// export default App

// import React from 'react'

import { useRef } from 'react';

const App = () => {

  const name = useRef();
  const email = useRef();
  const password = useRef();


  const submitButton = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    
  }

  return (

    <>
      <form onSubmit={submitButton}>
        <table align='center' border={1}>
          <tbody>
            <tr>
              <td>Name :-</td>
              <td><input type="text"  ref={name}/></td>
            </tr>
            <tr>
              <td>email :-</td>
              <td><input type="email" ref={email} /></td>
            </tr>
            <tr>
              <td>password :-</td>
              <td><input type="password" ref={password}/></td>
            </tr>
            <tr>
              <td><input type="submit" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  )
}

export default App

