import React from "react";

const Basketballs = () => {
  const names = [
    {
      "match": "Margveti - BC CIU",
      "date": "09/12/2024",
      "time": "03:29:00 PM"
  },
  {
      "match": "I-Shou University - National Kaohsiung Normal University",
      "date": "09/12/2024",
      "time": "03:29:00 PM"
  },
  {
      "match": "Mersin Gelisim W - Burhaniye Belediyespor W",
      "date": "09/12/2024",
      "time": "03:29:00 PM"
  },
  {
      "match": "Bursa Uludag Gelisim W - Izmir BSB W",
      "date": "09/12/2024",
      "time": "03:29:00 PM"
  },
  {
      "match": "Daegu Korea Gas Corporation - Changwon LG Sakers",
      "date": "09/12/2024",
      "time": "03:30:00 PM"
  },
  {
      "match": "Shanxi Loongs - Beijing Ducks",
      "date": "09/12/2024",
      "time": "05:05:00 PM"
  },
  {
      "match": "Jiangsu Dragons - Qingdao DoubleStar Eagles",
      "date": "09/12/2024",
      "time": "05:05:00 PM"
  },
  {
      "match": "Jilin Northeast Tigers - Shandong Heroes",
      "date": "09/12/2024",
      "time": "05:05:00 PM"
  },
  {
      "match": "Guangzhou Long-Lions - Zhejiang Chouzhou",
      "date": "09/12/2024",
      "time": "05:05:00 PM"
  },
  {
      "match": "Zhejiang Golden Bulls 2 - Tianjin Gold Lions Reserves",
      "date": "09/12/2024",
      "time": "05:50:00 PM"
  },
  {
      "match": "Al-Fateh - Uhud",
      "date": "09/12/2024",
      "time": "06:30:00 PM"
  },
  {
      "match": "BC Goverla - Cherkaski Mavpy",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Vojvodina U19 - Real Beograd U19",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Al-Gharafa - Al-Wakrah",
      "date": "09/12/2024",
      "time": "07:30:00 PM"
  },
  {
      "match": "Al Ittihad Jeddah - Al Manama",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "Fenerbahce Gelisim W - Kirklareli Fen Bilimleri W",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "Galatasaray - Yalova Group Belediye Spor",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "Sigortam Net ITU Basket - Esenler Erokspor",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "KK Split - Krka Novo Mesto",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "Qatar Sports Club - Al Rayyan",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "BC Kyiv - BC Krivbassbasket",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "Sencur Gorenjska - Helios Suns Domzale",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "Ramat Hasharon W - Maccabi Ramat Gan W",
      "date": "09/12/2024",
      "time": "10:30:00 PM"
  },
  {
      "match": "Hapoel Kfar Saba W - Hapoel Rishon Lezion W",
      "date": "09/12/2024",
      "time": "10:30:00 PM"
  },
  {
      "match": "Hapoel Galil Gilboa BC - Ironi Kiryat Ata",
      "date": "09/12/2024",
      "time": "10:30:00 PM"
  },
  {
    "match": "Mega MIS - KK Borac Cacak",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "CS Rapid Bucuresti - CS Municipal Ploiesti",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "Paralimni - Anorthosis Famagusta",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "Maccabi Haifa W - Hapoel Petah Tikva W",
    "date": "09/12/2024",
    "time": "10:30:00 PM"
},
{
    "match": "BK Beroe - Cherno More Varna",
    "date": "09/12/2024",
    "time": "10:45:00 PM"
},
{
    "match": "Forli U19 - Pino Basket Firenze U19",
    "date": "09/12/2024",
    "time": "11:00:00 PM"
},
{
    "match": "Debreceni EAC - KTE-Duna Aszfalt",
    "date": "09/12/2024",
    "time": "11:00:00 PM"
},
{
    "match": "Novosadska Zka Novi Sad W - Ras Beograd W",
    "date": "09/12/2024",
    "time": "11:00:00 PM"
},
{
    "match": "Slovan Bratislava W - Samorin W",
    "date": "09/12/2024",
    "time": "11:30:00 PM"
},
{
    "match": "Norrkoping Dolphins W - Lulea W",
    "date": "09/12/2024",
    "time": "11:30:00 PM"
},
{
    "match": "PAOK Saloniki - Promitheas Patras",
    "date": "09/12/2024",
    "time": "11:45:00 PM"
},
{
    "match": "Asteras Agiou Dimitriou - As Pera",
    "date": "10/12/2024",
    "time": "12:00:00 AM"
},
{
    "match": "Feniks W - Mladi Krajisnik W",
    "date": "10/12/2024",
    "time": "12:15:00 AM"
},
{
    "match": "Enosi Neas Peramou - proodeftiki",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "Bayern Munich - SC RASTA Vechta",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "AON Argiroupolis - enosi armenion",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "Crvena Zvezda - Cibona Vip",
    "date": "10/12/2024",
    "time": "12:30:00 AM"
},
{
    "match": "Elitzur Ramla W - Hapoel Lev Jerusalem W",
    "date": "10/12/2024",
    "time": "12:35:00 AM"
},
{
    "match": "Thor Thorl - Stjarnan",
    "date": "10/12/2024",
    "time": "12:45:00 AM"
},
{
    "match": "Sindri - KV Reykjavik",
    "date": "10/12/2024",
    "time": "12:45:00 AM"
},
{
    "match": "Breidablik - Haukar",
    "date": "10/12/2024",
    "time": "12:45:00 AM"
},
{
    "match": "Alftanes - Snaefell",
    "date": "10/12/2024",
    "time": "12:45:00 AM"
},
{
    "match": "glyfada enosi - Akadimia Not Proasteion",
    "date": "10/12/2024",
    "time": "01:00:00 AM"
},
{
    "match": "Enosi Iliou - Sporting Athens",
    "date": "10/12/2024",
    "time": "01:00:00 AM"
},
{
    "match": "Panelefsiniakos - Ermis Piraeus",
    "date": "10/12/2024",
    "time": "01:00:00 AM"
},
{
  "match": "Virtus Siena U19 - Etrusca San Miniato U19",
  "date": "10/12/2024",
  "time": "01:00:00 AM"
},
{
  "match": "Keflavik - Tindastoll",
  "date": "10/12/2024",
  "time": "01:00:00 AM"
},
{
  "match": "Kao Likovrisis - AOK Halandari",
  "date": "10/12/2024",
  "time": "01:00:00 AM"
},
{
  "match": "pigasos korydallos - As Ilektroupoli Agrigoupolis",
  "date": "10/12/2024",
  "time": "01:00:00 AM"
},
{
  "match": "AE Renti - GS Ermis Peramatos",
  "date": "10/12/2024",
  "time": "01:00:00 AM"
},
{
  "match": "CA Platense LDD - Regatas Corrientes LDD",
  "date": "10/12/2024",
  "time": "01:00:00 AM"
},
{
  "match": "Argonaftis Triljyas - Pao Koukaki",
  "date": "10/12/2024",
  "time": "01:00:00 AM"
},
{
  "match": "ASD PGS Auxilium U19 - Novipiu Campus Piemonte U19",
  "date": "10/12/2024",
  "time": "01:00:00 AM"
},
{
  "match": "GS Pallinis - Ao Thrakomakedonon",
  "date": "10/12/2024",
  "time": "01:15:00 AM"
},
{
  "match": "Don Bosco Crocetta U19 - Grantorino BK Draft U19",
  "date": "10/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Aonps Posidon - GS Agion Anargyron",
  "date": "10/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "ESKD Neas Ionias - Gas Evnikos",
  "date": "10/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "lonikos Nikaias - Pkao Amilla",
  "date": "10/12/2024",
  "time": "01:30:00 AM"
},
{
  "match": "Club Ciclista Olimpico Le Banda LDD - Ferro Carril Oeste LDD",
  "date": "10/12/2024",
  "time": "03:00:00 AM"
},
{
  "match": "Racing Club de Avellaneda - Hispano Americano",
  "date": "10/12/2024",
  "time": "03:30:00 AM"
},
{
  "match": "Basquete Cearense - Sao Jose",
  "date": "10/12/2024",
  "time": "04:00:00 AM"
},
{
  "match": "Unifacisa - Mogi das Cruzes",
  "date": "10/12/2024",
  "time": "04:00:00 AM"
},
{
  "match": "Vasco da Gama - Minas TC",
  "date": "10/12/2024",
  "time": "04:30:00 AM"
},
{
  "match": "Indiana University Hoosiers - Minnesota Golden Gophers",
  "date": "10/12/2024",
  "time": "05:00:00 AM"
},
{
  "match": "CA Platense - Regatas de Corrientes",
  "date": "10/12/2024",
  "time": "05:00:00 AM"
},
{
  "match": "Norfolk State - Hofstra",
  "date": "10/12/2024",
  "time": "05:30:00 AM"
},
{
  "match": "South Carolina State - Charleston Southern",
  "date": "10/12/2024",
  "time": "05:30:00 AM"
},
{
  "match": "Salta Basket - Jujuy Basquet",
  "date": "10/12/2024",
  "time": "06:00:00 AM"
},
{
  "match": "Lanus - Atletico Pilar",
  "date": "10/12/2024",
  "time": "06:00:00 AM"
},
{
  "match": "New York Knicks @ Toronto Raptors",
  "date": "10/12/2024",
  "time": "06:10:00 AM"
},
{
  "match": "Baylor - Abilene Christian",
  "date": "10/12/2024",
  "time": "06:30:00 AM"
},
{
  "match": "Ciclista Olímpico - Ferro Carril Oeste",
  "date": "10/12/2024",
  "time": "06:30:00 AM"
},
{
  "match": "TEST A v TEST B",
  "date": "31/10/2025",
  "time": "11:00:00 PM"
},
{
  "match": "TEST X v TEST Y",
  "date": "30/11/2025",
  "time": "11:00:00 PM"
}
  ];

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

export default Basketballs;
