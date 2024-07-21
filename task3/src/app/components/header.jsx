import Link from "next/link";
import "./header.css";
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';


export default function Header(){

    return (
        <>
        <div className="header">
            <div className="name">
            <i className="fa-solid fa-cat fa-2xl m-2 " style={{color: "#000000"}}></i>
                <span style={{fontSize:'24px'}}> BsBs </span>
            </div>

            <div className="tabs">
                <Link href="/components/home" style={{color:'black'}}> Home </Link>
                <Link href="/components/aboutUs" style={{color:'black'}}> About Us </Link>
                <Link href="/components/contactUs" style={{color:'black'}}> Contact Us </Link>
            </div>
        </div>


        <div className="line"/>
        </>
    )
}