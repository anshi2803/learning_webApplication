// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function TakeQuiz() {
//     const {id}= useParams();
//     const [quiz, setQuiz]= useState(null);
//     const [answers, setAnswers]=useState([]);
//     const navigate= useNavigate();

//     useEffect(()=>{
//         fetchQuiz();
//     }, [id]);

//     const fetchQuiz = async()=>{
//         try {
//             const resp= await axios.get(`http://localhost:8080/api/quiz/${id}`);
//             setQuiz(resp.data);
//             // setAnswers(new Array(resp.data.questions.length).fill(''));
            
//         } catch (error) {
//             console.log("Error in fetching quiz", error);
            
//         }
//     };

//     const handleSubmit=async()=>{
//         const correctAnswers= quiz.questions.reduce((acc, question)=>{})
//         try {
//             const resp= await axios.post(`http://localhost:8080/api/quiz/${quiz.id}/submit`, {answers});
//             alert(`Your score: ${resp.data.score}`)
//         } catch (error) {
//             console.log('Error in submitting Quiz',error);
//         }
//     }

//     const handleAnswerChange =(index, value)=>{
//         const updatedAnswers= answers.map((answer,i)=>
//         i=== index ? value: answer);
//         setAnswers(updatedAnswers);
//     };
//     if(!quiz){
//         return <div>Loading.....</div>;
//     }
//     return (
//         <div className="take-quiz">
//             <h3>{quiz.title}</h3>
//             {quiz.questions.map((q,index)=>(
//                 <div className="mb-3" key={index}>
//                     <h5>{q.question}</h5>
//                     {q.options.map((option,i)=>(
//                         <div className="form-check" key={i}>
//                             <input type="radio"
//                             className="form-check-input"
//                             name={`question-${index}`}
//                             value={option}
//                             onChange={()=> handleAnswerChange(index,option)} />
//                             <label className="form-check-label">
//                                 {option}
//                             </label>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//             <button className="btn btn-primary" onClick={handleSubmit}>Submit Quiz</button>
//         </div>
//       );
// }

// export default TakeQuiz;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function TakeQuiz() {
//     const {id}= useParams();
//     const [quiz, setQuiz] = useState([]);
//     const [currentQuiz, setCurrentQuiz] = useState(null);
//     const [answers, setAnswers] = useState({});
//     const [score, setScore] = useState(null);

//     useEffect(() => {
//         fetchQuiz();
//     }, [id]);

//     const fetchQuiz = async () => {
//         try {
//             const resp = await axios.get(`http://localhost:8080/api/quiz/${id}`);
//             setQuiz(resp.data);
//         } catch (error) {
//             console.log("Error in loading quiz");
//         }
//     };

//     const handleStartQuiz = (quiz) => {
//         setCurrentQuiz(quiz);
//         setAnswers({});
//         setScore(null);
//     };

//     const handleAnswerChange = (questionIndex, value) => {
//         setAnswers({ ...answers, [questionIndex]: value });
//     };

//     const handleSubmitQuiz = () => {
//         let calculatedScore = 0;
//         currentQuiz.questions.forEach((q, index) => {
//             if (q.answer === answers[index]) {
//                 calculatedScore += 1;
//             }
//         });
//         setScore(calculatedScore);
//     };

//     return (
//         <div className="take-quiz">
//             <h3>Take Quiz</h3>
//             {currentQuiz ? (
//                 <div>
//                     <h4>{currentQuiz.title}</h4>
//                     {currentQuiz.questions.map((q, index) => (
//                         <div key={index} className="mb-2">
//                             <p>{q.question}</p>
//                             {q.options.map((option, i) => (
//                                 <div key={i}>
//                                     <input
//                                         type="radio"
//                                         name={`question-${index}`}
//                                         value={option}
//                                         onChange={() => handleAnswerChange(index, option)}
//                                     />
//                                     <label>{option}</label>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                     <button className="btn btn-primary" onClick={handleSubmitQuiz}>Submit</button>
//                     {score !== null && <p>Your score: {score}/{currentQuiz.questions.length}</p>}
//                 </div>
//             ) : (
//                 <ul className="list-group">
//                     {quiz.map(quiz => (
//                         <li key={quiz.id} className="list-group-item">
//                             {quiz.title}
//                             <button className="btn btn-secondary ml-2" onClick={() => handleStartQuiz(quiz)}>Start Quiz</button>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default TakeQuiz;
