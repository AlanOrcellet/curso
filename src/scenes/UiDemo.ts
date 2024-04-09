import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{

    private def: Texture;

    private down: Texture;

    private callback: Function;

    private spr: Sprite;
    static typeof: Button;


    constructor(def:Texture , down:Texture, callback:Function){
        super();

        this.def = def;
        this.down = down;
        this.callback = callback;


        this.spr = Sprite.from(def);
        this.addChild(this.spr);

        this.spr.interactive = true;

        this.spr.on("mousedown", this.onMouseDown, this);
        this.spr.on("mouseup", this.onMouseUp, this);



    }

    private onMouseDown(): void{
        this.spr = Sprite.from(this.down);

    }

    private onMouseUp(): void{
        this.spr = Sprite.from(this.def);
        this.callback();
    }




}