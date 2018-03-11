const magik = magikcraft.io;

function ya() {
    function shoot() {
    const Arrow = Java.type("org.bukkit.entity.Arrow");
    const p = magik.getSender();
    p.launchProjectile(Arrow.class);
    }
    magik.doNTimes(shoot,99,200);
}

