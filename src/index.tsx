import Footer from "@/components/layouts/footer.tsx";
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/layouts/header/index.tsx";

export default function Index() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    if (pathname !== previousPath.current) {
      previousPath.current = pathname;
      main.current?.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <div>
      <Header />
      <main
        id="content"
        ref={main}
        tabIndex={-1}
        className="mx-auto mb-20 max-w-340 scroll-mt-14 px-4 pt-10 sm:px-10"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
