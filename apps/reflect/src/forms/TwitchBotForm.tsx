import React, { useEffect } from "react";
import { trpc } from "../utils/trpc";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  InputLabel,
  Button,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Select from "@mui/material/Select";

const TwitchBotForm = () => {
  const { data: botActivityEnabledConfig, isLoading } =
    trpc.twitchBot.getConfig.useQuery({
      configName: "bot_activity_enabled",
    });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      botActivityEnabled: botActivityEnabledConfig?.configValue ?? "0",
    },
  });

  useEffect(() => {
    if (!isLoading) {
      if (!botActivityEnabledConfig) return;
      setValue("botActivityEnabled", botActivityEnabledConfig.configValue);
    }
  }, [isLoading]);

  const configsMutate = trpc.twitchBot.setConfig.useMutation({
    onSuccess() {
      alert("Twitch Bot configurations successfully saved.");
    },
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
    configsMutate.mutate({
      configName: "bot_activity_enabled",
      configValue: data.botActivityEnabled,
    });
  };

  const handleError = (errorMsg: any) => {
    if (errorMsg) {
      return <React.Fragment>{errorMsg.message}</React.Fragment>;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
            },
          }}>
          <InputLabel>Twitch Bot Activities</InputLabel>
          <Controller
            name="botActivityEnabled"
            control={control}
            render={({ field }) => (
              <FormControl
                sx={{ m: 2 }}
                size="small"
                fullWidth
                error={!!errors.botActivityEnabled}>
                <InputLabel id="select-botActivityEnabled">
                  Twitch Bot Activities
                </InputLabel>

                <Select
                  {...field}
                  labelId="select-botActivityEnabled"
                  id="select-botActivityEnabled"
                  label="Twitch Bot Activities">
                  <MenuItem value="0">Disabled</MenuItem>
                  <MenuItem value="1">Enabled</MenuItem>
                </Select>
                <FormHelperText>
                  {handleError(errors.botActivityEnabled)}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Button fullWidth variant="outlined" sx={{ m: 1 }} type="submit">
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default TwitchBotForm;
