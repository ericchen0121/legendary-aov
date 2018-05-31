export const HERO_FILTERS = {
  ALL: ['all'],
  CLASS: ['all', 'tank', 'warrior', 'assassin', 'mage', 'marksman', 'support'],
  LANE: ['solo', 'mid', 'jungle', 'roam', 'support', 'ds', 'damage'],
  ROLE: [
    'all',
    'buffs',
    'control',
    'finisher',
    'initiator',
    'harass',
    'life steal',
    'mobility',
  ],
  TIER: ['all', 'ss', 's', 'a', 'b', 'c', 'd'],
};

export const TEAM_FILTERS = {
  REGIONS: ['EU', 'NA', 'SEA'],
};

export const ARMORY_FILTERS = {
  ITEMS: ['attack', 'magic', 'defense', 'movement', 'jungle'],
  TALENTS: ['assassin', 'mage', 'marksman', 'support', 'tank', 'warrior'],
  ARCANA: ['assassin', 'mage', 'marksman', 'support', 'tank', 'warrior'],
};

export const VIDEO_SEARCH_TERMS = [
  'hero spotlight',
  'road to mastery',
  'guide',
  'gameplay',
  'build',
  'arcana',
  'vods library',
  'abrownbag',
  'vex190',
  'darkbreaker',
  'shurko',
  'mindereak',
  'ass dave',
  'pich',
  'smg',
  'IMT immortals',
  'kzfox',
  'IMT Bobo',
  'sunbros',
  'apok',
  'iflekzz',
  'franjosetv',
  'valor series',
  'zuchiha aov',
  'aic',
  'rumblytv',
  'kayzeepi gaming',
  'mr. peeperz',
  'death match',
  'meta',
  'solo q',
  'master',
  'conquerer',
  'combo',
  'master',
  'ranked',
  'carry',
  'jungle',
  'counter',
  'america',
  'europe',
  'asia',
  'taiwan',
  'korea',
  'vietnam',
  'skins',
  'garena aov',
];

export const AOV_CHANNELS = [
  {
    channel_id: 'abrownbag',
    channel_nickname: 'abrownbag, a mobile hoebag streamer',
    id: 1,
    header_color: 'black',
    custom_search_terms: [],
  },
];
export const DEFAULT_TOP_LEVEL_FILTER = 'CLASS';
export const DEFAULT_IMAGE_URL =
  'https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/player/headshot-default.png';
export const DEFAULT_VIDEO_SEARCH_TERM = 'arena of valor';
