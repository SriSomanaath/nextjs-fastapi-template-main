"use client";

import { logOut } from "@/lib/auth/actions";
import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
    const handleLogOut = async () => {
        await logOut();
      };      

    return (
        <Button
            variant="outline"
            onClick={handleLogOut}
            className="bg-white w-full rounded-md p-3 disabled:opacity-60 transition-all hover:bg-gray-100 text-black"
        >
            Log Out
        </Button>
    );
};
