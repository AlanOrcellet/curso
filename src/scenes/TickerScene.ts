import { Container, Sprite } from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { HEIGHT, WIDTH } from "..";
import { Player } from "../Game/player";

export class TickerScene extends Container implements IUpdateable
{
    private backGr = Sprite.from("backGround")
    private buttonStart = Sprite.from("start")
    
    private jugador : Player;

        constructor(){
            super();

            this.jugador = new Player();

        
            this.addChild(this.backGr);
            this.addChild(this.buttonStart)
            this.addChild(this.jugador);
            
            this.buttonStart.scale.set(1.5)
            this.buttonStart.x = 850
            this.buttonStart.y = 270
            


        }
    

    public update(deltaTime: number, deltaFrame: number | number): void {
        this.jugador.update(deltaFrame); //actualiza animacion

        //convierte dt en segundos
            const dt = deltaTime
            this.jugador.update(dt);

        // this.playerAnimated.x ++ / += moverlo de manera horizontal y (y) para vertical

        //limite horizontal
        if (this.jugador.x > WIDTH){
            this.jugador.x = WIDTH;
            this.jugador.speed.x = Math.abs(this.jugador.speed.x) * -1;
            this.jugador.scale.x = -1;

        }else if (this.jugador.x < 0){
            this.jugador.x = 0;
            this.jugador.speed.x = Math.abs(this.jugador.speed.x);
            this.jugador.scale.x = 1;
        }

        //limite vertical
        if(this.jugador.y > HEIGHT){

            this.jugador.y = HEIGHT;
            this.jugador.speed.y = 0;

        }

    }



}