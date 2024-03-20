import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720

});

window.addEventListener("resize", ()=>{
	console.log("resized!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY); //Toma el valor mínimo de cada escala

	// cálculo del aspect ratio
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.width * scale);

	//cálculo de márgen
	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	//ajustes bordes negros
	app.view.style.width = gameWidth + "px";
	app.view.style.width = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
})

window.dispatchEvent(new Event("resize"));


Loader.shared.add({url: "./kocho.jpg", name: "myKocho"})
Loader.shared.add({url: "./mariposa.jpg", name: "myMariposa"})

Loader.shared.onComplete.add(()=>{

	const kocho: Sprite = Sprite.from("myKocho");
	const mariposa: Sprite = Sprite.from("myMariposa");

	const kochoBfly: Container = new Container ();
	
	kocho.x = 0;
	kocho.y = 0;

	kocho.scale.x = 0;
	kocho.scale.y = 0;

	mariposa.scale.set(0,0);
	mariposa.position.set(0,0);

	// Maneras de ver la coordenada donde se encuentra
	console.log(mariposa.toGlobal(new Point()));
	console.log(mariposa.parent.toGlobal(mariposa.position));

	/*Preguntar en el mundo del parent la coordenada de un objeto interno,
	1280 x 720 / 2 = 640 x 360 */
	const aux = mariposa.parent.toLocal(new Point(640,360));
	mariposa.position.x = aux.x;
	mariposa.position.y = aux.y;

	//quien mas abajo esté y quien va delante de todos los demás
	app.stage.addChild(kochoBfly)

	kochoBfly.addChild(kocho);
	kochoBfly.addChild(mariposa)

});

Loader.shared.load();

