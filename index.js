//HORLOGE

document.getElementById("date-heure").innerText = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

function updateClock(){
    document.getElementById("date-heure").innerText = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
};

setInterval(updateClock, 1000);

//CLICK SUR LES ICONES DU BUREAU

document.querySelectorAll(".icone-bureau").forEach(icon => {
    icon.addEventListener("dblclick", () => {
        if(document.getElementById(icon.id + "-fenetrebutton") && document.getElementById(icon.id + "-fenetrebutton").style.display !== "none"){
            document.getElementById(icon.id + "-fenetrebutton").style.display = "none";
        }
        document.getElementById(icon.id + "-fenetre").style.display = "block";
        let fenetres = document.querySelectorAll(".fenetre");
        let maxZ = Math.max(...Array.from(fenetres, f => parseInt(window.getComputedStyle(f).getPropertyValue('z-index'))))
        fenetres.forEach(item => {
            if(item.id === icon.id + "-fenetre"){
                item.style.zIndex = maxZ + 1;
            }
        })
    })
});

//CLICK SUR LES ICONES DE PROJETS DANS LA FENÊTRE PROJETS

document.querySelectorAll(".icone-projet").forEach(icon => {
    icon.addEventListener("dblclick", () => {
        if(document.getElementById(icon.id + "-fenetrebutton") && document.getElementById(icon.id + "-fenetrebutton").style.display !== "none"){
            document.getElementById(icon.id + "-fenetrebutton").style.display = "none";
        }
        document.getElementById(icon.id + "-fenetre").style.display = "block";
        let fenetres = document.querySelectorAll(".fenetre");
        let maxZ = Math.max(...Array.from(fenetres, f => parseInt(window.getComputedStyle(f).getPropertyValue('z-index'))))
        fenetres.forEach(item => {
            if(item.id === icon.id + "-fenetre"){
                item.style.zIndex = maxZ + 1;
            }
        })
    })
});

//OUVRE GOOGLE QUAND ON CLICK SUR L'ICONE IE

document.getElementById("internetexplorer").addEventListener("dblclick", () => {
    window.open("http://google.fr", '_blank');
})

//OUVRE LE MENU DÉMARRER

document.getElementById("menu-windows").addEventListener("click", () => {
    if(window.getComputedStyle(document.getElementById("menu-demarrer"), '').display === "none"){
        document.getElementById("menu-demarrer").style.display = "block";
        document.getElementById("menu-windows").style.borderLeft = "2px solid #444";
        document.getElementById("menu-windows").style.borderTop = "2px solid #444";
        document.getElementById("menu-windows").style.borderRight = "2px solid #fff";
        document.getElementById("menu-windows").style.borderBottom = "2px solid #fff";
    } else {
        document.getElementById("menu-demarrer").style.display = "none";
        document.getElementById("menu-windows").style.borderLeft = null;
        document.getElementById("menu-windows").style.borderTop = null;
        document.getElementById("menu-windows").style.borderRight = null;
        document.getElementById("menu-windows").style.borderBottom = null;
    }
})

//CLICK SUR À PROPOS MENU DÉMARRER

document.getElementById("menu-apropos").addEventListener("click", () => {
    if(document.getElementById("apropos-fenetrebutton") && document.getElementById("apropos-fenetrebutton").style.display !== "none"){
        document.getElementById("apropos-fenetrebutton").style.display = "none";
    }
    document.getElementById("apropos-fenetre").style.display = "block";
    document.getElementById("menu-demarrer").style.display = "none";
    document.getElementById("menu-windows").style.borderLeft = null;
    document.getElementById("menu-windows").style.borderTop = null;
    document.getElementById("menu-windows").style.borderRight = null;
    document.getElementById("menu-windows").style.borderBottom = null;
    let fenetres = document.querySelectorAll(".fenetre");
    let maxZ = Math.max(...Array.from(fenetres, f => parseInt(window.getComputedStyle(f).getPropertyValue('z-index'))))
    fenetres.forEach(item => {
        if(item.id === "apropos-fenetre"){
            item.style.zIndex = maxZ + 1;
        }
    })
})

//CLICK SUR COMPÉTENCES MENU DÉMARRER

document.getElementById("menu-competences").addEventListener("click", () => {
    if(document.getElementById("competences-fenetrebutton") && document.getElementById("competences-fenetrebutton").style.display !== "none"){
        document.getElementById("competences-fenetrebutton").style.display = "none";
    }
    document.getElementById("competences-fenetre").style.display = "block";
    document.getElementById("menu-demarrer").style.display = "none";
    document.getElementById("menu-windows").style.borderLeft = null;
    document.getElementById("menu-windows").style.borderTop = null;
    document.getElementById("menu-windows").style.borderRight = null;
    document.getElementById("menu-windows").style.borderBottom = null;
    let fenetres = document.querySelectorAll(".fenetre");
    let maxZ = Math.max(...Array.from(fenetres, f => parseInt(window.getComputedStyle(f).getPropertyValue('z-index'))))
    fenetres.forEach(item => {
        if(item.id === "competences-fenetre"){
            item.style.zIndex = maxZ + 1;
        }
    })
})

//DÉROULE LE SOUS MENU PROJETS DANS LE MENU DÉMARRRER
document.getElementById("menu-projets").addEventListener("mouseover", () => {
    document.getElementById("menu-projets-deroule").style.bottom = "calc(100vh - 29px - " + document.getElementById("menu-projets").getBoundingClientRect().bottom + "px)";
    document.getElementById("menu-projets-deroule").style.display = "block";
})

document.getElementById("menu-projets-deroule").addEventListener("mouseover", () => {
    document.getElementById("menu-projets-deroule").style.display = "block";
})
        
document.getElementById("menu-projets").addEventListener("mouseleave", () => {
    document.getElementById("menu-projets-deroule").style.display = "none";
})

document.getElementById("menu-projets-deroule").addEventListener("mouseleave", () => {
    document.getElementById("menu-projets-deroule").style.display = "none";
})

//CLICK POUR OUVRIR UN PROJET DANS LE MENU DÉMARRER

document.querySelectorAll(".projet-menu-demarrer").forEach(icon => {
    icon.addEventListener("click", () => {
        let id = icon.id.substring(5,)
        console.error(id)
        if(document.getElementById(id + "-fenetrebutton") && document.getElementById(id + "-fenetrebutton").style.display !== "none"){
            document.getElementById(id + "-fenetrebutton").style.display = "none";
        }
        document.getElementById(id + "-fenetre").style.display = "block";
        document.getElementById("menu-demarrer").style.display = "none";
        document.getElementById("menu-windows").style.borderLeft = null;
        document.getElementById("menu-windows").style.borderTop = null;
        document.getElementById("menu-windows").style.borderRight = null;
        document.getElementById("menu-windows").style.borderBottom = null;
        let fenetres = document.querySelectorAll(".fenetre");
        let maxZ = Math.max(...Array.from(fenetres, f => parseInt(window.getComputedStyle(f).getPropertyValue('z-index'))))
        fenetres.forEach(item => {
            if(item.id === id + "-fenetre"){
                item.style.zIndex = maxZ + 1;
            }
        })
    })
});


//FONCTIONS POUR TOUTES LES FENÊTRES : LES DÉPLACER, BOUTONS PLEIN ÉCRAN, RÉDUIRE, FERMER..

function fenetres(element){

    //DÉPLACER FENÊTRE
        let pos1 = 0;
        let pos2 = 0;
        let pos3 = 0;
        let pos4 = 0;
    
        element.querySelector(".fenetreheader").addEventListener("mousedown", dragMouseDown);
    
    
        function dragMouseDown(e){
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        };
    
        function elementDrag(e){
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
    
            element.style.top = (element.offsetTop - pos2) + 'px';
            element.style.left = (element.offsetLeft - pos1) + 'px';
        };
    
        function closeDragElement(){
            document.onmouseup = null;
            document.onmousemove = null;
        }
    
        //MET LA FENÊTRE ACTIVE AU PREMIER PLAN

        element.addEventListener("click", () => {
            let fenetres = document.querySelectorAll(".fenetre");
            let maxZ = Math.max(...Array.from(fenetres, f => parseInt(window.getComputedStyle(f).getPropertyValue('z-index'))))
            if(parseInt(window.getComputedStyle(element).getPropertyValue('z-index')) !== maxZ){
                fenetres.forEach(item => {
                    if(item.id === element.id){
                        item.style.zIndex = maxZ + 1;
                    }
                })
            }
        })
    
        //CRÉE UN BOUTON DE FENÊTRE RÉDUITE

        let button = document.createElement("button");
            button.id = element.id + "button";
            button.className = "fenetre-reduite";
            button.innerText = element.querySelector(".fenetreheader").querySelector(".titre-fenetre").innerText;
    
        //RÉDUIRE UNE FENÊTRE

        element.querySelector(".fenetreheader").querySelector(".reduire-fenetre").addEventListener("click", () => {
            element.style.display = "none";
            button.style.display = "inline-block";
            document.getElementById("fenetres-reduites").appendChild(button);
        });
    
        //CLICK SUR LE BOUTON DE FENÊTRE RÉDUITE POUR OUVRIR LA FENÊTRE

        button.addEventListener("click", () => {
            element.style.display = "block";
            button.style.display = "none";
        })
        
        //BOUTON PLEIN ÉCRAN

        element.querySelector(".fenetreheader").querySelector(".plein-ecran-fenetre").addEventListener("click", () => {
            element.style.width = "100%";
            element.style.height = document.body.clientHeight - document.getElementById("barre-du-bas").offsetHeight + 'px';
            element.style.top = 0;
            element.style.left = 0;
    
            element.querySelector(".fenetreheader").querySelector(".plein-ecran-fenetre").style.display = "none";
            element.querySelector(".fenetreheader").querySelector(".taille-defaut-fenetre").style.display = "inline-block";
        });
    
        //BOUTON POUR REMETTRE LA FENÊTRE À SA TAILLE PAR DÉFAUT

        element.querySelector(".fenetreheader").querySelector(".taille-defaut-fenetre").addEventListener("click", () => {
            element.style.width = null;
            element.style.height = null;
            element.style.top = null;
            element.style.left = null;
    
            element.querySelector(".fenetreheader").querySelector(".plein-ecran-fenetre").style.display = "inline-block";
            element.querySelector(".fenetreheader").querySelector(".taille-defaut-fenetre").style.display = "none";
        });
    
        //BOUTON FERMER FENÊTRE
        
        element.querySelector(".fenetreheader").querySelector(".fermer-fenetre").addEventListener("click", () => {
            element.style.display = "none";
        })
};

fenetres(document.getElementById("corbeille-fenetre"));
fenetres(document.getElementById("accueil-fenetre"));
fenetres(document.getElementById("apropos-fenetre"));
fenetres(document.getElementById("mesprojets-fenetre"));
fenetres(document.getElementById("competences-fenetre"));
fenetres(document.getElementById("portfolio-projet-fenetre"));
fenetres(document.getElementById("acnh-projet-fenetre"));
fenetres(document.getElementById("recettes-projet-fenetre"));
fenetres(document.getElementById("quiz-projet-fenetre"));
fenetres(document.getElementById("budget-projet-fenetre"));