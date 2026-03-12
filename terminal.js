const output = document.getElementById("output");
const input = document.getElementById("commandInput");

let loggedIn = false;

let sealIntegrity = 92;

function print(text){
    output.innerHTML += text + "<br>";
    window.scrollTo(0,document.body.scrollHeight);
}

function boot(){

print("BOOTING IRIS SYSTEM...");
print("LOADING SECURITY MODULE...");
print("LOADING ████ MONITORING...");
print("LOADING ███████ CONTAINMENT...");
print("");
print("WARNING: UNKNOWN PROCESS DETECTED");
print("");
print("SYSTEM INTEGRITY: 58%");
print("MAINTENANCE HAS BEEN NOTIFIED")
print("");
print("IRIS SECURITY INTERFACE v2.3");
print("Tapio Land Monitoring System");
print("");
print("STATUS: ONLINE");
print("████ INTEGRITY: "+sealIntegrity+"%");
print("ANOMALY DETECTED");
print("");
print("Type 'help' for commands.");

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

function runCommand(cmd){

if(cmd==="help"){

print("AVAILABLE COMMANDS:");
print("login");
print("logs");
print("nodes");
print("status");
print("archive");
print("shards");
print("users");

}

else if(cmd==="login"){

let password=prompt("ENTER ACCESS PASSWORD");

if(password==="ROOTSINTHESOIL"){

loggedIn=true;
print("ACCESS GRANTED");

}else{

print("ACCESS DENIED");

}

}

else if(cmd==="logs"){

if(!loggedIn){
print("ACCESS RESTRICTED");
return;
}

print("LOG 02.11.26");
print("SYSTEM SCAN COMPLETE");
print("UNIDENTIFIED PRESENCE DETECTED");
print("LOCATION: ████████ CHAMBER");
print("ACTION: MONITOR");

print("");

print("LOG 02.18.26");
print("██████ ACTIVITY DETECTED");
print("ATTEMPTING ████████████");
print("ERROR");
print("ERROR");

}

else if(cmd==="status"){

print("████ STATUS");

print("████ 1: STABLE");
print("████ 2: STABLE");
print("████ 3: STABLE");
print("████ 4: DEGRADED");
print("████ 5: DEGRADED");
print("████ 6: DEGRADED");
print("████ 7: DEGRADED");

print("TOTAL INTEGRITY: "+sealIntegrity+"%");

}

else if(cmd==="nodes"){

print("TAPIO LAND NODE MAP");

print("node441");
print("node442");
print("node443");

}

else if(cmd==="archive"){

print("ARCHIVE LOCKED");

}

else if(cmd==="shards"){

print("SHARD DATABASE");

print("GREEN SHARD");
print("Classification: Spatial Fragment");
print("Origin: Karma Reserve");

}

else if(cmd==="users"){

print("PLAYER WATCHLIST");

print("bee_keeper — curious");
print("███████ — investigating");

}

else if(cmd==="node441"){

print("ACCESSING NODE 441...");
print("MAINTENANCE CORRIDOR");

}

else{

print("UNKNOWN COMMAND");

}

}
