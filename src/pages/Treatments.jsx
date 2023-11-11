import { useEffect, useState } from "react";
import { db } from "../database/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Treatments = () => {

    const [treatments, setTreatments] = useState([]);

    const handleClick = (event, link) => {
        event.preventDefault();
        console.log("clicked");
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
        <div className="flex flex-col flex-grow md:flex-row justify-center items-center overflow-y-auto scrollbar-hide">

            {/* mapping the data from the database */}
            {treatments.map((treatment) => (
                <div className="mt-3 mb-3 w-2/3 rounded overflow-hidden shadow-lg cursor-pointer" onClick={(event)=>handleClick(event, treatment.link)}>
                    <img className="w-full" src="src/assets/images/reading-article.jpg" alt="simple image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{treatment.title}</div>
                        <p className="text-gray-700 text-base">
                            {treatment.description}
                        </p>
                    </div>

                </div>
            ))}

            {/* card design for each treatment */}


        </div>
    );
}

export default Treatments;