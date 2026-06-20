import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
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
      {user.map((user,index)=>{
        return <Card key={index} user={user} />
      })}
    </div>
  );
}
export default App;
