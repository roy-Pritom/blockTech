import Community from "../Community/Community";

const Products = () => {
    return (
        <div className="lg:ml-16 md:ml-5 mt-20" id="products">
            <div className="md:flex items-center gap-24 lg:gap-40 mx-3">
                <h4 className="lg:text-5xl text-3xl font-semibold  text-white mb-5 md:mb-0">AlexaChain Ecosystem</h4>
                <div className="">
                    <p className="text-[#A6AFBB] lg:text-lg text-base">Alexachain have an excellent ecosystem <br /> products. Alexa tokens have a high value which <br /> can be a productive assets (such as an assets <br /> that can be stored and have value that continues <br /> to grow; ex: gold) for the holders</p>
                </div>
            </div>


            <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 lg:w-[1200px] mt-20 ml-4 md:ml-0">

                <div className="product-box  h-[280px] lg:h-[320px] text-white bg-[rgb(16,42,52)] p-10
              rounded-2xl w-[340px] lg:w-[370px]">
                    <p className="lg:text-2xl text-xl font-semibold mb-10">Alexa Staking</p>
                    <p className="lg:text-xl text-base">Token staking events incentivize <br /> holding of $Alexa and <br />contributing to various liquidity <br /> pools.</p>

                </div>

                <div className="product-box  h-[280px] lg:h-[320px] text-white bg-[rgb(16,42,52)] p-10 rounded-2xl w-[340px] lg:w-[370px]">
                    <p className="lg:text-2xl text-xl font-semibold mb-10">Alexa Swap</p>
                    <p className="lg:text-xl text-base">Alexaswap is a decentralized <br /> exchange that trades on <br /> Pancakeswap liquidities, <br /> instantly swap crypto tokens.</p>

                </div>

                <div className="product-box  h-[280px] lg:h-[320px] text-white bg-[rgb(16,42,52)] p-10 rounded-2xl w-[340px] lg:w-[370px]">
                    <p className="lg:text-2xl text-xl font-semibold mb-10">Alexa Bridge</p>
                    <p className="lg:text-xl text-base">Multi Blockchains supported <br /> decentralized bridge to transfer <br /> coins from one blockchain to <br /> other quickly.</p>

                </div>

                <div className="product-box  h-[280px] lg:h-[320px] text-white bg-[rgb(16,42,52)] p-10 rounded-2xl w-[340px] lg:w-[370px]">
                    <p className="lg:text-2xl text-xl font-semibold mb-10">Alexa Explorer</p>
                    <p className="lg:text-xl text-base">Alexa Explorer is a Block Explorer <br /> and Analytics Platform for <br /> AlexaChain & it helpes to check <br /> transactions and also deploy smart contracts.</p>

                </div>

                <div className="product-box  h-[280px] lg:h-[320px] text-white bg-[rgb(16,42,52)] p-10 rounded-2xl w-[340px] lg:w-[370px]">
                    <p className="lg:text-2xl text-xl font-semibold mb-10">Alexa Move</p>
                    <p className="lg:text-xl text-base">New web3 economic model <br /> that allows users to earn crypto <br /> rewards by participating in <br /> fitness and sports-based <br /> activities</p>

                </div>
                <div className="product-box  h-[280px] lg:h-[320px] text-white bg-[rgb(16,42,52)] p-10 rounded-2xl w-[340px] lg:w-[370px]">
                    <p className="lg:text-2xl text-xl font-semibold mb-10">Alexa Web3 Wallet</p>
                    <p className="lg:text-xl text-base">Alexa Wallet build web3 wallet <br /> to be one stop Dapp to Access <br /> Digital Asset. A secured dapp <br /> wallet to browser and keep <br /> assets</p>

                </div>
            </div>

            <Community></Community>
            
        </div>
    );
};

export default Products;