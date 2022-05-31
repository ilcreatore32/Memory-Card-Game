import "../styles/MemoryTable.css";

// Components
import MemoryCard from "./MemoryCard";

const MemoryTable = ({ rowNumber, limitPerRow }) => {
  var number = 1;

  const createTable = () => {
    const table = [];
    for (let i = 1; i <= rowNumber; i++) {
      table.push(<tr key={i}>{createCards(rowNumber, limitPerRow)}</tr>);
    }
    return table;
  };
  const createCards = (limit) => {
    let cards = [];
    for (let i = 1; i <= limit; i++) {
      cards.push(<MemoryCard key={i} number={number} />);
      number++;
    }
    return cards;
  };

  return (
    <table className="mg-table">
      <tbody className="mg-tbody">{createTable()}</tbody>
    </table>
  );
};

export default MemoryTable;
