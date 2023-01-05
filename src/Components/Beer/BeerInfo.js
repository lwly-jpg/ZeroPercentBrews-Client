const BeerInfo = (props) => {
  return (
    <>
      <h2 className="info__header">About {props.beerData.title}</h2>
      <div className="info__item">
        <span className="attribute">Brand:</span> {props.beerData.brand}
      </div>
      <div className="info__item">
        <span className="attribute">ABV:</span> {props.beerData.abv}%
      </div>
      <div className="info__item">
        <span className="attribute">Type:</span> {props.beerData.type}
      </div>
      <div className="info__item">
        <span className="attribute">Ingredients:</span>{" "}
        {props.beerData.ingredients}
      </div>
      <div className="info__item">
        <span className="attribute">Volume:</span> {props.beerData.volume}ml
      </div>
    </>
  );
};

export default BeerInfo;
