import Image from "next/image";
import { MuseoModerno, Inter } from "next/font/google";


const muMo = MuseoModerno({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });


export default function AboutUS() {
    return(
        <>
            <div className="aboutUs_container  ">
                <div className="aboutUs-1 m-6 mb-20 ">
                    <Image
                    className="float-right  mt-2 mr-12"
                        src="/images/IEEE_staff.jpg"
                        alt="about us"
                        width={500}
                        height={350}
                        />
                    <h1 className={`${muMo.className} text-black ml-8`} style={{fontSize:'52px'}}> ABOUT US </h1>
                    <div className=" our_vision m-10 ml-24 h-18 p-2">
                        <h3 className={`${muMo.className} text-black`} style={{fontSize:'32px'}}> OUR VISION </h3>
                        <p className="text-black ml-11">
                            We aim to foster a thriving community of innovators navigating the dynamic field of technology 
                            with unparalleled passion and expertise.
                            Centered around inclusivity and collaboration, every member is a vital contributor. We're not
                            just a hub for lifelong learning; we're a launchpad empowering tomorrow's leaders for success
                            in the professional world and the global research community.
                        </p>
                    </div>
                </div>


                <div className="aboutUs-2 m-0">
                    
                    <div className="bg-[#F6B42C] h-20 skew-y-3  "></div>
                    <div className="second-about bg-[#F6B42C] -mt-16" >
                        <Image 
                        className=" float-left rounded-tr-3xl rounded-bl-3xl ml-16 pt-16"
                        src="/images/aboutUs.jpg"
                        alt="about us"
                        width={350}
                        height={400}/>

                        <div className=" our_mission float-right m-12 mr-52 h-18 p-2 pt-28 ">
                            <h3 className={`${muMo.className} text-black`} style={{fontSize:'32px'}}> OUR MISSION </h3>
                            <ol className="text-black ml-11">
                                <li> Career Ready </li>
                                <li  className="ml-8"> Research Excellence </li>
                                <li className="ml-16">  Global Connections </li>
                                <li className="ml-24"> Continuous Learning </li>
                            </ol>
                               
                            

                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
    
};
