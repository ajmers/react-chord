# react-chord

React component for rendering instrument chords (guitar, mandolin, banjo, etc)

Chord data structure is:
    
    {
        "name": "f#6",
        "tonic": "f#",
        "type": "6",
        "bar": false,
        "minFret": 3,
        "instrument": "mandolin",
        "fingerings": [
            { "string": "G", "fret": 3, "finger": 3 },
            { "string": "D", "fret": 1, "finger": 1 },
            { "string": "A", "fret": 4, "finger": 4 },
            { "string": "E", "fret": 2, "finger": 2 }
        ]
    },
