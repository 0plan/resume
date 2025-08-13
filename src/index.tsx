import Footer from "@/components/layouts/footer.tsx";
import { Outlet } from "react-router-dom";
import Header from "@/components/layouts/header/index.tsx";

export default function Index() {
  return (
    <div>
      <Header />
      <main className="mx-auto mb-20 max-w-340 px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
