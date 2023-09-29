import { useState } from "react";
// import CafeDetail from "./CafeDetail";
import "./styles/CafeList.css";
import { Col, Row } from 'react-bootstrap';
import CafeDetail from "./CafeDetail";

function CafeList() {
    // const [cafes, setCafes] = useState([]);
    // useEffect(()=>{
    //     //const URL = "https://my.api.mockaroo.com/Cafes.json?key=4e0fca60";
    //     fetch(URL).then(data => data.json()).then(data => {
    //             setCafes(data);
    //     })
    // }, []);

    const [cafes] = useState([
        {
          id: 1,
          nombre: "Café Especial para tí",
          tipo: "Blend",
          region: "Angelópolis, Antioquia",
          notas: "Panela, Durazno, Caramelo",
          fecha_cultivo: "2023-01-18",
          altura: 1920,
          imagen:
            "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-para-ti-cafe-colombiano_720x.png?raw=true",
        },
        {
          id: 2,
          nombre: "Café Especial Navegante",
          tipo: "Café de Origen",
          region: "Guatapé, Antioquia",
          notas: "Cítrico, Naranja, Cacao",
          fecha_cultivo: "2023-02-10",
          altura: 1800,
          imagen:
            "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-navegante-cafe-colombiano-1_720x.png?raw=true",
        },
        {
          id: 3,
          nombre: "Café Especial El Poeta",
          tipo: "Blend",
          region: "Gómez Plata, Antioquia",
          notas: "Notas Dulces, Vino y Frutos Rojos",
          fecha_cultivo: "2023-03-11",
          altura: 1800,
          imagen:
            "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-poeta-cafe-colombiano_720x.png?raw=true",
        },
        {
          id: 4,
          nombre: "Café Especial Valentina",
          tipo: "Café de Origen",
          region: "Fredonia, Antioquia",
          notas: "Chocolate, Cáscara de limón, Nuez",
          altura: 1700,
          imagen:
            "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-valentina-cafe-colombiano_1_720x.png?raw=true",
        },
        {
          id: 5,
          nombre: "Café Especial Sombrero Vueltiao",
          tipo: "Café de Origen",
          region: "Amagá, Antioquia",
          notas: "Chocolate, Frutos secos, Frutos rojos, Caña de azúcar",
          fecha_cultivo: "2023-04-12",
          altura: 1450,
          imagen:
            "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especal-sombrero-vueltiao-2-cafe-colombiano-f_720x.png?raw=true",
        },
        {
          id: 6,
          nombre: "Café Especial La Guacamaya",
          tipo: "Café de Origen",
          region: "Amagá, Antioquia",
          notas: "Chocolate, Frutos Secos, Frutos Rojos y Caña de Azúcar",
          fecha_cultivo: "2023-05-13",
          altura: 1450,
          imagen:
            "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-guacamayo2-cafe-colombiano-f_720x.png?raw=true",
        },
      ]);


    const [selectedCafe, setSelectedCafe] = useState(null);
    const handleCardClick = (cafe) => {
        console.log(cafe);
        setSelectedCafe(cafe);
    };


    return (
        <>
        <br />
        <Row>
        <Col md={7}> 
            <table className="table">
            <thead className="thead">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Región</th>
            </tr>
            </thead>
            <tbody>
            {cafes.map((cafe) => (
                <tr key={cafe.id} onClick={() => handleCardClick(cafe)}>
                <th scope="row">{cafe.id}</th>
                <td>{cafe.nombre}</td>
                <td>{cafe.tipo}</td>
                <td>{cafe.region}</td>
                </tr>
            ))}
            </tbody>
      </table>
        </Col> 
        <Col md={5}> 
            {selectedCafe && (
                    <CafeDetail cafe={selectedCafe} />
            )}   
        </Col> 
        </Row>
        </> 
    );
    
}

export default CafeList;
