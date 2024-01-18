import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar () {
  return (
    <div className="flex flex-row w-2/5 items-center px-4 rounded-full border-gray-900 border-2 bg-indigo-100">
    <i className="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
    <input type="text" className="placeholder-blue-300 bg-indigo-100 white h-10  w-11/12  px-4 focus:outline-none   hover:cursor-pointer text-blue-600 " placeholder= "Algoritmo, variable, arreglo" name="search" />
    </div>

  );
}
