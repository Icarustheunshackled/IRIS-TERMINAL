(function() {
    let inputBuffer = "";
    
    window.addEventListener('keydown', (e) => {
        if (e.key.length !== 1) return;
        inputBuffer += e.key.toUpperCase();
        
        // Keep it long enough to hold either code
        if (inputBuffer.length > 15) inputBuffer = inputBuffer.substring(1);

        // --- ADMIN UNLOCK ---
        if (inputBuffer.includes("ADMINUNLOCK")) {
            localStorage.removeItem('IRIS_BAN');
            localStorage.removeItem('RAZ_USED');
            location.reload();
        }

        // --- RAZBYPASS ---
        if (inputBuffer.includes("RAZBYPASS")) {
            // If the key doesn't exist or isn't 'true', allow the bypass
            if (localStorage.getItem('RAZ_USED') !== 'true') {
                localStorage.removeItem('IRIS_BAN');
                localStorage.setItem('RAZ_USED', 'true');
                location.reload();
            } else {
                // This logs to console if they try to use it a second time
                console.warn("IRIS: LENIENCY LIMIT REACHED");
            }
        }
    }, true);
})();
