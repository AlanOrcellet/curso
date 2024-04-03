import { Container, Sprite } from "pixi.js";

export class kochoBfly extends Container {
    constructor(){
        super();

    const img1 = Sprite.from("kocho");
    const img2 = Sprite.from("mariposa");
          
    
    img1.scale.set(0,0);
    img1.x = 0;
    img1.y = 0;
    
    img1.scale.x = 0;
    img1.scale.y = 0;
    
    img2.scale.set(0,0);
    img2.position.set(0,0);
    
    
    this.addChild(img1);
    this.addChild(img2);

    }

}




/* Maneras de ver la coordenada donde se encuentra

	console.log(mariposa.toGlobal(new Point()));
	console.log(mariposa.parent.toGlobal(mariposa.position));

Preguntar en el mundo del parent la coordenada de un objeto interno,
1280 x 720 (resolucion puesta en el programa) / 2 = 640 x 360

	    const aux = mariposa.parent.toLocal(new Point(640,360));
		mariposa.position.x = aux.x;
		mariposa.position.y = aux.y;
*/