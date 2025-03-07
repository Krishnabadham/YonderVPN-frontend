// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "./ui/button"
// import UsernameMenu from "./UsernameMenu";

// const MainNav = () => {
//     const { loginWithRedirect, isAuthenticated } = useAuth0();
//     return(
//         <span className="flex space-x-2 items-center">
//             {isAuthenticated ? (
//                 <UsernameMenu />
//             ) : (
//             <Button 
//                 variant="ghost"
//                 className="font-bold hover:text-orange-500 hover:bg-white "
//                 onClick={async () => await loginWithRedirect()}>
//             Log In
//         </Button>)}
//         </span>
        
//     );
// };

// export default MainNav


// import { Link } from "react-router-dom";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    return (
        <nav className="flex space-x-4 items-center">
            {/* <Link to="/home" className="font-bold hover:text-orange-500 transition-colors">
                Home
            </Link>
            <Link to="/user-profile" className="font-bold hover:text-orange-500 transition-colors">
                Profile
            </Link> */}
            {/* User dropdown menu */}
            <UsernameMenu />
        </nav>
    );
};

export default MainNav;
