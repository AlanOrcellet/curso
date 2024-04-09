import { AnimatedSprite, Texture } from "pixi.js";
import { PhysicsContainer } from "./PhysicsContainer";


export class Player extends PhysicsContainer {

    private  static readonly GRAVITY = 0;

    private playerAnimated : AnimatedSprite;
    private physPlayer: PhysicsContainer;

    constructor(){
        super();

        
        this.playerAnimated = new AnimatedSprite(
            [
                Texture.from("rest1"),
                Texture.from("rest2")
        
            ], 
            true
        );
    
        this.playerAnimated.play();
        this.playerAnimated.animationSpeed = 0.01
        
            this.physPlayer = new PhysicsContainer();
        
                this.physPlayer.scale.set(2)
        
                this.physPlayer.x = 300
                this.physPlayer.y = 700

                this.speed.x = 0
                this.speed.y = 0

                this.addChild(this.physPlayer);
                this.physPlayer.addChild(this.playerAnimated);

                this.acceleration.y = Player.GRAVITY;

    }  


    public override update(deltaTime: number){

        super.update(deltaTime/1000);
        this.playerAnimated.update(deltaTime / (1000/60) )
        

    }


}