
const Baba = ({id, name, details, img}) => {
  return (
    <div key={id}>
      <img src={img} alt={name} width={'300px'} />
      <h2>{name}</h2>
      <p>{details}</p>
    </div>
  );
};



export default Baba;
