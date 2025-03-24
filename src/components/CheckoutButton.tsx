
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";
import LoadingButton from "./LoadingButton";

type Props = {
    onCheckout: (userFormData: UserFormData) => void;
    disabled: boolean;
    isLoading: boolean;
}

const CheckoutButton = ({onCheckout, disabled, isLoading}: Props) => {

    const {currentUser, isLoading: isGetUserLoading} = useGetMyUser();

    if(!currentUser || isLoading){
        return <LoadingButton />;
    }
    
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={disabled} className="bg-orange-500 flex-1">Go to checkout</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50" >
                <UserProfileForm 
                    currentUser={currentUser} 
                    onSave={onCheckout} 
                    isLoading={isGetUserLoading} 
                    title="Confirm Delivery Details"
                    buttonText="Continue to payment"
                />
            </DialogContent>
        </Dialog>
    );
};

export default CheckoutButton;


