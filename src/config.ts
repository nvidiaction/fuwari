import type {
	ExpressiveCodeConfig,
	GiscusConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "nvidiaction",
	subtitle: "",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 30, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345, orange: 30
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "https://img.177418.xyz/file/1765120278219_99700664_p0.png",
			theme: "light",
			sizes: "32x32",
		},
		{
			src: "https://img.177418.xyz/file/1765120278219_99700664_p0.png",
			theme: "dark",
			sizes: "32x32",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "友链",
			url: "/links/",
			external: false,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://img.177418.xyz/file/1765120278219_99700664_p0.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'n	name: "nvidiaction",
	bio: "永远相信美好的事情即将发生",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github", // Visit https://icones.js.org/ for icon codes
			url: "https://github.com/nvidiaction",
		},
		{
			name: "X",
			icon: "fa6-brands:twitter",
			url: "https://x.com/nvidiaction",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/646378987",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:1774189780@qq.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

export const giscusConfig: GiscusConfig = {
	enable: true, // 设置为 true 启用 Giscus 评论系统
	repo: "nvidiaction/fuwari", // GitHub 仓库，格式：username/repo
	repoId: "R_kgDOQlCzNA", // 仓库 ID
	category: "Announcements", // 讨论分类
	categoryId: "DIC_kwDOQlCzNM4Czm70", // 分类 ID
	mapping: "pathname", // 推荐使用 pathname
	reactionsEnabled: true, // 启用表情反应
	emitMetadata: false, // 不发送元数据
	inputPosition: "bottom", // 输入框位置
	lang: "zh-CN", // 语言
};
