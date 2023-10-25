const Modal = () => {
    return ( 
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden">
            {/* Modal */}

            <div className="bg-white rounded shadow-lg w-1/3">

                {/* Modal Header */}
                <div className="border-b px-4 py-2">
                    <h3>Modal Title</h3>
                </div>

                {/* Modal Body */}

                <div className="p-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis officiis, nobis saepe dicta exercitationem ut quisquam, cum excepturi sed placeat consequatur. Repellendus velit minus nemo expedita ducimus, in praesentium. Esse.
                </div>

                <div className="flex justify-end items-center w-100 border-t p-3">
                    <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1">Cancel</button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Submit</button>

                </div>
            </div>

        </div>
     );
}
 
export default Modal;