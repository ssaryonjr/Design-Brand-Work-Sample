const { readFileSync } = require("fs");

export function parseInput(relativePath:string) {
  const path = `${relativePath}`;
  //trim end to remove final newline
  const data = readFileSync(path, { encoding: "utf8" }).trimEnd();

  return data;
}

export const getEntries = (data: string): string[] => {
  return data.split("\n");
};

export const getValues = (entry: string): string[] => {
  return entry.split(",");
};

export const formatProduct = (product: string[]) => {
  return {
    normalPrice: Number(product[1]),
    clearancePrice: Number(product[2]),
    quantityInStock: Number(product[3]),
    isHiddenOutsideCart: product[4] === "true",
  };
};

export const isOnSale = (normalPrice: number, clearancePrice: number) => {
  return clearancePrice < normalPrice;
};

export const getPrice = (normalPrice: number, clearancePrice: number) => {
  return Math.min(normalPrice, clearancePrice);
};

export type ProductMetrics = {
  amount: number;
  min?: number;
  max?: number;
};

export const getNewMin = (productType: ProductMetrics, price: number) => {
  if (productType.min === undefined) {
    return price;
  }
  return Math.min(productType.min, price);
};

export const getNewMax = (productType: ProductMetrics, price: number) => {
  //If no price exist set current price to number passed in
  if (productType.max === undefined) {
    return price;
  }
  return Math.max(productType.max, price);
};

export const formatResult = (lineTitle: string, createReport: ProductMetrics) => {
	const { amount, min, max } = createReport;

	let range = ''
	if(min!==undefined || max!==undefined){
		range+=' @ '
		const {} = createReport
		if(min===max){
			range+=`$${min}`
		}
		else{
			range+=`$${min}-$${max}`
		}
	}
	

	let formattedSentence = `${lineTitle}: ${amount} product${amount !== 1 ? "s" : ""}${range}`
	return formattedSentence
}
