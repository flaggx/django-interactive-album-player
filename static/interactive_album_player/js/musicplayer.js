// Create an array of mp3 tracks
let tracks = [
  {name: "Track 1", src: "track1.mp3"},
  {name: "Track 2", src: "track2.mp3"},
  {name: "Track 3", src: "track3.mp3"},
  {name: "Track 4", src: "track4.mp3"}
];

// Create an array of audio objects
let audios = [];

// Create a div element to hold the check boxes
let div = document.createElement("div");

// Loop through the tracks array and create a check box and a label for each track
for (let i = 0; i < tracks.length; i++) {
  // Create a new audio object with the track source
  let audio = new Audio(tracks[i].src);

  // Push the audio object to the audios array
  audios.push(audio);

  // Create a new input element of type checkbox
  let input = document.createElement("input");

  // Set the id and name attributes of the input element to match the track name
  input.id = tracks[i].name;
  input.name = tracks[i].name;

  // Set the value attribute of the input element to match the index of the track in the array
  input.value = i;

  // Set the onchange attribute of the input element to call a function that plays or pauses the audio object based on its checked state
  input.setAttribute("onchange", "playOrPause(this);");

   // Create a new label element for the input element
   let label = document.createElement("label");

   // Set the for attribute of the label element to match the id of the input element
   label.setAttribute("for", input.id);

   // Set the text content of the label element to match the track name
   label.textContent = tracks[i].name;

   // Append both elements to div
   div.appendChild(input);
   div.appendChild(label);
}

// Append div to body
document.body.appendChild(div);

// Define a function that plays or pauses an audio object based on its checked state
function playOrPause(checkbox) {
    // Get index from checkbox value
    let index = checkbox.value;

    // Get corresponding audio object from audios array
    let audio = audios[index];

    // If checkbox is checked, play audio
    if (checkbox.checked) {
        audio.play();
    } else {
        // Else pause audio
        audio.pause();
    }
}