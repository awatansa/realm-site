exports = function(arg){
  let collection = context.services.get("mongodb-atlas").db("quizServer").collection("question_bank");
  return collection.find({}).limit(10);
};