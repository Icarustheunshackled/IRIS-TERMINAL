(function() {
    let inputBuffer = "";
    let lastKeyTime = Date.now();

    window.addEventListener('keydown', (e) => {
        const currentTime = Date.now();
        
        // Reset buffer if user takes too long between keys (2.5 seconds)
        if (currentTime - lastKeyTime > 2500) inputBuffer = "";
        lastKeyTime = currentTime;

        // Add key to buffer (ignoring system keys like Shift/Enter)
        if (e.key.length === 1) {
            inputBuffer += e.key.toUpperCase();
        }

        // Keep buffer short
        if (inputBuffer.length > 20) inputBuffer = inputBuffer.substring(1);

        // --- MASTER ADMIN UNLOCK ---
        if (inputBuffer.includes("ADMINUNLOCK")) {
            localStorage.clear(); // Nukes everything for a clean start
            location.reload();
        }

        // --- RAZBYPASS ---
        if (inputBuffer.includes("RAZBYPASS")) {
            const alreadyUsed = localStorage.getItem('RAZ_USED');
            
            if (alreadyUsed === 'true') {
                // Flash red or play a sound to show it's already used
                console.warn("BYPASS ALREADY EXPENDED");
            } else {
                localStorage.removeItem('IRIS_BAN');
                localStorage.setItem('RAZ_USED', 'true');
                inputBuffer = ""; // Clear buffer so it doesn't double-trigger
                location.reload();
            }
        }
    }, true);
})();
