import React from "react";
import Card from "./Card";
import NavBar from "../NavBar";

const Home = ({ getRandom }) => (
  <div className="page">
    <main>
      <NavBar home />
      <Card
        creator="Rhett Wesley"
        creatorA="https://unsplash.com/@rhett__noonan?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        photo="https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/master/img/beers.png"
        path="/beers"
      >
        All Beers
      </Card>
      <Card
        creator="Adam Wilson"
        creatorA="https://unsplash.com/@fourcolourblack?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        photo="https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/master/img/random-beer.png"
        path="/random"
        getRandom={getRandom}
      >
        Random Beer
      </Card>
      <Card
        creator="Daniel Vogel"
        creatorA="https://unsplash.com/@vogel11?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        photo="https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/master/img/new-beer.png"
        path="/new"
      >
        New Beer
      </Card>
    </main>
  </div>
);

export default Home;
