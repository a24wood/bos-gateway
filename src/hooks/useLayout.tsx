import type { ReactElement } from "react";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { SimpleLayout } from "@/components/layouts/SimpleLayout";
import { useAuthStore } from "@/stores/auth";
import { useSignInRedirect } from "./useSignInRedirect";

export function useDefaultLayout(page: ReactElement) {
  const { requestAuthentication } = useSignInRedirect();

  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const logOut = useAuthStore((store) => store.logOut);

  if (signedIn) return <SimpleLayout>{page}</SimpleLayout>;

  return (
    <div>
      <div style={{ display: "flex", gap: 2, maxWidth: "600px" }}>
        <button type="button" onClick={() => requestAuthentication()}>
          Sign In
        </button>
        <button type="button" onClick={() => requestAuthentication(true)}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export function useSimpleLayout(page: ReactElement) {
  return <SimpleLayout>{page}</SimpleLayout>;
}
