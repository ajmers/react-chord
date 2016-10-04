import React, { Component, PropTypes } from 'react';
import './instrument-string.scss';

export default class InstrumentString extends Component {
    static propTypes = {
        isFretted: PropTypes.bool,
        index: PropTypes.number,
        finger: PropTypes.number,
        stringIndex: PropTypes.number,
        isEditable: PropTypes.bool,
        onFretClick: PropTypes.func,
    };

    onFretClicked = (fret, stringIndex, isFretted, e) => {
        const { onFretClick } = this.context;
        onFretClick(stringIndex, fret, isFretted);
    };

    render() {
        const { isFretted, stringIndex, isEditable, finger, index } = this.props;
        const frettedClass = isFretted ? 'mark' : '';
        return (
            <div className={`fret ${frettedClass}`} key={index}>
                {isEditable ? <span className='fret__click-area'
                    onClick={this.onFretClicked.bind(this, index + 1, stringIndex, isFretted)}
                    ></span> : '' }
                {isFretted ? <div className='dot'>{finger}</div> : ''}
            </div>
        );
    }
}
