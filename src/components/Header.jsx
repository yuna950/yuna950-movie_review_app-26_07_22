import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="w-full flex justify-between items-center xl:px-[200px] xl:py-3
    absolute top-0 left-0"
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
