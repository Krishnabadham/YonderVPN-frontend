import { Vpn, VpnSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetVpn = (vpnId?: string) => {
    const getVpnByIdRequest = async (): Promise<Vpn> => {
        const response = await fetch(
            `${API_BASE_URL}/api/vpn/${vpnId}`
        );

        if(!response.ok){
            throw new Error("Failed to get vpn");
        }

        return response.json();
    };

    const {data: vpn, isLoading} = useQuery(
        "fetchVpn", 
        getVpnByIdRequest, 
        {
            enabled: !!vpnId,
        }
    );

    return { vpn, isLoading};
};

export const useSearchVpns = (city?: string) => {
    const createSearchRequest = async(): Promise<VpnSearchResponse> =>{
        const response = await fetch(`${API_BASE_URL}/api/vpn/search/${city}`);

        if(!response.ok){
            throw new Error("Failed to get Vpn");
        }

        return response.json();
    };

    const { data: results, isLoading } = useQuery(
        ["searchVpns"], 
        createSearchRequest,
        { enabled: !!city }
    );

    return {
        results, isLoading,
    };

};