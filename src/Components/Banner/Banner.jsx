
const Banner = () => {
    return (
        <div className="flex md:flex-row flex-col gap-16 md:gap-0 items-center justify-between mt-3 md:mt-0 " id="home">

            <div className="lg:ml-14 md:ml-7">
                <h3 className="text-[rgb(127,230,235)] lg:text-7xl md:text-5xl text-3xl font-semibold">Rule The World</h3>
                <button className="btn bg-[rgb(36,34,39)] border-none capitalize md:my-8 my-5">
                <img src="https://www.alexapro.finance/assets/Discount.61d9dc08.svg" alt="" />
                <p className="text-white md:text-xl text-base">Pinksale Live Now</p>

              
                </button>
                <p className="text-white lg:text-lg md:text-base text-sm mb-8">The Alexa blockchain and product ecosystem <br /> enable development of high-performance <br /> blockchain projects. An array of original features <br /> and protocols is designed to support speed,<br /> privacy, usability, and liquidity needs all in one <br /> platform.</p>
                <button className="btn bg-[rgb(90,222,228)] md:btn-lg capitalize border-none">WhitePaper</button>
            </div>

            <div className="">
                <img src="https://www.alexapro.finance/assets/robot.5e0e26f6.png"
                    className="lg:w-[750px] lg:h-[740px] md:w-[380px] md:h-[430px] w-full h-full" alt="" />
            </div>

        </div>
    );
};

export default Banner;