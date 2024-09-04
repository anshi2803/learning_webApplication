// import axios from "axios";
// import React, { useEffect, useState } from "react";


// function AdminManageQuiz() {
//     const [quiz, setQuiz] = useState([]);
//     const [newQuiz, setNewQuiz] = useState({ title: "", questions: [] });

//     useEffect(() => {
//         fetchQuiz();
//     })

//     const fetchQuiz = async () => {
//         try {
//             const resp = await axios.get('http://localhost:8080/api/quiz');
//             setQuiz(resp.data);
//         } catch (error) {
//             console.log("Error in loading quiz");
//         }
//     }

//     const handleAddQuestion = () => {
//         setNewQuiz({
//             ...newQuiz, questions: [...newQuiz.questions,
//             { question: "", options: [], answer: "" }]
//         });
//     };

//     const handleSaveQuiz = async () => {
//         try {
//             const resp = await axios.post('http://localhost:8080/api/quiz', newQuiz);
//             if (resp.status === 201) {
//                 fetchQuiz();
//                 setNewQuiz({ title: "", questions: [] });
//             }
//         } catch (error) {
//             console.error("error in saving quiz", error);
//         }
//     };

//     const handleChange = (index, key, value) => {
//         const updatedQuestions = newQuiz.questions.map((q, i) =>
//             i === index ? { ...q, [key]: value } : q
//         );
//         setNewQuiz({ ...newQuiz, questions: updatedQuestions });
//     };

//     return (
//         <div className="manage-quiz">
//             <h3>Manage Quiz</h3>
//             <ul className="list-group">
//                 {quiz.map(quiz => (
//                     <li key={quiz.id} className="list-group-item">
//                         {quiz.title}
//                     </li>
//                 ))}
//             </ul>
//             <div className="mt-3">
//                 <h4>Create New Quiz</h4>
//                 <input
//                     type="text"
//                     className="form-control mb-2"
//                     value={newQuiz.title}
//                     onChange={e => setNewQuiz({ ...newQuiz, title: e.target.value })}
//                     placeholder="Quiz Title">
//                 </input>
//                 {newQuiz.questions.map((q, index) => (
//                     <div key={index} className="mb-2">
//                         <input type="text"
//                         className="form-control mb-1"
//                         value={q.question}
//                         onChange={e=> handleChange(index, 'question', e.target.value)}
//                         placeholder="Question" 
//                         />
//                         <input type="text" 
//                         className="form-control mb-1"
//                         value={q.options.join(',')}
//                         onChange={e=>handleChange(index, 'options', e.target.value.split(','))}
//                         placeholder="Options (comma-separated)"
//                         />
//                         <input type="text"
//                         className="form-control"
//                         value={q.answer}
//                         onChange={e=> handleChange(index, 'answer', e.target.value)}
//                         placeholder="Answer" 
//                         />
//                     </div>
//                 ))}
//                 <button className="btn btn-secondary mb-2" onClick={handleAddQuestion}>Add Question</button>
//                 <button className="btn btn-primary" onClick={handleSaveQuiz}>Save</button>

//             </div>
//         </div>
//     );
// }

// export default AdminManageQuiz;
import axios from "axios";
import React, { useEffect, useState } from "react";

function AdminManageQuiz() {
    const [quiz, setQuiz] = useState([]);
    const [newQuiz, setNewQuiz] = useState({ title: "", questions: [] });

    useEffect(() => {
        fetchQuiz();
    }, []);

    const fetchQuiz = async () => {
        try {
            const resp = await axios.get('http://localhost:8080/api/quiz');
            setQuiz(resp.data);
        } catch (error) {
            console.log("Error in loading quiz");
        }
    }

    const handleAddQuestion = () => {
        setNewQuiz({
            ...newQuiz, questions: [...newQuiz.questions,
            { question: "", options: [], answer: "" }]
        });
    };

    const handleSaveQuiz = async () => {
        try {
            const resp = await axios.post('http://localhost:8080/api/quiz', newQuiz);
            if (resp.status === 201) {
                fetchQuiz();
                setNewQuiz({ title: "", questions: [] });
            }
        } catch (error) {
            console.error("error in saving quiz", error);
        }
    };

    const handleChange = (index, key, value) => {
        const updatedQuestions = newQuiz.questions.map((q, i) =>
            i === index ? { ...q, [key]: value } : q
        );
        setNewQuiz({ ...newQuiz, questions: updatedQuestions });
    };

    return (
        <div className="manage-quiz" style={{ padding: '20px' }}>
            <h3 style={{ textAlign: 'center' }}>Manage Quiz</h3>
            <ul className="list-group" style={{ listStyleType: 'none', padding: 0 }}>
                {quiz.map(quiz => (
                    <li key={quiz.id} className="list-group-item" style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
                        {quiz.title}
                    </li>
                ))}
            </ul>
            <div className="mt-3" style={{ marginTop: '20px' }}>
                <h4 style={{ textAlign: 'center' }}>Create New Quiz</h4>
                <input
                    type="text"
                    className="form-control mb-2"
                    style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}
                    value={newQuiz.title}
                    onChange={e => setNewQuiz({ ...newQuiz, title: e.target.value })}
                    placeholder="Quiz Title">
                </input>
                {newQuiz.questions.map((q, index) => (
                    <div key={index} className="mb-2" style={{ marginBottom: '10px' }}>
                        <input type="text"
                            className="form-control mb-1"
                            style={{ marginBottom: '5px', padding: '10px', border: '1px solid #ccc' }}
                            value={q.question}
                            onChange={e => handleChange(index, 'question', e.target.value)}
                            placeholder="Question"
                        />
                        <input type="text"
                            className="form-control mb-1"
                            style={{ marginBottom: '5px', padding: '10px', border: '1px solid #ccc' }}
                            value={q.options.join(',')}
                            onChange={e => handleChange(index, 'options', e.target.value.split(','))}
                            placeholder="Options (comma-separated)"
                        />
                        <input type="text"
                            className="form-control"
                            style={{ padding: '10px', border: '1px solid #ccc' }}
                            value={q.answer}
                            onChange={e => handleChange(index, 'answer', e.target.value)}
                            placeholder="Answer"
                        />
                    </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
    <button 
        className="btn btn-secondary" 
        style={{ marginRight: '10px', padding: '10px 20px' }} 
        onClick={handleAddQuestion}
    >
        Add Question
    </button>
    <button 
        className="btn btn-primary" 
        style={{ padding: '10px 20px' }} 
        onClick={handleSaveQuiz}
    >
        Save
    </button>
</div>

            </div>
        </div>
    );
}

export default AdminManageQuiz;

