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

// Scrape command to scrape conversation text
const SCRAPE_COMMAND = {
  name: 'scrape',
  type: 1,
  description: 'Scrape the full text of a conversation with another user',
  options: [
    {
      type: 6,
      name: 'user',
      description: 'The user to scrape the conversation with',
      required: true,
    },
  ],
  integration_types: [1],
  contexts: [0, 1, 2],
};

// Print command to print conversation text to a file
const PRINT_COMMAND = {
  name: 'print',
  type: 1,
  description: 'Print the scraped conversation text to a .txt file',
  options: [
    {
      type: 3,
      name: 'filename',
      description: 'The name of the file to print the conversation to',
      required: true,
    },
  ],
  integration_types: [1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [
  WIKI_COMMAND,
  LEADERBOARD_COMMAND,
  PROFILE_COMMAND,
  LINK_COMMAND,
  SCRAPE_COMMAND,
  PRINT_COMMAND,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
