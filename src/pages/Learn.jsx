import { useState } from "react";

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

const conditions = [
    {
        "id": 1,
        "name": "Retinitis Pigmentosa",
        "description": "Watch the videos for more context",
        "links": [
            {
                "title": "Genetics, Pathophysiology, Signs",
                "link": "https://www.youtube.com/embed/o0__ZphE3mM",
                "source": "JJ Medicine"
            },
            {
                "title": "Living with retinitis pigmentosa",
                "link": "https://www.youtube.com/embed/DW1X2z0_vN0",
                "source": "Guide Dogs"
            },
            {
                "title": "MasterClass by Prof Ian McDonald",
                "link": "https://www.youtube.com/embed/8QTMA9Y9WUo",
                "source": "iFocus Online"
            },
            {
                "title": "Symptoms, Causes And Treatment",
                "link": "https://www.youtube.com/embed/TIMOx-Dup2s",
                "source": "pOwer of knOwledge"
            },
            {
                "title": "The Past, Present, and Future",
                "link": "https://www.youtube.com/embed/LXbwBI8fuC4",
                "source": "Cybersight"
            },
            {
                "title": "Genetic Factors of Eye Disease",
                "link": "https://www.youtube.com/embed/veSC_MqnrqM",
                "source": "Cyagen"
            }
        ]
    },
    {
        "id": 2,
        "name": "Glaucoma",
        "description": "Watch the videos for more context",
        "links": [
            {
                "title": "What is Glaucoma",
                "link": "https://www.youtube.com/embed/40eE6LY3Ss0",
                "source": "Doctor Eye Health"
            },
            {
                "title": "Why It Happens",
                "link": "https://www.youtube.com/embed/hz7MKn3Gwig",
                "source": "Fauquier ENT"
            },
            {
                "title": "Glaucoma Animation",
                "link": "https://www.youtube.com/embed/XlI_JXYMzbs",
                "source": "National Eye Institute, NIH"
            },
            {
                "title": "Development of Glaucoma",
                "link": "https://www.youtube.com/embed/TgjdPgSxeYg",
                "source": "Alila Medical Media"
            },
            {
                "title": "Understanding Acute Angle Closure Glaucoma",
                "link": "https://www.youtube.com/embed/wHKo0CPtaMY",
                "source": "Zero to Finals"
            }
        ]
    },
    {
        "id": 3,
        "name": "Macular Degeneration",
        "description": "Watch the videos for more context",
        "links": [
            {
                "title": "Symptoms, Diagnosis, Treatment",
                "link": "https://www.youtube.com/embed/OqjPxHiSJbs",
                "source": "JJ Medicine"
            },
            {
                "title": "How It Affects Your Vision",
                "link": "https://www.youtube.com/embed/ozZQIZ_52YY",
                "source": "Amerra Medical"
            },
            {
                "title": "How to Prevent NATURALLY",
                "link": "https://www.youtube.com/embed/spDSiMT4d8s",
                "source": "Eye Channel by Eye Surgeon Dr Audrey Tai"
            },
            {
                "title": "Dry Macular Degeneration",
                "link": "https://www.youtube.com/embed/gqlVTnDFeoA",
                "source": "Wills Eye Hospital"
            },
            {
                "title": "Living with Macular Degeneration",
                "link": "https://www.youtube.com/embed/juP03eLzi38",
                "source": "American Macular Degeneration Foundation"
            }
        ]
    },
    {
        "id": 4,
        "name": "Diabetic Retinopathy",
        "description": "Watch the videos for more context",
        "links": [
            {
                "title": "Diabetic and Hypertensive",
                "link": "https://www.youtube.com/embed/WHwGegMfiHU",
                "source": "Alila Medical Media"
            },
            {
                "title": "Diabetic Retinopathy",
                "link": "https://www.youtube.com/embed/Tv7-2r8Ki1U",
                "source": "Mark Erickson"
            },
            {
                "title": "Vision Loss",
                "link": "https://www.youtube.com/embed/oTXv-VKMQm0",
                "source": "American Academy of Ophthalmology"
            },
            {
                "title": "Lecture and Treatment",
                "link": "https://www.youtube.com/embed/s8Lgh9ZNQCQ",
                "source": "Doctor Eye Health"
            },
            {
                "title": "Diabetic retinopathy treatment",
                "link": "https://www.youtube.com/embed/y6M1_18fE1Q",
                "source": "Ohio State Wexner Medical Center"
            }
        ]
    }
]

const hrClass = "my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30";

const Learn = () => {

    const handleClick = (e, index) => {
        e.preventDefault();
        console.log("The link was clicked.");

        let list = document.getElementById(`list_${index}`);
        list.classList.toggle("hidden");

        let button = document.getElementById(`button_${index}`);
        if (button.innerHTML === "Show more") {
            button.innerHTML = "Show less";
        } else {
            button.innerHTML = "Show more";
        }
    }

    return (
        <>
            <div className="overflow-auto flex flex-row w-screen justify-center">

                <div id="dummy_container_1" className="w-10 md:w-40">
                </div>

                <div className="overflow-x-auto flex flex-col flex-grow py-4 px-2 space-y-4">
                    {conditions.map((condition, index) => (

                        <div className="border-4 bg-neutral-400 text-white border-2 border-black rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black">
                            <h2 className="mb-5 text-3xl font-semibold text-black">{condition.name}</h2>
                            <p className="text-black">{condition.description}</p>
                            <hr className={hrClass} />

                            <div id={`list_${index}`} className="flex flex-col md:space-x-4 md:flex-row hidden flex-col md:overflow-x-scroll overflow-y-scroll scrollbar-hide py-4 my-4">
                                {condition.links.map((link) => (
                                    <div className="py-4 px-4 flex flex-col justify-center">
                                        <iframe src={link.link} frameborder="0" allowFullScreen className="aspect-video"></iframe>
                                        <p className="font-mono font-bold mt-2 text-lg text-black">Title: {link.title}</p>
                                        <p className="font-mono font-bold text-lg text-black">Source: {link.source}</p>
                                    </div>
                                ))}
                            </div>

                            <button
                                id={`button_${index}`}
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={(e) => handleClick(e, index)}
                                className="rounded bg-white px-6 pb-2 pt-2.5 text-xs font-lg text-2xl uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                Show more
                            </button>
                        </div>

                    ))}
                </div>

                <div id="dummy_container_2" className="w-10 md:w-20">
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