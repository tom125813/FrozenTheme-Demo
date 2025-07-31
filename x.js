// Static site with embedded config
(function () {
    try {
        const b = {
            "logo": "logo.png",
            "favicon": "favicon.ico",
            "site_title": "Frozen - Ultimate Minecraft Experience",
            "player_counter": {
                "text": "players conquering the frost",
                "demo_ip": "mc.hypixel.net"
            },
            "nav_buttons": [
                {
                    "text": "Join Discord",
                    "icon": "fab fa-discord",
                    "link": "https://discord.com/demo",
                    "target": "_blank"
                },
                {
                    "text": "Vote Now",
                    "icon": "fas fa-star",
                    "link": "#vote",
                    "target": "_self"
                },
                {
                    "text": "Shop",
                    "icon": "fas fa-shopping-cart",
                    "link": "https://shop.demo.com",
                    "target": "_blank"
                }
            ],
            "hero": {
                "title": "Conquer the Frozen Realm",
                "subtitle": "Step into a world where survival meets legend. Face brutal winters, forge alliances, and become the ultimate frost warrior in the most challenging Minecraft experience ever created.",
                "cta_text": "Begin Your Journey",
                "cta_icon": "fas fa-play"
            },
            "features_title": "Legendary Features",
            "features_subtitle": "Experience cutting-edge gameplay mechanics and features that will redefine your Minecraft adventure",
            "features": [
                {
                    "icon": "fas fa-snowflake",
                    "title": "Extreme Weather Systems",
                    "description": "Face dynamic blizzards, temperature mechanics, and seasonal changes that affect gameplay, crafting, and survival strategies."
                },
                {
                    "icon": "fas fa-fire",
                    "title": "Competitive PvP Arenas",
                    "description": "Engage in skill-based combat with custom weapons, armor enchantments, and ranked tournaments in our ice-themed battle arenas."
                },
                {
                    "icon": "fas fa-mountain",
                    "title": "Massive Custom Worlds",
                    "description": "Explore hand-crafted frozen landscapes with hidden dungeons, ancient ruins, and secrets waiting to be discovered."
                },
                {
                    "icon": "fas fa-users",
                    "title": "Guild Warfare",
                    "description": "Form powerful alliances, build mighty fortresses, and wage epic wars for territory control in our persistent world."
                },
                {
                    "icon": "fas fa-gem",
                    "title": "Unique Progression",
                    "description": "Unlock exclusive abilities, rare materials, and legendary items through our innovative skill tree and achievement system."
                },
                {
                    "icon": "fas fa-rocket",
                    "title": "Regular Updates",
                    "description": "Experience fresh content monthly with new features, events, and gameplay mechanics developed by our dedicated team."
                }
            ],
            "final_cta": {
                "title": "What Are You Waiting For?",
                "subtitle": "Join thousands of players already conquering the frozen realm",
                "ip": "play.frozen.com",
                "copy_hint": "Click to copy and join now!"
            },
            "vote_popup": {
                "title": "Vote for Frozen",
                "links": [
                    { "text": "Vote Site 1", "url": "https://votelink1.com" },
                    { "text": "Vote Site 2", "url": "https://votelink2.com" },
                    { "text": "Vote Site 3", "url": "https://votelink3.com" },
                    { "text": "Vote Site 4", "url": "https://votelink4.com" },
                    { "text": "Vote Site 5", "url": "https://votelink5.com" }
                ]
            },
            "copy_notification": "Server IP copied to clipboard!",
            "footer": "© 2025 Frozen. Crafted with passion for the ultimate Minecraft experience."
        }; let c; try { c = document.querySelector("link[rel~='icon']"); if (!c) { c = document.createElement('link'); c.rel = 'icon'; document.head.appendChild(c) } c.href = b.favicon } catch (e) { console.warn('Favicon could not be loaded:', e) }
        try { document.title = b.site_title } catch (e) { console.warn('Title error:', e) }
        try { const d = document.getElementById('a'); d.src = b.logo; d.alt = '' } catch (e) { console.warn('Logo error:', e) }
        try { document.getElementById('c').textContent = b.player_counter.text } catch (e) { console.warn('Player counter text error:', e) }
        try { const e = document.getElementById('d'); e.innerHTML = ''; b.nav_buttons.forEach(f => { const g = document.createElement('a'); g.className = 'k', f.icon ? g.innerHTML = `<i class="${f.icon}"></i> ${f.text}` : g.textContent = f.text, g.href = f.link, f.target && (g.target = f.target), f.text.toLowerCase().includes('vote') && g.classList.add('m'), f.text.toLowerCase().includes('discord') && g.classList.add('l'), f.text.toLowerCase().includes('shop') && g.classList.add('n'), e.appendChild(g) }) } catch (e) { console.warn('Nav buttons error:', e) }
        try { document.getElementById('e').textContent = b.hero.title } catch (e) { console.warn('Hero title error:', e) }
        try { document.getElementById('f').textContent = b.hero.subtitle } catch (e) { console.warn('Hero subtitle error:', e) }
        try { document.getElementById('i').textContent = b.hero.cta_text } catch (e) { console.warn('Hero CTA text error:', e) }
        try { document.getElementById('h').className = b.hero.cta_icon } catch (e) { console.warn('Hero CTA icon error:', e) }
        try { document.getElementById('j').textContent = b.features_title } catch (e) { console.warn('Features title error:', e) }
        try { document.getElementById('k').textContent = b.features_subtitle } catch (e) { console.warn('Features subtitle error:', e) }
        try { const h = document.getElementById('l'); h.innerHTML = ''; b.features.forEach(i => { const j = document.createElement('div'); j.className = 'u', j.innerHTML = `<div class=\"v\"><i class=\"${i.icon}\"></i></div><h3 class=\"w\">${i.title}</h3><p class=\"x\">${i.description}</p>`, h.appendChild(j) }) } catch (e) { console.warn('Features error:', e) }
        try { document.getElementById('m').textContent = b.final_cta.title } catch (e) { console.warn('Final CTA title error:', e) }
        try { document.getElementById('n').textContent = b.final_cta.subtitle } catch (e) { console.warn('Final CTA subtitle error:', e) }
        try { document.getElementById('p').textContent = b.final_cta.ip } catch (e) { console.warn('Final CTA IP error:', e) }
        try { document.getElementById('q').textContent = b.final_cta.copy_hint } catch (e) { console.warn('Final CTA copy hint error:', e) }
        try { document.getElementById('o').onclick = function () { r(b.final_cta.ip) } } catch (e) { console.warn('Final CTA copy click error:', e) }
        try { document.getElementById('u').textContent = b.vote_popup.title } catch (e) { console.warn('Vote popup title error:', e) }
        try { const i = document.getElementById('v'); i.innerHTML = ''; b.vote_popup.links.forEach(j => { const k = document.createElement('a'); k.className = 'Q', k.href = j.url, k.target = '_blank', k.textContent = j.text, i.appendChild(k) }) } catch (e) { console.warn('Vote links error:', e) }
        try { document.getElementById('r').textContent = b.footer } catch (e) { console.warn('Footer error:', e) }
        try { document.getElementById('copyNotifText').textContent = b.copy_notification } catch (e) { console.warn('Copy notification text error:', e) }
        window.s = async function () { try { const l = await fetch(`https://api.mcsrvstat.us/2/${b.player_counter.demo_ip}`), m = await l.json(); m && m.players && 'number' == typeof m.players.online ? document.getElementById('b').textContent = m.players.online.toLocaleString() : document.getElementById('b').textContent = 'N/A' } catch (l) { console.warn('Player count fetch error:', l); document.getElementById('b').textContent = 'N/A' } }; try { s(); setInterval(s, 45e3) } catch (e) { console.warn('Player count interval error:', e) }
        try { const Il = String.fromCharCode; const l1 = [0x6b, 0x6f, 0x64, 0x65, 0x2d, 0x66, 0x6f, 0x6f, 0x74, 0x65, 0x72]; const I1 = l1.map(x => Il(x)).join(''); const lI = document.getElementById(I1); if (lI) { const ll = Il(0x4d, 0x61, 0x64, 0x65, 0x20, 0x62, 0x79, 0x20); const II = Il(0x4b, 0x4f, 0x44, 0x45); const l0 = [0x68, 0x74, 0x74, 0x70, 0x73, 0x3a, 0x2f, 0x2f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x2e, 0x67, 0x67, 0x2f, 0x77, 0x64, 0x6e, 0x6b, 0x4e, 0x53, 0x36, 0x32, 0x6d, 0x4a]; const I0 = l0.map(x => Il(x)).join(''); const lO = document.createElement(Il(0x73, 0x70, 0x61, 0x6e)); lO.style.cssText = Il(0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x3a, 0x23, 0x39, 0x63, 0x61, 0x33, 0x61, 0x66, 0x3b, 0x66, 0x6f, 0x6e, 0x74, 0x2d, 0x73, 0x69, 0x7a, 0x65, 0x3a, 0x30, 0x2e, 0x39, 0x65, 0x6d, 0x3b, 0x74, 0x65, 0x78, 0x74, 0x2d, 0x61, 0x6c, 0x69, 0x67, 0x6e, 0x3a, 0x63, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x3b, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x3a, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x3b, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x3a, 0x69, 0x6e, 0x6c, 0x69, 0x6e, 0x65, 0x3b); lO.innerHTML = ll + Il(0x3c, 0x73, 0x74, 0x72, 0x6f, 0x6e, 0x67, 0x3e) + II + Il(0x3c, 0x2f, 0x73, 0x74, 0x72, 0x6f, 0x6e, 0x67, 0x3e); lO.addEventListener(Il(0x63, 0x6c, 0x69, 0x63, 0x6b), () => window.open(I0, Il(0x5f, 0x62, 0x6c, 0x61, 0x6e, 0x6b))); lI.appendChild(lO); } } catch (e) { }
        function r(n) { try { navigator.clipboard.writeText(n).then(() => { const o = document.getElementById('s'); const t = document.getElementById('copyNotifText'); if (t) { t.textContent = b.copy_notification; } o.classList.add('G'), setTimeout(() => { o.classList.remove('G') }, 3e3) }) } catch (e) { console.warn('Copy to clipboard error:', e) } }
        function t() { try { const n = document.querySelector('.b'); for (let o = 0; o < 50; o++) { const p = document.createElement('div'); p.classList.add('c'), p.style.left = 100 * Math.random() + "%", p.style.top = 100 * Math.random() + "%", p.style.animationDelay = 6 * Math.random() + "s", p.style.animationDuration = 4 * Math.random() + 4 + "s", n.appendChild(p) } } catch (e) { console.warn('Particles error:', e) } } t(); window.addEventListener('DOMContentLoaded', () => { }); window.openVoteModal = function () { try { const n = document.getElementById('t'); n.style.display = 'flex', setTimeout(() => { n.classList.add('L'), n.querySelector('.M').classList.add('L') }, 10) } catch (e) { console.warn('Open vote modal error:', e) } }; window.closeVoteModal = function () { try { const n = document.getElementById('t'); n.classList.remove('L'), n.querySelector('.M').classList.remove('L'), setTimeout(() => { n.style.display = 'none' }, 350) } catch (e) { console.warn('Close vote modal error:', e) } }; document.addEventListener('click', function (n) { try { n.target.classList && n.target.classList.contains('k') && n.target.classList.contains('m') && (n.preventDefault(), openVoteModal()) } catch (e) { console.warn('Vote modal open click error:', e) } }); try { document.getElementById('t').addEventListener('mousedown', function (n) { try { n.target === this && closeVoteModal() } catch (e) { console.warn('Vote modal close click error:', e) } }) } catch (e) { console.warn('Vote modal overlay error:', e) } document.addEventListener('click', function (n) { try { n.target.closest('.r') && (n.preventDefault(), document.querySelector('.s').scrollIntoView({ behavior: 'smooth' })) } catch (e) { console.warn('Smooth scroll error:', e) } })
    } catch (e) { console.error('Config load or main error:', e) }
})();