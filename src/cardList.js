import { Card } from './card'


export function CardList(){
  this.cardList = []
  this.notAssigned = [1,2,3,4,5,6,7,8,9,10]
  this.createList();
}

CardList.prototype.assignNumber = function(card){
  do {
    var number = Math.floor(Math.random()*10)
    if(this.notAssigned[number] !== 0){
          this.notAssigned[number] = 0;
      return number;
    }
  } while (true);
}

CardList.prototype.addCard = function(cardToAdd){
  cardToAdd.cardNumber = this.assignNumber(cardToAdd);
  this.cardList.push(cardToAdd)
}

CardList.prototype.findCard = function(id){
  var result = null;
  this.cardList.forEach(function(card){
      if(card.cardNumber === id){
      result = card;
    }
  })
  return result;
}

CardList.prototype.createList = function(){
  this.addCard(new Card("puppy", "<img src='https://www.peta.org/wp-content/uploads/2013/10/200_2D00_IssuesCompanionCruelChainNeglected.jpg' alt='asdf'>"))
  this.addCard(new Card("dog", "<img src='https://www.burnthillsvethosp.com/storage/app/media/animal_shelter.png' alt='asdf'>"))
  this.addCard(new Card("eagle", "<img src='https://www.nps.gov/miss/learn/nature/images/GordonDietzman-20160716-7967.jpg?maxwidth=650&autorotate=false'>"))
  this.addCard(new Card("human", "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQSArdFn4O5ImbXRzU1JaasHD7l8cGMCGmv3SE3ybi_HcgL9Z'>"))
  this.addCard(new Card("cat", "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmxHNsadZqeu3bqeaa8l1khOXN6EKLp08rW42PFWNrPE1gpZVYQ'>"))
  this.addCard(new Card("puppy", "<img src='https://www.peta.org/wp-content/uploads/2013/10/200_2D00_IssuesCompanionCruelChainNeglected.jpg' alt='asdf'>"))
  this.addCard(new Card("dog", "<img src='https://www.burnthillsvethosp.com/storage/app/media/animal_shelter.png' alt='asdf'>"))
  this.addCard(new Card("eagle", "<img src='https://www.nps.gov/miss/learn/nature/images/GordonDietzman-20160716-7967.jpg?maxwidth=650&autorotate=false'>"))
  this.addCard(new Card("human", "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQSArdFn4O5ImbXRzU1JaasHD7l8cGMCGmv3SE3ybi_HcgL9Z'>"))
  this.addCard(new Card("cat", "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmxHNsadZqeu3bqeaa8l1khOXN6EKLp08rW42PFWNrPE1gpZVYQ'>"))

}

CardList.prototype.printList = function(){
  this.cardList.forEach(function(card, idx){
    if(card.matched)
      $("."+card.cardNumber).html(card.img)
    else{
      $("."+card.cardNumber).text("")
      $("."+card.cardNumber).addClass("nonMatched");

    }
  })

}
