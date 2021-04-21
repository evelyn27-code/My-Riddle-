class Quiz {
  constructor(){}


 

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
      question.hide()

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(40)
    text("Quiz Result",300,50);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("NOTE: Contestants who answered correct are highlighted in green colour",100,250);
      textSize(17);
      text("1-",320,290);
      text("2-",320,315)
      text("CONTESTANTS: ",150,290)
      var display_position = 270;

      for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer){
          fill("Green");
        }
        else{
          fill("red");
        }
        display_position+=22;
        textSize(15);
        text(allContestants[plr].name, 350,display_position)
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

  }
