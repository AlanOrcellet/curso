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

            },
            {
                name:"enemies",
                    assets:{
                        "idle1_1" : "./enemigos/enemigo1_idle1.png",
                        "idle1_2" : "./enemigos/enemigo1_idle2.png",
                        "e1Preparing" : "./enemigos/enemigo1_preparando1.png",
                        "e1Attack_1" : "./enemigos/enemigo1_ataque1.png",
                        "e1Attack_2" : "./enemigos/enemigo1_ataque2.png",
                        "e1Damage" : "./enemigos/enemigo1_daño.png",
                        "idle2_1" : "./enemigos/enemigo2_idle1.png",
                        "idle2_2" : "./enemigos/enemigo2_idle2.png",
                        "e2Preparing" : "./enemigos/enemigo2_preparando1.png",
                        "e2Attack_1" : "./enemigos/enemigo2_ataque1.png",
                        "e2Attack_2" : "./enemigos/enemigo2_ataque2.png",
                        "e2Damage" : "./enemigos/enemigo2_daño.png"


                    }
            }
        

        ]
    }









    
            
         

    
