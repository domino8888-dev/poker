import PlayingCard from "./PlayingCard/PlayingCard.tsx"

const App = () => {
  return (
    <div className="playingCards faceImages">
      <PlayingCard rank="q" suit="spades" />
    </div>
  )
};

export default App