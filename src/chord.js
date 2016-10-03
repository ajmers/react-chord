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
                style={chordMinFretInputStyle}
                className='chord__min-fret-input'
                value={minFret || ''}
                onChange={onMinFretChange}
                >fr</Input>);
        } else {
            minFretEl = (
                <span
                    style={chordMinFretStyle}
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
            <div className='chord-chart'
                style={chordChartStyle}>
                {this.renderMinFret(minFret)}
                <div className='chord-chart__strings'>
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

const chordMinFretStyle = {
    fontSize: '.75em',
    position: 'absolute',
    left: 20,
};

const chordMinFretInputStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
    fontSize: '.75rem',
    left: 20,
    top: 30,
    width: 20,
    padding: 0,
};

const chordChartStyle = {
    display: 'flex',
    position: 'relative',
    alignSelf: 'center',
    padding: 30,
};
