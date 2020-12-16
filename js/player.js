class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;


    }
    getCount(){
  var playercountref= database.ref('playerCount')
  playercountref.on("value",(data)=>{
      playerCount=data.val();
  })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
        
    }
update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
}
static getPlayerInfo(){
    var playerInfo=databse.ref('players')
    playerInfo.on("value",(data)=>{
        allPlayers=data.val()
    })
}
}