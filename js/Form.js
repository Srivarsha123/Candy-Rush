class Form{
     constructor(){
        this.title = createElement('h1');
        this.dropdown = createSelect();
        this.button = createButton('DONE');
        this.chocolates = createElement('h1');
        this.highscore = createElement('h1');
        this.myCharacter = createButton('MY CHARACTERS');
        this.info = createButton('INFORMATION');
        this.play = createButton('PLAY');
     }
     hide(){
        this.title.hide();
        this.dropdown.hide();
        this.button.hide();
        this.chocolates.show();
        this.highscore.show();
        this.myCharacter.show();
        this.info.show();
        this.play.show();
     }
     hide2(){
      this.chocolates.hide();
      this.highscore.hide();
      this.myCharacter.hide();
      this.info.hide();
      this.play.hide();
     }
     display(){
        this.title.html("ENTER YOUR GENDER ▼");
        this.title.position(550, 300);
        this.title.style('font-family','Bahnschrift')
        this.title.style('font-size', '52px');

        //this.heading = createElement('h1');
        //this.heading.html("CANDY RUSH");
        //this.heading.position(550, 300);
        //this.heading.style('font-family','Bahnschrift')
        //this.heading.style('font-size', '62px');

        this.dropdown.position(470, 460);
        this.dropdown.size(700,50)
        this.dropdown.style('font-size', '30px');
        this.dropdown.option('Male');
        this.dropdown.option('Female');
        this.dropdown.selected('Male');
        this.dropdown.style('font-family','Bahnschrift')

        this.button.position(750, 570);
        this.button.style('font-color', '#FFFFFF');
        this.button.style('font-size', '30px');
        this.button.size(150,70)
        this.button.style('font-family','Bahnschrift')
        this.button.style('background-color','#FA445A')
        this.button.mousePressed(()=> {
            form.hide();
            gameState = 2;
          });
        
        this.chocolates.html("CHOCOLATES: 0");
        this.chocolates.position(250, 250);
        this.chocolates.style('font-family','Bahnschrift')
        this.chocolates.style('font-size', '50px');
        this.chocolates.hide();

        this.highscore.html("HIGH SCORE: 0");
        this.highscore.position(950, 250);
        this.highscore.style('font-family','Bahnschrift')
        this.highscore.style('font-size', '50px');
        this.highscore.hide();

        this.myCharacter.position(250, 390);
        this.myCharacter.style('font-color', '#FFFFFF');
        this.myCharacter.style('font-size', '40px');
        this.myCharacter.size(300,90)
        this.myCharacter.style('font-family','Bahnschrift')
        this.myCharacter.style('background-color','#FA445A')
        this.myCharacter.hide();
        this.myCharacter.mousePressed(()=> {
            gameState = 5;
            form.hide2()
          });

        this.info.position(950, 390);
        this.info.style('font-color', '#FFFFFF');
        this.info.style('font-size', '40px');
        this.info.size(300,90)
        this.info.style('font-family','Bahnschrift')
        this.info.style('background-color','#FA445A')
        this.info.hide();
        this.info.mousePressed(()=> {
            gameState = 4;
            form.hide2()
          });

        this.play.position(600, 550);
        this.play.style('font-color', '#FFFFFF');
        this.play.style('font-size', '60px');
        this.play.size(300,90)
        this.play.style('font-family','Bahnschrift')
        this.play.style('background-color','#FA445A')
        this.play.hide();
        this.play.mousePressed(()=> {
            gameState = 3;
            form.hide2()
          });

     }
}