import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameContainer,
  PlayViewContainer,
  Card,
  ScoreCard,
  Li,
  RockScissorContainer,
  RockScissorLi,
  Buutton,
  RSPImage,
  RulesContainer,
  RulesImage,
  PopupContainer,
  PopupClose,
  Ul,
} from './StyledComponents'

const Game = props => {
  const {choicesList} = props

  const onGameClick = itemId => console.log(itemId)

  const RulesPopup = () => (
    <Popup trigger={<Buutton rules="rules">Rules</Buutton>} modal nested>
      {close => (
        <div>
          <PopupClose position="top-right" onClick={close}>
            <RiCloseLine />
          </PopupClose>
          <PopupContainer>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
              alt="rules"
            />
          </PopupContainer>
        </div>
      )}
    </Popup>
  )

  const playingview = () => {
    const opponent = Math.floor(Math.random() * choicesList.length)
    return (
      <PlayViewContainer>
        <Card>
          <Ul>
            <Li>
              <p>ROCK</p>
              <p>PAPER</p>
              <p>SCISSORS</p>
            </Li>
          </Ul>
          <ScoreCard>
            
              <h1>Score</h1>
            
            <h1>0</h1>
          </ScoreCard>
        </Card>
        <RockScissorContainer>
          <Buutton
            type="button"
            data-testid="rockButton"
            onClick={onGameClick(choicesList[0].id)}
          >
            <RSPImage src={choicesList[0].imageUrl} alt="rock" />
          </Buutton>

          <Buutton
            type="button"
            data-testid="scissorsButton"
            onClick={onGameClick(choicesList[1].id)}
          >
            <RSPImage src={choicesList[1].imageUrl} alt="scissors" />
          </Buutton>

          <Buutton
            type="button"
            data-testid="paperButton"
            onClick={onGameClick(choicesList[2].id)}
          >
            <RSPImage src={choicesList[2].imageUrl} alt="paper" />
          </Buutton>
        </RockScissorContainer>
        <RulesContainer>
          <RulesPopup />
        </RulesContainer>
      </PlayViewContainer>
    )
  }

  return <GameContainer>{playingview()}</GameContainer>
}
export default Game
