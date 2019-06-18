import React from 'react';
import {Button} from 'semantic-ui-react'
const RightArrow = (props) => {

  return (
    <div className="nextArrow">
      <button class="ui circular icon button" onClick={props.goToNextSlide}>
        <i aria-hidden="true" class="right arrow icon red"></i>
      </button>
    </div>
  );
}

export default RightArrow
