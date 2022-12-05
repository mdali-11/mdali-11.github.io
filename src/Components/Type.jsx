import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {

    const style = {
        color: "blue"
    }
    return (
        <>
            <div
                style={style}
            >
                <Typewriter
                    options={{
                        strings: ["Full Stack Web Developer", "MERN Stack Developer"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        border: "red",
                    }}
                />

            </div>

        </>
    );
};
