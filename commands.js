import 'dotenv/config';
import { fakeGameItems } from './game.js';
import { InstallGlobalCommands } from './utils.js';

// Wiki command for game lookup
const WIKI_COMMAND = {
  name: 'wiki',
  type: 1,
  description: 'Lookup information in wiki',
  options: [
    {
      type: 3,
      name: 'item',
      description: 'Item to lookup',
      choices: fakeGameItems,
      required: true,
    },
  ],
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

// Leaderboard command, for guild install only
const LEADERBOARD_COMMAND = {
  name: 'leaderboard',
  type: 1,
  description: 'See server leaderboard',
  integration_types: [0],
  contexts: [0],
};

// Profile command
const PROFILE_COMMAND = {
  name: 'profile',
  type: 1,
  description: 'See your game inventory and progress',
  integration_types: [1],
  contexts: [0, 1, 2],
};

// Link account command
const LINK_COMMAND = {
  name: 'link',
  type: 1,
  description: 'Link your Quests of Wumpus account with your Discord profile',
  integration_types: [1],
  contexts: [1],
};

const ALL_COMMANDS = [
  WIKI_COMMAND,
  LEADERBOARD_COMMAND,
  PROFILE_COMMAND,
  LINK_COMMAND,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
