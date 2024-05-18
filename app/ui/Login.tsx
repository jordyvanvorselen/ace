"use client";

import { GoogleLogin } from "@react-oauth/google";
import { onSuccess } from "@/app/lib/login";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    return (
        <GoogleLogin
            onSuccess={() => onSuccess(router)}
            onError={() => alert("Error logging in")}
            useOneTap
            auto_select
        />
    );
}
