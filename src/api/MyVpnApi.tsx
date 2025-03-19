import { Vpn } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyVpn = ()=>{
    const { getAccessTokenSilently } = useAuth0();

    const getMyVpnRequest = async (): Promise<Vpn>=> {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/vpn`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        if(!response.ok){
            throw new Error("Failed to get vpn")
        }
        return response.json();
    };

    const { data: vpn, isLoading } = useQuery(
        "fetchMyVpn",
        getMyVpnRequest
    );
    return { vpn, isLoading };
};

export const useCreateMyVpn = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyVpnRequest = async(vpnFormData: FormData): Promise<Vpn> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/vpn`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: vpnFormData
        });

        if(!response.ok) {
            throw new Error("Failed to create vpn");
        }

        return response.json();
    };

    const { 
        mutate: createVpn,
        isLoading,
        isSuccess,
        error,
    } = useMutation(createMyVpnRequest);

    if(isSuccess) {
        toast.success("VPN created!")
    }

    if(error){
        toast.error("unable to update VPN");
    }

    return { createVpn, isLoading }

};

export const useUpdateMyVpn = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateVpnRequest = async (vpnFormData: FormData): Promise<Vpn> =>{
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/vpn`,{
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: vpnFormData,
        });

        if(!response){
            throw new Error("Failed to update vpn");
        }

        return response.json();
    };

    const { 
        mutate: updateVpn, 
        isLoading, 
        error,
        isSuccess,
    } = useMutation(updateVpnRequest);

    if(isSuccess){
        toast.success("Vpn updated")
    }

    if(error){
        toast.error("Unable to update vpn")
    }

    return { updateVpn, isLoading };
};