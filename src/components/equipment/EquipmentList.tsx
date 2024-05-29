import { useEffect, useState } from 'react';
import Equipment from '../../interfaces/Equipment';
import { getEquipmentApi, editEquipmentStockApi } from '../../services/apiFacade'; // Adjust the path if necessary
import '../../styling/equipment.css';

export default function EquipmentList() {
  const [equipments, setEquipment] = useState<Array<Equipment>>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getEquipmentApi()
      .then((res) => setEquipment(res))
      .catch(() => setError('Error fetching equipment. Is the server running?'));
  }, []);

  const handleStockChange = async (id: number, newStock: number) => {
    setEquipment((prevStock) =>
      prevStock.map((equipment) =>
        equipment.id === id ? { ...equipment, stock: newStock } : equipment
      )
    );

    const updatedEquipment = equipments.find((e) => e.id === id);
    if (updatedEquipment) {
      try {
        await editEquipmentStockApi({ ...updatedEquipment, stock: newStock });
        console.log('Stock updated successfully');
      } catch (error) {
        console.error('Failed to update stock', error);

      }
    }
  };

  const equipmentList = equipments.map((equipment, index) => (
    <div key={index} className="equipmentItem">
      <img src={equipment.imageURL} alt={equipment.name} className="equipmentImage" />
      <h2 className="equipmentName">{equipment.name}</h2>
      <div className="stockControl">
        {/* <button
          className="stockButton"
            //@ts-expect-error complains id might be null
          onClick={() => handleStockChange(equipment.id, Math.max(equipment.stock - 1, 0))}
        >
          -
        </button> */}
        <input
          type="number"
          value={equipment.stock}
         //@ts-expect-error complains id might be null
          onChange={(e) => handleStockChange(equipment.id, Math.max(parseInt(e.target.value, 10), 0))}
          className="stockInput"
        />
        {/* <button
          className="stockButton"
          //@ts-expect-error complains id might be null
          onClick={() => handleStockChange(equipment.id, equipment.stock + 1)}
        >
          +
        </button> */}
      </div>
      <button
        className="equipmentButton restock"
        onClick={() => {
          window.open(equipment.restockURL, '_blank');
        }}
      >
        Go to Restock Page
      </button>
    </div>
  ));

  return (
    <div className="equipment-list-container">
      <p>{error}</p>
      <div className="equipment-items-container">
        {equipmentList}
      </div>
    </div>
  );
}
