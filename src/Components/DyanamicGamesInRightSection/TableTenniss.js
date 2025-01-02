import React from "react";
import "./Crickets.css";

const TableTenniss = () => {
  const names = [
    {
      match: "Vladimir Postelt - Dorko T",
      date: "09/12/2024",
      time: "05:30:00 PM",
    },
    {
      match: "Oleksandr Syksa - Roman Tveritinov",
      date: "09/12/2024",
      time: "05:30:00 PM",
    },
    {
      match: "Klusacek P - Zdenek Zikmunda",
      date: "09/12/2024",
      time: "06:00:00 PM",
    },
    {
      match: "Alois Kanak - Zbynek Zientek",
      date: "09/12/2024",
      time: "06:00:00 PM",
    },
    {
      match: "Vladimir Cermak - Matej Nohejl",
      date: "09/12/2024",
      time: "06:00:00 PM",
    },
    {
      match: "Vaclav Hruska snr - Jan Steffan",
      date: "09/12/2024",
      time: "06:00:00 PM",
    },
    {
      match: "Jan Steffan - Stanislav Olejarcik",
      date: "09/12/2024",
      time: "06:30:00 PM",
    },
    {
      match: "Rostyslav Kliuchuk - Denis Hofman",
      date: "09/12/2024",
      time: "06:30:00 PM",
    },
    {
      match: "Matej Nohejl - Dorko T",
      date: "09/12/2024",
      time: "06:30:00 PM",
    },
    {
      match: "Zbynek Zientek - Tomas Suta",
      date: "09/12/2024",
      time: "06:30:00 PM",
    },
    {
      match: "Milan Flesar - Klusacek P",
      date: "09/12/2024",
      time: "07:00:00 PM",
    },
    {
      match: "Tomas Regner - Vaclav Hruska snr",
      date: "09/12/2024",
      time: "07:00:00 PM",
    },
    {
      match: "Vasil Stempak - Alois Kanak",
      date: "09/12/2024",
      time: "07:00:00 PM",
    },
    {
      match: "Vladimir Postelt - Vladimir Cermak",
      date: "09/12/2024",
      time: "07:00:00 PM",
    },
    {
      match: "Andrii Datsenko - Ivan Fedoryshyn",
      date: "09/12/2024",
      time: "07:30:00 PM",
    },
    {
      match: "Valerii Chumak - Hennadii Buiano",
      date: "09/12/2024",
      time: "07:35:00 PM",
    },
    {
      match: "Oleksandr Kolbasenko - Maksym Mrykh",
      date: "09/12/2024",
      time: "07:40:00 PM",
    },
    {
      match: "Libor Stacho - Josef Hondlik",
      date: "09/12/2024",
      time: "07:45:00 PM",
    },
    {
      match: "Ruslan Serhyenko - Vitaliy Sydorenko",
      date: "09/12/2024",
      time: "07:55:00 PM",
    },
    {
      match: "Roman Hryhoriev - Dubinin Ihor",
      date: "09/12/2024",
      time: "08:00:00 PM",
    },
    {
      match: "Tomas Hanke - Petr Kotrbacek",
      date: "09/12/2024",
      time: "08:00:00 PM",
    },
    {
      match: "Valerii Lukianevych - Vadym Reva",
      date: "09/12/2024",
      time: "08:05:00 PM",
    },
    {
      match: "Jiri Ruzicka - Tadeas Zika",
      date: "09/12/2024",
      time: "08:30:00 PM",
    },
    {
      match: "Michal Oburka - Martin Cvecek",
      date: "09/12/2024",
      time: "08:30:00 PM",
    },
    {
      match: "Marek Placek - Tibor Kolenic",
      date: "09/12/2024",
      time: "08:30:00 PM",
    },
    {
      match: "Kamil Kleprlik - Radim Urbaniec",
      date: "09/12/2024",
      time: "09:00:00 PM",
    },
    {
      match: "Jiri Hyrsl - Stanislav Olejarcik",
      date: "09/12/2024",
      time: "09:00:00 PM",
    },
    {
      match: "Jan Krupnik - Oldrich Vrtal",
      date: "09/12/2024",
      time: "09:00:00 PM",
    },
    {
      match: "Miroslav Nechas - Vaclav Svoboda",
      date: "09/12/2024",
      time: "09:00:00 PM",
    },
    {
      match: "Tomas Andrle - Tomas Dousa",
      date: "09/12/2024",
      time: "09:00:00 PM",
    },
    {
      match: "Martin Cvecek - Miroslav Nechas",
      date: "09/12/2024",
      time: "09:30:00 PM",
    },
    {
      match: "Tibor Kolenic - Tomas Andrle",
      date: "09/12/2024",
      time: "09:30:00 PM",
    },
    {
      match: "Radim Urbaniec - Jan Krupnik",
      date: "09/12/2024",
      time: "09:30:00 PM",
    },
    {
      match: "Tadeas Zika - Rostyslav Kliuchuk",
      date: "09/12/2024",
      time: "10:00:00 PM",
    },
    {
      match: "Stanislav Olejarcik - Radek Bartunek",
      date: "09/12/2024",
      time: "10:00:00 PM",
    },
    {
      match: "Vaclav Svoboda - Michal Oburka",
      date: "09/12/2024",
      time: "10:00:00 PM",
    },
    {
      match: "Oldrich Vrtal - Kamil Kleprlik",
      date: "09/12/2024",
      time: "10:00:00 PM",
    },
    {
      match: "Tomas Dousa - Marek Placek",
      date: "09/12/2024",
      time: "10:00:00 PM",
    },
    {
      match: "Marek Bartunek - Tomas Hyrsl",
      date: "09/12/2024",
      time: "10:30:00 PM",
    },
    {
      match: "Radek Bartunek - Jiri Andrle",
      date: "09/12/2024",
      time: "10:30:00 PM",
    },
    {
      match: "Kamil Kleprlik - Jan Krupnik",
      date: "09/12/2024",
      time: "10:30:00 PM",
    },
    {
      match: "Michal Oburka - Miroslav Nechas",
      date: "09/12/2024",
      time: "11:00:00 PM",
    },
    {
      match: "Radim Urbaniec - Oldrich Vrtal",
      date: "09/12/2024",
      time: "11:00:00 PM",
    },
    {
      match: "Tadeas Zika - Denis Hofman",
      date: "09/12/2024",
      time: "11:00:00 PM",
    },
    {
      match: "Martin Cvecek - Vaclav Svoboda",
      date: "09/12/2024",
      time: "11:00:00 PM",
    },
    {
      match: "Vitalii Ryndia - Yuriy Reva",
      date: "09/12/2024",
      time: "11:20:00 PM",
    },
    {
      match: "Anatolii Nazarov - Yevhen Skorobahatyi",
      date: "09/12/2024",
      time: "11:25:00 PM",
    },
    {
      match: "Maksym Mrykh - Vladyslav Mishchenko",
      date: "09/12/2024",
      time: "11:40:00 PM",
    },
    {
      match: "Vadim Ishchuk - Valerii Merzlikin",
      date: "09/12/2024",
      time: "11:50:00 PM",
    },
    {
      match: "Pavel Moulis - Stepan Kalensky",
      date: "10/12/2024",
      time: "12:00:00 AM",
    },
    {
      match: "Oleksii Nadporozhskyi - Artem Yurkov",
      date: "10/12/2024",
      time: "12:05:00 AM",
    },
    {
      match: "Valentyn Chumak - Vadym Reva",
      date: "10/12/2024",
      time: "12:10:00 AM",
    },
    {
      match: "Dominik Pawlik - Jiri Vanous",
      date: "10/12/2024",
      time: "12:30:00 AM",
    },
    {
      match: "Stepan Vyskocil - Milan Cakovsky Snr",
      date: "10/12/2024",
      time: "12:30:00 AM",
    },
    {
      match: "Michal Regner - Marcel Pikous",
      date: "10/12/2024",
      time: "12:30:00 AM",
    },
    {
      match: "Tomas Zahradnik - Ondrej Svacha",
      date: "10/12/2024",
      time: "12:30:00 AM",
    },
    {
      match: "Julius Legen - Lubor Sulava",
      date: "10/12/2024",
      time: "01:00:00 AM",
    },
    {
      match: "Martin Sosnovec - Jan Vidourek",
      date: "10/12/2024",
      time: "01:00:00 AM",
    },
    {
      match: "Jakub Hradecky - Zbynek Pagac",
      date: "10/12/2024",
      time: "01:00:00 AM",
    },
    {
      match: "Michal Vavrecka - Jiri Louda",
      date: "10/12/2024",
      time: "01:00:00 AM",
    },
    {
      match: "Ondrej Svacha - Michal Vavrecka",
      date: "10/12/2024",
      time: "01:30:00 AM",
    },
    {
      match: "Marcel Pikous - Jakub Hradecky",
      date: "10/12/2024",
      time: "01:30:00 AM",
    },
    {
      match: "Milan Cakovsky Snr - Martin Sosnovec",
      date: "10/12/2024",
      time: "01:30:00 AM",
    },
    {
      match: "Vaclav Dolezal - Julius Legen",
      date: "10/12/2024",
      time: "01:30:00 AM",
    },
    {
      match: "Jiri Louda - Tomas Zahradnik",
      date: "10/12/2024",
      time: "02:00:00 AM",
    },
    {
      match: "Jan Vidourek - Stepan Vyskocil",
      date: "10/12/2024",
      time: "02:00:00 AM",
    },
    {
      match: "Lubor Sulava - Josef Pelikan",
      date: "10/12/2024",
      time: "02:00:00 AM",
    },
    {
      match: "Zbynek Pagac - Michal Regner",
      date: "10/12/2024",
      time: "02:00:00 AM",
    },
    {
      match: "Michal Regner - Jakub Hradecky",
      date: "10/12/2024",
      time: "02:30:00 AM",
    },
    {
      match: "Tomas Zahradnik - Michal Vavrecka",
      date: "10/12/2024",
      time: "02:30:00 AM",
    },
    {
      match: "Josef Pelikan - Julius Legen",
      date: "10/12/2024",
      time: "02:30:00 AM",
    },
    {
      match: "Stepan Vyskocil - Martin Sosnovec",
      date: "10/12/2024",
      time: "02:30:00 AM",
    },
    {
      match: "Vaclav Dolezal - Lubor Sulava",
      date: "10/12/2024",
      time: "03:00:00 AM",
    },
    {
      match: "Marcel Pikous - Zbynek Pagac",
      date: "10/12/2024",
      time: "03:00:00 AM",
    },
    {
      match: "Milan Cakovsky Snr - Jan Vidourek",
      date: "10/12/2024",
      time: "03:00:00 AM",
    },
    {
      match: "Ondrej Svacha - Jiri Louda",
      date: "10/12/2024",
      time: "03:00:00 AM",
    },
  ];

  const showGames = [
    {
      name: "MINI SUPER OVER",
      image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg",
    },
    {
      name: "GOAL",
      image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg",
    },
    {
      name: "ANDAR BAZAR",
      image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg",
    },
    {
      name: "130 CARDS",
      image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg",
    },
    {
      name: "LUCKY 15",
      image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg",
    },
    {
      name: "SUPER OVER2",
      image:
        "https://dataobj.ecoassetsservice.com/casino-icons/lc/superover2.jpg",
    },
    {
      name: "TEENPATTI",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "TEENPATTI 20-20",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "TEENPATTI TEST",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "TEENPATTI OPEN",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "POKER",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "1-DAY TEENPATTI",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "INSTANT",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "SIC BO",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "BALL BY BALL",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "INSTANT 2.0",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "ROULETTE",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "TEENPATTI 20-20",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "TEENPATTI 20-20",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "TEENPATTI TEST",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "TEENPATTI OPEN",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "POKER",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "POKER 6 PLAYERS",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "BACCARAT",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "ONLINE BACCARAT",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "20-20 DRAGON TIGER",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "1 DAY DRAGON TIGER",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "20-20 TIGER",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "20-20 DRAGON",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "32 CARDS RUMMY",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "22 CARDS RUMMY",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "3 CARDS JOKIWILD",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "CASINO WAR",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "WORLD MATKA",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "INSTANT WORLD",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "ANDAR BAZAR",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "BOLLYWOOD CASINO",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "LOTTERY",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "CRICKET LIVE",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "CRICKET MATCH 20-20",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "CASINO METER",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "TEENPATTI 20-20",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "QUEEN",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "RACE",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "LUCKY 7-C",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "SUPER OVER",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "THE TRAP",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "2 Cards Teenpatti",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Muflis Teenpatti",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "20-20 Teenpatti",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Teenpatti",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "2 Cards Teenpatti",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "20Card Baccarat",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Muflis Teenpatti",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Race to 17",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "20-20 Teenpatti",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Trio",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Note Number",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Kaun Banega Crorepati",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "1 Card 20-20",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "1 Card One-Day",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Roulette",
      image: "https://i.imgur.com/c59439a.png",
    },

    {
      name: "Race to 2nd",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Instant Teenpatti",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "Dus Ka Dum",
      image: "https://i.imgur.com/c59439a.png",
    },
    {
      name: "1 Card Meter",
      image: "https://i.imgur.com/c59439a.png",
    },
  ];

  const activeCircleIndices = [0, 1, 2, 3, 4, 5, 6, 7];
  const televisionIndices = [0, 1, 2, 3, 4, 5, 8, 11, 14, 15];
  const fIconIndices = [0, 1, 2, 3, 4, 5, 9, 11];

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
        {showGames.map((games, idx) => {
          return (
            <div className="games_img" key={idx}>
              <img src={games.image} alt="game_img" />
              <p>{games.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableTenniss;
