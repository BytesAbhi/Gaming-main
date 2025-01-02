import React, { useState } from "react";

const GreyHoundRacing = () => {
  const [selectedId, setSelectedId] = useState(1);
  const miniData = [
    {
      id: 1,
      short: "GB",
      data1: "Chantilly",
      data2: "Fontainebleau",
      data3: "Marseille",
      data4: "Perry Barr",
      data5: "Oxford",
      data6: "Sheffield",
      data7: "Swindon",
      data8: "Towcester",
      data9: "Doncaster",
      data10: "Monmore",
      data11: "Romford",
      data12: "Newcastle",
      data13: "Central Park",
    },
    {
      id: 2,
      short: "AU",
      data1: "Mandurah",
      data2: "Gosford",
      data3: "Bulli",
      data4: "Townsville",
      data5: "Warragul",
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

  const handleClick = (id) => {
    setSelectedId(id);
  };

  // Find the selected item
  const selectedData = miniData.find((data) => data.id === selectedId);
  return (
    <div>
      {/* Render the list */}
      <div className="short_name">
        {miniData.map((data) => (
          <li
            key={data.id}
            className={`short_data ${selectedId === data.id ? "selected" : ""}`}
            onClick={() => handleClick(data.id)}
          >
            {data.short}
          </li>
        ))}
      </div>

      {/* Render the data below the list */}
      {selectedData && (
        <div className="details">
          <div className="set_selectedData">
            <div>
            <i className="ri-tv-fill"></i>
            <span>{selectedData.data1}</span>
            </div>
           
          </div>
          <div className="set_selectedData">
          <div>
            <i className="ri-tv-fill"></i>
            <span>{selectedData.data2}</span>
            </div>
          
          </div>
          <div className="set_selectedData">
          <div>
            <i className="ri-tv-fill"></i>
            <span>{selectedData.data3}</span>
            </div>
          </div>

          <div className="set_selectedData">
          <div>
            <i className="ri-tv-fill"></i>
            <span>{selectedData.data4}</span>
            </div>
          </div>

          <div className="set_selectedData">
          <div>
            <i className="ri-tv-fill"></i>
            <span>{selectedData.data5}</span>
            </div>
          </div>

        </div>
      )}
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

export default GreyHoundRacing;
