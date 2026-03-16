(function() {
    let inputBuffer = "";
    
    window.addEventListener('keydown', (e) => {
        // Only accept single characters (ignore Shift, Enter, etc.)
        if (e.key.length !== 1) return;

        inputBuffer += e.key.toUpperCase();
        
        // Keep the buffer lean - only need the length of the longest code
        if (inputBuffer.length > 20) inputBuffer = inputBuffer.substring(1);

        // --- CHECK 1: ADMIN UNLOCK ---
        if (inputBuffer.endsWith("ADMINUNLOCK")) {
            localStorage.clear(); 
            location.reload();
            return; // Exit immediately so it doesn't try to run more logic
        }

        // --- CHECK 2: RAZBYPASS ---
        if (inputBuffer.endsWith("RAZBYPASS")) {
            const used = localStorage.getItem('RAZ_USED');
            
            // Only fire if the account isn't already yellow/cautious
            if (used !== 'true') {
                localStorage.removeItem('IRIS_BAN');
                localStorage.setItem('RAZ_USED', 'true');
                location.reload();
            } else {
                console.warn("LENIENCY EXHAUSTED");
            }
        }
    }, true);
})();
