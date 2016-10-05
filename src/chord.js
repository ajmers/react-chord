import React, { Component, PropTypes } from 'react';

import InstString from './instrument-string';

import './chord.scss';

export default class Chord extends Component {
    static propTypes = {
        chord: PropTypes.object,
        numFrets: PropTypes.number,
        isEditable: PropTypes.bool,
        onFretClick: PropTypes.func,
        onMinFretChange: PropTypes.func,
    };

    static defaultProps = {
        numFrets: 4,
        isEditable: false,
    };

    renderMinFret = minFret => {
        const { isEditable, onMinFretChange } = this.props;
        let minFretEl;
        if (isEditable && onMinFretChange) {
            minFretEl = (<input
                className='chord__min-fret-input'
                value={minFret || ''}
                onChange={onMinFretChange}
                >fr</input>);
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
        const { chord, numFrets, isEditable, onFretClick } = this.props;
        const { minFret } = chord;
        return (
            <div className='chord-chart'>
                {this.renderMinFret(minFret)}
                <div className='chord-chart__strings' style={{ display: 'flex' }}>
                    {chord.fingerings.map((string, i) => {
                        return (<InstString key={i}
                            isEditable={isEditable}
                            onFretClick={onFretClick}
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
