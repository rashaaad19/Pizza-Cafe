import { Link } from "react-router";
import Table from "../components/Table";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import TableSkeleton from "../components/TableSkelton";

const Dashboard = () => {
  const { isLoading } = useContext(ProductContext);
  return (
    <div className="overflow-x-auto">
      {isLoading ? <TableSkeleton /> : <Table />}
      <Link
        className=" btn btn-circle btn-xl fixed bottom-5 right-5 bg-amber-400 hover:bg-amber-500 cursor-pointer"
        to={"/add"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Link>
      {/* <TableSkeleton/>

      <Table/> */}
    </div>
  );
};

export default Dashboard;
