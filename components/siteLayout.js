import Link from "next/link";
import Head from "next/head";
import Footer from "./footer";
import Nav from "./nav";

const SiteLayout = ({ children }) => (
  <div className="bg-white profile-page sidebar-collapse">
    <Head>
      <title>Simple Profile</title>

      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
      />

      <link href="/assets/css/material-kit.css" rel="stylesheet" />
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossOrigin="anonymous"
      ></script>

      <script
        src="../assets/js/core/bootstrap-material-design.min.js"
        type="text/javascript"
      ></script>

      <script
        src="../assets/js/plugins/nouislider.min.js"
        type="text/javascript"
      ></script>
    </Head>

    <Nav />
    <div className="page-header header-filter" data-parallax="true"></div>

    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default SiteLayout;
