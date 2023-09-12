import { useBosComponents } from "@/hooks/useBosComponents";
import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useAuthStore } from "@/stores/auth";
import { useSignInRedirect } from "@/hooks/useSignInRedirect";
import { useRouter } from "next/router";

const ConnectPage: NextPageWithLayout = () => {
  const components = useBosComponents();
  const { requestAuthentication } = useSignInRedirect();

  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;

  return <ComponentWrapperPage src={components.test} />;
};

ConnectPage.getLayout = useDefaultLayout;

export default ConnectPage;
