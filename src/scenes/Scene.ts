import { Container, Sprite, Texture } from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { Player } from "../Game/player";
import { Button } from "./Button";
import { Enemie } from "../Game/enemies";
import { checkColission } from "../utils/IHitBox";
import { gameInterface } from "./interface";

export class TickerScene extends Container implements IUpdateable
{
    private backGr = Sprite.from("backGround")
    private jugador : Player;
    private enemigo : Enemie;
    private interfaz : gameInterface;

    buttonStart: Button;

        constructor(){
            super();

            this.jugador = new Player();
            this.enemigo = new Enemie();
            this.interfaz = new gameInterface();

            this.buttonStart = new Button(Texture.from("start"), Texture.from("clickedStart"), this.onButtonClick.bind(this));


            this.addChild(this.backGr);
            this.backGr.addChild(this.jugador, this.buttonStart, this.enemigo,this.interfaz);

            this.interfaz.scale.set(0);
            

        }

    private onButtonClick():void{
        console.log("click");
        this.buttonStart.scale.set(0);
        this.interfaz.scale.set(1);

    }





    public update(deltaTime: number, deltaFrame: number | number): void {

        
        this.jugador.update(deltaFrame); //actualiza animacion
        const dt = deltaTime
        this.jugador.update(dt);
        
        this.enemigo.update(deltaFrame);
        this.enemigo.update(dt);
        
        console.log(checkColission(this.jugador, this.enemigo));         
        

    }



}