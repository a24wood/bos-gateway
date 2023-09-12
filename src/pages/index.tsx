import { useBosComponents } from "@/hooks/useBosComponents";
import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useAuthStore } from "@/stores/auth";
import { useSignInRedirect } from "@/hooks/useSignInRedirect";

const HomePage: NextPageWithLayout = () => {
  const components = useBosComponents();
  const { requestAuthentication } = useSignInRedirect();

  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const logOut = useAuthStore((store) => store.logOut);
  return <div>Test</div>;
  // return <ComponentWrapperPage src={components.} />;
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
