(function() {
    let inputBuffer = "";
    
    window.addEventListener('keydown', (e) => {
        // Capture keys and keep the buffer manageable
        inputBuffer += e.key.toUpperCase();
        if (inputBuffer.length > 25) inputBuffer = inputBuffer.substring(10);

        // --- MASTER ADMIN UNLOCK (Permanent) ---
        // Clears everything: the ban and the bypass usage history.
        if (inputBuffer.includes("ADMINUNLOCK")) {
            localStorage.removeItem('IRIS_BAN');
            localStorage.removeItem('RAZ_USED'); 
            console.log("%c [SYS] TOTAL SYSTEM RESET: AUTHORIZED", "color: #00ff00; font-weight: bold;");
            location.reload();
        }

        // --- RAZBYPASS (One-time Leniency) ---
        // Clears the ban but marks the account as "Under Observation"
        if (inputBuffer.includes("RAZBYPASS")) {
            if (localStorage.getItem('RAZ_USED') === 'true') {
                console.warn(" [!] ERROR: SECURITY LENIENCY ALREADY EXPENDED.");
                // Optional: Trigger a mini-siren or visual flash here
            } else {
                localStorage.removeItem('IRIS_BAN');
                localStorage.setItem('RAZ_USED', 'true'); 
                console.log("%c [SYS] BYPASS ACCEPTED. ACCOUNT FLAGGED: CAUTIOUS", "color: #ffcc00;");
                location.reload();
            }
        }
    });
})();
