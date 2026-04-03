import type { APIRoute } from "astro";
import { getEmDashCollection } from "emdash";

const siteTitle = "La Maison";

export const GET: APIRoute = async ({ url }) => {
	const siteUrl = url.origin;
	const { entries: items } = await getEmDashCollection("menu_items", {
		limit: 50,
	});

	const rssItems = items
		.map((item) => {
			const itemUrl = `${siteUrl}/menu`;
			return `    <item>
      <title>${escapeXml(item.data.name)}</title>
      <link>${itemUrl}</link>
      <guid isPermaLink="false">${item.data.id}</guid>
      <description>${escapeXml(item.data.description || "")}</description>
    </item>`;
		})
		.join("\n");

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)} - Menu</title>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Menu items from ${escapeXml(siteTitle)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${rssItems}
  </channel>
</rss>`,
		{
			headers: {
				"Content-Type": "application/rss+xml; charset=utf-8",
				"Cache-Control": "public, max-age=3600",
			},
		},
	);
};

function escapeXml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}
