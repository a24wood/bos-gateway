import { useReducer, type ReactElement, type ReactNode } from "react";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { SimpleLayout } from "@/components/layouts/SimpleLayout";
import { useAuthStore } from "@/stores/auth";
import { useSignInRedirect } from "./useSignInRedirect";
import { MainHeader } from "@/components/MainHeader";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}
function AuthWall({ children }: Props) {
  const { requestAuthentication, saveCurrentUrl } = useSignInRedirect();

  const signedIn = useAuthStore((store) => store.signedIn);

  const router = useRouter();
  if (router.query.user) {
    localStorage.setItem("savedUser", router.query.user as string);
  }
  // const accountId = useAuthStore((store) => store.accountId);
  // const logOut = useAuthStore((store) => store.logOut);

  if (signedIn) return <SimpleLayout>{children}</SimpleLayout>;

  return (
    <div className="flex-1 flex flex-col container mx-auto max-w-xl ">
      <div className="flex justify-center font-size-lg my-xl">
        {signedIn == false ? "You need to be signed in!" : "Loading"}
      </div>
    </div>
  );
}
export function useDefaultLayout(page: ReactElement) {
  return (
    <SimpleLayout>
      <div className="flex h-full flex-col">
        <MainHeader />
        <AuthWall>{page}</AuthWall>
      </div>
    </SimpleLayout>
  );
}

export function useSimpleLayout(page: ReactElement) {
  return <SimpleLayout>{page}</SimpleLayout>;
}
