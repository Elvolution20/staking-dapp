import React, { useState } from 'react';

import { toWei, showAlert } from '../../utils';
import { loadData } from '../../store/interactions';
import { useAppSelector, useAppDispatch } from '../../hooks';

const Unstake = () => {
  const [amount, setAmount] = useState('0.0');
  const [loading, setLoading] = useState(false);

  const { interaction } = useAppSelector((state: any) => state);

  const dispatch = useAppDispatch();

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const expectedBlockTime = 10000;
  const onWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await interaction.data.farm.methods
        .withdraw(toWei(amount))
        .send({ from: interaction.data.address })
        .on('transactionHash', async (hash: string) => {
          let transactionReceipt = null;
          while (transactionReceipt == null) {
            transactionReceipt =
              await interaction.web3.eth.getTransactionReceipt(hash);
            await sleep(expectedBlockTime);
          }

          setLoading(false);
          setAmount('0.0');
          dispatch(loadData());

          showAlert(`Withdrawn ${amount} DAI`, hash);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-purple-100 mx-auto max-w-lg shadow-lg rounded overflow-hidden p-4 sm:flex dark:bg-purple-800 mt-20">
      <form className="w-full p-5">
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left dark:text-gray-50"
              htmlFor="amount"
            >
              {interaction.data &&
                parseFloat(interaction.data.daiBalance).toFixed(2)}{' '}
              Dai
            </label>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left dark:text-gray-50"
              htmlFor="amount"
            >
              Staking Balance:{' '}
              {interaction.data &&
                parseFloat(interaction.data.stakingBalance).toFixed(2)}{' '}
              Dai
              <span
                className="text-purple-300 cursor-pointer"
                onClick={() => setAmount(interaction.data.stakingBalance)}
              >
                (Max)
              </span>
            </label>
          </div>

          <input
            className="shadow appearance-none border rounded w-full py-5 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            value={amount}
            placeholder="0.0"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <button
            className={`bg-purple-300 w-full py-4 px-8 rounded-lg text-gray-50 ${
              loading === true ? 'disabled:opacity-50 cursor-not-allowed' : null
            }`}
            onClick={onWithdraw}
          >
            {loading ? 'Withdrawing...' : 'Withdraw'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Unstake;
