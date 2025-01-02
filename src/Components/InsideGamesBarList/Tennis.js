import React from "react";

const Tennis = () => {
  const names = [
    {
        "match": "Xiyu Wang v Paula Badosa",
        "date": "09/12/2024",
        "time": "11:45:00 AM"
    },
    {
        "match": "Parrizas Diaz v J Teichmann",
        "date": "09/12/2024",
        "time": "04:35:00 PM"
    },
    {
        "match": "Arlinda Rushiti - Pia Praefke",
        "date": "09/12/2024",
        "time": "05:45:00 PM"
    },
    {
        "match": "Kristiana Sidorova - Hou Yanan",
        "date": "09/12/2024",
        "time": "05:45:00 PM"
    },
    {
        "match": "Alexis Canter - Ivan Perez Martin",
        "date": "09/12/2024",
        "time": "06:30:00 PM"
    },
    {
        "match": "Norhan Hesham - Dunja Maric",
        "date": "09/12/2024",
        "time": "06:30:00 PM"
    },
    {
        "match": "Denise Hrdinkova - Patricia G Goina",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Carlos Divar - Sam Kydd Baumgartner",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Stefan Adrian Andreescu - Piet Luis Pinter",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Izabela heinzova - Katarina Pavlechova",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Carl Labitzke - Giorgio Binda",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Gabriele Maria Noce - Syl Gaxherri",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Noah Perfetti - Denis Constantin Spiridon",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Nicolo Consonni - Mattias Southcombe",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Y. Onuma - Michalis Sakellaridis",
        "date": "09/12/2024",
        "time": "07:00:00 PM"
    },
    {
        "match": "Max Purcell v Marton Fucsovics",
        "date": "09/12/2024",
        "time": "11:40:00 AM"
    },
    {
        "match": "Alexander Wagner - Dinko Dinev",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Niccolo Ciavarella - Enrico Baldisserri",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Yacoub Makzoume - Kelsey Stevenson",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Mar Rouvroy v Lepchenko",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Kanan Gasimov - Andrea Paolini",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Yuquan Jin - Vit Kalina",
        "date": "09/12/2024",
        "time": "05:30:00 PM"
    },
    {
        "match": "Sebastian Grundtvig Jorgensen - Harry Thursfield",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
        "match": "Park, Yong Joon - Woong Bi Lee",
        "date": "09/12/2024",
        "time": "06:00:00 PM"
    },
    {
      "match": "Daria Zelinskaya - Yasmin Ezzat",
      "date": "09/12/2024",
      "time": "06:00:00 PM"
  },
  {
      "match": "Ela Nala Milic - Jeongha Oh",
      "date": "09/12/2024",
      "time": "06:00:00 PM"
  },
  {
      "match": "Anastasia Kovaleva - Zixuan Zeng",
      "date": "09/12/2024",
      "time": "06:00:00 PM"
  },
  {
      "match": "Evgeniya Burdina - Dominika Pirohova",
      "date": "09/12/2024",
      "time": "06:00:00 PM"
  },
  {
      "match": "Alvaro Bueno Gil - Massimo Pizzigoni",
      "date": "09/12/2024",
      "time": "06:30:00 PM"
  },
  {
      "match": "Sara Mienska - Sophia Ksandinov",
      "date": "09/12/2024",
      "time": "06:45:00 PM"
  },
  {
      "match": "Daniel Kliebhan - Vadym Konovchuk",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Ruslan Tiukaev - Daniel Marincas",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Osti, Fabrizio Karol Pio - Matthias Ujvary",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Radu David Turcanu - Aleksandr Lobanov",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Golubic v Ekat Makarova",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Dan Martin - Christian Fellin",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Aglaya Fedorova - Sarah Iliev",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Victoria Gomez - Alisa Ozgun",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "El Seidel v Car Monnet",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "Adriana Reami - Lucia Donnelly",
      "date": "09/12/2024",
      "time": "08:30:00 PM"
  },
  {
      "match": "Maria Tig v Bolkvadze",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "Alice Otis - Chloe Fouhey",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "Raphaelle Lacasse - Alex Ackman",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "Talita Swart - Meri Sandenbergh",
      "date": "09/12/2024",
      "time": "11:01:00 PM"
  },
  {
      "match": "Sapir Cohen - Marelie Raath",
      "date": "09/12/2024",
      "time": "11:01:00 PM"
  },
  {
      "match": "Talita Swart - Sandenbergh Vivien / Meri Eszter",
      "date": "09/12/2024",
      "time": "11:01:00 PM"
  },
  {
      "match": "Mathilde Ngijol Carre - Angelica Van Vuuren",
      "date": "09/12/2024",
      "time": "11:01:00 PM"
  },
  {
      "match": "Denzel Seetso - Alexey Aleshchev",
      "date": "09/12/2024",
      "time": "11:01:00 PM"
  },
  {
      "match": "Vivian Mayumi Toma - Milla Kotze",
      "date": "09/12/2024",
      "time": "11:01:00 PM"
  },
  {
    "match": "Tommaso Schold - Ryoto Tachi",
    "date": "09/12/2024",
    "time": "11:01:00 PM"
},
{
    "match": "Matthew harris - Victor Braga",
    "date": "09/12/2024",
    "time": "11:01:00 PM"
},
{
    "match": "Nicol Benesova - Rachelle Starreveld",
    "date": "09/12/2024",
    "time": "11:01:00 PM"
},
{
    "match": "Bogdan Seleznev - Vasilios Caripi",
    "date": "09/12/2024",
    "time": "11:01:00 PM"
},
{
    "match": "Victor Hugo Remondy Pagotto - Ivan Zaytsev",
    "date": "09/12/2024",
    "time": "11:01:00 PM"
},
{
    "match": "Andreeva/Janicijevic v Cavalle-Reimer/Lechemia",
    "date": "09/12/2024",
    "time": "11:30:00 PM"
},
{
    "match": "Sophia Cisse-Ignatiev - Maria Tatarnikova",
    "date": "09/12/2024",
    "time": "11:30:00 PM"
},
{
    "match": "Katya Townsend - Ellie Schoppe",
    "date": "09/12/2024",
    "time": "11:30:00 PM"
},
{
    "match": "Lauren Kettlewell - Katsiaryna Starastsenka",
    "date": "10/12/2024",
    "time": "01:00:00 AM"
},
{
    "match": "Veronica Miroshnichenko - Stephanie Shogreen",
    "date": "10/12/2024",
    "time": "01:30:00 AM"
},
{
    "match": "Ellie Pittman - Alexandra Sasha Vagramov",
    "date": "10/12/2024",
    "time": "01:45:00 AM"
},
{
    "match": "Sabrina Lin - Brooke Kwon",
    "date": "10/12/2024",
    "time": "01:45:00 AM"
},
{
    "match": "Emily Deming - Elizabeth Fauchet",
    "date": "10/12/2024",
    "time": "01:45:00 AM"
},
{
    "match": "Yui Chikaraishi - Bianca Compuesto",
    "date": "10/12/2024",
    "time": "02:30:00 AM"
},
{
    "match": "Mansouri v Zakharova",
    "date": "10/12/2024",
    "time": "05:30:00 AM"
},
{
    "match": "Ali Charaeva v D Yastremska",
    "date": "10/12/2024",
    "time": "05:30:00 AM"
},
{
    "match": "Kat von Deichmann v Poli Kudermetova",
    "date": "10/12/2024",
    "time": "05:30:00 AM"
},
{
    "match": "Ipek Oz v Er Andreeva",
    "date": "10/12/2024",
    "time": "05:30:00 AM"
},
{
    "match": "Alexandrova v Tama Korpatsch",
    "date": "10/12/2024",
    "time": "05:30:00 AM"
},
{
    "match": "P Martic v Sara Saito",
    "date": "10/12/2024",
    "time": "05:30:00 AM"
},
{
    "match": "Tikhonova v Els Jacquemot",
    "date": "10/12/2024",
    "time": "05:30:00 AM"
},
{
    "match": "E Ruse v Blinkova",
    "date": "10/12/2024",
    "time": "05:30:00 AM"
},
{
    "match": "Polina Krumkachev - Brandy Walker",
    "date": "10/12/2024",
    "time": "08:00:00 AM"
},
{
    "match": "Chen Yilin - Jeanette Mireles",
    "date": "10/12/2024",
    "time": "08:15:00 AM"
},
{
    "match": "Elena Mireles - Tianmei Wang",
    "date": "10/12/2024",
    "time": "08:15:00 AM"
},
{
  "match": "Test A v Test B",
  "date": "12/12/2024",
  "time": "12:00:00 AM"
}
];


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
    </div>
  );
};

export default Tennis;
