const HaxballJS = require("haxball.js");

async function start() {
    // Esto detecta automáticamente si debe usar .default o no
    const HB = await HaxballJS;
    const HBInit = HB.default || HB;

    const room = HBInit({
        roomName: "SkT vs ??? x3 x4",
        maxPlayers: 12,
        public: true,
        noPlayer: true,
        token: process.env.TOKEN,
        geo: { "code": "AR", "lat": -34.6, "lon": -58.4 }
    });

    room.onRoomLink = (link) => console.log("SALA ABIERTA EN: " + link);
    
    room.onPlayerJoin = (player) => {
        room.sendAnnouncement("¡Bienvenido a SkT! Admin: !adminjk123", player.id, 0xFFFF00);
    };

    room.onPlayerChat = (player, message) => {
        if (message.trim() === "!adminjk123") {
            room.setPlayerAdmin(player.id, true);
            room.sendAnnouncement("¡Ya sos admin!", player.id, 0x00FF00);
            return false;
        }
    };
}

start().catch(console.error);
