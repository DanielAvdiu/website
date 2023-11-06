import { useEffect, useState } from "react";

const Form = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [buttonName, setButtonName] = useState("Submit Story");


    const handleSelection = (e) => {
        let selection = document.getElementById("form_selection");
        let value = selection.value;
        let option = selection.options[selection.selectedIndex].text;
        console.log(value);

        if(value === "Story"){
            document.getElementById("fname").placeholder = "Name";
            document.getElementById("message").placeholder = "Your Story";
        }else if(value === "Treatment"){
            document.getElementById("fname").placeholder = "Treatment Name";
            document.getElementById("message").placeholder = "Treatment Description";
        }
    }


    return (
        <>
            <div className="max-w-lg lg:ms-auto mx-auto text-center ">
                <div className="py-16 px-7 rounded-md bg-white">

                    <form className="" action="" method="">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <input type="text" id="fname" name="fname" placeholder="Name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 " required />

                            <select name="form_selection" id="form_selection" className="rounded-xl border-gray-300" onChange={handleSelection}>
                                <option value="Story">Story</option>
                                <option value="Treatment">Treatment</option>
                            </select>

                            <div className="md:col-span-2">
                                <textarea id="message" name="message" rows="5" cols="" placeholder="Your Story" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" required></textarea>
                            </div>

                            <div className="md:col-span-2 space-x-3">

                                <input type="checkbox" name="" id="" className="mr-2 sm:m-1" required />
                                <label htmlFor="" className="text-sm col-span-2">
                                    Ready?
                                </label>

                            </div>

                            <div>
                                <label htmlFor=""></label>
                                <div>

                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <button className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Submit Story</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}

export default Form;