import { Link } from "react-router-dom";
export default function EventPage(){
    const events=[{id:1,title:'DIWALI'},{id:2,title:'Janmastmi'},{id:3,title:'Shivratri'},{id:4,title:'Holi'},{id:5,title:'Navratri'}];

    return <> <h2 style={{textAlign:'center', marginTop:'2rem'}}>WELCOME TO THE EventPage</h2>
       <ul>
        {events.map((event)=><li key={event.id} style={{fontSize:'1rem',textAlign:'center'}}><Link to={`/events/${event.id}`}>{event.title}</Link></li>)}       
       </ul>
       </>



}