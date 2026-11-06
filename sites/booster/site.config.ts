export const siteConfig = {
  siteName: 'Booster Pack Heroes Guide',
  domain: 'boosterpackheroes.wiki',
  url: 'https://boosterpackheroes.wiki',
  gameTitle: 'Booster Pack Heroes',
  steamAppId: 4618570,
  steamUrl: 'https://store.steampowered.com/app/4618570/Booster_Pack_Heroes/',
  supportEmail: '',
  social: [
    { href: 'https://www.fundaygames.dk/booster-pack-heroes', label: 'Funday Games page' },
    { href: 'https://www.fundaygames.dk/bph-support', label: 'Publisher support page' },
    { href: 'https://discord.gg/9YeesxhQzV', label: 'Discord' },
    { href: 'https://funday-games.itch.io/booster-pack-heroes', label: 'itch.io' },
    { href: 'mailto:jordyadan@gmail.com', label: 'Steam support email' },
  ],
  developer: 'zup',
  publisher: 'Funday Games',
  tagline: 'Unofficial English fan guide for the incremental tower defense: packs, Mastery, and the tower.',
  locale: 'en',
  themeColor: '#100e18',
  contentRoot: 'booster',
  homeTitle: 'Booster Pack Heroes Guide — Release Date, Packs, and the Tower',
  homeDescription:
    'Unofficial English guide to Booster Pack Heroes (Steam AppID 4618570). zup and Funday Games, release 10 Nov 2026, booster packs, Mastery, and tower defense. Not affiliated with the developers or Valve.',
  analytics: {
    gaId: 'G-JY97F8GEWW',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Booster Pack Heroes: a pixel-art night sky, a red-eyed figure on a cliff, and a stone tower with blue flame',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Booster Pack Heroes: the title between foil booster packs, a cliff figure, and a blue-flamed tower',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'boosterpackheroes.wiki is an unofficial fan-made guide for Booster Pack Heroes. It is not affiliated with, endorsed by, or sponsored by zup, Funday Games, Jordy Adan, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Cards and numbers printed before launch can change. This site does not sell the game, redeem codes, or recover accounts. The email in the footer is the support address on the Steam store page. Mail sent there does not reach the people who edit this wiki.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/packs', label: 'Packs' },
    { href: '/heroes', label: 'Heroes' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
  ],
  footerNav: [
    { href: '/guide', label: 'Guide' },
    { href: '/packs', label: 'Packs' },
    { href: '/heroes', label: 'Heroes' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Checked 6 Nov 2026',
    detail:
      'Store text, platforms, languages, categories, the demo link, and system requirements are from the Steam appdetails API and IStoreBrowseService on 6 Nov 2026. Pack, Mastery, and realm lines are from that store text and the Steam community announcements dated 8 May, 18 Sep, 25 Sep, and 19 Oct 2026. No launch client was available. The public price was not in that appdetails payload.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/4618570/Booster_Pack_Heroes/',
      label: 'Steam store page',
    },
    {
      href: 'https://www.fundaygames.dk/booster-pack-heroes',
      label: 'Funday Games page',
    },
    {
      href: 'https://steamcommunity.com/app/4618570/announcements/detail/1844115010494453',
      label: 'Launch announcement',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
