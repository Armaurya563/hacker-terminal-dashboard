// 1. Clock
        setInterval(() => {
            document.getElementById('clock').innerText = new Date().toLocaleTimeString();
        }, 1000);

        // 2. Hex Stream
        function updateHex() {
            const hex = "0123456789ABCDEF";
            let s = "";
            for (let i = 0; i < 300; i++) s += hex[Math.floor(Math.random() * 16)] + " ";
            document.getElementById('hex-view').innerText = s;
        }
        setInterval(updateHex, 100);

        // 3. Realistic Radar Pings
        function addPing() {
            const container = document.getElementById('ping-container');
            const ping = document.createElement('div');
            ping.className = 'ping';
            ping.style.top = Math.random() * 80 + 10 + '%';
            ping.style.left = Math.random() * 80 + 10 + '%';
            container.appendChild(ping);

            const cities = ["New York", "London", "Moscow", "New Delhi", "Beijing", "Tokyo", "Paris"];
            const targets = ["Bank Central", "Defense Silo", "Power Grid", "Satellite Station"];
            addLog(`ALERT: ${targets[Math.floor(Math.random() * targets.length)]} compromised in ${cities[Math.floor(Math.random() * cities.length)]}`, "#ff003c");

            setTimeout(() => ping.remove(), 3000);
        }
        setInterval(addPing, 2000);

        // 4. Activity Logs
        function addLog(msg, color = "#00ff41") {
            const log = document.getElementById('log-window');
            const d = document.createElement('div');
            d.innerHTML = `<span style="color:#666">[${new Date().toLocaleTimeString()}]</span> <span style="color:${color}">${msg}</span>`;
            log.prepend(d);
            if (log.children.length > 15) log.lastChild.remove();
        }

        // 5. Satellite Tracker
        setInterval(() => {
            const sat = document.getElementById('sat-list');
            sat.innerHTML = `
            <div>SATELLITE-7: LAT ${(Math.random() * 90).toFixed(2)} | LON ${(Math.random() * 180).toFixed(2)}</div>
            <div style="color:red">SATELLITE-9: CRITICAL FAILURE</div>
            <div>SATELLITE-12: ORBIT STABLE</div>
        `;
        }, 1500);

        // 6. Cyber Strike Action
        function triggerNuclear() {
            document.body.style.background = "#300";
            addLog("CRITICAL: GLOBAL MALWARE INJECTION INITIATED", "white");
            setTimeout(() => document.body.style.background = "#000800", 300);
        }

        // Initial Logs
        addLog("Warfare protocol Omega-0 initiated.");
        addLog("Bypassing international firewall layers...");