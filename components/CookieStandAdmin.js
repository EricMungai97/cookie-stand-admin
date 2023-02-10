import CookieStandForm from "./CookieStandForm";
import CookieStandTable from "./CookieStandTable";
import useResource from "@/hooks/useResource";
import Header from "./Header";
import Footer from "./Footer";

export default function CookieStandAdmin() {

  const { resources, deleteResource } = useResource();
  console.log(resources)
  return (
    <>
      <Header />
      <CookieStandForm />
      <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
      <Footer stands={resources || []} />
    </>
  );
}

