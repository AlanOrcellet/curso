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
            this.backGr.addChild(this.buttonStart)
            this.backGr.addChild(this.jugador);
            
            this.buttonStart.scale.set(1.5)
            this.buttonStart.x = 790
            this.buttonStart.y = 270
            
            
            this.buttonStart.on("mousedown", this.onMouseDown, this);
            this.buttonStart.on("mouseup", this.onMouseUp, this);
            this.buttonStart.on("mouseover", this.onMouseOver, this);
            this.buttonStart.on("mouseout", this.onMouseOut, this);
            this.buttonStart.interactive = true;








        }

    private onMouseDown(): void{
        console.log("click")
    }

    private onMouseUp(): void{
        console.log("click suelto")
    }

    private onMouseOver(): void{
        console.log("mouse over")
    }
    private onMouseOut(): void{
        console.log("mouse out")
    }

    
    public update(deltaTime: number, deltaFrame: number | number): void {
        this.jugador.update(deltaFrame); //actualiza animacion
            const dt = deltaTime
            this.jugador.update(dt);


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