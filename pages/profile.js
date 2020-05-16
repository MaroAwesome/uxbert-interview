import React from "react";
import Profile from "../components/profile";
import SiteLayout from "../components/siteLayout";

function profile() {
  return (
    <SiteLayout>
      <Profile />
    </SiteLayout>
  );
}
profile.getInitialProps = ({ reduxStore }) => {
  return {};
};
export default profile;
