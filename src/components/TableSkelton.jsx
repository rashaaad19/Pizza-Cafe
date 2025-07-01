import Link from "daisyui/components/link";

const TableSkeleton = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-fixed md:table-lg table-md ">
        <thead>
          <tr className="h-16">
            <th className="w-12"></th> 
            <th className="w-[128px]">Name</th>
            <th className="w-[96px]">Price</th>
            <th className="w-[120px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10}).map((_, index) => (
            <tr key={index} className="h-16">
              <td>
                <div className="skeleton h-4 w-20"></div>
              </td>
              <td>
                <div className="skeleton h-4 w-28"></div>
              </td>
              <td>
                <div className="skeleton h-4 w-24"></div>
              </td>
              <td>
                <div className="skeleton h-4 w-16"></div>
              </td>
            </tr>
          ))}
        </tbody>{" "}
      </table>
    </div>
  );
};

export default TableSkeleton;
