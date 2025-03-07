
// import { Navigate, Route, Routes } from "react-router-dom";
// import Layout from "./layouts/layout";
// import HomePage from "./pages/HomePage";
// import AuthCallbackPage from "./pages/AuthCallbackPage";
// import Index from "./pages/Index";
// import UserProfilePage from "./pages/UserProfilePage";
// import ProtectedRoute from "./auth/ProtectedRoute";

// const AppRoutes = ()=>{
//     return(
//         <Routes>
//             <Route path="/" element={<Index /> } />
//             <Route path="/home" element={<Layout showHero><HomePage /></Layout> } />
//             <Route path="/auth-callback" element={<AuthCallbackPage />} />
            
//             <Route element={<ProtectedRoute />}>
                
//                 <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>} />
//             </Route>
            
//             <Route path="*" element={<Navigate to="/" /> } />
//         </Routes>
//     );
// };

// export default AppRoutes;


import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import Index from "./pages/Index";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";

const AppRoutes = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    // Prevent rendering before authentication check is complete
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen text-xl font-bold">Loading...</div>;
    }

    return (
        <Routes>
            {/* If user is not authenticated, show the Index page */}
            {!isAuthenticated ? (
                <Route path="/" element={<Index />} />
            ) : (
                <Route path="/" element={<Navigate to="/home" replace />} />
            )}

            <Route path="/auth-callback" element={<AuthCallbackPage />} />

            {/* Protected Routes - Only accessible when logged in */}
            <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Layout showHero={true}><HomePage /></Layout>} />
                <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>} />
            </Route>

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/"} />} />
        </Routes>
    );
};

export default AppRoutes;
