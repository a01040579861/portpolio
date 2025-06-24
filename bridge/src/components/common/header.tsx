import type { HeaderProps } from "@/types/click";

const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-20 py-12 bg-transparent">
      <div className="text-[var(--light)] text-5xl font-bold cursor-pointer">
        Bridge
      </div>
      <div className="flex space-x-6 text-[var(--light)] text-3xl cursor-pointer">
        <div
          className="hover:text-sub2 transition-all duration-300"
          onClick={() => onNavigate("profile")}
        >
          PROFILE
        </div>
        <div
          className="hover:text-sub2 transition-all duration-300"
          onClick={() => onNavigate("project")}
        >
          PROJECT
        </div>
        <div
          className="hover:text-sub2 transition-all duration-300"
          onClick={() => onNavigate("item")}
        >
          ITEM
        </div>
        <div
          className="hover:text-sub2 transition-all duration-300"
          onClick={() => onNavigate("point")}
        >
          POINT
        </div>
      </div>
    </div>
  );
};

export default Header;
