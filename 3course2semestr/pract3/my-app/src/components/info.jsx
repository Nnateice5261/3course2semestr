import React from 'react';
const Info = () => {
    const FIO = 'Poltavskiy Vyacheslav Ivanovich';
    const age = 19;

    return (
        <div className="info">
            <div>{`2: ' ${5 + 2}`}</div>
            <div style={{fontFamily: 'Courier New'}}>{`My family: ${FIO}, my age: ${age}`}</div>
        </div>
    );
};

export default Info;