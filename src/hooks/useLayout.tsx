import type { ReactElement, ReactNode } from "react";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { SimpleLayout } from "@/components/layouts/SimpleLayout";
import { useAuthStore } from "@/stores/auth";
import { useSignInRedirect } from "./useSignInRedirect";
import { MainHeader } from "@/components/MainHeader";

interface Props {
  children: ReactNode;
}
function AuthWall({ children }: Props) {
  const { requestAuthentication } = useSignInRedirect();

  const signedIn = useAuthStore((store) => store.signedIn);
  // const accountId = useAuthStore((store) => store.accountId);
  // const logOut = useAuthStore((store) => store.logOut);

  if (signedIn) return <SimpleLayout>{children}</SimpleLayout>;

  return (
    <div className="flex-1 bg-red-500 flex flex-col container mx-auto max-w-xl ">
      <div className="flex justify-center font-size-lg my-xl">
        You need to be signed in!
      </div>
    </div>
  );
}
export function useDefaultLayout(page: ReactElement) {
  return (
    <SimpleLayout>
      <div className="flex h-full flex-col bg-blue-500">
        <AuthWall>{page}</AuthWall>
        <MainHeader />
      </div>
    </SimpleLayout>
  );
}

export function useSimpleLayout(page: ReactElement) {
  return <SimpleLayout>{page}</SimpleLayout>;
}
