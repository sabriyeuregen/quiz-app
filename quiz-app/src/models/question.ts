export interface IQuestion {
  response_code: number;
  results: string[];
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
/*{
    "response_code":0
    "results":[{"category":"Entertainment: Cartoon & Animations",
    "type":"multiple","difficulty":"easy",
    "question":"The song &#039;Little April Shower&#039; features in which Disney cartoon film?",
    "correct_answer":"Bambi",
    "incorrect_answers":["Cinderella","Pinocchio","The Jungle Book"]
}*/
