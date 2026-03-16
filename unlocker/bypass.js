(function() {
    let inputBuffer = "";
    
    window.addEventListener('keydown', (e) => {
        if (e.key.length !== 1) return;
        inputBuffer += e.key.toUpperCase();
        
        if (inputBuffer.length > 15) inputBuffer = inputBuffer.substring(1);

        // --- RAZBYPASS ---
        if (inputBuffer.includes("RAZBYPASS")) {
            if (localStorage.getItem('RAZ_USED') !== 'true') {
                localStorage.removeItem('IRIS_BAN'); // Removes the ban
                localStorage.setItem('RAZ_USED', 'true'); // Marks as used
                inputBuffer = ""; 
                window.location.href = "../index.html";
            } else {
                console.warn("IRIS: LENIENCY LIMIT REACHED");
            }
        }
            
        // --- ADMINUNLOCK ---
        if (inputBuffer.includes("ADMINUNLOCK")) {
            localStorage.removeItem('IRIS_BAN'); // Removes the ban
            localStorage.removeItem('RAZ_USED'); // Resets the RAZ limit
            inputBuffer = ""; 
            window.location.href = "../index.html";
        }
        
    }, true);
})();
