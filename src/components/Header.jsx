import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="bg-white fixed h-16 top-0 left-16 right-0 flex justify-center items-center">
      <div className=" flex-1 flex justify-center items-center h-8 w-8 md:hidden">
        <img
          src="../../public/img/Threads_(app)_logo.svg.png"
          alt="Logo"
          className="h-full"
        />
      </div>
      {/* <div className="hidden md:flex md:gap-1 md:justify-center md:items-center">
    <p>For you</p>
    <div className="w-8 h-8 border-1 flex justify-center  border-gray-500 rounded-full items-center cursor-pointer
    ">
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
   </div> */}
      <div className="w-12 h-12 flex justify-center items-center md:hidden">
        <FontAwesomeIcon icon={faBarsStaggered} />
      </div>
    </div>
  );
};
export function Heading({ title }) {
  return (
    <div className=" hidden bg-white fixed h-16 top-0 left-16 right-0 md:flex justify-center items-center">
      <h1 className="text-lg font-semibold my-4">{title}</h1>
    </div>
  );
}

export default Header;
