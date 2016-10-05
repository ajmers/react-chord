import React, { Component, PropTypes } from 'react';
import './instrument-string.scss';

import Fret from './fret';

export default class InstrumentString extends Component {
    static propTypes = {
        stringIndex: PropTypes.number,
        numFrets: PropTypes.number,
        minFret: PropTypes.number,
        string: PropTypes.shape({
            finger: PropTypes.number,
            fret: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        }),
        onFretClick: PropTypes.func,
        onStringMarkerClick: PropTypes.func,
        isEditable: PropTypes.bool,
    };

    onFretClicked = (fret, stringIndex, isFretted, e) => {
        const { onFretClick } = this.props;
        onFretClick(stringIndex, fret, isFretted);
    };

    render() {
        const { isEditable, onFretClick, onStringMarkerClick, numFrets,
            string: { finger, fret }, stringIndex } = this.props;
        const isPlayed = fret !== 'X';
        const stringMarkerClickHandler = isEditable ?
            onStringMarkerClick.bind(this, stringIndex, !isPlayed) : null;

        const isFretted = parseInt(fret, 10) !== 0;

        const frettedClass = isFretted ? '' : 'no-fret';
        const playedClass = isPlayed ? '' : 'unplayed';
        let stringMarker = 'X';
        if (isPlayed) {
            stringMarker = isFretted ? '' : 'O';
        }
        const stringClass = frettedClass || playedClass;

        const fretArray = new Array(Math.max(numFrets, 4));
        fretArray.fill(0);
        return (
            <div className='instrument-string'>
                <span className={stringClass}
                    onClick={stringMarkerClickHandler}
                    >{stringMarker}</span>
                {fretArray.map((fretI, index) => {
                    const fretted = (index === fret - 1) && isFretted;
                    return (
                        <Fret
                            isFretted={fretted}
                            index={index}
                            key={index}
                            finger={finger}
                            stringIndex={stringIndex}
                            isEditable={isEditable}
                            onFretClick={onFretClick} />);
                })}
            </div>
        );
    }
}
