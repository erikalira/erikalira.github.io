export default function Menu() {
  return (
    <div className="flex m-4 justify-between divide-y-0+2 border-red-50">
      <div className="content-center text-2xl">Erika</div>
      <div className="hidden lg:flex">
        <div className="m-2 hover:text-yellow-400 decoration-non">About</div>
        <div className="m-2 hover:text-yellow-400">Projects</div>
        <div className="m-2 hover:text-yellow-400">Resume</div>
        <div className="m-2 hover:text-yellow-400">Contact</div>
      </div>
      <div>Color Mode</div>
    </div>
  );
}
