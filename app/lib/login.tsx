import Cookies from "js-cookie";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onSuccess = (router: AppRouterInstance) => {
    Cookies.set("api-token", "fake");
    router.replace("/overview");
};
