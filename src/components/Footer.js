export default function Footer() {
  return (
    <div>
    <hr></hr>
      <div className="w-full h-full flex flex-col justify-around">
        <div className="grid grid-cols-2 m-12 pt-4 pb-10">
        <div className="py-20 pl-56 text-pink-700">
            <h1 className="text-left font-bold">we.</h1>
            <h1 className="text-left font-bold">together</h1>
          </div>
          <div>
            <h3 className="font-semibold pb-4">Rechtliches</h3>
            <p className="py-2 text-xs">Uber uns</p>
            <p className="py-2 text-xs">Impressum</p>
            <p className="py-2 text-xs">Datenschutz</p>
            <p className="py-2 text-xs">AGB</p>
            <p className="py-2 text-xs">Wiederufsrecht</p>
            </div>
          </div>
        </div>
      </div>
  );
}
