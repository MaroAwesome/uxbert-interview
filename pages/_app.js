import App from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import Router from "next/router";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/styles.scss";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  componentDidMount() {
    const { pathname } = Router;
    this.props.reduxStore.subscribe(() => {
      const { form } = this.props.reduxStore.getState();
      if (
        pathname == "/" &&
        (form.fullName !== "" || form.email !== "" || form.password !== "")
      ) {
        Router.push("/profile");
      }

      if (
        pathname == "/profile" &&
        (form.fullName === "" || form.email === "" || form.password === "")
      ) {
        Router.push("/");
      }
    });
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <PersistGate
          loading={<Component {...pageProps} />}
          persistor={this.persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
