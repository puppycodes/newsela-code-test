fetch('data.json').then(
  function(response){
     return response.json();
    }
).then(function(jsonData){

  let pass = _.filter(
    jsonData, ({percent_correct}) => percent_correct >= 0.5
  );

  let fail = _.filter(
    jsonData, ({percent_correct}) => percent_correct <= 0.5
  );


  console.log(pass);
  console.log(fail);

  let passWords = _.map(pass, 'text');
  let passSplit = _.chain(passWords)
  .lowerCase()
  .words()
  .value();

  console.log(passSplit);

const result = _.values(
  _.groupBy(passSplit)
).map(d => ({word: d[0], count: d.length}));

console.log(result);

});
