const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 py-12">
      <h1 className="text-white text-5xl font-bold cursor-pointer">Bridge</h1>
      <div className="flex space-x-6 text-white text-m cursor-pointer">
        <div>PROFILE</div>
        <div>LANGUAGE</div>
        <div>CATEGORY</div>
        <div>TEAM PROJECT</div>
        <div>INFORMATION</div>
      </div>
    </div>
  );
};

export default Header;
