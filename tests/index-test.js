import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import ImageGallery from "src/";

describe("ImageGallery", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("renders", () => {
    render(<ImageGallery />, node, () => {
      expect(node.innerHTML).toContain(`<div class="overlay ">`);
    });
  });

  // TODO testing:
  // - shouldn't update the h's & v's when component is updated
  // - should create correct h's & v's when maxHorizontal and maxVertical given by props
  // - should display correct images given by props
});
