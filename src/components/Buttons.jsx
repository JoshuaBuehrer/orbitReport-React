import satData from "./satData";


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
  
    {displaySats.map((sat, id) => (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    ))}

    <button onClick={() => setSat(satData)}>
      Reset to All Orbits
    </button>
    
  </div>
  );
};

export default Buttons;