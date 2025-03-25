// import { Link } from "react-router-dom";
// import { Button } from "./ui/button";
// import { useAuth0 } from "@auth0/auth0-react";

// const MobileNavLinks = () => {
//     const { logout } = useAuth0();
//     return (
//         <>
//             <Link 
//                 to="/user-profile" 
//                 className="flex bg-white items-center font-bold hover:text-orange-500">
//                 User Profile
//             </Link>
//             <Link 
//                 to="/order-status" 
//                 className="flex bg-white items-center font-bold hover:text-orange-500">
//                 Order Status
//             </Link>
//             <Link 
//                 to="/manage-vpn" 
//                 className="flex bg-white items-center font-bold hover:text-orange-500">
//                 My Vpn
//             </Link>
//             <Button onClick={() => logout()} className="flex items-center px-3 font-bold hover:bg-gray-500">
//                 Log Out
//             </Button>
//         </>
//     );
// };
// export default MobileNavLinks;

// import { Link } from "react-router-dom";
// import { Button } from "./ui/button";
// import { useAuth0 } from "@auth0/auth0-react";
// import useUserData from "@/hooks/useUserData";

// const MobileNavLinks = () => {
//     const { user, logout } = useAuth0();  // Access the user object

//     return (
//         <>
//             <Link 
//                 to="/user-profile" 
//                 className="flex bg-white items-center font-bold hover:text-orange-500">
//                 User Profile
//             </Link>
//             <Link 
//                 to="/order-status" 
//                 className="flex bg-white items-center font-bold hover:text-orange-500">
//                 Order Status
//             </Link>
            
//             {/* Conditionally render "My VPN" or "Manage VPN" link for admins */}
//             {user?.isAdmin && (
//                 <Link 
//                     to="/manage-vpn" 
//                     className="flex bg-white items-center font-bold hover:text-orange-500">
//                     My VPN
//                 </Link>
//             )}

//             <Button onClick={() => logout()} className="flex items-center px-3 font-bold hover:bg-gray-500">
//                 Log Out
//             </Button>
//         </>
//     );
// };

// export default MobileNavLinks;


// MobileNavLinks.tsx
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import useUserData from "@/hooks/useUserData";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  const { userData, isLoading } = useUserData();

  if (isLoading) {
    return <div>Loading...</div>; // Or some loading spinner
  }

  return (
    <>
      <Link 
        to="/user-profile" 
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Link 
        to="/order-status" 
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        Order Status
      </Link>
      
      {/* Only show VPN link for admins */}
      {userData?.isAdmin && (
        <Link 
          to="/manage-vpn" 
          className="flex bg-white items-center font-bold hover:text-orange-500"
        >
          My VPN
        </Link>
      )}

      <Button 
        onClick={() => logout()} 
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
