import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Header } from "~/components/header";

export const usePath = routeLoader$((path) => {
  const pathName = path.url.pathname.split("/")[1];
  if (pathName === "q-data.json") {
    return "";
  }
  return "/" + pathName;
});

export default component$(() => {
  return (
    <div class="page">
      <main>
        <Header />
        <Slot />
      </main>
    </div>
  );
});
