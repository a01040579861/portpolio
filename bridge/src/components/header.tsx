const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 py-12">
      <div className="text-white text-5xl font-bold cursor-pointer">Bridge</div>
      <ul className="flex space-x-6 text-white text-m cursor-pointer">
        <li>PROFILE</li>
        <li>LANGUAGE</li>
        <li>CATEGORY</li>
        <li>TEAM PROJECT</li>
        <li>INFORMATION</li>
      </ul>
    </div>
  );
};

export default Header;
