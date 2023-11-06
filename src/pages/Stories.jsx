import { useState } from "react";
import { Modal } from "../components";
import { button } from "@material-tailwind/react";
import { book_shelf, gifImage } from "../assets/";
import { useEffect } from "react";

const BASE_URL = "https://user-stories.onrender.com";

const Stories = () => {

    const buttonClass = "font-mono mx-10 inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]";
    const [buttonName, setButtonName] = useState("Show Story List");
    const [contentActive, setContentActive] = useState(false);
    const [storyListActive, setStoryListActive] = useState(false);
    const [stories, setStories] = useState([]);

    const handleClick_story_list = (e) => {
        e.preventDefault();
        let left_section = document.getElementById("left_section");
        left_section.classList.toggle("hidden");
        setButtonName(buttonName === "Show Story List" ? "Hide Story List" : "Show Story List");

        let middle_section = document.getElementById("story_content_div");
        middle_section.classList.toggle("hidden");

        let button = document.getElementById("story_list_button");
    }

    const handle_item_click = (title, content) => {
        console.log(title);
        console.log(content);

        // Hiding the list section
        let left_section = document.getElementById("left_section");
        left_section.classList.toggle("hidden");

        //Showimg the middle section
        let middle_section = document.getElementById("story_content_div");
        middle_section.classList.toggle("hidden");

        //changing the button name
        setButtonName("Show Story List");

        let story_title = document.getElementById("story_title");
        story_title.innerHTML = title;

        let story_content = document.getElementById("story_content");
        story_content.innerHTML = content;
    }

    useEffect(() => {
        const getStories = async () => {
            const response = await fetch(`${BASE_URL}/stories`);
            const data = await response.json();
            setStories(data);
            console.log(data);
        }
        getStories();
    }, []);

    return (
        <>
            {/* Banner Image and two buttons */}
            <div className="flex justify-center text-white flex-grow bg-no-repeat bg-fit bg-cover h-auto py-10 text-center text-3xl font-bold">

                <div className="flex sm:flex-col flex-row">
                    <button id="story_list_button" className={buttonClass} onClick={handleClick_story_list}>
                        {buttonName}
                    </button>
                </div>

                <br className="py-20" />
            </div>

            {/* Middle section */}
            <div className="flex flex-row flex-grow justify-center">

                <div id="left_section" className="hidden md:visible flex overflow-y-scroll scrollbar-hide">

                    <div className="h-[600px] text-center text-lg mb-20 font-bold flex flex-row flex-wrap justify-between mx-2 h-fixed">

                        <div className="w-auto overflow flex flex-col">
                            {stories.map((story) => (
                                <div key={story.id} className="cursor-pointer bg-slate-200 hover:bg-sky-500 hover:text-white hover:font-bold py-2 px-2 my-2" onClick={() => handle_item_click(story.title, story.content)}>

                                    <div className="font-mono">{story.title} | {story.author}</div>
                                    <div className="flex flex-row justify-center">
                                        <hr className="w-2/3 border-4" />
                                    </div>
                                    <div className="font-mono">{story.summary}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div id="story_content_div" className="font-bold flex justify-center flex-grow w-[800px]">
                    <div className="font-mono py-2 h-auto text-center flex flex-col ">
                        <div id="story_title" className="font-mono text-3xl items-center">
                            Story Time

                            <div className="hidden md:flex border-2 border-black">
                                <img src={gifImage} alt="gif image" />
                            </div>

                        </div>

                        <div className="py-2 hr_container flex flex-row justify-center">
                            <hr className="border-8 border-slate-950 w-2/3" />
                        </div>

                        <div className="flex flex-row justify-center">
                            <div id="story_content" className="text-justify hr_container flex flex-row justify-center w-2/3">
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Stories;