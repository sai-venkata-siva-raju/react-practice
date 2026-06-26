// import Card from "./components/Card";
import { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [user,setUser]=useState({
    name: "John",
    age: 30,
    city: "New York",
  });
  function buttonClick() {
    alert("Button clicked!");
  }
  function handlechange(event){
    alert("Search User button clicked",event.target.value);
  }
//   const user = [{
//     name: "John",
//     age: 30,
//     city: "New York",
//   },
//   {
//     name: "Jane",
//     age: 25,
//     city: "Los Angeles",
//   },
//   {
//     name: "Bob",
//     age: 35,
//     city: "Chicago",  
//   }
// ];
  return (
    <div className="App">
      <Navbar />
      <button className="btn" onClick={buttonClick}>Add User</button>
      <p>{user.name}, {user.age}, {user.city}</p>
      <button className="btn" onClick={()=>{
        setUser({
          name: "Jane",
          age: 25,
          city: "Los Angeles",
        });
      }}>Update User</button>
      <button className="btn" onClick={()=>{
        setUser({
          name: "Bob",
          age: 35,
          city: "Chicago",  
        });
      }}>Change User</button>
      <button className="btn" onClick={()=>{
        setUser({
          name: "",
          age: 0,
          city: "",
        });
      }}>Clear User</button>
      <button className="btn" onClick={()=>{
        alert("View Profile button clicked");
      }}>View Profile</button>
      <button className="btn" onClick={()=>{
        alert("Edit User button clicked");
      }}>Edit User</button>
      <button className="btn" onClick={()=>{
        alert("Save User button clicked");
      }}>Save User</button>
      <button className="btn" onClick={()=>{
        alert("Delete User button clicked");
      }}>Delete User</button>
      <input type="text" placeholder="Search User" onChange={handlechange} />
     
    </div>
  );
}
export default App;
