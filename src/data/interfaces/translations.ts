export type Language = "en" | "pt";

export enum TechIconId {
	Next = "next",
	Node = "node",
	Docker = "docker",
	Aws = "aws",
	Postgres = "postgres",
	TypeScript = "typescript",
	NestJS = "nestjs",
	Messaging = "messaging",
}

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

export interface TechOrbitItem {
	id: TechIconId;
	name: string;
	focus: string;
	summary: string;
	highlights: string[];
}

export interface TechOrbitCopy {
	instruction: string;
	items: TechOrbitItem[];
}

export interface TimelineItem {
	year: string;
	role: string;
	company: string;
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
		techOrbit: TechOrbitCopy;
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
