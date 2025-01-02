import React from "react";

const Cricket = () => {
  const names = [
    { match: "South Africa v Sri Lanka", date: "05/12/2024", time: "02:00:00 PM" },
    { match: "Australia v India", date: "06/12/2024", time: "09:30:00 AM" },
    { match: "Western Province v Knights", date: "06/12/2024", time: "01:30:00 PM" },
    { match: "Karnali Yaks v Biratnagar Kings", date: "07/12/2024", time: "01:00:00 PM" },
    { match: "Bangladesh Women v Ireland Women", date: "07/12/2024", time: "01:30:00 PM" },
    { match: "TKR XI v JT XI", date: "07/12/2024", time: "02:35:00 PM" },
    { match: "Chennai Super Kings T10 v Super Giants T10", date: "07/12/2024", time: "03:05:00 PM" },
    { match: "India T10 v West Indies T10", date: "07/12/2024", time: "03:10:00 PM" },
    { match: "Brisbane Heat T10 v Adelaide Strikers T10", date: "07/12/2024", time: "03:15:00 PM" },
    { match: "Test A v Test B", date: "05/12/2024", time: "12:00:00 AM" },
    { match: "New Zealand v England", date: "06/12/2024", time: "03:30:00 AM" },
    { match: "Rajasthan Royals XI v Lucknow Super Giants XI", date: "07/12/2024", time: "03:30:00 PM" },
    { match: "Stallions v Panthers", date: "07/12/2024", time: "04:00:00 PM" },
    { match: "Australia Women v India Women", date: "08/12/2024", time: "05:15:00 AM" },
    { match: "Bangladesh Under-19 v India Under-19", date: "08/12/2024", time: "10:30:00 AM" },
    { match: "South Africa Women v England Women", date: "08/12/2024", time: "01:30:00 PM" },
    { match: "West Indies v Bangladesh", date: "08/12/2024", time: "07:00:00 PM" },
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

export default Cricket;
