/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_w-Edph7W.mjs';
import 'kleur/colors';
import 'cssesc';
import { g as getBlogs, $ as $$Layout } from './_blogSlug__rZG4PlJ1.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const response = await getBlogs({ fields: ["id", "slug", "publishedAt", "title", "eyecatch", "url"] });
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year} / ${month} / ${day}`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Roles", "discription": "test" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="mx-auto w-full max-w-[820px] pt-gutter-y">
    <ul class="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2">
      ${response.contents.map((content) => renderTemplate`<li>
            <a${addAttribute(content.slug, "href")}>
              <div class="mb-3">
                <img${addAttribute(content.eyecatch?.url, "src")} alt="">
              </div>
              <p class="text-sm font-medium text-neutral-500"><time${addAttribute(content.publishedAt, "data-time")}>${formatDate(content.publishedAt)}</time></p>
              <h2 class="pt-1 text-lg font-medium">${content.title}</h2>
            </a>
          </li>`)}
    </ul>
  </div>
` })}`;
}, "/Users/ryotaro_yamada/Dev_private/Roles/src/pages/media/index.astro", void 0);

const $$file$1 = "/Users/ryotaro_yamada/Dev_private/Roles/src/pages/media/index.astro";
const $$url$1 = "/media";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await getBlogs({ fields: ["slug", "title"] });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Roles", "discription": "test" })}`;
}, "/Users/ryotaro_yamada/Dev_private/Roles/src/pages/index.astro", void 0);

const $$file = "/Users/ryotaro_yamada/Dev_private/Roles/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
