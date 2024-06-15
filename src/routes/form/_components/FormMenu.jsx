/* eslint-disable react/prop-types */
import menus from '../_lib/formMenu';

export default function FormMenu({ activeMenu, setActiveMenu }) {
  return (
    <footer className="mt-2 p-2 bg-[#E7F5FE] flex gap-4 justify-evenly">
      {menus.map((menu) => (
        <MenuButton
          key={menu.title}
          text={menu.title}
          Svg={menu.Svg}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      ))}
    </footer>
  );
}

function MenuButton({ text, Svg, activeMenu, setActiveMenu }) {
  return (
    <div
      className={`${
        activeMenu === text ? 'text-[#36A187]' : 'text-[#949494]'
      } cursor-pointer`}
      onClick={() => {
        /**
         * TODO: Sets the active menu use setActiveMenu
         */
        console.log('Sets the active Menu');
      }}
    >
      <div className="p-3 rounded-lg bg-white flex justify-center items-center">
        <Svg />
      </div>
      <div className="pt-2">
        <p className="text-[0.6rem] md:text-base text-center">{text}</p>
      </div>
    </div>
  );
}
