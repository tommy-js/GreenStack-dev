export function companySort(companies: any) {
  let tech = [];
  let manu = [];
  let energ = [];
  for (let i = 0; i < companies.length; i++) {
    if (companies[i].sector === "Technology") tech.push(companies[i]);
    else if (companies[i].sector === "Manufacturing") manu.push(companies[i]);
    else if (companies[i].sector === "Energy") energ.push(companies[i]);
  }
  let companyFinal = {
    tech: tech,
    manu: manu,
    energ: energ,
  };
  return companyFinal;
}
