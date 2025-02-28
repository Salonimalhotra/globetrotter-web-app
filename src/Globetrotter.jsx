import React , {useState} from 'react'
import ClueContainer from './Components/ClueContainer';
import OptionsContainer from './Components/OptionsContainer';
import styled from 'styled-components';
import { data } from './data';
import FeedbackModal from './Components/FeedbackModal';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #666;
`;
const clue1 = data[0].clues[0];




export const Globetrotter = () => {

    const handleOptionClick = () => {
        setShowFeedbackModal(true);
    }

    const handleNextClick = () => {
        setShowFeedbackModal(false);
    }

    const [showFeedbackModal,setShowFeedbackModal] = useState(false);
    return (
        <div>
            <Header>Globetrotter</Header>
            <SubHeading>Where in the world ? Take a guess !</SubHeading>
            {showFeedbackModal ? <FeedbackModal isCorrectGuess={true} handleNextClick={handleNextClick}/> :
            <GameContainer>
                
                <ClueContainer clue={clue1}/>
                <OptionsContainer handleOptionClick={handleOptionClick}/>
            </GameContainer>}
        </div>
    )
}
