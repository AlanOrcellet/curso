import { Application, Assets, Ticker } from 'pixi.js'
import { assets } from './Assets/assets';
import { TickerScene } from './scenes/TickerScene';

export const WIDTH = 1920;

export const HEIGHT = 1080;


const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: WIDTH,
	height: HEIGHT

});

async function init(){
	await Assets.init({manifest: assets});
	await Assets.loadBundle("resting");
	await Assets.loadBundle("background");
	await Assets.loadBundle("buttons");
}

//Creo un evento llamado Resize
window.addEventListener("resize", ()=>{
	console.log("resized!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY); //Toma el valor mínimo de cada escala

	// cálculo del aspect ratio
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	//cálculo de márgen
	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	//ajustes bordes negros
	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
})
//llama al evento Rezise
window.dispatchEvent(new Event("resize"));

init().then(()  => {
	
	//Crear escena
	const myScene = new TickerScene ();
		app.stage.addChild(myScene);
		Ticker.shared.add(function(deltaFrame){
			myScene.update(Ticker.shared.deltaMS, deltaFrame);
		})
 });


