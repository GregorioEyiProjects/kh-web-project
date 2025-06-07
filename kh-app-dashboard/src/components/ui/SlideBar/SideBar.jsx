import UserAccount from "./UserAccount";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import Logout from "./Logout";

function SideBar({ onSelect, selectedContent }) {
  //rafc

  {
    /* 
      NOTE: cal(100vh - 32px -48 px) is used to calculate the height of the sidebar)
      - 32 becuase of the padding of the main container
      - 48 because of the height of the footer
    */
  }
  return (
    <div className="text-black bg-stone-100 rounded-lg flex flex-col h-[calc(100vh-32px)]">
      <div className="flex-1 overflow-y-auto ">
        <UserAccount />
        <SearchBar />
        <Menu onSelect={onSelect} selectedContent={selectedContent} />
      </div>

      {/* Logout */}
      <Logout />
    </div>
  );
}
export default SideBar;
