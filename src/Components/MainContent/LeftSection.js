import React, { useEffect, useState } from "react";
import "./LeftSection.css";
import axios from 'axios'
import {
  // allSportsList,
  esoccerList,
  cricketSubList,
  footballList,
  tennisList,
  tabletenniesList,
  esoccer,
  basketballList,
  volleyballList,
  snookerList,
  iceHockeyList,
  eGamesList,
  futsalList,
  handballList,
  kabaddiList,
  golfList,
  rugbyLeagueList,
  boxingList,
  beachVolleyballList,
  mmaList,
  motoGPList,
  chessList,
  cyclingList,
  motorbikesList,
  athleticsList,
  basketball3x3List,
  sumoList,
  virtualSportsList,
  motorSportsList,
  baseballList,
  rugbyUnionList,
  dartsList,
  americanFootballList,
  soccerList,
  esportsList,
  boatRacingList,
} from "./TouranamentData";


const LeftSection = () => {

  const[allSportsList,setAllSportsList] = useState([]);
  const[subCategory,setSubCategory] = useState([]);

  const api = async() => {
    const fetchData = await axios.get('https://saffron-abni.onrender.com/api/v1/user/all-category');
    setAllSportsList(fetchData.data.data)
  }

  useEffect(()=>{
    api();
  },[])

  const subCategoryApi = async() => {
    const fetchData =await axios.get('https://saffron-abni.onrender.com/api/v1/user/all-subcategory');
    setSubCategory(fetchData.data.data)
  }
  useEffect(()=>{
    subCategoryApi()
  },[])
    // console.log(subCategory);
    
    const[racingSports,setRacingSports] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    RacingSports: true,
    Others: true,
    AllSports: true,
    Football: false, // Football section will be inside AllSports
  });

  const [expandedItems, setExpandedItems] = useState({});

  const racingSportsList = ["Horse Racing", "Greyhound Racing"];
  const othersList = [
    "Our Casino",
    "Our Virtual",
    "Live Casino",
    "Slot Game",
    "Fantasy Game",
  ];

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleExpand = (item) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <div className="leftSection_container">
      {/* Racing Sports Section */}
      <div
        className="racing_sports"
        onClick={() => toggleSection("RacingSports")}
      >
        <p>Racing Sports</p>
        <i
          className={`ri-arrow-${
            expandedSections.RacingSports ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>
      <div
        className={`show_list ${expandedSections ? "show_list_visible" : ""}`}
      >
        {/* <ul className="list_items">
          <li className="shift">Horse Racing</li>
          <div className="line"></div>
          <li className="shift">Greyhound Racing</li>
        </ul> */}
        {expandedSections.RacingSports && (
          <ul className="list_items">
            {racingSportsList.map((item) => (
              <li className="shift" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Others Section */}
      <div className="racing_sports" onClick={() => toggleSection("Others")}>
        <p>Others</p>
        <i
          className={`ri-arrow-${
            expandedSections.Others ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>
      <div
        className={`show_list ${expandedSections ? "show_list_visible" : ""}`}
      >
        {/* <ul className="list_items">
          <li className="shift">Our Casino</li>
          <div className="line"></div>
          <li className="shift">Our Virtual</li>
          <div className="line"></div>
          <li className="shift">Live Casino</li>
          <div className="line"></div>
          <li className="shift">Slot Game</li>
          <div className="line"></div>
          <li className="shift">Fantasy Game</li>
        </ul> */}
        {expandedSections.Others && (
          <ul className="list_items">
            {othersList.map((item) => (
              <li className="shift" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* All Sports Section */}
      <div className="racing_sports" onClick={() => toggleSection("AllSports")}>
        <p>All Sports</p>
        <i
          className={`ri-arrow-${
            expandedSections.AllSports ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>

      <div
        className={`show_list ${expandedSections ? "show_list_visible" : ""}`}
      >
        {expandedSections.AllSports && (
          <ul className="list_items">
            {allSportsList.map((item) => (
              <li className="set_things" key={item}>
                <div
                  onClick={() => toggleExpand(item.name)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i
                    style={{ paddingLeft: "0.6rem" }}
                    className={
                      expandedItems[item.name]
                        ? "ri-checkbox-indeterminate-line cancel_box"
                        : "ri-add-box-line add_box"
                    }
                  ></i>
                  <span>{item.name}</span>
                </div>

                {/* Politics Sublist */}
                {expandedItems[item.name] && item.name === "Politics" && (
                  <ul
                    style={{
                      paddingLeft: "20px",
                      listStyle: "none",
                      borderTop: "1px solid rgb(158, 158, 158)",
                    }}
                  >
                    <li>Assembly Election 2024</li>
                  </ul>
                )}

                {/* Cricket Sublist */}
                {expandedItems[item.name] && item.name === "Cricket" && (
                  <ul>
                    {Object.keys(cricketSubList).map((subItem) => (
                      <li key={subItem}>
                        <div
                          className="set_sublists"
                          onClick={() => toggleExpand(subItem)}
                        >
                          <i
                            className={
                              expandedItems[subItem]
                                ? "ri-checkbox-indeterminate-line cancel_box"
                                : "ri-add-box-line add_box"
                            }
                          ></i>
                          <span>{subItem}</span>
                        </div>
                        {/* Sublist Items */}
                        {expandedItems[subItem] && (
                          <ul>
                            {cricketSubList[subItem].map((match) => (
                              <li className="set_inside_sublists" key={match}>
                                {match}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Football Section */}
                {expandedItems[item.name] && item.name === "Football" && (
                  <ul>
                    {footballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Tennis Section */}
                {expandedItems[item.name] && item.name === "Tennis" && (
                  <ul>
                    {tennisList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* Table Tennies */}
                {expandedItems[item.name] && item.name === "Table Tennis" && (
                  <ul>
                    {tabletenniesList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* Esoccer */}
                {expandedItems[item.name] && item.name === "Esoccer" && (
                  <ul>
                    {esoccerList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Basketball */}
                {expandedItems[item.name] && item.name === "Basketball" && (
                  <ul>
                    {basketballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Volleyball */}
                {expandedItems[item.name] && item.name === "Volleyball" && (
                  <ul>
                    {volleyballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Snooker */}
                {expandedItems[item.name] && item.name === "Snooker" && (
                  <ul>
                    {snookerList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Ice Hockey */}
                {expandedItems[item.name] && item.name === "Ice Hockey" && (
                  <ul>
                    {iceHockeyList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* E Games */}
                {expandedItems[item.name] && item.name === "E Games" && (
                  <ul>
                    {eGamesList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Futsal */}
                {expandedItems[item.name] && item.name === "Futsal" && (
                  <ul>
                    {futsalList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                
                {/* Handball */}
                {expandedItems[item.name] && item.name === "Handball" && (
                  <ul>
                    {handballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Kabaddi */}
                {expandedItems[item.name] && item.name === "Kabaddi" && (
                  <ul>
                    {kabaddiList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Golf */}
                {expandedItems[item.name] && item.name === "Golf" && (
                  <ul>
                    {golfList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Rugby League */}
                {expandedItems[item.name] && item.name === "Rugby League" && (
                  <ul>
                    {rugbyLeagueList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Boxing */}
                {expandedItems[item.name] && item.name === "Boxing" && (
                  <ul>
                    {boxingList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Beach Volleyball */}
                {expandedItems[item.name] && item.name === "Beach Volleyball" && (
                  <ul>
                    {beachVolleyballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Mixed Martial Arts */}
                {expandedItems[item.name] && item.name === "Mixed Martial Arts" && (
                  <ul>
                    {mmaList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* MotoGP */}
                {expandedItems[item.name] && item.name === "MotoGP" && (
                  <ul>
                    {motoGPList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Chess */}
                {expandedItems[item.name] && item.name === "Chess" && (
                  <ul>
                    {chessList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Cycling */}
                {expandedItems[item.name] && item.name === "Cycling" && (
                  <ul>
                    {cyclingList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Motorbikes */}
                {expandedItems[item.name] && item.name === "Motorbikes" && (
                  <ul>
                    {motorbikesList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Athletics */}
                {expandedItems[item.name] && item.name === "Athletics" && (
                  <ul>
                    {athleticsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Basketball 3X3 */}
                {expandedItems[item.name] && item.name === "Basketball 3X3" && (
                  <ul>
                    {basketball3x3List.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Sumo */}
                {expandedItems[item.name] && item.name === "Sumo" && (
                  <ul>
                    {sumoList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Virtual sports */}
                {expandedItems[item.name] && item.name === "Virtual sports" && (
                  <ul>
                    {virtualSportsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Motor Sports */}
                {expandedItems[item.name] && item.name === "Motor Sports" && (
                  <ul>
                    {motorSportsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Baseball */}
                {expandedItems[item.name] && item.name === "Baseball" && (
                  <ul>
                    {baseballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Rugby Union */}
                {expandedItems[item.name] && item.name === "Rugby Union" && (
                  <ul>
                    {rugbyUnionList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Darts */}
                {expandedItems[item.name] && item.name === "Darts" && (
                  <ul>
                    {dartsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* American Football */}
                {expandedItems[item.name] && item.name === "American Football" && (
                  <ul>
                    {americanFootballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Soccer */}
                {expandedItems[item.name] && item.name === "Soccer" && (
                  <ul>
                    {soccerList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Esports */}
                {expandedItems[item.name] && item.name === "Esports" && (
                  <ul>
                    {esportsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Boat Racing */}
                {expandedItems[item.name] && item.name === "Boat Racing" && (
                  <ul>
                    {boatRacingList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeftSection;
