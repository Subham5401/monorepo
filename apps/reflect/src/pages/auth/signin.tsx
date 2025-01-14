import React from "react";
import { useSession } from "next-auth/react";
import AppContainer from "../../components/app/AppContainer";
import AppHeader from "../../components/app/AppHeader";
import Router from "next/router";

const SignIn = () => {
  const { data: session } = useSession();

  if (session) Router.push("/app");

  return (
    <>
      <AppHeader title="Sign In" index={true} />
      <AppContainer isLoading={false}>
        <></>
      </AppContainer>
    </>
  );
};

export default SignIn;
