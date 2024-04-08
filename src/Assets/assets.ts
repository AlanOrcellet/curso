import { AssetsManifest } from "pixi.js";
   

    export const assets: AssetsManifest = {
        bundles : [
            { name: "resting",
              assets:{
                "rest1" : "./personaje/pj_descanso_1.png",
                "rest2" : "./personaje/pj_descanso_2.png",
            }
            },
            { name: "disarmedRest",
            assets:{
                "disarmRest1" : "./personaje/pj_descanso_desarmado_1.png",
                "disarmRest2" : "./personaje/pj_descanso_desarmado_2.png"
            }
            },
            { name: "defeat",
                assets:{
                    "defeat1" : "./personaje/derrota_1.png",
                    "defeat2" : "./personaje/derrota_2.png"
                }
            },
            { name: "takingDmg",
                assets:{
                    "damage1" : "./personaje/daño_1.png",
                    "damage2" : "./personaje/daño_2.png"
                }
            },
            { name: "heavyHit",
                assets:{
                    "prepareHeavy" : "./personaje/pj_preparando_1.png",
                    "heavyAttack" : "./personaje/pj_espadaso1.png"
                }
            },
            { name: "lightHit",
                assets:{
                    "prepareLight" : "./personaje/pj_preparando_2.png",
                    "lightAttack" : "./personaje/pj_espadaso2.png"
                }
            },
            { name: "lowerKick",
                assets:{
                    "prepareLkick" : "./personaje/pj_patada_preparando.png",
                    "kickHit1" : "./personaje/pj_patada_baja_1.png",
                    "kickHit2" : "./personaje/pj_patada_baja_2.png"
                }
            },
            { name: "sprint",
                assets:{
                    "aheadSprint" : "./personaje/pj_sprint_1.png",
                    "backwardSprint" : "./personaje/pj_sprint_2.png"
                }
            },
            { name: "win",
                assets:{
                    "winPose" : "./personaje/win_pose.png"
                } 

            },
            {
              name: "background",
                assets:{
                    "backGround" : "./fondo/background.jpg"
                }
            },
            {
             name: "buttons",
                assets:{
                    "quit" : "./botones/botonQuit.png",
                    "clickedQuit" : "./botones/botonQuitApretado.png",
                    "start" : "./botones/botonStart.png",
                    "clickedStart" : "./botones/startApretado.png"
                }

            }
        

        ]
    }









    
            
         

    
