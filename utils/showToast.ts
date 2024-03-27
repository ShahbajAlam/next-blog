import toast from "react-hot-toast";

export default function showToast(type: "error" | "success", message: string) {
    toast[type](message, {
        duration: 3000,
        position: "top-center",
        id: message,
        style: {
            paddingInline: 16,
            paddingBlock: 12,
            fontSize: 18,
            borderRadius: 32,
        },
    });
}
