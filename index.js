const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

function superbowlWin(record){
    const result = record.find(obj => obj.result === "W")
    return (result ? result.year : result);
}
      
//const found = record.find( => "W")