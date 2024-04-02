import { Container } from "pixi.js";
import { kochoBfly } from "./KochoBfly";

export class Scene extends Container {
    contructor(){
        
        const kochoCont: kochoBfly = new kochoBfly ();
        
        kochoCont.scale.set(0,0);
        kochoCont.x = 0
        kochoCont.y = 0

        this.addChild(kochoCont);

    }

    
}