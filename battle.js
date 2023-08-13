let fraz;
fraz=prompt("antre on fraz\n");

let netoye_fraz= fraz.replace(/[^a-zA-Z0-9]/g, '');
console.log("nouvo fraz lan se " +netoye_fraz);