import { useRouter } from "next/router";
import { useCallback } from "react";

export function useSignInRedirect() {
  const router = useRouter();

  const redirect = useCallback(
    (hardRefresh = false) => {
      if (!window) return;

      const user = localStorage.getItem("savedUser");
      const url = user ? `/?user=${user}` : "/";
      localStorage.removeItem("savedUser");

      if (hardRefresh) {
        window.location.href = url; // We need to use hard refresh due to current Fast Auth implementation
      } else {
        router.replace(url);
      }
    },
    [router]
  );

  const saveCurrentUrl = useCallback(() => {
    if (!window) return;
    if (
      ["/", "/signin", "/signup", "/verify-email", "/auth-callback"].includes(
        router.pathname
      )
    )
      return;
    localStorage.setItem("signInRedirectUrl", router.asPath);
  }, [router]);

  const requestAuthentication = useCallback(
    (createAccount = false) => {
      saveCurrentUrl();
      router.push(createAccount ? "/signup" : "/signin");
    },
    [router, saveCurrentUrl]
  );

  return {
    redirect,
    requestAuthentication,
    saveCurrentUrl,
  };
}
