import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-4xl bg-orange-400 text-white p-4 font-bold">
          Maurice's Blog
        </h1>
      </div>
      <Navbar />
    </>
  );
}
export default Header;
