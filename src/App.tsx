import PlayingCard from "./PlayingCard/PlayingCard.tsx"
import CardDeck from "./lib/CardDeck.ts"
import Card from "./lib/Card.ts"
import {useState} from "react";

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    const newCards = deck.getCards(5);
    setCards(newCards);
  };

  if (cards.length === 0) {
    return (
      <button onClick={dealCards}>Раздать карты</button>
    );
  }

  return (
    <>
      <button onClick={dealCards}>Раздать карты</button>
      <div className="playingCards faceImages">
        <PlayingCard rank={cards[0].rank} suit={cards[0].suit} />
        <PlayingCard rank={cards[1].rank} suit={cards[1].suit} />
        <PlayingCard rank={cards[2].rank} suit={cards[2].suit} />
        <PlayingCard rank={cards[3].rank} suit={cards[3].suit} />
        <PlayingCard rank={cards[4].rank} suit={cards[4].suit} />
      </div>
    </>
  )
};

export default App