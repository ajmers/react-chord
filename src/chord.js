import React, { Component, PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

import InstString from './instrument-string';

import './chord.scss';

export default class Chord extends Component {
    static propTypes = {
        chord: PropTypes.object,
        numFrets: PropTypes.number,
    };

    static contextTypes = {
        isEditable: PropTypes.bool,
        onMinFretChange: PropTypes.func,
    };

    renderMinFret = minFret => {
        const { isEditable, onMinFretChange } = this.context;
        let minFretEl;
        if (isEditable && onMinFretChange) {
            minFretEl = (<Input
                className='chord__min-fret-input'
                value={minFret || ''}
                onChange={onMinFretChange}
                >fr</Input>);
        } else {
            minFretEl = (
                <span
                    className='chord__min-fret'>
                    {minFret ? minFret + 'fr' : ''}
                </span>
            );
        }
        return minFretEl;
    };

    render() {
        const { chord, numFrets } = this.props;
        const { minFret } = chord;
        return (
            <div className='chord-chart'>
                {this.renderMinFret(minFret)}
                <div className='chord-chart__strings' style={{ display: 'flex' }}>
                    {chord.fingerings.map((string, i) => {
                        return (<InstString key={i}
                            stringIndex={i}
                            string={string}
                            numFrets={numFrets}
                            minFret={minFret}
                        />);
                    })}
                </div>
            </div>
        );
    }
}
