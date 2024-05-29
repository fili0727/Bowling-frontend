import { useEffect, useState } from "react";
import Equipment from "../../interfaces/Equipment";
import { getEquipmentApi } from "../../services/apiFacade";
import '../../styling/equipment.css';

export default function EquipmentList(){
  const [equipments, setEquipment] = useState<Array<Equipment>>([]);
  const [editingStock, setEditingStock] = useState<Equipment | null>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getEquipmentApi()
      .then((res) => setEquipment(res))
      .catch(() => setError("Error fetching equipment. Is the server running?"));
  }, []);

  const equipmentList = equipments.map((equipment, index) => (
    <div key={index} className="equipmentItem">
      <img src={equipment.imageURL} alt={equipment.name} className="equipmentImage"/>
      <h2 className="equipmentName">{equipment.name}</h2>
      <p className="equipmentStock">Stock: {equipment.stock}</p>
      <button className="equipmentButton edit" onClick={() => {
        setEditingStock(equipment);
      }}>Edit stock</button>
       <button
      className="equipmentButton restock"
      onClick={() => {
        window.open(equipment.restockURL, '_blank');
      }}
    >
      Go to Restock Page
    </button>
    </div>
  ))

  return (
    <div className="equipment-list-container">
    <p>{error}</p>
    <div className="product-items-container">
      {equipmentList}
    </div>
    </div>
  )
}