import menu from '../../../assets/form/dotMenu.png';

/* eslint-disable react/prop-types */
export default function Bank({ title, icon, bank, setBank }) {
  return (
    <li>
      <button
        className={`flex items-center px-2 my-2 w-full ${
          bank === title ? 'border-2 border-solid border-[#36A187]' : ''
        }`}
        type="button"
        onClick={() => {
          setBank(title);
        }}
      >
        <img src={icon} alt={title} className="h-[50px]" />
        <p className="flex-1">{title}</p>
        <img src={menu} alt="Options" className="rotate-90 h-[50px]" />
      </button>
    </li>
  );
}
