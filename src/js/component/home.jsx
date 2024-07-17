import React, {useState} from "react";

//create your first component
const Home = () => {
	const [active, setActive] = useState ('Red')
	console.log(active);
	return (
		<div className="TrafficLightContainer">
			<div className="Base"></div>
			<div className="TrafficLight">
				<div className={`Red Light ${active==='Red' ? 'Glow': '' }`} onClick={()=>setActive('Red')}></div>
				<div className={`Yellow Light ${active==='Yellow' ? 'Glow': '' }`}  onClick={()=>setActive('Yellow')}></div>
				<div className={`Green Light ${active==='Green' ? 'Glow': '' }`} onClick={()=>setActive('Green')}></div>
			</div>

		</div>
	);
};

export default Home;
