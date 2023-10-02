import { useParams } from "react-router-dom"

export default function EventDetailsPage(){
const id=useParams();
    return <h2 style={{textAlign:'center', marginTop:'3rem'}}>WELCOME TO THE EventDetailsPage... of id:{id.id}</h2>



}