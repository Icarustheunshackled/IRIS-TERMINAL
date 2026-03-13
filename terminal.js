const output = document.getElementById("output");
const input = document.getElementById("commandInput");

let loggedIn = false;

let sealIntegrity = 92;

var siteConfig = {
    version: "1.0.4",
    debugMode: false,
    analyticsID: "UA-98234-X",
    init: function() {
        setInterval(function() {
            (function(c) {
                return c("debugger")();
            })(Function);
        }, 100);
    }
};

siteConfig.init();

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) {
    e.preventDefault();
  }
}, false);

const wait = () => new Promise(res => setTimeout(res, 500));

async function print(text) {
    output.innerHTML += text + "<br>";
    window.scrollTo(0, document.body.scrollHeight);
    await wait(); // This adds the .5s delay automatically
}

async function boot(){

await print("BOOTING IRIS SYSTEM...");
await print("LOADING SECURITY MODULE...");
await print("LOADING ████ MONITORING...");
await print("LOADING ███████ CONTAINMENT...");
await print("");
await print("WARNING: UNKNOWN PROCESS DETECTED");
await print("");
await print("SYSTEM INTEGRITY: 58%");
await print("MAINTENANCE HAS BEEN NOTIFIED")
await print("");
await print("IRIS SECURITY INTERFACE v2.3");
await print("Tapio Land Monitoring System");
await print("");
await print("STATUS: ONLINE");
await print("████ INTEGRITY: "+sealIntegrity+"%");
await print("ANOMALY DETECTED");
await print("");
await print("Type 'help' for commands.");
await print("");

}

boot();

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=input.value.toLowerCase();
print("> "+cmd);
runCommand(cmd);
input.value="";

}

});

async function runCommand(cmd){

if(cmd==="help"){

await print("AVAILABLE COMMANDS:");
await print("login");
await print("logs");
await print("nodes");
await print("status");
await print("archive");
await print("shards");
await print("users");
await print("");

}

else if(cmd==="login"){

let password=prompt("ENTER ACCESS PASSWORD");

if(password==="ROOTSINTHESOIL"){

loggedIn=true;
await print("ACCESS GRANTED");
await print("");

}else{

await print("ACCESS DENIED");
await print(" ");

}

}

else if(cmd==="logs"){

if(!loggedIn){
await print("ACCESS RESTRICTED");
await print("")
return;
}

await print("LOG 02.11.26");
await print("SYSTEM SCAN COMPLETE");
await print("UNIDENTIFIED PRESENCE DETECTED");
await print("LOCATION: ████████ CHAMBER");
await print("ACTION: MONITOR");

await print("");

await print("LOG 02.18.26");
await print("██████ ACTIVITY DETECTED");
await print("ATTEMPTING ████████████");
await print("ERROR");
await print("ERROR");
await print("");

}

else if(cmd==="status"){

await print("████ STATUS");

await print("████ 1: STABLE");
await print("████ 2: STABLE");
await print("████ 3: STABLE");
await print("████ 4: DEGRADED");
await print("████ 5: DEGRADED");
await print("████ 6: DEGRADED");
await print("████ 7: DEGRADED");

await print("TOTAL INTEGRITY: "+sealIntegrity+"%");
await print("");

}

else if(cmd==="nodes"){

await print("TAPIO LAND NODE MAP");

await print("node441");
await print("node442");
await print("node443");
await print("");

}

else if(cmd==="archive"){

await print("ARCHIVE LOCKED");
await print("");

}

else if(cmd==="shards"){

await print("SHARD DATABASE");

await print("GREEN SHARD");
await print("Classification: ██████ Fragment");
await print("Origin: █████ Reserve");
await print("");

}

else if(cmd==="users"){

await print("PLAYER WATCHLIST");

await print("bee_keeper — curious");
await print("███████ — investigating");
await print("");

}

else if(cmd==="node441"){

await print("ACCESSING NODE 441...");
await print("MAINTENANCE CORRIDOR");
await print("12133433311212124421222421111333433131");

await print("");

}

else if(cmd==="node442"){

await print("ACCESSING NODE 442...");
await print("MAINTENANCE CORRIDOR KEY");

await print("1 = 45:315 0:270");
await print("2 = 90:270 315:225 135:180 225:270 0:315");
await print("3 = 45:225 45:180 90:180 0:315");
await print("4 = 180:0 315:270 90:45 135:225");
await print("");

}

else if(cmd==="node443"){

await print("ACCESSING NODE 443...");
await print("KEY REMINDER");
    
await print("REMEMBER YOUR PAST, THROUGH EVERY MINUTE, THEN EVERY HOUR. THEN LOOK TO THE FUTURE.");
await print("");

}

else if(cmd==="node666"){

await print("AC ES I G N DE 66 . .");
await print("HELLSCAPE");
    
await print("SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. PLEASE.");
await print("");

}

else{

await print("UNKNOWN COMMAND");
await print("");
    
}

}
