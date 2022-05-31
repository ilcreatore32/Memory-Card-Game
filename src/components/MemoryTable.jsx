import "../styles/MemoryTable.css";

// Components
import MemoryCard from "./MemoryCard";


const MemoryTable = (props) => {
  return (
    <table className="mg-table">
      <tbody className="mg-tbody">
        <tr>
          <MemoryCard number={"1"} />
          <MemoryCard number={"2"} />
          <MemoryCard number={"3"} />
          <MemoryCard number={"4"} />
        </tr>
        <tr>
          <MemoryCard number={"5"} />
          <MemoryCard number={"6"} />
          <MemoryCard number={"7"} />
          <MemoryCard number={"8"} />
        </tr>
        <tr>
          <MemoryCard number={"9"} />
          <MemoryCard number={"12"} />
          <MemoryCard number={"13"} />
          <MemoryCard number={"14"} />
        </tr>
        <tr>
          <MemoryCard number={"15"} />
          <MemoryCard number={"16"} />
          <MemoryCard number={"17"} />
          <MemoryCard number={"18"} />
        </tr>
      </tbody>
    </table>
  );
};

export default MemoryTable;
