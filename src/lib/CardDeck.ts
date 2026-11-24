import Card from "./Card.ts";

class CardDeck {
  public cards: Card[] = [];
  private suits: string[] = ['spades', 'diams', 'hearts', 'clubs'];
  private ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

  constructor() {
    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        const card = new Card(rank, suit);
        this.cards.push(card);
      }
    }
  }

  getCard(): Card {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    const removed = this.cards.splice(randomIndex, 1);
    return removed[0];
  }

  getCards(howMany: number): Card[] {
    const result: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      result.push(this.getCard());
    }

    return result;
  }
}

export default CardDeck;