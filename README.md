** Newsela Challenge

<br><br>

"We'd like your analysis of the following question: What words or phrases appear more frequently in questions that students tend to do poorly on, and what appear more frequently in questions that students do well on?

We think this exercise should take about one hour. Please do not spend more than three hours working on it. Include a brief write-up of your solution and results in the body of your reply. You may respond to this email with questions.

Python or JavaScript are fundamental competencies at Newsela. We suggest code be written in one of these languages, but it is not a requirement. Reference any dependencies using a standard format. We should be able to get the code running ourselves.

There's no one right answer here, but there are more or less meaningful results. Well-documented code is a plus but not necessary. Our expectation is that we can follow your thought process. If you get different results using different methods you may include any that you find interesting in your response.

<br><br>


This was a quick first run at the prompt. I spent an hour on this and the code could be ALOT more DRY :) but I tend to run as quickly as I can through a problem and then optimize and simplify after getting the result...
<br><br>
some thoughts I had:
<br><br>
<ul>
  <li>find statistical sweet spot for significance</li>
  <li>mutate and merge array as early on as possible to make "DRY"</li>
  <li>use wordlist (most accurate) or nlp tagging (helpful context), to remove insignificant words "a", "the", "is" etc... </li>
  <li>graph output</li>
  <li>view in context of whole scentence (ie: dont "map" away original scentence in favor of list of space seperated strings)</li>
</ul>
