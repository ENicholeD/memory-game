import { CardList } from './cardList'
import './styles.css';


$(document).ready(function(){
  var game = new CardList();
  game.printList()
  var clicked = 0;
  var prevCard = null;

  $(".card").click(function(){
    var idclicked = parseInt($(this)[0].id);
    console.log(clicked);

    if(clicked === 2) {
      game.printList()
      prevCard = null;
      clicked = 0;
    }
    var cardClicked = game.findCard(idclicked)
    $("."+cardClicked.cardNumber).html(cardClicked.img)
    if(prevCard && prevCard.name === cardClicked.name){
      prevCard.matched = true
      cardClicked.matched = true
    }
    ++clicked
    prevCard = cardClicked;


    });

})
