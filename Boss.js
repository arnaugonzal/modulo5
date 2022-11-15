
class Boss extends Opponent {
    
    constructor (game) {
        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = OPPONENT_SPEED_JEFE,
            myImage = OPPONENT_PICTURE_JEFE,
            myImageDead = OPPONENT_PICTURE_DEAD_JEFE;

    

        super(game);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;          
        this.speed = speed;
        this.myImage = myImage;
        this.myImageDead = myImageDead;                              
        this.image.src = myImage;      
        this.direction = "R"; // Dirección hacia la que se mueve el oponente
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
        
    }
}