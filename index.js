const HaxballJS = require("haxball.js");

HaxballJS.then((HBInit) => {
  // Si HBInit tiene una propiedad 'default', la usamos. Si no, lo usamos a él mismo.
  const bot = HBInit.default || HBInit;

  const room = bot({
    roomName: "SkT vs ??? x3 x4",
    maxPlayers: 12,
    noPlayer: true, 
    public: true,
    token: process.env.TOKEN,
    geo: { "code": "AR", "lat": -34.6, "lon": -58.4 } 
  });

  room.onRoomLink = (link) => console.log("SALA ABIERTA EN: " + link);

  room.onPlayerJoin = (player) => {
    room.sendAnnouncement("¡Bienvenido a SkT! Admin: !adminjk123", player.id, 0xFFFF00, "bold");
  };

  room.onPlayerChat = (player, message) => {
    if (message.trim() === "!adminjk123") {
      room.setPlayerAdmin(player.id, true);
      room.sendAnnouncement("¡Sos admin!", player.id, 0x00FF00);
      return false;
    }
  };
}).catch((err) => {
  console.error("Error fatal al iniciar:", err);
});
