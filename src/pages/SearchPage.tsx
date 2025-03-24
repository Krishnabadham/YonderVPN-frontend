import { useSearchVpns } from "@/api/VpnApi";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";

const SearchPage = () => {
    const { city } = useParams();
    const { results, isLoading } = useSearchVpns(city);

    if(isLoading){
        <span>Loading ...</span>;
    }

    if(!results?.data || !city) {
        return <span>No results found</span>;
    }

    return(
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div id="main-contant" className="flex flex-col gap-5">
                <SearchResultInfo total={results.pagination.total} city={city} />
                {results.data.map((vpn)=> (
                    <SearchResultCard vpn={vpn} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;

// import { useSearchVpns } from "@/api/VpnApi";
// import SearchResultCard from "@/components/SearchResultCard";
// import SearchResultInfo from "@/components/SearchResultInfo";
// import { useParams } from "react-router-dom";

// const SearchPage = () => {
//     const { city } = useParams();
//     const { results, isLoading } = useSearchVpns(city);

//     // ✅ Proper Loading UI
//     if (isLoading) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//                 <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">Loading ...</span>
//             </div>
//         );
//     }

//     // ✅ Proper Error UI
//     if (!results?.data || !city) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//                 <span className="text-xl font-semibold text-red-600">No results found</span>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto px-6 py-8">
//             {/* ✅ Improved Grid Layout */}
//             <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
//                 <div id="main-content" className="flex flex-col gap-6">
//                     {/* ✅ Improved Title Styling */}
//                     <SearchResultInfo total={results.pagination.total} city={city} />
                    
//                     {/* ✅ Updated VPN Card Styling */}
//                     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                         {results.data.map((vpn) => (
//                             <SearchResultCard key={vpn._id} vpn={vpn} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SearchPage;
