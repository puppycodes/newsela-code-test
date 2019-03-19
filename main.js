// import data
fetch('data.json').then(
  function(response){
     return response.json();
    }
).then(function(jsonData){
// split array

  let pass = _.filter(
    jsonData, ({percent_correct}) => percent_correct >= 0.5
  );

  let fail = _.filter(
    jsonData, ({percent_correct}) => percent_correct <= 0.5
  );

// get text
  let passWords = _.map(pass, 'text');
  let passSplit = _.chain(passWords)
  .lowerCase()
  .words()
  .value();

// get text
  let failWords = _.map(fail, 'text');
  let failSplit = _.chain(failWords)
  .lowerCase()
  .words()
  .value();

// count items
  const passResult = _.values(_.groupBy(passSplit)).map(d => ({word: d[0], count: d.length, pass: true}));
  let sortedPassResult = _.sortBy(passResult, ['count']);

  const failResult = _.values(_.groupBy(failSplit)).map(d => ({word: d[0], count: d.length, pass: false}));
  let sortedFailResult = _.sortBy(failResult, ['count']);

  console.log(sortedPassResult);
  console.log(sortedFailResult);

  // take a segment

  let slicedPass = _.filter(
    sortedPassResult, ({count}) => count >= 30
  );

  let slicedFail = _.filter(
    sortedFailResult, ({count}) => count >= 30
  );
  console.log(slicedPass);
  console.log(slicedFail);

  // group by type

  let slicedPassText = _.map(slicedPass, 'word');
  let passNouns = nlp(slicedPassText).nouns().out('array');
  let passVerbs = nlp(slicedPassText).verbs().out('array');
  let passAdjectives = nlp(slicedPassText).adjectives().out('array');

  let slicedFailText = _.map(slicedFail, 'word');
  let failNouns = nlp(slicedPassText).nouns().out('array');
  let failVerbs = nlp(slicedPassText).verbs().out('array');
  let failAdjectives = nlp(slicedPassText).adjectives().out('array');

  console.log(passNouns);
  console.log(passVerbs);
  console.log(passAdjectives);

  console.log(failNouns);
  console.log(failVerbs);
  console.log(failAdjectives);





});
