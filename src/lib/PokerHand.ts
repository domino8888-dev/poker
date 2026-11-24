import Card from "./Card.ts";

class PokerHand {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutcome(): string {
    let isFlush = true;
    let twos = 0;
    let threes = 0;

    for (const card of this.cards) {
      if (card.suit !== this.cards[0].suit) {
        isFlush = false;
      }

      let sameRank = 0;
      for (const other of this.cards) {
        if (other.rank === card.rank) {
          sameRank++;
        }
      }

      if (sameRank === 2) {
        twos++;
      }
      if (sameRank >= 3) {
        threes++;
      }
    }

    if (isFlush) {
      return 'Флэш';
    }
    if (threes > 0) {
      return 'Тройка';
    }
    if (twos === 4) {
      return 'Две пары';
    }
    if (twos === 2) {
      return 'Одна пара';
    }
    return 'Старшая карта';
  }
}

export default PokerHand;