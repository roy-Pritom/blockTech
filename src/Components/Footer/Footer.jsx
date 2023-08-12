import logo from '../../assets/dynaqube1.png';
const Footer = () => {
    return (
        <div className=" p-10   text-white mt-10">
            <footer className="footer md:flex md:justify-between p-7 md:p-10  text-white">
                <div>
                    <div className="flex items-center justify-center gap-3">
                        <img src={logo} className="w-[50px] h-[50px]" alt="" />
                        <p className="lg:text-5xl text-3xl text-[#02AAFF] font-semibold">BlockTech</p>
                    </div>
                    <p className="text-xl text-[#A6AFBB]">Rule The World</p>

                </div>
                <div className=''>
                    <span className="text-xl font-medium text-white">
                        Products</span>
                    <a className="link link-hover text-[#A6AFBB] text-base">Alexa Explorer</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Alexa Staking</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Alexa Swap</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Alexa Move</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Alexa Play</a>
                </div>
                <div className=''>
                    <span className="text-xl font-medium text-white">Legal</span>
                    <a className="link link-hover text-[#A6AFBB] text-base">Help Center</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Partners</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Suggestions</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Blog</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Newsletters</a>
                </div>
                <div className=''>
                    <span className="text-xl font-medium text-white">Partner</span>
                    <a className="link link-hover text-[#A6AFBB] text-base">Token Address</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">PinkSale IDO</a>
                    <a className="link link-hover text-[#A6AFBB] text-base">Buy on Pancakeswap</a>
                </div>

            </footer>
            <hr className="text-white border-white bg-white" />
            <div className="flex md:flex-row flex-col items-center justify-between">

                <p className="mt-8">Copyright Ⓒ 2022-23 AlexaPro. All Rights Reserved.</p>
                <div className="flex gap-6 mt-8">
                    <img src="https://www.alexapro.finance/assets/Telegram_X_2019_Logo.svg.4752e661.png" className="lg:w-[25px] lg:h-[25px] w-[18px] h-[18px]" alt="" />
                    <img src="https://www.alexapro.finance/assets/Telegram_X_2019_Logo.svg.4752e661.png" className="lg:w-[25px] lg:h-[25px] w-[18px] h-[18px]" alt="" />
                    <img src="https://www.alexapro.finance/assets/instagram.a54e883a.svg" className="lg:w-[25px] lg:h-[25px] w-[18px] h-[18px]" alt="" />
                    <img src="https://www.alexapro.finance/assets/facebook.b1172216.svg" className="lg:w-[25px] lg:h-[25px] w-[18px] h-[18px]" alt="" />
                    <img src="https://www.alexapro.finance/assets/twitter.8f349e28.svg" className="lg:w-[25px] lg:h-[25px] w-[18px] h-[18px]" alt="" />
                    <img src="https://www.alexapro.finance/assets/youtube-with-circle-svgrepo-com.84083e5a.svg" className="lg:w-[25px] lg:h-[25px] w-[18px] h-[18px]" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;