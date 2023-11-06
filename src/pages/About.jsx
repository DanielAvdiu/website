
const About = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center space-x-10 py-10 ">

            <div className="flex flex-col py-10 px-10 border-2 border-black mx-2 text-center h-screen shadow-2xl">
                <p className="font-mono font-bold text-xl md:text-3xl">Thank you for your interest</p>
                <p className="font-mono font-bold text-xl md:text-3xl">Website is still being developed</p>
                <p className="font-mono font-bold text-xl md:text-3xl">Watch the following video for more context</p>
                <hr className="border-10 border-indigo-700 h-10" />

                <div className="flex flex-row justify-center">
                    <iframe src="https://www.youtube.com/embed/hHiu3cTMgMs" frameborder="0" className="border-2 border-black" allowFullScreen style={{ width: 500, height: 280 }} />
                </div>

                <p className="font-mono py-10 font-bold text-xl">Source of video: Americans for Cures (on Youtube)</p>
            </div>

        </div>
    );
}

export default About;