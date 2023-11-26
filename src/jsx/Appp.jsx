

import React from "react";
import emoji from "../emoji";
import Term from "./Term";

function CreateTerm(emoji) {
    return (
        <Term
            key={emoji.id}
            name={emoji.name}
            emoji={emoji.emoji}
            meaning={emoji.meaning}

        />

    );

}

function Appp() {
    return (

        <div>

            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">

                {emoji.map(CreateTerm)}
            </dl>
        </div>

    );
}

export default Appp;