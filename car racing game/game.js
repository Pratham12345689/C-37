class Game{
    constructor(){
        
    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                    playerCount=playerCountRef.val();
                    player.getCount();
                    
            }
            form=new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("GaMe StArT",130,100);
        Player.getPlayerInfo();
            if(allPlayers!==undefined){
                var displayPos=150;
                for(var plr in allPlayers){
                    if(plr==="player"+player.index){
                        fill ("red");

                    }
                    else{
                        fill("black");
                       

                    }
                    displayPos+=30;
                    textSize(15)
                        text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPos);
                }
            }
    }
}