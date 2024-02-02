import InterfaceInfo from "@/app/components/InterfaceInfo";

export default function Home() {
  console.log("| 11");
  fetch("http://rap2.shxgroup.net/api/interface/list_menu")
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return (
    <main className="flex min-h-screen flex-col p-24">
      1{/* <InterfaceInfo /> */}
    </main>
  );
}
