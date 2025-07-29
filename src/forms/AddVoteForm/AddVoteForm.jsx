import PropType from 'prop-types';

import toast from 'react-hot-toast';

import Stars from '../../components/Stars/Stars';

const { VITE_API_URL } = import.meta.env;

import './AddVoteForm.css';

const AddVoteForm = ({
    insertTripVoteService,
    addTripVote,
    tripId,
    coordinador,
    avgValue,
    authUser,
    authToken,
}) => {

    const handleAddVote = async (vote) => {
        try {
            if (authUser) {
                const newVotesAvg = await insertTripVoteService(
                    vote,
                    tripId,
                    authToken
                );
                
                addTripVote(newVotesAvg.votes);

                toast.success(newVotesAvg.message);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className='container-coordinador'>
            {coordinador && (
                <>
                    <p className='p-coordinador'>¡Vota al coordinador de este viaje si has participado en él!</p>
                    <div className='imagen-coordinador'>
                        <img className='imagen' src={coordinador?.avatar ? `${VITE_API_URL}/${coordinador?.avatar}` : '/default-avatar.jpg'} alt={coordinador?.username} />
                        <p className='name-coordinador'>{coordinador?.username}</p>
                    </div>
                    <div className='stars-vote'>
                        <Stars votesAvg={avgValue?.media} votedByMe={avgValue?.votedByMe} handleAddVote={handleAddVote} />
                        <span className='star-span'>Media de votos de {coordinador?.username} {avgValue?.media}</span>
                    </div>
                </>
            )}
        </div>
    );
};

AddVoteForm.propTypes = {
    insertTripVoteService: PropType.func.isRequired,
    addTripVote: PropType.func.isRequired,
    votes: PropType.string,
    tripId: PropType.string.isRequired,
    coordinador: PropType.object,
    avgValue: PropType.object,
    authUser: PropType.object,
    authToken: PropType.string,
};

export default AddVoteForm;

