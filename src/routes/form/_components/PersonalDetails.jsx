import { useState } from 'react';
import checkmark from '../../../assets/form/check.png';
import cross from '../../../assets/form/cross.png';

/* eslint-disable react/prop-types */

export default function PersonalDetails({
  personalDetails,
  setPersonalDetails
}) {
  return (
    <>
      <div className="shadow-lg rounded-3xl flex flex-col items-center m-4 mt-16 pb-8 px-5 gap-4 font-archivo">
        <h1 className="font-bold text-xl text-[#36A187] text-center">
          See your results
        </h1>
        <Input
          id="firstName"
          label="First Name"
          value={personalDetails?.firstName || ''}
          onChange={({ target }) => {
            setPersonalDetails({ ...personalDetails, firstName: target.value });
          }}
        />
        <Input
          id="lastName"
          label="Last Name"
          value={personalDetails?.lastName || ''}
          onChange={({ target }) => {
            setPersonalDetails({ ...personalDetails, lastName: target.value });
          }}
        />
        <Input
          id="phone"
          type="tel"
          label="Phone"
          value={personalDetails?.phone || ''}
          onChange={({ target }) => {
            setPersonalDetails({ ...personalDetails, phone: target.value });
          }}
          pattern="^[0-9]{10}$"
          title="Please Enter a valid Phone Number"
        />
        <Input
          id="email"
          type="email"
          label="Email"
          value={personalDetails?.email || ''}
          onChange={({ target }) => {
            setPersonalDetails({ ...personalDetails, email: target.value });
          }}
        />
      </div>
      <Disclaimer />
    </>
  );
}

function Input({ id, type = 'text', label, ...inputProps }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only font-archivo">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={label}
        className="border border-solid border-[#D8D8D8] rounded-sm w-full py-2 px-4 font-archivo"
        required
        {...inputProps}
      />
    </div>
  );
}

function Disclaimer() {
  const [termConfirmation, setTermConfirmation] = useState(false);

  return (
    <div className="m-4 mt-8 flex flex-col gap-4 text-[#7C7C7C] font-display bg-[#FF101014] p-4 border border-solid border-[#FF1010] rounded-lg">
      <h3 className="font-medium text-black">Important note:</h3>
      <p>We will help you settle at 50% of selected amount. </p>{' '}
      <p>
        If you choose our services you have to pay the first amount within the
        48 hours.
      </p>
      <p>Confirm if you can pay within 48 hours</p>
      <div className="flex gap-4">
        <button
          type="button"
          className="px-6 py-1 border border-solid border-[#FF1010] rounded-lg text-xs text-[#FF1010] bg-[#FF101022] flex gap-1"
          onClick={() => {
            setTermConfirmation(false);
          }}
        >
          Decline
          <img src={cross} alt="" className="w-4" />
        </button>
        <button
          type="button"
          className={`border border-solid border-[#6ABD00] rounded-lg text-xs ${
            termConfirmation
              ? 'bg-[#6ABD00] text-white'
              : 'text-[#6ABD00] bg-[#6cff0b50]'
          }`}
        >
          <label
            htmlFor="confirm-check"
            className="flex gap-1 px-6 py-1 w-full"
          >
            Confirm <img src={checkmark} alt="" className="w-4" />
            <input
              type="checkbox"
              required
              className="op opacity-0 h-[1px]"
              id="confirm-check"
              checked={termConfirmation}
              onChange={() => {
                setTermConfirmation(true);
              }}
            />
          </label>
        </button>
      </div>
    </div>
  );
}
