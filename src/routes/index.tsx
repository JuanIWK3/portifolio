import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container">
      <div class="main">
        <div class="title">
          Hi, I'm <span class="name">Juan</span>!
        </div>

        <div class="grid">
          <Link class="card" href={"/projects"}>
            <h2>
              <code>$ cd projects</code> &rarr;
            </h2>
            <p>Some projects I like</p>
          </Link>

          <Link class="card" href={"/about"}>
            <h2>
              <code>$ cd about</code> &rarr;
            </h2>
            <p>Who am I</p>
          </Link>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
