import React from "react";
import { describe, expect, test } from "vitest";
import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux";
import {App} from "./App";

const wrapper = (children) => {
  return <Provider store={store}>{children}</Provider>;
};

function setup(jsx) {
  return {
    ...render(wrapper(jsx)),
  };
}

//FOOTER
describe("App Test", () => {
  test("Should contain msw response array",async () => {
    setup(<App />);
    await screen.findByText(/12345/)
  });
});
