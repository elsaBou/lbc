import React from "react";
import Adcard from "./Adcard";

// 1 Mounting
class Adlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  // 3 Update
  componentDidMount() {
    const leboncoin = require("leboncoin-api");
    let search = new leboncoin.Search().setPage(1).setRegion("ile_de_france");

    search.run().then(
      data => {
        console.log(data.results); // the array of results
        this.setState({ product: data.results });
        console.log("je suis ici");
      },
      err => {
        console.error(err);
      }
    );
  }

  // 2 Render
  render() {
    if (this.state.product.length === 0) {
      return <p>"chargement des données..."</p>;
    }
    // 4 (Render le retour, après être allé dans le componentDidMount)
    return (
      <div className="adlist">
        {this.state.product.map(ad => (
          <Adcard key={ad.id} ad={ad} />
        ))}
      </div>
    );
  }
}

export default Adlist;
