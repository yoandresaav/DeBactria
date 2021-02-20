import React, { Component } from 'react';
import facebook from "../images/facebook.png";

class Share extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="__blank">
          <img width={40} src={facebook} />
        </a>
      </div>
    );
  }
}

export default Share;