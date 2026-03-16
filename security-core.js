(function() {
    let inputBuffer = "";
    
    window.addEventListener('keydown', (e) => {
        // Filter out non-character keys (Enter, Shift, etc.)
        if (e.key.length !== 1) return;

        inputBuffer += e.key.toUpperCase();
        
        // Keep buffer size manageable (length of longest string + buffer)
        if (inputBuffer.length > 20) inputBuffer = inputBuffer.substring(1);

        // --- THE HIERARCHY OF UNLOCKS ---
        if (inputBuffer.endsWith("ADMINUNLOCK")) {
            // Master override: clears everything including the yellow flag
            localStorage.removeItem('IRIS_BAN');
            localStorage.removeItem('RAZ_USED'); 
            inputBuffer = ""; // Reset buffer
            location.reload();
        } 
        else if (inputBuffer.endsWith("RAZBYPASS")) {
            // Check if they've already used their one-time bypass
            const hasUsedBypass = localStorage.getItem('RAZ_USED') === 'true';

            if (!hasUsedBypass) {
                localStorage.removeItem('IRIS_BAN');
                localStorage.setItem('RAZ_USED', 'true');
                inputBuffer = ""; // Reset buffer
                location.reload();
            } else {
                console.warn("LENIENCY STATUS: EXPIRED");
            }
        }
    }, true); // Using capture phase to beat input focus
})();
