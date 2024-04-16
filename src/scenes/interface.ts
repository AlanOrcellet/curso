import { Container, Sprite } from "pixi.js";


export class gameInterface extends Container{

    private healthbar100 = Sprite.from("HP_100");
    private healthbar75 = Sprite.from("HP_75");
    private healthbar50 = Sprite.from("HP_50");
    private healthbar25 = Sprite.from("HP_25");
    private healthbar0 = Sprite.from("HP_0");
    private potion = Sprite.from("potion")
    private coin = Sprite.from("coin")




    constructor(){
        super();
        
        this.healthbar100 = this.healthbar100;
        this.healthbar75 = this.healthbar75;
        this.healthbar50 = this.healthbar50;
        this.healthbar25 = this.healthbar25;
        this.healthbar0 = this.healthbar0;
        this.potion = this.potion;
        this.coin = this.coin;

            this.healthbar100.scale.set(2);
            this.healthbar75.scale.set(0);
            this.healthbar50.scale.set(0);
            this.healthbar25.scale.set(0);
            this.healthbar0.scale.set(0);

            this.healthbar75.y = 10
            this.healthbar75.x = 5

            this.healthbar50.x = 5

            this.healthbar25.y = -10
            this.healthbar25.x = 15

            this.healthbar0.y = 7
            this.healthbar0.x = 5

            this.potion.scale.set(1.5);
            this.potion.y = 100
            this.potion.x = -30

            this.coin.scale.set(1.5)
            this.coin.y = 25
            this.coin.x = 220
    

            

        this.addChild(this.healthbar100, this.healthbar75, this.healthbar50, this.healthbar25, this.healthbar0);
        this.addChild(this.potion, this.coin);




    }

}