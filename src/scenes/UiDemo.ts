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
        this.spr.anchor.set(0.5);
        this.addChild(this.spr);

        this.spr.scale.set(1.5)
        this.spr.x = 1000
        this.spr.y = 430

        this.spr.interactive = true;

        this.spr.on("mousedown", this.onMouseDown, this);
        this.spr.on("mouseup", this.onMouseUp, this);



    }

    private onMouseDown(): void{
        this.spr.texture = this.down;

    }

    private onMouseUp(): void{
        this.spr.texture = this.def;
        this.callback();
    }




}