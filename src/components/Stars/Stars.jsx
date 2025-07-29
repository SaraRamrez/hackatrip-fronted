import PropType from 'prop-types';

import './Stars.css';

const Stars = ({ votesAvg, votedByMe, handleAddVote }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        const starPath = (i <= votesAvg) && votedByMe ? '/star-fill.svg' : '/star-empty.svg';

        stars.push(
            <img src={starPath} key={i} onClick={() => handleAddVote(i)} />
        );
    }

    return <div className='stars-container'>{stars}</div>;
};

Stars.propTypes = {
    handleAddVote: PropType.func.isRequired,
};

export default Stars;