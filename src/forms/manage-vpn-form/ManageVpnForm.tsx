import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Vpn } from "@/types";
// import { useEffect } from "react";

const formSchema = z.object({
    vpnName: z.string({
        required_error: "vpn name is required",
    }),
    city: z.string({
        required_error: "city is required",
    }),
    country: z.string({
        required_error: "country is required",
    }),
    menuItems: z.array(
        z.object({
            name: z.string().min(1, "name is required"),
            price: z.coerce.number().min(1, "price is required")
        })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
}).refine((data)=> data.imageUrl || data.imageFile, {
    message: " Either image URL or image File must be provided",
    path: ["imageFile"],
});

type VpnFormData = z.infer<typeof formSchema>

type Props = {
  vpn?: Vpn; 
  onSave: (vpnFormData: FormData) => void;
  isLoading: boolean;
};

const ManageVpnForm = ({ onSave, isLoading, vpn }: Props) => {
    // const form = useForm<VpnFormData>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //         menuItems: [{ name: "", price: 0 }],
    //     },
    // });
    const form = useForm<VpnFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            vpnName: "",
            city: "",
            country: "",
            menuItems: [{ name: "", price: 1 }],
            imageFile: undefined,
        },
    });

    useEffect(()=>{
        if(!vpn) {
            return;
        }

        const menuItemsFormatted = vpn.menuItems.map((item) => ({
            ...item,
            price: parseInt((item.price / 100).toFixed(2)),
        }));

        const updatedVpn = {
            ...vpn,
            menuItems: menuItemsFormatted,
        };

        form.reset(updatedVpn);
    }, [form, vpn]);
    
    

    // const onSubmit = (formDataJson: VpnFormData)=> {
    //     const formData = new FormData();

    //     formData.append("vpnName", formDataJson.vpnName);
    //     formData.append("City", formDataJson.city);
    //     formData.append("Country", formDataJson.country);
    //     formDataJson.menuItems.forEach((menuItem, index) => {
    //         formData.append(`menuItems[${index}][name]`,menuItem.name);
    //         formData.append(`menuItems[${index}][price]`, (menuItem.price*100).toString());
    //     });
    //     formData.append(`imageFile`, formDataJson.imageFile);

    //     onSave(formData);
    // };
    

    const onSubmit = async (formDataJson: VpnFormData) => {
        // console.log("🚀 Form Submitted!", formDataJson); // Debugging log

        try {
            const formData = new FormData();
            formData.append("vpnName", formDataJson.vpnName);
            formData.append("city", formDataJson.city);
            formData.append("country", formDataJson.country);

            formDataJson.menuItems.forEach((menuItem, index) => {
                formData.append(`menuItems[${index}][name]`, menuItem.name);
                formData.append(`menuItems[${index}][price]`, (menuItem.price * 100).toString());
            });

            if (formDataJson.imageFile instanceof File) {
                formData.append("imageFile", formDataJson.imageFile);
            }

            // console.log("Final FormData:", formData); // Debugging log
            await onSave(formData);
        } catch (error) {
            console.error("❌ Form submission error:", error);
        }
    };

    // Debugging Hook to check for errors
    // useEffect(() => {
    //     console.log("⚠️ Form Errors:", form.formState.errors);
    // }, [form.formState.errors]);

    
 
    return(
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-8 bg-gray-50 p-10 rounded-lg"
            >
                <DetailsSection />
                <Separator />
                <MenuSection />
                <Separator />
                <ImageSection />
                {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
            </form>
        </Form>
    )
};

export default ManageVpnForm;