
import landingImage from "../assets/landingImage.jpg";
import playstoreImage from "../assets/Playstore_Download.jpg";
import appstoreImage from "../assets/Appstore_Download.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });
    };
    return (
        <div className="flex flex-col gap-12">
            {/* Header Section */}
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-6 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Encrypt your connection with a VPN
                </h1>
                <span className="text-xl">Your VPN is Just a click away!</span>
                <SearchBar placeHolder="Search by City " onSubmit={handleSearchSubmit} />
            </div>

            {/* Main Content Section */}
            <div className="grid md:grid-cols-2 gap-5">
                {/* VPN Image */}
                <img 
                    src={landingImage} 
                    alt="VPN encryption preview" 
                    className="w-full h-auto rounded-lg" 
                    loading="lazy" 
                />
                
                {/* Text + Download Section */}
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Privacy is not for the passive.
                    </span>
                    <span>Download the YonderVPN for a faster and more secure VPN connection.</span>
                    
                    {/* Download Buttons */}
                    <div className="flex flex-row items-center justify-center gap-4">
                        <a 
                            href="#"   // "https://play.google.com/store/apps/details?id=yondervpn" 
                            // target="_blank" 
                            // rel="noopener noreferrer"
                        >
                            <img 
                                src={playstoreImage} 
                                alt="Download on Google Play" 
                                className="w-40 h-auto" 
                                loading="lazy" 
                            />
                        </a>
                        <a 
                            href="#" // "https://apps.apple.com/app/yondervpn" 
                            // target="_blank" 
                            // rel="noopener noreferrer"
                        >
                            <img 
                                src={appstoreImage} 
                                alt="Download on App Store" 
                                className="w-40 h-auto" 
                                loading="lazy" 
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;



