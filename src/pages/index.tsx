import { useBosComponents } from "@/hooks/useBosComponents";
import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useAuthStore } from "@/stores/auth";
import { useSignInRedirect } from "@/hooks/useSignInRedirect";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";

const HomePage: NextPageWithLayout = () => {
  const router = useRouter();
  const components = useBosComponents();
  const accountId = useAuthStore((store) => store.accountId);

  return (
    <div className="flex justify-center  container mx-auto ">
      <div className="flex flex-col items-center gap-3">
        {/* <QRCode value={`http://localhost:3000/?user=${accountId}`} /> */}
        <QRCode value={`http://192.168.0.25:3000/?user=${accountId}`} />
        <div className="max-w-[300px] text-center">
          When you meet other people at the event, <br /> have them scan this QR
          code to connect!
        </div>
        {router.query.user}
        {router.query.user && (
          <ComponentWrapperPage
            src={components.profileSocial}
            componentProps={{ accountId: router.query.user }}
          />
        )}
      </div>
    </div>
  );
  // return <ComponentWrapperPage src={components.} />;
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
