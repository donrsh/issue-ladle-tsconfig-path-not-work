import add3 from "@/add3";

export const Add3 = () => {
  return (
    <button onClick={() => alert(`1 + 1 + 1 = ${add3(1, 1, 1)}`)}>Add</button>
  );
};
