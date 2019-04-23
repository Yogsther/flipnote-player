document.getElementById("file").addEventListener("change", e => {
    var reader = new FileReader();
    reader.readAsText(e.srcElement.files[0]);
    reader.onload = e => {
        var note = JSON.parse(reader.result);
        var img = new Image();
        var index = 0;
        document.body.innerHTML = "<h3>"+note.title + "</h3><br>"
        document.body.appendChild(img);
        setInterval(() => {
            img.src = note.content[index++%note.content.length]
        }, 1000/note.fps)
    }
})