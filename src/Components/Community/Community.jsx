
const Community = () => {
    return (
        <div className="flex md:flex-row flex-col items-center justify-between bg-[rgb(45,45,54)] lg:py-14 lg:px-20 py-7 px-4 mt-32 lg:w-[1400px] md:w-[700px] w-[340px] rounded-xl  ml-4">
            <div className="">
                <h4 className="lg:text-5xl text-3xl font-semibold  text-white mb-8">Join our community</h4>
                <p className=" text-[#A6AFBB] lg:text-lg text-base">We are looking to work with people and companies <br /> that are serious about the mass adoption of crypto,<br /> metaverse explorers, marketing partners, and those <br /> who wish to place our scanners around the world.</p>
            </div>
            <button className="btn bg-[rgb(90,222,228)] md:btn-lg capitalize border-none mt-10">Buy Token <span className="lowercase">on</span> PinkSalle</button>
        </div>
    );
};

export default Community;