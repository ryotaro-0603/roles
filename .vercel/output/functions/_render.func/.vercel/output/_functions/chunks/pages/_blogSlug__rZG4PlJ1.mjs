/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderTransition, i as renderSlot, j as fade, u as unescapeHTML } from '../astro_w-Edph7W.mjs';
import 'cssesc';
import 'kleur/colors';
import 'clsx';
import { createClient } from 'microcms-js-sdk';
/* empty css                               */

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`
<meta name="astro-view-transitions-enabled" content="true">
<meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>
`;
}, "/Users/ryotaro_yamada/Dev_private/Roles/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-header flex items-center justify-between gap-gutter-x border-b border-neutral-400 bg-white px-gutter-x py-gutter-y-0.5">
  <a class="block w-[80px] md:w-[100px]" href="/">
    <img src="/logo/logo.svg" alt="Roles" width="120" height="29" decoding="async">
  </a>

  <nav id="menu" class="absolute inset-x-0 top-full h-[calc(100vh-32px-theme(spacing.gutter-y))] overflow-y-auto overscroll-contain px-gutter-x pb-gutter-y pt-gutter-y-0.5 transition-opacity duration-100 ease-out lg:visible lg:relative lg:h-auto lg:p-0" aria-hidden="true" aria-label="Header menu">
    <ul class="grid gap-y-2 text-4xl font-medium text-black lg:flex lg:text-base lg:font-normal">
      ${[
    { label: "Media", href: "/media/" }
  ].map(({ label, href }) => {
    const isCurrent = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return renderTemplate`<li>
              <a${addAttribute(href, "href")}${addAttribute([
      "lg:flex lg:px-5 hover:text-neutral-500 transition-colors duration-100 ease-out gap-[0.5em]",
      isCurrent && 'text-neutral-500 lg:before:content-["["] lg:after:content-["]"]'
    ], "class:list")}>
                ${label}
              </a>
            </li>`;
  })}
    </ul>
  </nav>
</header>`;
}, "/Users/ryotaro_yamada/Dev_private/Roles/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, discription } = Astro2.props;
  return renderTemplate`<html lang="">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		
		<meta name="description"${addAttribute(discription, "content")}>

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">

		${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}
	${renderHead()}</head>
	<body class="font-primary leading-normal text-neutral-900">
		${renderComponent($$result, "Header", $$Header, {})}
		<main class="w-full px-gutter-x"${addAttribute(renderTransition($$result, "askmj6t7", fade({ duration: "0.2s" }), ""), "data-astro-transition-scope")}>
			${renderSlot($$result, $$slots["default"])}
		</main>
	</body></html>`;
}, "/Users/ryotaro_yamada/Dev_private/Roles/src/layouts/Layout.astro", "self");

const client = createClient({
  serviceDomain: "ryotaro",
  apiKey: "e0a510a1ce274dc18480fa94d16480ecf6fb"
});
const getBlogs = async (queries) => {
  return await client.get({ endpoint: "blogs", queries });
};
const getBlogDetail = async (contentId, queries) => {
  return await client.getListDetail({
    endpoint: "blogs",
    contentId,
    queries
  });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await getBlogs({ fields: ["id", "slug"] });
  return response.contents.map((content) => ({
    params: {
      blogSlug: content.slug
    },
    props: {
      blogId: content.id
    }
  }));
}
const $$blogSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogSlug;
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year} / ${month} / ${day}`;
  }
  const { blogId } = Astro2.props;
  const blog = await getBlogDetail(blogId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blog.title, "discription": blog.title, "data-astro-cid-n6vg4q3p": true }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="mx-auto max-w-[820px] pt-gutter-y" data-astro-cid-n6vg4q3p>
    <div data-astro-cid-n6vg4q3p>
      <div class="aspect-thumbnail" data-astro-cid-n6vg4q3p>
        <img class="size-full"${addAttribute(blog.eyecatch?.url, "src")} data-astro-cid-n6vg4q3p>
      </div>
      <div class="mt-4 inline-grid grid-cols-2 gap-8 pl-0.5 md:mt-6" data-astro-cid-n6vg4q3p>
        <p class="text-sm text-neutral-500" data-astro-cid-n6vg4q3p>公開：${formatDate(blog.publishedAt)}</p>
        <p class="text-sm text-neutral-500" data-astro-cid-n6vg4q3p>更新：${formatDate(blog.updatedAt)}</p>
      </div>
      <h1 class="mt-2 text-xl font-bold md:mt-3 md:text-3xl" data-astro-cid-n6vg4q3p>${blog.title}</h1>
    </div>
    <div class="mt-10" data-astro-cid-n6vg4q3p>${unescapeHTML(blog.content)}</div>
  </div>
` })}`;
}, "/Users/ryotaro_yamada/Dev_private/Roles/src/pages/media/[blogSlug].astro", void 0);

const $$file = "/Users/ryotaro_yamada/Dev_private/Roles/src/pages/media/[blogSlug].astro";
const $$url = "/media/[blogSlug]";

const _blogSlug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$blogSlug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _blogSlug_ as _, getBlogs as g };
