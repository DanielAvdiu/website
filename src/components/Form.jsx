import { useEffect, useState } from "react";
import { db } from "../database/firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Form = () => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    
    const [buttonName, setButtonName] = useState("Submit Story");
    let baseURL="";
    const [choice, setChoice] = useState("stories");

    const createStory = async (name, title, description) => {
        const createStoryHelper = async () => {
            const userCollectionsRef = collection(db, "stories");
            addDoc(userCollectionsRef, {author: name, title: title, story: description});
        };

        await createStoryHelper();
    }

    const createTreatment = async (name, title, description, link) => {
        const createTreatmentHelper = async () => {
            const userCollectionsRef = collection(db, "treatments");
            addDoc(userCollectionsRef, {author: name, title: title, description: description, link: link});
        };

        await createTreatmentHelper();
    }

    const handleSelection = (e) =>{
        let selection = document.getElementById("form_selection");
        let value = selection.value;
        console.log(value);

        if(value === "stories"){
            document.getElementById("fname").placeholder = "Name";
            document.getElementById("message").placeholder = "Your Story";
            setChoice("stories");
        }else if(value === "treatments"){
            document.getElementById("fname").placeholder = "Treatment Name";
            document.getElementById("message").placeholder = "Treatment Description";
            setChoice("treatments");
        }

        let link_input= document.getElementById("links");
        link_input.classList.toggle("hidden");

        setButtonName("Submit " + value);

        console.log(baseURL);
    }

    const handleSubmitForm = (e) =>{
        e.preventDefault();

        if(choice=="stories"){

            if(name === "" || description === "" || title === ""){
                alert("Please fill out all the fields!");
            }

            console.log("Name: "+name);
            console.log("Title: "+title);
            console.log("Description: "+description);

            createStory(name, title, description);
            
            alert("Thank you for submitting your story!")

        }else if(choice=="treatments"){


            if(name === "" || description === "" || link === "" || title === ""){
                alert("Please fill out all the fields!");
            }

            console.log("Name: "+name);
            console.log("Description: "+description);
            console.log("Link: "+link);
            console.log("Title: "+title);

            createTreatment(name, title, description, link);

            alert("Thank you for contributing!")
        }
    }


    return (
        <>
            <div className="max-w-lg lg:ms-auto mx-auto text-center ">
                <div className="py-16 px-7 rounded-md bg-white">

                    <form className="" action="" method="">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <input type="text" id="fname" onChange={(event)=>{setName(event.target.value)}} name="fname" placeholder="Name" className="w-full border border-solid border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 " required />
                            
                            <input type="text" id="ftitle" onChange={(event)=>{setTitle(event.target.value)}} name="ftitle" placeholder="Title" className="w-full border border-solid border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 " required />

                            <select name="form_selection" id="form_selection" className="border-solid border-black rounded-xl border-gray-300" onChange={handleSelection}>
                                <option value="stories">Story</option>
                                <option value="treatments">Treatment</option>
                            </select>

                            <div className="md:col-span-2">
                                <textarea id="message" name="message" onChange={(event)=>{setDescription(event.target.value)}} rows="5" cols="" placeholder="Your Story" className="w-full border border-solid border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" required></textarea>
                            </div>

                            <input type="url" id="links" onChange={(event)=>setLink(event.target.value)} name="links" placeholder="Insert Link" className="hidden flex flex-grow"/>

                            <div className="md:col-span-2 space-x-3">

                                <input type="checkbox" name="" id="" className="mr-2 sm:m-1" required />
                                <label htmlFor="" className="text-sm col-span-2">
                                    Ready?
                                </label>

                            </div>


                            <div className="md:col-span-2">
                                <button onClick={handleSubmitForm} className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">{buttonName}</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}

export default Form;