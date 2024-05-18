"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export default function Login() {
    const router = useRouter();

    const onSuccess = (resp: CredentialResponse) => {
        Cookies.set("api-token", "fake");
        router.replace("/overview");
    };

    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={() => alert("Error logging in")}
            useOneTap
            auto_select
        />
    );
}
