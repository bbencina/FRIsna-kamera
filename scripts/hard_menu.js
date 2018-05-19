var monMenu = ["Le\u010din lonec",
              "Bogra\u010d gola\u017e",
              "Makaronovo meso",
              "Puranji file na \u017earu s prilogo",
              "Pi\u0161\u010dan\u010dji file na \u017earu s prilogo",
              "Ocvrte sardelice s prilogo",
              "Svinjski zrezek po tolminsko, pe\u010den krompir",
              "Ocvrta cveta\u010da s tatarsko omako, ameri\u0161ka solata",
              "Svinjski kotlet po dunajsko, pra\u017een krompir",
              "Dunajski zrezek s prilogo",
              "Ocvrti sir s prilogo, tatarska omaka",
              "Brokolijevi polpeti z le\u0161niki in prilogo",
              "Pi\u0161\u010dan\u010dji file na \u017earu s prilogo",
              "Ocvrti osli\u010d s prilogo",
              "Pra\u017een krompir",
              "Du\u0161ena zelenjava",
              "Du\u0161en ri\u017e",
              "Eko rjava le\u010da"];
var tueMenu = ["Ri\u010det",
              "Ri\u010det s prekajenim mesom",
              "Pi\u0161\u010dan\u010dji curry, priloga z eko pisanim ri\u017eem",
              "Krompirjeva mesna musaka",
              "Kaneloni s korenjem in porom, tatarska omaka, priloga",
              "Leskova\u010dki \u010devap\u010di\u010di, \u017ear priloga, pomfrit",
              "Svinjski medaljoni v omaki z belu\u0161i in sirom, metulj\u010dki",
              "Dunajski zrezek s prilogo",
              "Ocvrti sir s prilogo, tatarska omaka",
              "Pi\u0161\u010dan\u010dji file na \u017earu s prilogo",
              "Ocvrti osli\u010d s prilogo",
              "Brokolijevi polpeti z le\u0161niki in prilogo"];
var wenMenu = ["Toskanska ribollita",
              "Pasulj s klobaso",
              "Goveji ragu, kruhova rezina",
              "Ocvrto bedro brez kosti, pra\u017een krompir",
              "Polnozrnati njoki z mladim sirom in rukolo",
              "Polnjena svinjska prsa, d\u017euve\u010d ri\u017e",
              "Postrv po tr\u017ea\u0161ko, du\u0161ena zelenjava",
              "Dunajski zrezek s prilogo",
              "Ocvrti sir s prilogo, tatarska omaka",
              "Pi\u0161\u010dan\u010dji file na \u017earu s prilogo",
              "Ocvrti osli\u010d s prilogo",
              "Brokolijevi polpeti z le\u0161niki in prilogo"];
var thuMenu = ["Lonec s pisano eko le\u010do",
              "Pi\u0161\u010dan\u010dja obara z jaj\u010dnimi \u017eli\u010dniki",
              "Puranja ri\u017eota z belu\u0161i",
              "Sesekljana pe\u010denka, pire krompir, kremna \u0161pina\u010da",
              "Pi\u0161\u010dan\u010dji file na \u017earu s prilogo",
              "Gratinirane pala\u010dinke s skuto, kompot",
              "Ljubljanski zrezek, francoska solata",
              "Dunajski zrezek s prilogo",
              "Ocvrti sir s prilogo, tatarska omaka",
              "Pi\u0161\u010dan\u010dji file na \u017earu s prilogo",
              "Ocvrti osli\u010d s prilogo",
              "Brokolijevi polpeti z le\u0161niki in prilogo",
              "Du\u0161ena zelenjava",
              "Du\u0161en ri\u017e",
              "Pra\u017een krompir"];
var friMenu = ["Pa\u0161ta fi\u017eol",
              "Pa\u0161ta fi\u017eol s klobaso",
              "\u0160pageti s tunino omako",
              "Pi\u0161\u010dan\u010dji file na \u017earu s prilogo",
              "Tortilja s pi\u0161\u010dancem, nacho sir",
              "Svinjski kotlet po dunajsko, pra\u017een krompir",
              "Ljubljanski zrezek, pra\u017een krompir",
              "Pe\u010den svinjski vrat, naravna omaka, pra\u017een krompir",
              "Dunajski zrezek s prilogo",
              "Ocvrti sir s prilogo, tatarska omaka",
              "Pi\u0161\u010dan\u010dji file na \u017earu s prilogo",
              "Ocvrti osli\u010d s prilogo",
              "Brokolijevi polpeti z le\u0161niki in prilogo",
              "Pra\u017een krompir",
              "Du\u0161en ri\u017e",
              "Pe\u010dena zelenjava na \u017earu",
              "Du\u0161ena zelenjava"];

var d = new Date();
var day = d.getDay();
var jedilnik;
/*
if (day === 1) {
  jedilnik = monMenu;
} else if (day === 2) {
  jedilnik = tueMenu;
} else if (day === 3) {
  jedilnik = wenMenu;
} else if (day === 4) {
  jedilnik = tueMenu;
} else if (day === 5) {
  jedilnik = tueMenu;
} else {
  jedilnik = ["Vikend je, pojdi domov."];
}*/

jedilnik = monMenu;
var ulist = document.getElementById("ulist_food");


for (var i = 0; i < jedilnik.length; i++) {
  var food_item = document.createTextNode("> " + jedilnik[i] + ".");
  var item_holder = document.createElement("div");
  item_holder.appendChild(food_item);
  ulist.appendChild(item_holder);
}
