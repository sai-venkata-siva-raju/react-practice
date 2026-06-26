import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  function buttonClick() {
    alert("Button clicked!");
  }
  function handlechange(event){
    alert("Search User button clicked");
  }
  const user = [{
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
  },
  {
    name: "Bob",
    age: 35,
    city: "Chicago",  
  }
];
  return (
    <div className="App">
      <Navbar />
      <button className="btn" onClick={buttonClick}>Add User</button>
      <br/>
      <button className="btn" onClick={()=>{
        alert("Delete User button clicked");
      }}>Delete User</button>
      <input type="text" placeholder="Search User" onChange={handlechange} />
     
    </div>
  );
}
export default App;
