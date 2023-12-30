import { useEffect, useState } from "react";
import { db } from "../database/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { book_gif } from "../assets";
import { book1_gif } from "../assets";

const Treatments = () => {

    const [treatments, setTreatments] = useState([]);

    const handleClick = (event, link) => {
        event.preventDefault();
        console.log("clicked");
        console.log(link);
        window.open(link);
    };

    const treatmentsCollectionsRef = collection(db, "treatments");

    useEffect(() => {

        const getTreatments = async () => {
            const treatments_data = await getDocs(treatmentsCollectionsRef);
            const treatments_array = [];
            console.log(treatments_data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            treatments_data.docs.map(doc => treatments_array.push({ ...doc.data(), id: doc.id }));
            console.log(treatments_array);
            setTreatments(treatments_array);
        }

        getTreatments();

    }, []);

    return (
        <>

            <div className="flex flex-col flex-grow md:flex-row md:flex-wrap md:justify-between px-10 h-400 w-400 justify-center items-center overflow-y-auto scrollbar-hide">

                {/* mapping the data from the database */}
                {treatments.map((treatment) => (
                    <div className="border-solid border-2 flex flex-wrap mt-3 mb-3 rounded overflow-hidden shadow cursor-pointer hover:bg-blue-500 hover:text-white w-[350px] h-[200px]" onClick={(event) => handleClick(event, treatment.link)}>
                        {/* <img className="w-full" src="src/assets/images/reading-article.jpg" alt="simple image" /> */}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{treatment.title}</div>
                            <p className="text-base">
                                {treatment.description}
                            </p>
                            <hr />
                            <p>
                                Click to go to page
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            <div className="text-black font-mono flex flex-col md:flex-row justify-center items-center">
                <img src={book1_gif} alt="" className="w-[300px]" />
                <div className="flex flex-col justify-center">
                    <p className="text-3xl font-mono">Still working on resources</p>
                </div>
            </div>
        </>
    );
}

export default Treatments;