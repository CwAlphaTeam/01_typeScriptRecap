"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["user"] = 0] = "user";
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["guest"] = 2] = "guest";
    Roles[Roles["other"] = 3] = "other";
})(Roles || (Roles = {}));
let currentUser = Roles.admin;
console.log(currentUser);
var Puanlar;
(function (Puanlar) {
    Puanlar[Puanlar["kaldi"] = 10] = "kaldi";
    Puanlar[Puanlar["zorlaGecti"] = 15] = "zorlaGecti";
    Puanlar[Puanlar["orta"] = 25] = "orta";
    Puanlar[Puanlar["iyi"] = 50] = "iyi";
    Puanlar[Puanlar["pekiyi"] = 80] = "pekiyi";
})(Puanlar || (Puanlar = {}));
let herhangibiri = Puanlar.iyi;
console.log(herhangibiri);
