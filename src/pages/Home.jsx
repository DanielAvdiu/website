import { Component } from "../components";
import { BrowserRouter, useNavigate } from "react-router-dom";


const eyes = [
    {
        "id": 1,
        "image": "src/assets/images/genetics1.jpg",
        "description": "Learn about genetics",
        "navigate": "/learn"
    },
    {
        "id": 2,
        "image": "src/assets/images/drawing1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "navigate": "/about"
    },
    {
        "id": 3,
        "image": "src/assets/images/classic.jpg",
        "description": "Share your story",
        "navigate": "/stories"
    },
    {
        "id": 4,
        "image": "src/assets/images/question.jpeg",
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

                <div className={`py-4 text-4xl text-center border-solid border-indigo-600 border-8 w-screen`}>
                    Welcome to RPHUB

                    <div className="text-2xl flex justify-center text-center">
                        Learn about your condition
                    </div>

                    <div className="sm:flex-col p-4 flex flex-row flex-wrap justify-center">
                        {eyes.map((eye) => (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg my-3 mx-2" key={eye.id} style={{ width: '300px' }}>
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