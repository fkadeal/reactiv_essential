// import react from "react";
import {Link,useLocation ,Outlet} from "react-router-dom";

export function LinksTo(){
    return (
        <>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link> 
        <Link to="/events" >Events</Link> 
        <Link to="/contact" >Contact</Link> 
        </>
    )
}

export function Home(){
 return(
    <div>
        <LinksTo />
        <h1>[Company Website]</h1>
    </div>
 )
}

export function About(){
 return(
    <div>
        <LinksTo />
        <h1>[About]</h1>
        <Outlet />

    </div>
 )
}
export function Services(){
    return(
       <div> 
           <h1>[Services]</h1>
       </div>
    )
}
export function History(){
    return(
       <div> 
           <h1>[History]</h1>
       </div>
    )
}

export function Events(){
    return(
       <div>
        <LinksTo />

           <h1>[Events]</h1>
       </div>
    )
}

export function Contact(){
    return(
       <div>
        <LinksTo />

           <h1>[Contact]</h1>
       </div>
    )
}   

export function Whoops404(){
    const location = useLocation()
    return(
       <div>
           <h1>Whoops {location.pathname} Not Exist</h1>
       </div>
    )
}   