import React from 'react';

function Entry(props) {  {/* create component Entry with props and replace the words */}
    return (
        
            <div className="term">
                <dt>
                    <span className="emoji" role="img" aria-label="Tense Biceps">
                        {props.emojis}
                    </span>
                    <span>{props.names}</span>
                </dt>
                <dd>
                    {props.meanings}
                </dd>
            </div>
        )

}

export default Entry