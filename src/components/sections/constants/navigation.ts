export enum NavKey {
  Home = "nav.home",
  About = "nav.about",
  Skills = "nav.skills",
  Projects = "nav.projects",
  Contact = "nav.contact",
}

export const NAV_ORDER: NavKey[] = [
  NavKey.Home,
  NavKey.Projects,
  NavKey.Skills,
  NavKey.About,
  NavKey.Contact,
];

export const NAV_TARGET_BY_KEY: Record<NavKey, string> = {
  [NavKey.Home]: "#hero",
  [NavKey.About]: "#about",
  [NavKey.Skills]: "#skills",
  [NavKey.Projects]: "#projects",
  [NavKey.Contact]: "#contact",
};
