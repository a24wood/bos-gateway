import { useSignInRedirect } from "@/hooks/useSignInRedirect";
import { useAuthStore } from "@/stores/auth";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import LogoBlack from "@/assets/images/near-logo-black.svg";
import { Text } from "./lib/Text";

const Header = styled.header`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  button {
    background: #000;
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  margin-right: auto;
`;

export const MainHeader = () => {
  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const logOut = useAuthStore((store) => store.logOut);
  const { requestAuthentication } = useSignInRedirect();

  return (
    <Header className="flex-1 flex justify-center container mx-auto max-w-xl">
      {signedIn ? (
        <>
          <Text>Welcome, {accountId}!</Text>
          <button type="button" onClick={logOut}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={() => requestAuthentication()}>
            Sign In
          </button>
          <button type="button" onClick={() => requestAuthentication(true)}>
            Create Account
          </button>
        </>
      )}
    </Header>
  );
};
