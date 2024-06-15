/* eslint-disable react/prop-types */
import { availableDebtTypes } from '../_lib/debtType';

export default function DebtType({ debtTypes, setDebtTypes }) {
  return (
    <div className="shadow-lg rounded-3xl flex flex-col items-center m-4 mt-16 pb-16 px-5 gap-4 font-archivo">
      <h1 className="font-bold text-xl text-[#36A187] text-center">
        What type of debt do you have?
      </h1>

      {/* Input for Making sure at least one debt type has been selected */}
      {!debtTypes.length && (
        <input
          type="checkbox"
          required
          className="op opacity-0 h-[1px] -my-4 mx-0"
          onInvalid={({ target }) =>
            target.setCustomValidity('Please Check at least one type!')
          }
        />
      )}

      <h6 className="text-center text-xs m-4">Select all that apply</h6>
      <ul className="grid grid-cols-2 w-full gap-4">
        {availableDebtTypes.map((type) => (
          <li
            key={`debt-type-${type}`}
            className="gap-2 text-[#404040] flex items-center"
          >
            <input
              type="checkbox"
              value={type}
              id={`debt-type-${type}`}
              checked={debtTypes.includes(type)}
              onChange={({ target }) => {
                if (target.checked) setDebtTypes([...debtTypes, type]);
                else
                  setDebtTypes(
                    debtTypes.filter((debtType) => debtType !== type)
                  );
              }}
            />
            <label
              htmlFor={`debt-type-${type}`}
              className="text-xs md:text-base font-thin"
            >
              {type}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
