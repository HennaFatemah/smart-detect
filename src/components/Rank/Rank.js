import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div className="flex flex-column">
            <div className="mid-gray f3 center">
                {`${name}, your current entry count is ...`}
            </div>
            <div className="mid-gray f1 center">
                {entries}
            </div>
        </div>
    );
};

export default Rank;