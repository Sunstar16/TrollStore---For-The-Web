var app = new Framework7({
    el: "#app", theme: "ios", name: "CoolStore", id: "com.nanotek.CoolStore", popup: {
        push: !0, swipeToClose: !0
    }, sheet: {
        push: !0, swipeToClose: !0
    }, serviceWorker: {
        path: "./service-worker.js"
			}, routes: [{
            path: "/path/", content: 'content', options: {
                transition: "f7-circle"
							}}]}), mainView = app.views.create(".view-main");function hideIfBelowVersion(version) {
    var userAgent = window.navigator.userAgent,
        iOSVersion = parseFloat(
            ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(userAgent) || [0, ''])[1])
            .replace('undefined', '3_2').replace('_', '.').replace('_', '')
        ) || false;

    if (iOSVersion && iOSVersion < version) {
        var element = document.getElementById('ios17.4');
        if (element) {
            element.style.visibility = 'hidden';
        }
    }
}

hideIfBelowVersion(17.4);
function toggleDarkMode(){document.querySelector("html").classList.toggle("dark")}function applyDarkModeSetting(){const e=document.querySelector("html"),t=window.matchMedia("(prefers-color-scheme: dark)"),i=t=>{t.matches?e.classList.add("dark"):e.classList.remove("dark")};t.addListener(i),i(t)}
							applyDarkModeSetting();
							
							function loadIconFromLocalStorage() {
    var e = localStorage.getItem("customicon"); e && updateIcon(e)}if (document.addEventListener("DOMContentLoaded", (function() {
        document.querySelectorAll(".ptr-content").forEach((function(e) {
            e.addEventListener("ptr:refresh", (function(e) {
                window.location.reload()}))}))})), "serviceWorker"in navigator && navigator.serviceWorker.getRegistration().then((e=> {
        e || navigator.serviceWorker.register("service-worker.js").then((e=> {})).catch((e=> {}))})), window.addEventListener("load", (function() {
        loadIconFromLocalStorage()})), window.navigator.standalone) {
    var preloaderDialog = app.dialog.preloader("Installing Idid"); preloaderDialog.open(),
    setTimeout((function() {
			preloaderDialog.close()}), 2e3)} else app.popup.open("#hs"); 
function createItemHtml(e) {
    return `\n    <li>\n\t\t<a class="item-link external" href="apple-magnifier://install?url=${e.get_link}">                
        <div class="item-content">                  
            <div class="item-media"><img loading="lazy" src="${e.icon}"></div>                  
            <div class="item-inner">                      
                <div class="item-title-row">                           
                    <div class="item-title">${e.title}</div>                       
                </div>                        
                <div class="item-subtitle">${e.version} • ${e.id}</div>                      
                <div class="item-footer"></div>             
            </div>
        </div>
    </a>\n    </li>\n  `;
}

function initVirtualList(e) {
    app.virtualList.create({
        el: ".virtual-list",
        items: e,
        renderItem: function (e, t) {
            return createItemHtml(e);
        },
        searchAll: function (e, t) {
            let i = [];
            for (let n = 0; n < t.length; n++)
                (t[n].title.toLowerCase().indexOf(e.toLowerCase()) >= 0 || "" === e.trim()) && i.push(n);
            return i;
        },
        height: 90
    });
    
		
}

async function loadApps() {
    try {
        const e = await fetch("apps.json"),
            t = (await e.json()).sort(((e, t) => e.title.localeCompare(t.title))),
            i = document.getElementById("tweaksnumber");
        i && (i.textContent = t.length), initVirtualList(t);
    } catch (e) {
        console.error("Could not load apps:", e);
    }
}
document.addEventListener("DOMContentLoaded",loadApps);"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then((e=>{e||navigator.serviceWorker.register("service-worker.js").then((e=>{})).catch((e=>{}))}));
function updateTabTitle() {
    document.querySelectorAll(".tab-link").forEach((function (e) {
        e.addEventListener("click", (function () {
            var e = this.getAttribute("data-tab-title"),
                t = document.querySelector(".navbar .title"),
                i = document.querySelector(".navbar .title-large-text");
            if (t) {
                t.textContent = e;
            }
            if (i) {
                i.textContent = e;
            }
        }))
    }));
}
updateTabTitle();

function troll() {
	app.dialog.alert('This is not real TrollStore,it just looks like the real TrollStore but it is just Store for apps that need to be installed with TrollStore.','Trolled ya!');	
}
function uninstall() {
	app.dialog.alert('Go to HomeScreen,touch and hold the CoolStore icon,choose the option "Delete Bookmark" and then when the prompt appears click Delete.','How to Uninstall CoolStore?');	
	
}
function useinweb() {
	app.popup.close('#hs')
	
}

