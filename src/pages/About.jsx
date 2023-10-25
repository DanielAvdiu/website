import {goodgif} from '../assets/';

const About = () => {
    return ( 
        <div className="flex flex-row justify-center space-x-10 py-10 h-screen w-screen">
            <div className="">
                <img src={goodgif} alt="" />
            </div>

            <div className="flex flex-col justify-center">
                <div className="text-center text-4xl">Under</div>
                <div className="text-center text-4xl">Development</div>
                <div><br /> <br /> <br /> </div>
            </div>

        </div>
     );
}
 
export default About;