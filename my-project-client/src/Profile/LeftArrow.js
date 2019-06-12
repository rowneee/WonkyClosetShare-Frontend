import React from 'react';
import {Button} from 'semantic-ui-react'

const LeftArrow = (props) => {
  return (
    <div className="backArrow">
      <button class="ui circular icon button" onClick={props.goToPrevSlide}>
        <i aria-hidden="true" class="left arrow icon"></i>
      </button>
    </div>
  );
}

export default LeftArrow
