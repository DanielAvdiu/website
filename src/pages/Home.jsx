import { Component } from "../components";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { classic, genetics1, drawing1, question } from "../assets/";

const eyes = [
    {
        "id": 1,
        "image": genetics1,
        "description": "Learn More With Educational Videos",
        "navigate": "/learn"
    },
    {
        "id": 2,
        "image": drawing1,
        "description": "Get Started",
        "navigate": "/about"
    },
    {
        "id": 3,
        "image": classic,
        "description": "Share your story",
        "navigate": "/stories"
    },
    {
        "id": 4,
        "image": question,
        "description": "What is this website about",
        "navigate": "/about"
    }
]


const Home = () => {
    const center = "flex justify-center";
    const navigate = useNavigate();

    const handelClick = (destination) => {
        navigate(`${destination}`);
    }

    return (
        <div className="flex flex-wrap gap-5 justify-center h-auto">

            <div className="bg-white text-black h-auto w-[99] flex-col justify-center text-2xl">

                <div className={`py-4 text-4xl text-center w-screen`}>
                    Welcome to RPHUB

                    <div className="text-2xl flex justify-center text-center">
                        Learn about your condition
                    </div>

                    <div className="sm:flex-col p-4 flex flex-row flex-wrap justify-center">
                        {eyes.map((eye) => (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg my-3 mx-2 scrollbar-hide" key={eye.id} style={{ width: '300px' }}>
                                <img src={eye.image} alt="eye drawing" style={{ width: '600px', height: '250px' }} className="cursor-pointer" onClick={() => handelClick(eye.navigate)} />

                                <div className="px-6 py-4">
                                    <p className="text-gray-700 text-base ">
                                        {eye.description}
                                    </p>
                                </div>
                            </div>))}
                    </div>


                </div>

            </div>

            <div className="flex flex-col">
                <div className="py-1">
                </div>
            </div>
        </div>
    );
}

export default Home;