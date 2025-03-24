// import { Vpn } from "@/types";
// import { Link } from "react-router-dom";
// import { AspectRatio } from "./ui/aspect-ratio";


// type Props = {
//     vpn: Vpn;
// }

// const SearchResultCard = ({vpn}: Props) => {
//     return(
//         <Link to={`/detail/${vpn._id}`} className="grid lg:grid-cols-[2fr_3fr] gap-5 group" >
//             <AspectRatio ratio={16 / 6}>
//                 <img src={vpn.imageUrl} className="rounded-md w-full h-full object-cover"/>
//             </AspectRatio>
//             <div>
//                 <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline">
//                     {vpn.vpnName}
//                 </h3>
//                 <div id="card-content" className="grid md:grid-cols-2 gap-2">
//                     <div className="flex gap-2flex-col">
//                         <div className="flex items-center gap-1 text-green-600">
//                             {vpn.menuItems[0].name}
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </Link>
//     )
  
// }

// export default SearchResultCard;

// import { Vpn } from "@/types";
// import { Link } from "react-router-dom";

// type Props = {
//     vpn: Vpn;
// };

// const SearchResultCard = ({ vpn }: Props) => {
//     return (
//         <Link 
//             to={`/detail/${vpn._id}`} 
//             className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden w-[320px] mx-auto"
//         >
//             {/* ✅ Fix: Aspect Ratio & Image Size */}
//             <div className="w-full h-48 overflow-hidden">
//                 <img 
//                     src={vpn.imageUrl} 
//                     alt={vpn.vpnName} 
//                     className="w-full h-full object-cover rounded-t-lg"
//                 />
//             </div>

//             {/* ✅ Fix: Centered Details */}
//             <div className="p-4 flex flex-col items-center text-center">
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
//                     {vpn.vpnName}
//                 </h3>
//                 <span className="mt-2 text-green-600 font-medium">
//                     {vpn.menuItems?.[0]?.name || "Standard"}
//                 </span>
//             </div>
//         </Link>
//     );
// };

// export default SearchResultCard;


// import { Vpn } from "@/types";
// import { Link } from "react-router-dom";
// import { AspectRatio } from "./ui/aspect-ratio";

// type Props = {
//     vpn: Vpn;
// };

// const SearchResultCard = ({ vpn }: Props) => {
//     return (
//         <Link 
//             to={`/detail/${vpn._id}`} 
//             className="grid lg:grid-cols-[2fr_3fr] gap-6 p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group bg-white"
//         >
//             {/* Image Section */}
//             <AspectRatio ratio={16 / 6} className="rounded-md overflow-hidden">
//                 <img 
//                     src={vpn.imageUrl} 
//                     alt={vpn.vpnName} 
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//             </AspectRatio>

//             {/* Content Section */}
//             <div className="flex flex-col justify-between">
//                 <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                     {vpn.vpnName}
//                 </h3>
                
//                 <div id="card-content" className="grid md:grid-cols-2 gap-2">
//                     <div className="flex flex-col space-y-1">
//                         <span className="flex items-center gap-1 text-green-600 font-medium text-sm">
//                             {vpn.menuItems[0]?.name}
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default SearchResultCard;

import { Vpn } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
    vpn: Vpn;
};

const SearchResultCard = ({ vpn }: Props) => {
    return (
        <Link 
            to={`/detail/${vpn._id}`} 
            className="w-full lg:w-[700px] xl:w-[900px] mx-auto grid lg:grid-cols-[1.5fr_2fr] gap-6 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group bg-white items-center"
        >
            {/* Image Section */}
            <AspectRatio 
                ratio={16 / 9} 
                className="rounded-md overflow-hidden lg:h-40 xl:h-48"
            >
                <img 
                    src={vpn.imageUrl} 
                    alt={vpn.vpnName} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </AspectRatio>

            {/* Content Section */}
            <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {vpn.vpnName}
                </h3>
                
                <span className="text-green-600 font-medium text-sm">
                {vpn.menuItems?.map((item, index) => (
                    <span key={index}>
                        {item.name}{index !== vpn.menuItems.length - 1 ? " " : ""}
                    </span>
                ))}


                </span>
            </div>
        </Link>
    );
};

export default SearchResultCard;

