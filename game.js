export function getFakeProfile(p) {
  const position = p
    ? p
    : Math.floor(Math.random() * fakePlayerProfiles.length);
  return fakePlayerProfiles[position];
}

export function getFakeUsername(p) {
  const position = p
    ? p
    : Math.floor(Math.random() * fakePlayerProfiles.length);
  return fakePlayerProfiles[position].username;
}

export function getWikiItem(value) {
  return fakeGameItems.find((el) => el.value === value);
}

// fake profile data for game
export const fakePlayerProfiles = [
  {
    username: 'WumpusWhisperer',
    createdAt: '01/21/2023',
    lastPlayed: '02/28/2024',
    stats: {
      level: '14',
      wins: '72',
      losses: '28',
      realms: '8',
      rank: '1743',
    },
  },
  {
    username: 'PuzzledPetal22',
    createdAt: '06/11/2022',
    lastPlayed: '02/27/2024',
    stats: {
      level: '6',
      wins: '18',
      losses: '82',
      realms: '4',
      rank: '6239',
    },
  },
  {
    username: 'ShadowChaserX',
    createdAt: '09/03/2023',
    lastPlayed: '03/01/2024',
    stats: {
      level: '11',
      wins: '54',
      losses: '46',
      realms: '7',
      rank: '3921',
    },
  },
  {
    username: 'RainbowRider99',
    createdAt: '04/17/2022',
    lastPlayed: '02/26/2024',
    stats: {
      level: '3',
      wins: '9',
      losses: '91',
      realms: '2',
      rank: '8105',
    },
  },
  {
    username: 'MysticExplorer23',
    createdAt: '12/05/2023',
    lastPlayed: '03/02/2024',
    stats: {
      level: '17',
      wins: '105',
      losses: '15',
      realms: '11',
      rank: '2468',
    },
  },
  {
    username: 'VelvetVoyager',
    createdAt: '08/19/2022',
    lastPlayed: '02/29/2024',
    stats: {
      level: '9',
      wins: '36',
      losses: '64',
      realms: '6',
      rank: '5743',
    },
  },
  {
    username: 'LuminousLoreLad',
    createdAt: '10/14/2023',
    lastPlayed: '03/03/2024',
    stats: {
      level: '13',
      wins: '63',
      losses: '37',
      realms: '9',
      rank: '4327',
    },
  },
];

// fake items with descriptions for our lil game
export const fakeGameItems = [
  {
    name: 'Map',
    value: 'item_map',
    emoji: ':map:',
    description: 'A detailed map that reveals hidden paths and secret locations'
  },
  {
    name: `Wumpus' Feather`,
    value: 'item_feather',
    emoji: ':feather:',
    description: 'A rare and magical feather, said to bring good luck to those who possess it'
  },
  {
    name: 'Glowing Orb',
    value: 'item_orb',
    emoji: ':crystal_ball:',
    description: 'A mysterious orb that guides players towards their next quest'
  },
  {
    name: 'Soothing Tonic',
    value: 'item_tonic',
    emoji: ':teapot:',
    description: 'A healing tonic that restores health and provides a brief speed boost to the player\'s character'
  },
  {
    name: 'Luminous Crystal',
    value: 'item_crystal',
    emoji: ':rock:',
    description: 'A radiant crystal that illuminates dark areas and wards off shadows'
  },
  {
    name: 'Celestial Key',
    value: 'item_key',
    emoji: ':key:',
    description: 'Unlocks hidden portals to secret realms'
  },
  {
    name: 'Dreamcatcher Amulet',
    value: 'item_amulet',
    emoji: ':nazar_amulet:',
    description: 'Protects from nightmares and negative effects during rest periods'
  }
];
