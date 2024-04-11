import { Container, Sprite, Texture } from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { Player } from "../Game/player";
import { Button } from "./UiDemo";
import { Enemie } from "../Game/enemies";
import { checkColission } from "../utils/IHitBox";

export class TickerScene extends Container implements IUpdateable
{
    private backGr = Sprite.from("backGround")
    private jugador : Player;
    private enemigo : Enemie;

    buttonStart: Button;

        constructor(){
            super();

            this.jugador = new Player();
            this.enemigo = new Enemie();

            this.buttonStart = new Button(Texture.from("start"), Texture.from("clickedStart"), this.onButtonClick.bind(this));
            

            this.addChild(this.backGr);
            this.backGr.addChild(this.jugador, this.buttonStart, this.enemigo);

            console.log(checkColission(this.jugador, this.enemigo));
        
            

        }

    private onButtonClick():void{
        console.log("click");
    }


    public update(deltaTime: number, deltaFrame: number | number): void {
        this.jugador.update(deltaFrame); //actualiza animacion
            const dt = deltaTime
            this.jugador.update(dt);
        
            this.enemigo.update(deltaFrame);
            this.enemigo.update(dt);

        //limite horizontal

    }



}