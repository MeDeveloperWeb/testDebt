import { useState } from 'react';
import Amount from './_components/Amount';
import Poster from './_components/Poster';
import BankDetails from './_components/BankDetails';
import DebtType from './_components/DebtType';
import PersonalDetails from './_components/PersonalDetails';
import './Form.css';
import submitForm from './_lib/submitForm';
import FormMenu from './_components/FormMenu';
import menus from './_lib/formMenu';

export default function Form() {
  const steps = ['Amount', 'Bank', 'Loan', 'Details'];
  const [activeStep, setActiveStep] = useState(0);

  // Form Values
  const [amount, setAmount] = useState(1000000);
  const [bank, setBank] = useState('');
  const [debtTypes, setDebtTypes] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({});

  const stepViews = {
    Amount: <Amount amount={amount} setAmount={setAmount} />,
    Bank: <BankDetails bank={bank} setBank={setBank} />,
    Loan: <DebtType debtTypes={debtTypes} setDebtTypes={setDebtTypes} />,
    Details: (
      <PersonalDetails
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
    )
  };

  // Menu State
  const [activeMenu, setActiveMenu] = useState(menus[0].title);

  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="h-[83vh] flex flex-col pt-4 overflow-y-scroll overflow-x-hidden">
        <div className="steps flex justify-center">
          <div className="flex justify-center font-archivo mx-16 mt-6 w-full max-w-[600px]">
            {steps.map((step, i) => [
              <div
                key={`step-${step}`}
                className={`flex flex-col justify-center items-center text-sm md:text-lg ${
                  steps[activeStep] === step
                    ? 'text-[#36A187]'
                    : 'text-[#979797]'
                }`}
              >
                <span className="border border-inherit border-solid rounded-full font-medium py-1 px-3">
                  {i + 1}
                </span>
                <span className="font-semibold">{step}</span>
              </div>,
              i !== steps.length - 1 && (
                <div
                  key={`step-${step}-line`}
                  className="text-[#6C6C6C] flex-1 my-[1.125rem] mx-1"
                >
                  <hr className="border" />
                </div>
              )
            ])}
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 max-h-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (activeStep !== steps.length - 1)
                setActiveStep(activeStep + 1);
              else {
                submitForm({
                  amount,
                  bank,
                  debtTypes,
                  personalDetails
                });
              }
            }}
            className="max-w-[600px] w-full flex-1 max-h-full flex flex-col"
          >
            {stepViews[steps[activeStep]]}
            <SubmitButton />
          </form>
          {activeStep === 0 && <Poster />}
        </div>
      </main>
      <FormMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="flex justify-center items-center mb-4">
      <button
        type="submit"
        className="bg-[#328ED1] text-white font-display px-16 py-3 rounded-sm shadow-lg cursor-pointer font-medium text-sm"
      >
        Continue
        <span className="inline-block h-2 w-2 border-r-2 border-t-2 rotate-45 border-white border-solid"></span>
      </button>
    </div>
  );
}
