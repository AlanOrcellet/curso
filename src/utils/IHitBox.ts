import { Rectangle } from "pixi.js";


export interface IHitBox {

    getHitBox() : Rectangle;

    
}

export function checkColission(objA:IHitBox, objB:IHitBox): boolean{

    const rA = objA.getHitBox();
    const rB = objB.getHitBox();

    const rightMostLeft = rA.left < rB.left ? rB.left : rA.left;
    const leftMostRight = rA.right > rB.right ? rB.right : rA.right;
    const bottomMostTop = rA.top > rB.top ? rB.top : rA.top;
    const topMostBottom = rA.bottom > rB.bottom ? rB.bottom : rA.bottom;



    const makeSenseHorizontal = rightMostLeft < leftMostRight;
    const makeSenseVertical = bottomMostTop < topMostBottom;

    
    if (makeSenseHorizontal && makeSenseVertical){
    
        return true;
    
    }else{
    
        return false;
    }
    
    
}