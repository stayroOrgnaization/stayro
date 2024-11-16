import { useState } from "react";
import { useRouter } from "next/navigation";
import { authStore } from "../../../stores/auth";

const DeleteAccount = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    setIsDeleting(true);

    try {
      // Call handleDelete from authStore
      const success = await authStore.handleDelete();

      if (success) {
        router.push("/");
      } else {
        setErrorMessage("Failed to delete account. Please try again.");
      }
    } catch (error) {
      console.error("Error during deletion:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="main flex-col items-center mt-20">
      <div>
        <h1 className="font-bold text-lg">حذف الحساب</h1>
      </div>
      <div className="mt-2">
        <p className="text-[#A2A2A2]"> هل انت متأكد من حذف الحساب؟</p>
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <div className="flex mt-8 flex justify-center">
        <button
          onClick={() => router.back()} // Go back to the previous page
          className="border-2 border-[#FF5B2D] rounded-[12px] mx-6 w-[97px] h-[36px]"
        >
          تراجع
        </button>
        <button
          onClick={handleDeleteAccount}
          className={`border bg-[#FF5B2D] rounded-[12px] mx-6 w-[97px] h-[36px] ${
            isDeleting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isDeleting}
        >
          {isDeleting ? "جاري الحذف..." : "تأكيد"}
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
