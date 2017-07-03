	document.addEventListener("DOMContentLoaded", function() {
var friends = ['Bobbi Brown', 'Rick Ruben', 'Splunk', 'Blue Ivy', 'Frank Ocean'];
var locations = [
"at Purple Onion",
"inside of the grill at T-Bonez",
"on the 4th floor of Homewood Suites",
"by tyler in the I-lab",
"in the corner of Laced Up",
"behind Playtpi",
"on top of Leer Tower",
"on the 44th floor of City Federal",
"at Tyler The Creators House",
"at Ish's place"
];
var weapons = [
"akai 3000",
"Chuck Norris",
"21 savage hair",
"the brick craig used to hit Dee-bo in Friday",
"a tube sock with mustard stains",
"lil uzi grill",
"bible made of human skin..........98% human skin",
"Macbook Pro 2013 4gb becasue i need a new mac and its expensive so i told the mto do it...... ",
"Super Man's underwear",
"Bart Simpson",
"eylash",
"pickle",
"Kendrick Lamar's braids",
"Miss Elliot's lip gloss",
"Beyonce's Headdress",
"Madonna's teeth",
"pie made by Drew Berrymoore",
"flashlight that smells like Katey Perry",
"mixtape made by Taylor Swift and Pampoose",
"PANCAKE THE GOAT."
];
function addButton(num) {
var btn = document.createElement('button');
btn.innerHTML = ('Clue ' + [i]);
btn.className = "button";
var randomFriends = friends[Math.floor(Math.random() * friends.length)];
var randomLocations = locations[Math.floor(Math.random() * locations.length)];
var randomWeapons = weapons[Math.floor(Math.random() * weapons.length)];
btn.onclick = function() {
console.log('clicked');
console.log(num);
alert( btn.innerHTML +':' +' ' + randomFriends + " did it " + randomLocations + " with a " + randomWeapons + '.');
};
document.body.appendChild(btn);
}
for (var i = 1; i <= 100; i++) {
addButton(i);
}
});