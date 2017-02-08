function allowDrop(ev) {
    ev.preventDefault();    
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function dropToArea(ev, allowedClass) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");    
    var orgEl = document.getElementById(data);
    if (!orgEl) {
        return;
    }

    console.log(orgEl.className);
    if (orgEl.className.indexOf("indicator-moved") >= 0) {
        return;
    }

    var newEl = orgEl.cloneNode(true);
    if (newEl.className.indexOf(allowedClass) >= 0)
    {
        orgEl.className += " indicator-moved";
        orgEl.setAttribute("draggable", false);

        newEl.setAttribute("id", newEl.getAttribute("id")+"-clone");
        newEl.setAttribute("draggable", false);
        newEl.className += " indicator-removable";
        ev.target.appendChild(newEl);
    }
    ev.preventDefault(); // don't remove src object
}