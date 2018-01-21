import React, { Component } from "react";
import { render } from "react-dom";

import "./index.css";
import ImageGallery from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-image-gallery-grid Demo</h1>
        <h2>default</h2>
        <ImageGallery />

        <h2>800px fixed-width</h2>
        <ImageGallery style={{width: "800px"}} />

        <h2>custom max-spannings of >3 ^1</h2>
        <ImageGallery maxHorizontal={3} maxVertical={1} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
