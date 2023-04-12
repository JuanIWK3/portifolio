import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./styles.scss?inline";
import { images } from "~/assets";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <main class="main">
        <ul>
          <li>Me</li>
          <ul>
            <li>A 21 years old from Brazil</li>
            <li>Currently learning Rust and Next</li>
          </ul>
          <li>
            <p>Software</p>
            <img class="neofetch" src={images.neofetchImg} alt="neofetch" />
          </li>
          <li>
            <p>Peripherals</p>
            <ul>
              <li>
                <p>Keyboard Redragon Kumara</p>
              </li>
              <li>
                <p>Mouse Redragon Cobra</p>
              </li>
              <li>
                <p>Headphones HyperX Cloud Stinger</p>
              </li>
              <li>
                <p>Microphone Redragon Seyfert</p>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About Juan",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
