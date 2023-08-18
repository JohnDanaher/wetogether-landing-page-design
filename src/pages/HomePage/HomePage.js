import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="grid grid-cols-2 m-12 pt-4 pb-10">
        <div className="flex flex-col justify-center w-full px-2 py-12 ml-1 text-left">
          <h1 className="text-7xl font-light">Online Selbsthilfegruppen</h1>
          <p className="py-6">
            Tausche Dich mit anderen Betroffenen aus oder starte eine neue
            Gruppe. Unabhangig von deinem Wohnort und passend zu deiner
            Lebenssituation.
          </p>
          <Link to="/about">
            <button className="p-2 bg-pink-600 rounded-md">Jetzt starten</button>
          </Link>
        </div>
        <div className="flex">
        <div className="grid grid-cols-2 items-center ml-10">
          <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="pr-4 rounded-md" alt="/"/>
          <img src="https://plus.unsplash.com/premium_photo-1681666713689-cd1416a652f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwb24lMjBjb21wdXRlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="w-56 pt-16 rounded-md" alt="/"/>
          <img src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwb24lMjBjb21wdXRlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="rounded-md" alt="/"/>
        </div>
        </div>
      </div>
      <div className="p-4">
      <h1 className="text-2xl font-semibold text-left">Gefordert durch</h1>
      </div>
      <div className="flex justify-between pt-10 pb-20 px-4">
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
      </div>
      <div className="bg-sky-200 m-2 p-14 rounded-md text-white text-lg">
        <p>In der von Adrian gegrundeten Gruppe, spricht Torsten</p>
        <p>uber seine Panikattacken und Merve fuhlt sich endlich verstanden.</p>
        <p>verstanden.</p>
      </div>
      <div className="pt-20">
        <div>
          <h2 className="text-left p-4 text-lg font-semibold">Deine Vorteile mit we.together</h2>
        </div>
        <div className="flex justify-around px-4">
        <div className="grid grid-rows-3 grid-flow-col gap-10">
        <h3>Fortlaufende Gruppen</h3>
        <p>Tausch Dich etc. etc. etc.</p>
        <h3>Fortlaufende Gruppen</h3>
        <p>Tausch Dich etc. etc. etc.</p>
        <h3>Fortlaufende Gruppen</h3>
        <p>Tausch Dich etc. etc. etc.</p>
        <h3>Fortlaufende Gruppen</h3>
        <p>Tausch Dich etc. etc. etc.</p>
        <h3>Fortlaufende Gruppen</h3>
        <p>Tausch Dich etc. etc. etc.</p>
        <h3>Fortlaufende Gruppen</h3>
        <p>Tausch Dich etc. etc. etc.</p>
        </div>
        </div>
      </div>
      <div className="pt-20">
    <div>
      <h1 className="text-left pl-4 font-semibold text-lg">So funktioniert we.together</h1>
    </div>
    <div className="p-4 flex justify-between">
      <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwaW4lMjBzdW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="rounded-md h-56" alt="/"/>
    </div>
      </div>
    </div>
  );
}

export default HomePage;
