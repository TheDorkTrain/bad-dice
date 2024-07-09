import React from 'react';

function Response ({ response, onRespond }) {
    return (
        <> <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '1rem', fontSize: '2rem'}}>
        <p> {response.text}</p>
        <button style={{height: '100%'}}onClick={() => onRespond(response.emotion)}>
            Send Response
        </button>
        </div>
        </>
    );
}

export default Response;
