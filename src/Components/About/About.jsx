
const About = () => {
    return (
        <div id="about" className="flex md:flex-row flex-col gap-16 md:gap-0  justify-center items-center lg:gap-20 lg:mt-32 mt-24">
            <img src="https://www.alexapro.finance/assets/bill.d382c6b7.png"
            className="lg:w-[670px] md:w-[400px] w-full h-full" alt="" />
            <div className="mx-5 md:mx-3">
                <h4 className="lg:text-5xl md:text-4xl text-3xl font-semibold mb-8 text-white">About Alexa Chain</h4>
                <p className="lg:text-lg text-base text-[#A6AFBB]">AlexaChain is an EVM-compatible blockchain that aims to complement <br /> the $Alexa cryptocurrency. As a proof-of-stake blockchain, AlexaChain <br /> seeks to bring scalability, security, robustness, and utility to $Alexa. <br />
                    Alexachain envisions that interoperable blockchain technology makes the <br />world economy more resilient through decentralization, more <br /> accountability through transparency, and more efficiency through <br /> programmable value. The future economy consists of more than one <br /> million interconnected blockchains that exchange real-world and scarce <br /> digital assets.</p>
            </div>

        </div>
    );
};

export default About;