const HaxballJS = require("haxball.js");

async function startRoom() {
  const HBInit = await HaxballJS;
  
  const room = HBInit({
    roomName: "SkT vs ??? x3 x4",
    maxPlayers: 12,
    noPlayer: true, 
    public: true,
    token: process.env.TOKEN,
    geo: { "code": "AR", "lat": -34.6, "lon": -58.4 } 
  });

  const ADMIN_PASSWORD = "!adminjk123";

  room.onRoomLink = (link) => console.log("SALA ABIERTA EN: " + link);

  room.onPlayerJoin = (player) => {
    room.sendAnnouncement("¡Bienvenido a SkT! Clave admin: !adminjk123", player.id, 0xFFFF00, "bold");
  };

  room.onPlayerChat = (player, message) => {
    if (message.trim() === ADMIN_PASSWORD) {
      room.setPlayerAdmin(player.id, true);
      room.sendAnnouncement("¡Sos admin!", player.id, 0x00FF00);
      return false;
    }
  };
}

startRoom();
