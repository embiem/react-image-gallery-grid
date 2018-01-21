import React, { Component } from "react";

import "./index.css";

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createRandomSpannings(maxHorizontal, maxVertical) {
  // define defaults
  maxHorizontal = typeof maxHorizontal === "undefined" ? 4 : maxHorizontal;
  maxVertical = typeof maxVertical === "undefined" ? 4 : maxVertical;

  const arr = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    ...Array.from(
      {
        length: 50
      },
      () => [randomNumber(maxHorizontal), randomNumber(maxVertical)]
    )
  ];
  shuffle(arr);
  return arr;
}

export default class extends Component {
  static defaultProps = {
    images: [
      "https://source.unsplash.com/random/300x300?v=1",
      "https://source.unsplash.com/random/300x300?v=2",
      "https://source.unsplash.com/random/300x300?v=3",
      "https://source.unsplash.com/random/300x300?v=4",
      "https://source.unsplash.com/random/300x300?v=5",
      "https://source.unsplash.com/random/300x300?v=6",
      "https://source.unsplash.com/random/300x300?v=7",
      "https://source.unsplash.com/random/300x300?v=8",
      "https://source.unsplash.com/random/300x300?v=9"
    ],
    maxHorizontal: 4,
    maxVertical: 4
  };

  constructor(props) {
    super(props);

    this.state = {
      overlayImage: "",
      randomSpannings: createRandomSpannings(
        props.maxHorizontal,
        props.maxVertical
      )
    };
  }

  render() {
    return (
      <div>
        <div className={`overlay ${this.state.overlayImage ? "open" : ""}`}>
          <div className="overlay-inner">
            <button
              className="close"
              onClick={() => this.setState({ overlayImage: "" })}
            >
              × Close
            </button>
            <img src={this.state.overlayImage} />
          </div>
        </div>

        <section className="gallery" style={this.props.style}>
          {this.props.images.map((img, idx) => {
            const currentSpannings = this.state.randomSpannings[
              idx % this.state.randomSpannings.length
            ];
            const h = currentSpannings[0];
            const v = currentSpannings[1];
            return (
              <div
                key={idx}
                className={`item h${h} v${v}`}
                onClick={e => {
                  this.setState({ overlayImage: img });
                }}
              >
                <img src={img} />
                <div className="item__overlay">
                  <button>View →</button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
