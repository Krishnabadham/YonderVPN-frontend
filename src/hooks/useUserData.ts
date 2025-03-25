// import { useAuth0 } from "@auth0/auth0-react";
// import { useState, useEffect } from "react";
// import { useQuery } from "react-query";


// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const useUserData = () => {
//   const { getAccessTokenSilently } = useAuth0();  // Get token from Auth0
//   const [userData, setUserData] = useState<any>(null);  // State to store user data

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = await getAccessTokenSilently();  // Get the JWT token

//       try {
//         // Fetch user data from the backend API
//         const response = await fetch(`${API_BASE_URL}/api/my/user`, {
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${token}`,  // Include token in the request
//                 "Content-Type": "application/json",
//             } 
//         });

//         // Store the user data in the state (including isAdmin)
//         setUserData(response.json());
//       } catch (error) {
//         console.error("Error fetching user data", error);
//       }
//     };

//     const { 
//             data: currentUser, 
//             isLoading,
//         } = useQuery("fetchCurrentUser",fetchUserData);
        
//         return { currentUser, isLoading };
//   }, [getAccessTokenSilently]);  // Re-run if token changes

//   return userData;  // Return the user data
// };

// export default useUserData;

// useUserData.ts
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useUserData = () => {
  const { getAccessTokenSilently } = useAuth0();

  const fetchUserData = async () => {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    
    return response.json();
  };

  const { data: userData, isLoading } = useQuery("fetchCurrentUser", fetchUserData);
  
  return { userData, isLoading };
};

export default useUserData;