import add2 from "@utils/add";

const add3 = (a: number, b: number, c: number) => add2(add2(a, b), c);

export default add3;
