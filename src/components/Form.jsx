const Form = () => {
    return (
        <>
            <div className="max-w-lg lg:ms-auto mx-auto text-center ">
                <div className="py-16 px-7 rounded-md bg-white">

                    <form className="" action="" method="POST">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <input type="text" id="fname" name="fname" placeholder="Name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 " required/>


                            <div className="md:col-span-2">
                                <label for="subject" className="float-left block  font-normal text-gray-400 text-lg">Country</label>
                                
                                <select id="subject" name="subject" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <textarea name="message" rows="5" cols="" placeholder="Your Story" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" required></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <input type="checkbox" name="" id="" className="mr-2 sm:m-1" required/>
                                <label for="" className="text-sm col-span-2">
                                   Are you ready to share your story?
                                </label>
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