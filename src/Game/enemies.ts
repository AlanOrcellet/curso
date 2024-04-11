import { AnimatedSprite, Graphics, Rectangle, Texture } from "pixi.js";
import { PhysicsContainer } from "./PhysicsContainer";
import { IHitBox } from "../utils/IHitBox";

export class Enemie extends PhysicsContainer implements IHitBox{

    private  static readonly GRAVITY = 0;

    private enemieAnimated: AnimatedSprite;
    private physEnemie : PhysicsContainer;
    private enemieHitBox : Graphics;

    constructor(){
        super();

        this.enemieAnimated = new AnimatedSprite(
            [
                Texture.from("idle1_1"),
                Texture.from("idle1_2")
            ], 
            true
        )

        this.enemieAnimated.play();
        this.enemieAnimated.animationSpeed = 0.01

        this.physEnemie = new PhysicsContainer();

            this.addChild(this.physEnemie)
            this.physEnemie.addChild(this.enemieAnimated);

            this.physEnemie.scale.set(3)
            this.physEnemie.scale.x = -3

            this.physEnemie.x = 1750
            this.physEnemie.y = 570

            this.speed.x = 0
            this.speed.y = 0

            this.acceleration.y = Enemie.GRAVITY;

            //señalizada colision del sprite enemie
            const auxZero = new Graphics();
            auxZero.beginFill(0xFF00FF);
            auxZero.drawCircle(0,0,10);
            this.physEnemie.addChild(auxZero)

            this.enemieHitBox = new Graphics();
            this.enemieHitBox.beginFill(0xFF00FF,0.3);
            this.enemieHitBox.drawRect(70,25,80,120);
            this.enemieHitBox.endFill();
            this.physEnemie.addChild(this.enemieHitBox);


    }


    public override update(deltaTime: number){

        super.update(deltaTime/1000);
        this.enemieAnimated.update(deltaTime / (1000/60) )

    }


    public getHitBox (): Rectangle{
        
        return this.enemieHitBox.getBounds();

    }



}