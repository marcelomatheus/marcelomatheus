export type Language = "en" | "pt";

export enum SkillIconId {
	Server = "Server",
	Sparkles = "Sparkles",
	Activity = "Activity",
	Brain = "Brain",
}

export enum FooterIconId {
	External = "external",
	Linkedin = "linkedin",
	Github = "github",
	Mail = "mail",
}

export type HeroCarouselIconId =
	| "react"
	| "next"
	| "node"
	| "docker"
	| "aws"
	| "framer"
	| "postgres"
	| "typescript";

export interface HeroCarouselSlide {
	title: string;
	label: string;
	icon: HeroCarouselIconId;
	summary: string;
	highlights: string[];
	theme?: "ember" | "graphite" | "ash" | "cinder";
}

export interface HeroCarouselCopy {
	instruction: string;
	slides: HeroCarouselSlide[];
}

export interface TimelineItem {
	period: string;
	role: string;
	company: string;
	location?: string;
	description: string;
	badges: string[];
}

export interface SkillCardContent {
	icon: SkillIconId;
	title: string;
	description: string;
}

export interface ProjectCardContent {
	slug: string;
	title: string;
	excerpt: string;
	cover: string;
	problem: string;
	overview: string;
	impact: string[];
	tech: string[];
	github: {
		stars: string;
		forks: string;
		language: string;
	};
	links: {
		live: string;
		repo: string;
	};
}

export interface FooterLink {
	label: string;
	href: string;
	icon?: FooterIconId;
}

export interface FooterCopy {
	role: string;
	description: string;
	location: string;
	phoneLabel: string;
	phoneHref: string;
	navTitle: string;
	navLinks: FooterLink[];
	resourcesTitle: string;
	resourceLinks: FooterLink[];
	socialTitle: string;
	socialLinks: FooterLink[];
	note: string;
}

export interface PortfolioCopy {
	nav: {
		home: string;
		about: string;
		skills: string;
		projects: string;
		contact: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		subtitle: string;
		primaryCta: string;
		secondaryCta: string;
		trustedBy: string;
		stats: Array<{ label: string; value: string }>;
		carousel: HeroCarouselCopy;
	};
	about: {
		title: string;
		subtitle: string;
		caption?: string;
		timeline: TimelineItem[];
	};
	skills: {
		title: string;
		subtitle: string;
		cards: SkillCardContent[];
	};
	projects: {
		title: string;
		subtitle: string;
		modal: {
			what: string;
			problem: string;
			stack: string;
			metrics: string;
			repoCta: string;
			liveCta: string;
		};
		cards: ProjectCardContent[];
	};
	footer: FooterCopy;
	common: {
		close: string;
		comingSoon: string;
	};
}
