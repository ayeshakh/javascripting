var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
var results = {};
//function calculateSalesTax(salesData, taxRates) {
  for (i = 0; i < companySalesData.length; i++)
   {
      var obj = companySalesData[i];
      var salesSum = 0;

      for(var y = 0 ; y <= obj.sales.length; y++)
      {
        salesSum += obj.sales[y];
        //return salesSum;
        }
      console.log(salesSum);
        //var taxesSum = salesSum * salesTaxRates.
      }


      //console.log(salesSum);
      //var taxesSum = salesSum *

      //if (results[obj.name]) {

      //} else {
        //results[obj.name] = {totalSales: salesSum, totalTaxes: x}
      //}
    // for (sales in obj)
    //  {

    //     for (var y = 0; y < obj.sales.length; y++)
    //      {
    //       counter += obj.sales[y];
    //       console.log(obj.sales);
    //     }
    // }

  //}

//return counter;

//}

//var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/