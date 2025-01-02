import React, { useState } from "react";
import "./HorseRacings.css";

const HorseRacings = () => {
  const [selectedId, setSelectedId] = useState(1);

  const miniData = [
    {
      id: 1,
      short: "FR",
      data1: "Chantilly",
      data2: "Fontainebleau",
      data3: "Marseille",
      time1: "16:30",
      time2: "17:05",
      time3: "17:40",
      time4: "18:25",
      time5: "19:00",
      time6: "19:35",
      time7: "20:10",
      time8: "20:45",
    },
    {
      id: 2,
      short: "GB",
      data1: "Fontwell",
      data2: "Uttoxeter",
      data3: "Southwell",
      time1: "14:30",
      time2: "15:00",
      time3: "15:30",
      time4: "16:00",
      time5: "16:30",
      time6: "17:00",
      time7: "17:30",
      time8: "18:00",
    },
    {
      id: 3,
      short: "ZA",
      data1: "Kenilworth",
      data2: "Turffontein",
      data3: "Greyville",
      time1: "13:30",
      time2: "14:00",
      time3: "14:30",
      time4: "15:00",
      time5: "15:30",
      time6: "16:00",
      time7: "16:30",
      time8: "17:00",
    },
    {
      id: 4,
      short: "AU",
      data1: "Northam",
      data2: "Mount Gambier",
      data3: "Caulfield",
      time1: "10:30",
      time2: "11:00",
      time3: "11:30",
      time4: "12:00",
      time5: "12:30",
      time6: "13:00",
      time7: "13:30",
      time8: "14:00",
    },
    {
      id: 5,
      short: "IN",
      data1: "Mumbai",
      data2: "Pune",
      data3: "Kolkata",
      time1: "18:00",
      time2: "18:30",
      time3: "19:00",
      time4: "19:30",
      time5: "20:00",
      time6: "20:30",
      time7: "21:00",
      time8: "21:30",
    },
    {
      id: 6,
      short: "IE",
      data1: "Curragh",
      data2: "Leopardstown",
      data3: "Galway",
      time1: "13:30",
      time2: "14:00",
      time3: "14:30",
      time4: "15:00",
      time5: "15:30",
      time6: "16:00",
      time7: "16:30",
      time8: "17:00",
    },
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

  const handleClick = (id) => {
    setSelectedId(id);
  };

  // Find the selected item
  const selectedData = miniData.find((data) => data.id === selectedId);

  return (
    <div className="horse_container">
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
        </div>
      )}
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

export default HorseRacings;
