export default function Card({user}){
    return(
    <div className="card">
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.city}</p>
    </div>)
}