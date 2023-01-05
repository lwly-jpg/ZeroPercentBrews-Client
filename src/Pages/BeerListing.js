import BeerCardExpanded from "../Components/Beer/BeerCardExpanded";
import BeerInfo from "../Components/Beer/BeerInfo";
import SocialProof from "../Components/SocialProof/SocialProof";
import "./BeerListing.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BeerListing = () => {
  const { id } = useParams();

  const [beerData, setBeerData] = useState();

  useEffect(() => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/beers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data)
      });
  }, [id]);

  console.log(beerData);

  return (
    <>
      <div className="beer__listing__container">
        <BeerCardExpanded />
        <BeerInfo beerData={beerData}/>
        <SocialProof />
      </div>
    </>
  );
};

export default BeerListing;
