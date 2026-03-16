(function() {
    let inputBuffer = "";
    
    window.addEventListener('keydown', (e) => {
        // Ignore functional keys like Shift, Enter, etc.
        if (e.key.length !== 1) return;
        
        inputBuffer += e.key.toUpperCase();
        
        // Keep buffer manageable (max length of the longest code + 1)
        if (inputBuffer.length > 15) inputBuffer = inputBuffer.substring(1);

        // --- RAZBYPASS (One-time use) ---
        if (inputBuffer.includes("RAZBYPASS")) {
            if (localStorage.getItem('RAZ_USED') !== 'true') {
                localStorage.removeItem('IRIS_BAN');
                localStorage.setItem('RAZ_USED', 'true');
                inputBuffer = ""; // Reset buffer
                location.reload(); 
            } else {
                console.warn("IRIS: LENIENCY LIMIT REACHED");
            }
        }
            
        // --- ADMIN UNLOCK (Infinite use) ---
        if (inputBuffer.includes("ADMINUNLOCK")) {
            localStorage.removeItem('IRIS_BAN');
            localStorage.removeItem('RAZ_USED'); // Optional: Reset the RAZ limit
            inputBuffer = ""; // Reset buffer
            location.reload();
        }
        
    }, true);
})();
