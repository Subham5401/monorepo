import "dotenv/config";

interface IEnvType {
  [key: string]: string | undefined;
}

export const env: IEnvType = {
  TOKEN: process.env.TOKEN,
  CLIENTID: process.env.CLIENTID,
  GUILDID: process.env.GUILDID,
  TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
  ROLE_NAME: process.env.ROLE_NAME,
  SUB_ROLES: process.env.SUB_ROLES,
  EXCLUSIVE_ROLE_NAME: process.env.EXCLUSIVE_ROLE_NAME,
  REACTION_RULES_MESSAGE_STARTSWITH:
    process.env.REACTION_RULES_MESSAGE_STARTSWITH,
  REACTION_RULES_CHANNEL_NAME: process.env.REACTION_RULES_CHANNEL_NAME,
  REACTION_EMOJI_NAME: process.env.EACTION_EMOJI_NAME,
  REACTION_ROLE_NAME: process.env.REACTION_ROLE_NAME,
  DYNAMIC_VOICE_CATEGORY_ID: process.env.DYNAMIC_VOICE_CATEGORY_ID,
  CHATGPT_API_KEY: process.env.CHATGPT_API_KEY,
};