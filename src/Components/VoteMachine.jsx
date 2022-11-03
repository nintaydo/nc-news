import {useState} from "react";

const VoteMachine = ({article_id, votes, type}) => {
 const [userVotes, setUsersVotes] = useState(0);

 const handleVoting = (number) => {
    
 }

 return (
    <div>
        <button onClick={()=>{
            handleVote(1);
        }}
        >up Doot
        </button>
        <p>{votes + userVotes}</p>
        <button onClick={()=>{
            handleVote(-1)
        }}>dn Doot</button>
    </div>
 )
};

export default VoteMachine;