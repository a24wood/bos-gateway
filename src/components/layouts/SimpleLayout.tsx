import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function SimpleLayout({ children }: Props) {
  return (
    <div className="h-full">
      {children}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}
