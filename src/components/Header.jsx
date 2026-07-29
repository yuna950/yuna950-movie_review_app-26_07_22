import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="w-full flex justify-between items-center px-[30px] lg:px-[50px] xl:px-[200px] py-3
    absolute top-0 left-0 z-10 bg-white/30"
    >
      <div className="text-2xl font-bold ">
        <Link to={"/"}>MOVIE</Link>
      </div>

      <ul>
        <li>
          <Link to={"/search"}>
            <Search />
          </Link>
        </li>
      </ul>
    </header>
  );
}
