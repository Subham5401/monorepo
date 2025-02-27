import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
} from "@mui/material";
import { SiDiscord, SiTwitch } from "react-icons/si";
import LoadingBox from "../loading/LoadingBox";
import { trpc } from "../../utils/trpc";

const BotActivity = () => {
  const botActivities = trpc.bot.getBotActivities.useQuery();

  return (
    <Paper
      sx={{ mt: "10px", backgroundColor: "#000", padding: "10px" }}
      elevation={1}>
      <Stack>
        <List
          dense={false}
          sx={{ width: "100%", backgroundColor: "#000" }}
          subheader={
            <ListSubheader sx={{ backgroundColor: "#000" }} disableSticky>
              Recent bot activities:
            </ListSubheader>
          }
          disablePadding>
          {!botActivities.isLoading ? (
            botActivities.data?.length ? (
              botActivities.data?.map((activity, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    {activity.botPlatformType === "twitch" ? (
                      <SiTwitch />
                    ) : (
                      <SiDiscord />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={activity.botActivity}
                    secondary={activity.activityDate.toDateString()}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No data." />
              </ListItem>
            )
          ) : (
            <LoadingBox />
          )}
        </List>
      </Stack>
    </Paper>
  );
};

export default BotActivity;
