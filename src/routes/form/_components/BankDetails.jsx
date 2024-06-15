/* eslint-disable react/prop-types */
import { useState } from 'react';
import search from '../../../assets/form/search.png';
import { banks, recentBanks } from '../_lib/banks';
import Bank from './Bank';

export default function BankDetails({ bank, setBank }) {
  // All banks that are available to be chosen
  const [filteredBanks, setFilteredBanks] = useState(banks);

  // Banks other than what user searched for
  const [otherBanks, setOtherBanks] = useState([]);

  return (
    <div className="mt-8 text-center gap-4 px-8 flex-1 max-h-[80%] flex flex-col">
      <h1 className="text-lg text-[#36A187] font-bold">Select your Bank</h1>
      <div className="drop-shadow-[4px_4px_7px_rgba(0,0,0,0.25)] rounded-xl flex relative my-2">
        <input
          type="text"
          className="flex-1 h-10 rounded-xl py-2 pl-4 pr-10"
          placeholder="Search"
          onChange={({ target }) => {
            const filteredBankArr = [];
            const otherBankArr = [];

            // Filter banks based on searched value
            banks.forEach((bank) => {
              if (bank.title.toLowerCase().includes(target.value.toLowerCase()))
                filteredBankArr.push(bank);
              else otherBankArr.push(bank);
            });

            setFilteredBanks(filteredBankArr);

            setOtherBanks(otherBankArr);
          }}
        />
        <button className="absolute right-2 top-0 bottom-0" type="button">
          <img src={search} alt="" className="w-6" />
        </button>
      </div>
      <h3 className="font-medium text-sm text-start">Recent Accounts</h3>
      <ul className="py-2 shadow-xl rounded-xl overflow-y-scroll max-h-[20%]">
        {recentBanks.map(({ title, icon }, i) => [
          <Bank
            key={`recent-bank-${title}`}
            title={title}
            icon={icon}
            bank={bank}
            setBank={setBank}
          />,
          i !== recentBanks.length - 1 && <hr key={`hr-recent-bank-${title}`} />
        ])}
      </ul>
      <hr />

      <h3 className="font-medium text-sm text-start">Top Banks</h3>

      {/* Input for Making sure bank has been selected */}
      {!bank && (
        <input
          type="checkbox"
          required
          className="op opacity-0 h-[1px] -my-4 mx-auto"
          name="bank"
          onInvalid={({ target }) =>
            target.setCustomValidity('Please Select a bank!')
          }
        />
      )}

      <ul className="py-2 shadow-xl rounded-xl overflow-y-scroll flex-1 mb-6">
        {/* List User searched banks on top.  */}
        {filteredBanks.map(({ title, icon }, i) => [
          <Bank
            key={`bank-${title}`}
            title={title}
            icon={icon}
            bank={bank}
            setBank={setBank}
          />,
          i !== banks.length - 1 && <hr key={`hr-bank-${title}`} />
        ])}
        {/* Remaining banks then */}
        {otherBanks.map(({ title, icon }, i) => [
          <Bank
            key={`bank-${title}`}
            title={title}
            icon={icon}
            bank={bank}
            setBank={setBank}
          />,
          i !== otherBanks.length - 1 && <hr key={`hr-bank-${title}`} />
        ])}
      </ul>
    </div>
  );
}
