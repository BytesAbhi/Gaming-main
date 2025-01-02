import React from "react";
import './MainContent.css'
import Cricket from "../InsideGamesBarList/Cricket";
import Football from "../InsideGamesBarList/Football";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Home from "../InsideGamesBarList/Home";
import Lottery from "../InsideGamesBarList/Lottery";
import Tennis from "../InsideGamesBarList/Tennis";
import TableTennis from "../InsideGamesBarList/TableTennis";
import Baccarat from "../InsideGamesBarList/Baccarat";
import Cards from "../InsideGamesBarList/Cards";
import Teenpati from "../InsideGamesBarList/Teenpati";
import Poker from "../InsideGamesBarList/Poker";
import Lucky from "../InsideGamesBarList/Lucky";

const MainContent = ({ selectedGame, selectedLeftItem, onLeftItemClick }) => {
  const renderGameComponent = () => {
    switch (selectedGame) {
      case "HOME":
        return <Home />;
      case "LOTTERY":
        return <Lottery />;
      case "CRICKET":
        return <Cricket />;
      case "TENNIS":
        return <Tennis />;
      case "FOOTBALL":
        return <Football />;
      case "TABLE TENNIS":
        return <TableTennis />;
      case "BACCARAT":
        return <Baccarat />;
      case "32 CARDS":
        return <Cards />;
      case "TEENPATTI":
        return <Teenpati />;
      case "POKER":
        return <Poker />;
      case "LUCKY7":
        return <Lucky />;
      default:
        return <p>Select a game to view details.</p>;
    }
  };

  const renderLeftItemComponent = () => {
    if (selectedLeftItem) {
      return <p>Details for {selectedLeftItem}</p>;
    }
    return renderGameComponent();
  };

  return (
    <div className="main_content">
      <LeftSection onLeftItemClick={onLeftItemClick} />
      <RightSection>{renderLeftItemComponent()}</RightSection>
    </div>
  );
};

export default MainContent;
