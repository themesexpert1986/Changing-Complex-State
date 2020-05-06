import React, { useState } from "react";

function App() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
    event.preventDefault();
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {fname + " " + lname} </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fname}
          onChange={handleChangeFirstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={lname}
          onChange={handleChangeLastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
