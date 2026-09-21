const audio = document.getElementById("audio");
const legenda = document.getElementById("legenda");

const track = audio.textTracks[0];

track.mode = "hidden";

track.addEventListener("cuechange", () => {
    const cue = track.activeCues[0];

    if (cue) {
        legenda.textContent = cue.text;
        legenda.style.visibility = "visible";
    } else {
        legenda.textContent = "";
        legenda.style.visibility = "hidden";
    }
});