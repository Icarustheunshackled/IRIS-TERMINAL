(function() {
    // --- 1. INITIALIZE ASSETS ---
    const isCautious = localStorage.getItem('RAZ_USED') === 'true';

    if (isCautious) {
        const yellow = "#ffcc00";
        document.body.style.color = yellow;
        const inputField = document.getElementById("commandInput");
        if (inputField) {
            inputField.style.color = yellow;
            inputField.style.borderColor = yellow;
            inputField.style.outline = "none"; // Keeps it clean
        }
    }
    const alarm = new Audio('siren.mp3');
    alarm.loop = true;

    // --- 2. THE REDIRECT CHECK ---
    if (localStorage.getItem('IRIS_BAN') === 'true') {
        window.location.replace("unlocker/access-denied.html");
        return; 
    }

    // --- 3. ANTI-CHEAT PROTOCOLS ---
    const selfDestruct = async () => {
        localStorage.setItem('IRIS_BAN', 'true');

        // Immediate visual/audio feedback
        document.body.style.backgroundColor = "red";
        document.body.innerHTML = '<h1 style="color:white; text-align:center; margin-top:20%; font-family:monospace;">SECURITY BREACH DETECTED<br>TERMINATING SESSION...</h1>';

        alarm.play().catch(() => {});

        await new Promise(res => setTimeout(res, 1500)); 
        window.location.replace("unlocker/access-denied.html");
    };

    setInterval(() => {
        // Simple Debugger Check: Measures execution time.
        // If DevTools is open, the 'debugger' statement forces a pause, 
        // making the difference between start and end huge.
        const start = performance.now();
        (function() { return false; })['constructor']('debugger')['call']();
        const end = performance.now();

        if (end - start > 100) {
            selfDestruct();
        }

        // Size Guard: Catch side-docked DevTools
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            selfDestruct();
        }
    }, 500); // Checked twice per second for stability

    // Block Right-Click and Common DevTools Shortcuts
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) {
            e.preventDefault();
        }
    });

    // --- 5. TERMINAL LOGIC ---
    const output = document.getElementById("output");
    const input = document.getElementById("commandInput");
    let loggedIn = false;
    let sealIntegrity = 92;

    const wait = () => new Promise(res => setTimeout(res, 500));

    async function print(text) {
        if(!output) return;
        output.innerHTML += text + "<br>";
        window.scrollTo(0, document.body.scrollHeight);
        await wait();
    }

    async function boot() {
        await print("BOOTING IRIS SYSTEM...");
        await print("LOADING SECURITY MODULE...");
        if (isCautious) {
        await print("<br><span style='color:black; background:#ffcc00; padding: 0 5px;'> [!] WARNING: ACCOUNT UNDER OBSERVATION </span>");
        await print("<span style='color:#ffcc00;'> [!] SECURITY LENIENCY EXPENDED </span><br>");
        }
        await print("")
        await print("")
        await print("")
        await print("Thank you for playing the DEMO.")
        await print("Go forth, my associates.")
        await print("Discover the truth that is hidden.")
        await print("Best of luck. See you soon.")
    }

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            let cmd = input.value.toLowerCase().trim();
            print("> " + cmd);
            runCommand(cmd);
            input.value = "";
        }
    });

    boot();
})();
