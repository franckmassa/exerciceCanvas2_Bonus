var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//Texte
ctx.font = '18px Verdana';
ctx.fillStyle = '#949494';
ctx.fillText('École du Numérique', 265, 280);
ctx.fillText('du Noyonnais', 265, 300);
ctx.fill();
//Lettre E barre verticale
ctx.beginPath();
ctx.moveTo(100,80);
ctx.lineTo(100,260);
ctx.closePath();
ctx.lineWidth="5";
ctx.stokeStyle = '#000';
ctx.stroke();
//Lettre E barre horisontale1
ctx.beginPath();
ctx.moveTo(100,80);
ctx.lineTo(140,80);
ctx.closePath();
ctx.lineWidth="5";
ctx.stokeStyle = '#000';
ctx.stroke();
//Lettre E barre horisontale2
ctx.beginPath();
ctx.moveTo(100,170);
ctx.lineTo(140,170);
ctx.closePath();
ctx.lineWidth="5";
ctx.stokeStyle = '#000';
ctx.stroke();
//Lettre E barre horisontale3
ctx.beginPath();
ctx.moveTo(100,260);
ctx.lineTo(140,260);
ctx.closePath();
ctx.lineWidth="5";
ctx.stokeStyle = '#000';
ctx.stroke();
//Lettre N barre vertical1
ctx.beginPath();
ctx.moveTo(270,80);
ctx.lineTo(270,260);
ctx.closePath();
ctx.lineWidth="5";
ctx.stokeStyle = '#000';
ctx.stroke();
//Lettre N barre vertical2
ctx.beginPath();
ctx.moveTo(420,80);
ctx.lineTo(420,260);
ctx.closePath();
ctx.lineWidth="5";
ctx.stokeStyle = '#000';
ctx.stroke();
//Lettre N barre oblique
ctx.beginPath();
ctx.moveTo(270,80);
ctx.lineTo(420,260);
ctx.closePath();
ctx.lineWidth="5";
ctx.stokeStyle = '#000';
ctx.stroke();
//Le 2 avec courbe quadratic
ctx.beginPath();
ctx.lineWidth = '10';
ctx.strokeStyle = '#EA4E1D';
ctx.moveTo(140,80);
ctx.quadraticCurveTo(400,-50,120,300);
ctx.stroke();
//Le retour du 2
ctx.beginPath();
ctx.lineWidth = '10';
ctx.strokeStyle = '#EA4E1D';
ctx.moveTo(120,300);
ctx.lineTo(220,285);
ctx.stroke();
//Le bout du 2
ctx.beginPath();
ctx.fillStyle = '#EA4E1D';
ctx.moveTo(216,288);
ctx.quadraticCurveTo(219,273,232,284);
ctx.fill();
//losange1
ctx.beginPath();
ctx.moveTo(447,90);
ctx.lineTo(457,80);
ctx.lineTo(467,90);
ctx.lineTo(467,100);
ctx.lineTo(457,110);
ctx.lineTo(447,100);
ctx.closePath();
ctx.fillStyle = '#EBEBEB';
ctx.fill();
//losange2
ctx.beginPath();
ctx.moveTo(435,120);
ctx.lineTo(445,110);
ctx.lineTo(455,120);
ctx.lineTo(455,130);
ctx.lineTo(445,140);
ctx.lineTo(435,130);
ctx.closePath();
ctx.fillStyle = '#878787';
ctx.fill();
//losange3
ctx.beginPath();
ctx.moveTo(460,120);
ctx.lineTo(470,110);
ctx.lineTo(480,120);
ctx.lineTo(480,130);
ctx.lineTo(470,140);
ctx.lineTo(460,130);
ctx.closePath();
ctx.fillStyle = '#595656';
ctx.fill();
//losange4
ctx.beginPath();
ctx.moveTo(447,150);
ctx.lineTo(457,140);
ctx.lineTo(467,150);
ctx.lineTo(467,160);
ctx.lineTo(457,170);
ctx.lineTo(447,160);
ctx.closePath();
ctx.fillStyle = '#EA4E1A';
ctx.fill();
//losange5
ctx.beginPath();
ctx.moveTo(435,180);
ctx.lineTo(445,170);
ctx.lineTo(455,180);
ctx.lineTo(455,190);
ctx.lineTo(445,200);
ctx.lineTo(435,190);
ctx.closePath();
ctx.fillStyle = '#878787';
ctx.fill();
//losange6
ctx.beginPath();
ctx.moveTo(460,180);
ctx.lineTo(470,170);
ctx.lineTo(480,180);
ctx.lineTo(480,190);
ctx.lineTo(470,200);
ctx.lineTo(460,190);
ctx.closePath();
ctx.fillStyle = '#ECECEC';
ctx.fill();
//Petit losange1
ctx.beginPath();
ctx.moveTo(481,125);
ctx.lineTo(485,119);
ctx.lineTo(490,125);
ctx.lineTo(490,130);
ctx.lineTo(485,135);
ctx.lineTo(481,130);
ctx.closePath();
ctx.fillStyle = '#EBEBEB';
ctx.fill();
//Petit losange2
ctx.beginPath();
ctx.moveTo(488,135);
ctx.lineTo(491,129);
ctx.lineTo(497,135);
ctx.lineTo(497,140);
ctx.lineTo(492,145);
ctx.lineTo(488,140);
ctx.closePath();
ctx.fillStyle = '#878787';
ctx.fill();
//Petit losange3
ctx.beginPath();
ctx.moveTo(500,125);
ctx.lineTo(504,121);
ctx.lineTo(509,125);
ctx.lineTo(509,130);
ctx.lineTo(504,133);
ctx.lineTo(500,130);
ctx.closePath();
ctx.fillStyle = '#ea4e1a';
ctx.fill();
