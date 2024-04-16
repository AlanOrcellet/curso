import { AnimatedSprite, Graphics, Rectangle, Texture } from "pixi.js";
import { PhysicsContainer } from "./PhysicsContainer";
import { HEIGHT, WIDTH } from "..";
import { IHitBox } from "../utils/IHitBox";


export class Player extends PhysicsContainer implements IHitBox{

    private  static readonly GRAVITY = 0;

    private playerAnimated : AnimatedSprite;
    private physPlayer: PhysicsContainer;
    private hitBox : Graphics;
    
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
            
                this.addChild(this.physPlayer);
                this.physPlayer.addChild(this.playerAnimated);

                this.physPlayer.scale.set(2)
        
                this.physPlayer.x = 300
                this.physPlayer.y = 700

                this.speed.x = 0
                this.speed.y = 0


                this.acceleration.y = Player.GRAVITY;


        
                //señalizada colision del sprite player
                const auxZero = new Graphics();
                auxZero.beginFill(0xFF00FF);
                auxZero.drawCircle(0,0,10);
                this.physPlayer.addChild(auxZero)

                
                this.hitBox = new Graphics();
                this.hitBox.beginFill(0xFF00FF,0.3);
                this.hitBox.drawRect(27,20,100,130);
                this.hitBox.endFill();
                this.physPlayer.addChild(this.hitBox);


                if (this.physPlayer.x > WIDTH){
                    this.physPlayer.x = WIDTH;
                    this.physPlayer.speed.x = Math.abs(this.physPlayer.speed.x) * -1;
                    this.physPlayer.scale.x = -1;
            
                }else if (this.physPlayer.x < 0){
                    this.physPlayer.x = 0;
                    this.physPlayer.speed.x = Math.abs(this.physPlayer.speed.x);
                    this.physPlayer.scale.x = 1;
                }
            
                //limite vertical
                if(this.physPlayer.y > HEIGHT){
            
                    this.physPlayer.y = HEIGHT;
                    this.physPlayer.speed.y = 0;
            
                }





    }  

    
    public override update(deltaTime: number){

        super.update(deltaTime/1000);
        this.playerAnimated.update(deltaTime / (1000/60) )

    }

    public getHitBox (): Rectangle{
        
        return this.hitBox.getBounds();

    }






}