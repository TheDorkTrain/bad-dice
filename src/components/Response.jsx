import React from 'react';

function Response ({ response, onRespond }) {
    return (
        <button onClick={() => onRespond(response.emotion)}>
            {response.text}
        </button>
    );
}

export default Response;
