type CardProps = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    visited?: boolean,
  }
};

function Card({ cityInfo }: CardProps) {
  const { city, country, imageUrl, visited } = cityInfo;
  return (
    <div className="card">
      <img src={ imageUrl } alt={ `${city}, ${country}` } />
      <div className="card-info">
        <h3>{city}</h3>
        <p>{country}</p>
        {visited ? <p>Já Fui!</p> : <p className="red">Não fui!</p>}
      </div>
    </div>
  );
}

export default Card;
