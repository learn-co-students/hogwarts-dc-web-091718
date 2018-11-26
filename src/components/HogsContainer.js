import React, { Component } from 'react';
import Hog from './Hog';

const HogsContainer = ({hogs, onHideHog}) => {
  return (
    <div className="ui three stackable cards">
      {hogs.map((hog, index) => {
        return (
          <Hog
            key={hog.name}
            hog={hog}
            onHideHog={onHideHog}
          />
        );
      })}
    </div>
  );
};

export default HogsContainer;
