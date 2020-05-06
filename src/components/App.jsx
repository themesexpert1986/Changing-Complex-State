import React, { useState } from "react";

function App() {
  
  const [fullName,setFullName] = useState({
    fName: "",
    lName: ""
  });
  
  function handleChange(event){

    // const newValue = event.target.value;
    // const inputName = event.target.name;
    //  console.log(event);
    
    const {value,name} = event.target;
    // console.log(value);
    
    setFullName(prev => {
      return {...prev , [name]:value};
      // if(name === "fName"){
      //   return {
      //     fName:value,
      //     lName:prev.lName
      //   }
      // }
      // else if (name === "lName"){
      //   return {
      //     fName:prev.fName,
      //     lName:value
      //   }
      // }

    });
    
    event.preventDefault();
    
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName + " " + fullName.lName} </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
