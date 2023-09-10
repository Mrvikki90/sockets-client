import {
  UilCommentAltNotes,
  UilUsersAlt,
  UilPhone,
  UilUserPlus,
  UilPlus,
  UilMoon,
} from "@iconscout/react-unicons";
import Avatar from "../avtar/avtar";

const SideBar = () => {
  return (
    <div className="h-auto md:h-20 md:w-full bg-white shadow-2xl flex tablet:flex-col md:flex justify-between md:bottom-0 md:left-0 md:right-0 md:fixed px-5 md:px-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-20 md:hidden">
          <img
            src="https://play-lh.googleusercontent.com/3dEjFI_FBrHIlSU9qiPSyZCEzd14VUND2tncf26dPEJWcq7ya6zZr6JYF57n48dUi4s=w240-h480-rw"
            alt="Logo"
            className="w-12 h-12"
          />
        </div>
        <div className="flex tablet:flex-col items-center justify-start h-20 gap-6">
          <button
            className="bg-gray-100 rounded-md p-3 md:p-2 tooltip tooltip-right tooltip-primary md:tooltip-top "
            data-tip="Chats"
          >
            <UilCommentAltNotes color="#420BA1" />{" "}
          </button>
          <button
            className=" bg-gray-100 rounded-md p-3 md:p-2 tooltip tooltip-right tooltip-primary md:tooltip-top"
            data-tip="Groups"
          >
            <UilUsersAlt color="#420BA1" />
          </button>
          <button
            className=" bg-gray-100 rounded-md p-3 md:p-2 tooltip tooltip-right tooltip-primary md:tooltip-top"
            data-tip="Calls"
          >
            <UilPhone color="#420BA1" />
          </button>
        </div>
      </div>
      <div className="flex tablet:flex-col items-center justify-start h-20 mb-60 gap-6">
        <button
          className="bg-gray-100 rounded-md p-3 tooltip tooltip-right tooltip-primary md:hidden"
          data-tip="Add groups"
        >
          <UilUserPlus color="#420BA1" />
        </button>
        <button
          className=" bg-pink-700 rounded-full p-1 tooltip tooltip-right tooltip-primary md:hidden"
          data-tip="Add contacts"
        >
          <UilPlus color="#fff" />
        </button>
        <button className=" bg-blue-700 rounded-md p-2 md:hidden ">
          <UilMoon color="#FFF" />
        </button>
        <Avatar
          image={
            "https://www.tomsguide.fr/content/uploads/sites/2/2022/05/avatar-4-est-entre-en-production-declare-james-cameron.jpg"
          }
        />
      </div>
    </div>
  );
};

export default SideBar;
