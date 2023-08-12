import RoadMap from "./RoadMap";

const Tokenomics = () => {
    return (
        <div id="tokenomics" >
            <div className="flex md:flex-row flex-col md:justify-around items-center lg:gap-48 lg:mt-32 mt-24 mx-5 md:mx-7 gap-12 md:gap-0">
            <div className="">
                <p className="lg:text-5xl text-3xl font-semibold  text-white">Alexa Pro
                  </p>
                  <p className="mt-5 lg:text-5xl text-3xl font-semibold  text-white">Tokenomics</p>
                <p className="text-[#A6AFBB] lg:text-xl text-base mb-2 mt-8">Name : Alexa Pro</p>
                <p className="text-[#A6AFBB] lg:text-xl text-base mb-2">Total supply : 21,000,000</p>
                <p className="text-[#A6AFBB] lg:text-xl text-base mb-2">DECIMAL : 8</p>
                <p className="text-[#A6AFBB] lg:text-xl text-base mb-2">Network : BSC Network</p>
                <p className="text-[#A6AFBB] lg:text-xl text-base mb-2">Smart Contract :</p>
                <p className="text-[#A6AFBB] lg:text-xl text-base">0x76c82Eef290f8de6E230cbaddf508f16c202b52B</p>
                <button className="btn bg-[rgb(90,222,228)] md:btn-lg capitalize border-none mt-10">Buy Token <span className="lowercase">on</span> PinkSalle</button>
           

            </div>
            <img src="https://www.alexapro.finance/assets/card.abdc6901.png" className="lg:w-[650px] md:w-[400px] w-full h-full" alt="" />
        </div>
        <div className="flex justify-around">
        <RoadMap></RoadMap>
        </div>
        </div>
    );
};

export default Tokenomics;