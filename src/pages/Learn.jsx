<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

const conditions = [
    {
        "id": 1,
        "name": "Condition 1",
        "description": "Cataract",
        "sections": [
            {
                "id": 1,
                "description": "Section 1",
            },
            {
                "id": 2,
                "description": "Section 2",
            },
            {
                "id": 3,
                "description": "Section 3",
            },
            {
                "id": 4,
                "description": "Section 4",
            }

        ],
        "bookReferences": "reference"
    },
    {
        "id": 2,
        "name": "Condition 2",
        "description": "Glaucoma",
        "sections": [
            {
                "id": 1,
                "description": "Section 1",
            },
            {
                "id": 2,
                "description": "Section 2",
            },
            {
                "id": 3,
                "description": "Section 3",
            },
            {
                "id": 4,
                "description": "Section 4",
            }

        ],
        "bookReferences": "reference"
    },
    {
        "id": 3,
        "description": "Macular Degeneration",
        "name": "Condition 3",
        "sections": [
            {
                "id": 1,
                "description": "Section 1",
            },
            {
                "id": 2,
                "description": "Section 2",
            },
            {
                "id": 3,
                "description": "Section 3",
            },
            {
                "id": 4,
                "description": "Section 4",
            }

        ],
        "bookReferences": "reference"
    },
    {
        "id": 4,
        "name": "Condition 4",
        "description": "Diabetic Retinopathy",
        "sections": [
            {
                "id": 1,
                "description": "Section 1",
            },
            {
                "id": 2,
                "description": "Section 2",
            },
            {
                "id": 3,
                "description": "Section 3",
            },
            {
                "id": 4,
                "description": "Section 4",
            }

        ],
        "bookReferences": "reference"
    }
]

const hrClass = "my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30";

const Learn = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log("The link was clicked.");
    }

    return (
        <>
            <div className="flex flex-row justify-between">

                <div id="dummy_container_1" className="w-40">
                </div>

                <div className="w-2/3 flex-grow">
                    {conditions.map((condition) => (
                        <div className="py-4 px-10">
                            <div className="border-4 bg-indigo-700 text-white rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
                                <h2 className="mb-5 text-3xl font-semibold">{condition.name}</h2>
                                <p>{condition.description}</p>
                                <hr className={hrClass} />

                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="rounded bg-white px-6 pb-2 pt-2.5 text-xs font-lg text-2xl uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    Find out more
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                <div id="dummy_container_2" className="w-40">
                </div>

                <>

                    {/* <div className="py-4 px-10">
            <div
                className="border-4 rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
                <h2 className="mb-5 text-3xl font-semibold">Hello world!</h2>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for
                    calling extra attention to featured content or information.
                </p>
                <hr
                    className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
                <p className="mb-4">
                    It uses utility classes for typography and spacing to space content
                    out within the larger container.
                </p>
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Learn more
                </button>
            </div>

        </div> */}
                </>
            </div>
        </>
    );
}

export default Learn;