import React from 'react';
import OptionsDisplay from './options';
import VideoDisplay from './video';

export default function InfoDisplay() {
    return (
        <React.Fragment>
          <OptionsDisplay />
          <VideoDisplay />
        </React.Fragment>
    )
}
