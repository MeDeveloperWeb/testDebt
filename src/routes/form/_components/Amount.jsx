// eslint-disable-next-line react/prop-types
export default function Amount({ amount, setAmount }) {
  return (
    <div className="shadow-lg rounded-3xl flex flex-col items-center m-4 mt-16 pb-16 gap-4">
      <label
        htmlFor="amount"
        className="font-archivo font-bold text-xl text-[#36A187]"
      >
        Choose your debt amount
      </label>
      <div className="font-medium text-2xl font-archivo">
        &#8377;{formatAmt(amount)}
      </div>
      <div className="w-full px-4">
        <input
          type="range"
          max={100000}
          min={1}
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          className="w-full accent-[#36A187]"
          required
        />
      </div>
    </div>
  );
}

function formatAmt(amt) {
  const amount = amt.toString();
  const lastIndex = amount.length - 1;

  let formattedAmt = '';

  for (let i = 0; i <= lastIndex; ++i) {
    if ((lastIndex - i) % 2 !== 0 && lastIndex - i !== 1)
      formattedAmt += amount[i] + ',';
    else formattedAmt += amount[i];
  }

  return formattedAmt;
}
