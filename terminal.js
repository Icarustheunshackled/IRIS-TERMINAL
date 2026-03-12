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
print("");

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
print("");

}

else if(cmd==="login"){

let password=prompt("ENTER ACCESS PASSWORD");

if(password==="ROOTSINTHESOIL"){

loggedIn=true;
print("ACCESS GRANTED");
print("");

}else{

print("ACCESS DENIED");
print(" ");

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
print("");

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
print("");

}

else if(cmd==="nodes"){

print("TAPIO LAND NODE MAP");

print("node441");
print("node442");
print("node443");
print("");

}

else if(cmd==="archive"){

print("ARCHIVE LOCKED");
print("");

}

else if(cmd==="shards"){

print("SHARD DATABASE");

print("GREEN SHARD");
print("Classification: ██████ Fragment");
print("Origin: █████ Reserve");
print("");

}

else if(cmd==="users"){

print("PLAYER WATCHLIST");

print("bee_keeper — curious");
print("███████ — investigating");
print("");

}

else if(cmd==="node441"){

print("ACCESSING NODE 441...");
print("MAINTENANCE CORRIDOR");
print("12133433311212124421222421111333433131");

print("");

}

else if(cmd==="node442"){

print("ACCESSING NODE 442...");
print("MAINTENANCE CORRIDOR KEY");

print("1 = 45:315 0:270");
print("2 = 90:270 315:225 135:180 225:270 0:315");
print("3 = 45:225 45:180 90:180 0:315");
print("4 = 180:0 315:270 90:45 135:225");
print("");

}

else if(cmd==="node443"){

print("ACCESSING NODE 443...");
print("KEY REMINDER");
    
print("REMEMBER YOUR PAST, THROUGH EVERY MINUTE, THEN EVERY HOUR. THEN LOOK TO THE FUTURE.");
print("");

}

else if(cmd==="node666"){

print("AC ES I G N DE 66 . .");
print("HELLSCAPE");
    
print("SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. SAVE US. PLEASE.");
print("");

}

else{

print("UNKNOWN COMMAND");
print("");
    
}

}
