import React from 'react';
import utilStyles from '../../styles/utils.module.css'
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
