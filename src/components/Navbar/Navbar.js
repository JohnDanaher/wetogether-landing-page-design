import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-3 sticky top-0 bg-white">
      <div className="px-8 mx-auto">
        <div className="flex justify-between">
          <div className="flex justify-between pt-2">
            <h1 className="pr-6">Startseite</h1>
            <h1 className="pr-6">Gruppen</h1>
            <h1 className="pr-6">Blog</h1>
            <h1 className="pr-6">Preisubersicht</h1>
            <h1>Uber uns</h1>
          </div>
          <div className="text-left text-pink-700">
            <h1 className="text-xs">we.</h1>
            <h1 className="text-xs">together</h1>
          </div>
          <div className="px-4">
          <input type="search" placeholder="Gruppe suchen"></input>
            <Link to="/about">
              <button className="px-6">Anmelden</button>
            </Link>
            <Link to="/">
              <button className="bg-pink-700 p-2 rounded-md">Mitglied Werden</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
