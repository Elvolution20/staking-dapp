import React from 'react';
import ethereum from '../../assets/imgs/ethereum-eth-logo.svg';
import uniswap from '../../assets/imgs/uniswap-uni-logo.svg';

const Foooter = () => {
  return (
    <footer className="bg-purple-300 px-5 py-4 shadow-lg dark:bg-purple-800">
      <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:px-8 flex text-center justify-between">
        <div>
          <a
            href={`${process.env.REACT_APP_UNISWAP}?outputCurrency=${process.env.REACT_APP_STAKE_CONTRACT_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={uniswap} alt="etherscan" className="w-7" />
          </a>
        </div>
        <p className="font-medium text-white ">
            Contact me
             <span className="font-bold text-purple-500 "> Elvissmart2020@gmail.com</span> 
        </p>
        <div>
          <a
            href={`${process.env.REACT_APP_EXPLORER_URL}address/${process.env.REACT_APP_FARM_CONTRACT_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={ethereum} alt="etherscan" className="w-5" />
          </a>
        </div>
      </div>
      <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/Elvolution_20"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="inline w-6 h-6 text-blue-500 fill-current hover:text-blue-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>

            <a
              href="https://github.com/Elvolution20"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              className="inline w-6 h-6 text-gray-100 fill-current hover:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>GitHub</title>
                <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
              </svg>
            </a>
          </div>
    </footer>
  );
};

export default Foooter;
