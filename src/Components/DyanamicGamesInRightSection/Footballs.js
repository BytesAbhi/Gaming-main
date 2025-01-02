import React from "react";

const Footballs = () => {
  const names = [
    {
        "match": "Benchmaji Bunna - Soloda Adwa",
        "date": "09/12/2024",
        "time": "05:15:00 PM"
    },
    {
        "match": "Kapaz Res. - Metallurg Bekobod",
        "date": "09/12/2024",
        "time": "05:15:00 PM"
    },
    {
        "match": "FK Olympic - Zira II",
        "date": "09/12/2024",
        "time": "05:15:00 PM"
    },
    {
        "match": "SC Gjilani U19 - Trepca 89 U19",
        "date": "09/12/2024",
        "time": "05:20:00 PM"
    },
    {
        "match": "Fuvahmulah City - Thaa Thimarafushi",
        "date": "09/12/2024",
        "time": "05:22:00 PM"
    },
    {
        "match": "Omedla - Siltie Worabe",
        "date": "09/12/2024",
        "time": "05:23:00 PM"
    },
    {
        "match": "CFF Olimpia Cluj W - Csikszereda Miercurea Ciuc W",
        "date": "09/12/2024",
        "time": "05:24:00 PM"
    },
    {
        "match": "Sumgayit II - Neftci II",
        "date": "09/12/2024",
        "time": "05:24:00 PM"
    },
    {
        "match": "Isparta DavrazSpor - Batman Petrolspor",
        "date": "09/12/2024",
        "time": "07:10:00 PM"
    },
    {
        "match": "Muglaspor - Silivrispor",
        "date": "09/12/2024",
        "time": "07:10:00 PM"
    },
    {
        "match": "Al Nojoom - Al Jeel",
        "date": "09/12/2024",
        "time": "05:25:00 PM"
    },
    {
        "match": "PSS Sleman v Persib Bandung",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Makedonikos v PAOK B",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Durame Ketema - Debre Birhan Ketema",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Al Zulfi - Al Ain FC (KSA)",
        "date": "09/12/2024",
        "time": "05:40:00 PM"
    },
    {
        "match": "Al Jabalain - Al Najma (KSA)",
        "date": "09/12/2024",
        "time": "05:50:00 PM"
    },
    {
        "match": "Tuna Luso Brasileira U20 - Remo U20",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Bylis Ballsh v Partizani Tirana",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "KS Pogradeci - KS Burreli",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Olympic El Qanal v El Seka Elhadeed",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Panionios v Panargiakos",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Telecom Egypt SC v Tanta",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "El Daklyeh v Abo Qair Semads",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Al Mokawloon v El Mansurah",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Sporting Club v La Viena FC",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
      "match": "Al Sharjah U23 - Ajman Club U23",
      "date": "09/12/2024",
      "time": "06:15:00 PM"
  },
  {
      "match": "Dibba Al-Hisn U23 - Al Nasr U23",
      "date": "09/12/2024",
      "time": "06:15:00 PM"
  },
  {
      "match": "Al Bataeh U23 - Al Wasl U23",
      "date": "09/12/2024",
      "time": "06:15:00 PM"
  },
  {
      "match": "Shabab Al Ahli Dubai U23 - Khor Fakkan U23",
      "date": "09/12/2024",
      "time": "06:15:00 PM"
  },
  {
      "match": "OFK Beograd v FK Novi Pazar",
      "date": "09/12/2024",
      "time": "06:30:00 PM"
  },
  {
      "match": "Atletico Fenix Montevideo Reserves - Nacional Montevideo II",
      "date": "09/12/2024",
      "time": "06:30:00 PM"
  },
  {
      "match": "Birmingham U21 v Wigan Athletic U21",
      "date": "09/12/2024",
      "time": "06:30:00 PM"
  },
  {
      "match": "Gol Gohar - Tractor Sazi",
      "date": "09/12/2024",
      "time": "07:30:00 PM"
  },
  {
      "match": "Bristol City U21 v Brentford U21",
      "date": "09/12/2024",
      "time": "07:30:00 PM"
  },
  {
      "match": "PFK Turan Tovuz v Shamakhi FK",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "Akwa United - Bendel Insurance",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "FK Javor Ivanjica v FK Mladost Novi Sad",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "FK IMT Novi Beograd v FK Napredak",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "Jeddah Club - Al Faisaly Harmah",
      "date": "09/12/2024",
      "time": "08:50:00 PM"
  },
  {
      "match": "Hermannstadt v Otelul Galati",
      "date": "09/12/2024",
      "time": "09:00:00 PM"
  },
  {
      "match": "ACF Fiorentina U20 - Lazio U20",
      "date": "09/12/2024",
      "time": "09:00:00 PM"
  },
  {
      "match": "Kallithea v Levadiakos",
      "date": "09/12/2024",
      "time": "09:00:00 PM"
  },
  {
      "match": "Polissya Zhytomyr v Rukh Vynnyky",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "Al Hussein v Shabab Al Ordon",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "Al Riffa v Al Ahli (BRN)",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "Al Khalidiyah v Al-Shabbab (BRN)",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "KF Tirana v KS Teuta Durres",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "Diambars - AS Douanes (SEN)",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "ASC Niarry Tally (SEN) - RS Yoff",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
    "match": "Amed Sportif Faaliyetler v Sanliurfaspor",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "Hapoel Ramat HaSharon - Hapoel Raanana",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "Hapoel Rishon Lezion - Hapoel Kfar Shalem",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "Hapoel Ramat Gan - Maccabi Herzliya",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "Radnicki Nis v FK Radnicki 1923",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "Erokspor A.S v Umraniyespor",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "Gaziantep FK v Rizespor",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "FK Zeljeznicar Sarajevo - NK GOSK Gabela",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "La Tribu de Cd. Juarez - Club Atletico Tijuana",
    "date": "09/12/2024",
    "time": "11:01:00 PM"
},
{
    "match": "Inova - CO Korhogo",
    "date": "09/12/2024",
    "time": "11:30:00 PM"
},
{
    "match": "LKS Lodz v Arka Gdynia",
    "date": "09/12/2024",
    "time": "11:30:00 PM"
},
{
    "match": "Korona Kielce v Pogon Szczecin",
    "date": "09/12/2024",
    "time": "11:30:00 PM"
},
{
    "match": "Remo W - Paysandu SC W",
    "date": "10/12/2024",
    "time": "12:00:00 AM"
},
{
    "match": "Universitatea Cluj v CFR Cluj",
    "date": "10/12/2024",
    "time": "12:00:00 AM"
},
{
    "match": "Tiradentes W - Tuna Luso W",
    "date": "10/12/2024",
    "time": "12:00:00 AM"
},
{
    "match": "Swansea U21 v Watford U21",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "Jong Ajax Amsterdam v De Graafschap",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "Jong FC Utrecht v FC Eindhoven",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "CD Gualberto Villarroel v Nacional Potosi",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "Jong PSV Eindhoven v Roda JC",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "Lucchese v Arezzo",
    "date": "10/12/2024",
    "time": "01:00:00 AM"
},
{
    "match": "Perugia v Nuovo Campobasso",
    "date": "10/12/2024",
    "time": "01:00:00 AM"
},
{
    "match": "FC Cartagena v Sporting Gijon",
    "date": "10/12/2024",
    "time": "01:00:00 AM"
},
{
    "match": "FC Giugliano v Monopoli",
    "date": "10/12/2024",
    "time": "01:00:00 AM"
},
{
    "match": "Metz v Dunkerque",
    "date": "10/12/2024",
    "time": "01:15:00 AM"
},
{
  "match": "AC Monza v Udinese",
  "date": "10/12/2024",
  "time": "01:15:00 AM"
},
{
  "match": "Getafe v Espanyol",
  "date": "10/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Northampton v Peterborough",
  "date": "10/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Tigre v Independiente Rivadavia",
  "date": "10/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "West Ham v Wolves",
  "date": "10/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Club Football Estrela v Arouca",
  "date": "10/12/2024",
  "time": "01:45:00 AM"
},
{
  "match": "Humble Lions v Mount Pleasant FC",
  "date": "10/12/2024",
  "time": "03:30:00 AM"
},
{
  "match": "Argentinos Juniors v San Lorenzo",
  "date": "10/12/2024",
  "time": "03:45:00 AM"
},
{
  "match": "Belgrano v Estudiantes",
  "date": "10/12/2024",
  "time": "03:45:00 AM"
},
{
  "match": "Ind Petrolero v Universitario de Vi",
  "date": "10/12/2024",
  "time": "05:00:00 AM"
},
{
  "match": "Arnett Gardens FC v Harbour View FC",
  "date": "10/12/2024",
  "time": "06:00:00 AM"
},
{
  "match": "Huracan v CA Platense",
  "date": "10/12/2024",
  "time": "06:00:00 AM"
},
{
  "match": "CA Independiente v Atl Tucuman",
  "date": "10/12/2024",
  "time": "06:00:00 AM"
},
{
  "match": "Guadalupe F.C v Marineros de Puntarenas FC",
  "date": "10/12/2024",
  "time": "06:30:00 AM"
},
{
  "match": "Girona v Liverpool",
  "date": "10/12/2024",
  "time": "11:15:00 PM"
},
{
  "match": "Dinamo Zagreb v Celtic",
  "date": "10/12/2024",
  "time": "11:15:00 PM"
},
{
  "match": "RB Leipzig v Aston Villa",
  "date": "11/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Shakhtar v Bayern Munich",
  "date": "11/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Leverkusen v Inter",
  "date": "11/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Club Brugge v Sporting Lisbon",
  "date": "11/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Red Bull Salzburg v Paris St-G",
  "date": "11/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Atalanta v Real Madrid",
  "date": "11/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Brest v PSV",
  "date": "11/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Atletico Madrid v Slovan Bratislava",
  "date": "11/12/2024",
  "time": "11:15:00 PM"
},
{
  "match": "Lille v Sturm Graz",
  "date": "11/12/2024",
  "time": "11:15:00 PM"
},
{
        "match": "Al-Ettifaq v Al-Taawoun",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Al-Ahli Saudi v Al-Adalah",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Al-Nassr v Al-Khaleej",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Al-Shabab v Al-Faisaly",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Al-Hilal v Al-Raed",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Al-Fateh v Al-Ittihad",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Al-Hazem v Al-Wehda",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Damac FC v Abha Club",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
      "match": "Juventus v Man City",
      "date": "12/12/2024",
      "time": "01:30:00 AM"
  },
  {
      "match": "Arsenal v Monaco",
      "date": "12/12/2024",
      "time": "01:30:00 AM"
  },
  {
      "match": "Dortmund v Barcelona",
      "date": "12/12/2024",
      "time": "01:30:00 AM"
  },
  {
      "match": "Feyenoord v Sparta Prague",
      "date": "12/12/2024",
      "time": "01:30:00 AM"
  },
  {
      "match": "AC Milan v Crvena Zvezda",
      "date": "12/12/2024",
      "time": "01:30:00 AM"
  },
  {
      "match": "Stuttgart v Young Boys",
      "date": "12/12/2024",
      "time": "01:30:00 AM"
  },
  {
      "match": "Benfica v Bologna",
      "date": "12/12/2024",
      "time": "01:30:00 AM"
  }
]

  const showGames = [
    {
        "name": "MINI SUPER OVER",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "GOAL",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "ANDAR BAZAR",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "130 CARDS",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "LUCKY 15",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "SUPER OVER2",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/superover2.jpg"
    },
    {
        "name": "TEENPATTI",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI TEST",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI OPEN",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "POKER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "1-DAY TEENPATTI",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "INSTANT",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "SIC BO",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "BALL BY BALL",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "INSTANT 2.0",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "ROULETTE",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI TEST",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI OPEN",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "POKER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "POKER 6 PLAYERS",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "BACCARAT",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "ONLINE BACCARAT",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "20-20 DRAGON TIGER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "1 DAY DRAGON TIGER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "20-20 TIGER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "20-20 DRAGON",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "32 CARDS RUMMY",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "22 CARDS RUMMY",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "3 CARDS JOKIWILD",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "CASINO WAR",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "WORLD MATKA",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "INSTANT WORLD",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "ANDAR BAZAR",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "BOLLYWOOD CASINO",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "LOTTERY",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "CRICKET LIVE",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "CRICKET MATCH 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "CASINO METER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "QUEEN",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "RACE",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "LUCKY 7-C",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "SUPER OVER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "THE TRAP",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
      "name": "2 Cards Teenpatti",
      "image": "https://i.imgur.com/c59439a.png" 
  },
  {
      "name": "Muflis Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "20-20 Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "2 Cards Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "20Card Baccarat",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Muflis Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Race to 17",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "20-20 Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Trio",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Note Number",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Kaun Banega Crorepati",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "1 Card 20-20",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "1 Card One-Day",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Roulette",
      "image": "https://i.imgur.com/c59439a.png"
  },
 
  {
      "name": "Race to 2nd",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Instant Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Dus Ka Dum",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "1 Card Meter",
      "image": "https://i.imgur.com/c59439a.png"
  }
]

  const activeCircleIndices = [0, 1, 2, 3, 4, 5,6,7];
  const televisionIndices = [0, 1, 2, 3, 4, 5, 8, 11, 14, 15];
  const fIconIndices = [0, 1, 2, 3, 4, 5, 9,11];

  return (
    <div className="crickets_container">
      <div className="line"></div>
      <div className="top_names">
        <p>Game</p>
        <div className="bet">
          <p>1</p>
          <p>X</p>
          <p>2</p>
        </div>
      </div>
      <div className="line2"></div>
      <div className="games_descriptions">
        {names.map((data, idx) => (
          <div className="set_data" key={idx}>
            <div className="set_names_icons">
              <div className="data_names">
                <span style={{ cursor: "pointer" }}>
                  {data.match} / {data.date} / {data.time}
                </span>
              </div>
              <div className="set_dataIcons">
                <div className="active_nonActive_icons">
                  {/* Circle Icon */}
                  {activeCircleIndices.includes(idx) ? (
                    <span className="active_circle"></span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )}

                  {/* Television Icon */}
                  {televisionIndices.includes(idx) ? (
                    <i className="ri-tv-fill"></i>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )}

                  {/* F Icon */}
                  {fIconIndices.includes(idx) ? (
                    <span style={{ fontWeight: "bold" }}>f</span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )}

                  {/* BM Icon */}
                  {fIconIndices.includes(idx) ? (
                    <span style={{ fontWeight: "bold" }}>BM</span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )}
                </div>
              </div>
            </div>
            <div className="place_bet">
              {/* first bet box  */}
              <div className="first_bet">
                <div className="first_betBox">-</div>
                <div className="second_betBox">-</div>
              </div>
              {/* second bet box */}
              <div className="second_bet">
              <div className="first_betBox">-</div>
              <div className="second_betBox">-</div>
              </div>
              {/* third bet box */}
              <div className="third_bet">
              <div className="first_betBox">-</div>
              <div className="second_betBox">-</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* show all games */}
      <div className="showAll_games">
        {
          showGames.map((games,idx)=>{
            return <div className="games_img" key={idx}>
              <img src={games.image} alt="game_img" />
              <p>{games.name}</p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Footballs;
