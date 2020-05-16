import React from "react";
import Form from "../components/form";
import SiteLayout from "../components/siteLayout";

const IndexPage = () => {
  return (
    <SiteLayout>
      <Form />
    </SiteLayout>
  );
};

IndexPage.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default IndexPage;
