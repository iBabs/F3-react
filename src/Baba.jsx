import './Baba.css'


const Baba = ({id, name, details, img}) => {
  return (
    <div key={id} className="card">
      <img src={img} alt={name} width={300} />
      <h2>{name}</h2>
      <p>{details}</p>
    </div>
  );
};



export default Baba;
