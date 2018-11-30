    export class Deck {
    constructor() {
        this.deck = [];
        this.dealt_cards = [];
        this.hands = [];
    };

    generate_deck() {
        let card = (suit,rank) => {
            this.name = rank+suit;
            this.suit = suit;
            this.rank = rank;
            return {'name':this.name,'suit':this.suit,'rank':this.rank};
        };
        let ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let suits = ['C','D','S','H'];
        for(let s=0; s < suits.length; s++) {
            for(let v=0; v < ranks.length; v++) {
                this.deck.push(card(suits[s],ranks[v]));
            }
        }
        return this.deck;
    };

    print_deck() {
        if(this.deck.length === 0) return -1;
        for(let i=0; i < this.deck.length; i++) {
            console.log(this.deck[i]);
        }
    }

    shuffle() {
        let currentindex = this.deck.length, temp, randomindex;
        while(0 !== currentindex) {
             randomindex = Math.floor(Math.random() * currentindex);
             currentindex--;
            temp = this.deck[currentindex];
            this.deck[currentindex] = this.deck[randomindex];
            this.deck[randomindex] = temp;
        }
    }

    deal() {
        let dealtcard = this.deck.shift();
        this.dealt_cards.push(dealtcard);
        return dealtcard;
    }

    deal_hands() {
        let hand = [];
        for (let i=0; i<4; i++) {
            for (let j=0; j<13; j++) hand.push(this.deal());
            this.hands.push(hand);
            hand = [];
        }
        return this.hands;
    }

    sum_majors(n) {
        let sum=0;
        for(let i=0; i<13; i++) {
            if (this.hands[n][i].rank === 'A') sum += 4;
            else if (this.hands[n][i].rank === 'K') sum += 3;
            else if (this.hands[n][i].rank === 'Q') sum+= 2;
            else if (this.hands[n][i].rank === 'J') sum += 1;
        }
        return sum;
    }

    sum_all_majors() {
        let sum = this.sum_majors(0) + this.sum_majors(1) + this.sum_majors(2) + this.sum_majors(3);
        return sum;
    }

    replace() {
        this.deck.unshift(this.dealt_cards.shift());
    }

    clear_deck() {
        this.deck = [];
    }

    test() {
        const deck = new Deck();
        deck.generate_deck();
        deck.shuffle();
        deck.print_deck();
        console.log("DEAL");
        for(let i=0; i<13; i++) {
            console.log(deck.deal());
        }
    }
};