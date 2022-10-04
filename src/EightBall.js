import React, {useState} from 'react'; 
import './EightBall.css'; 

const EightBall = (props) => {
    const randNum = () => Math.floor(Math.random() * props.answers.length); 

    const getAnswer = () => {
        console.log(randNum, props);
        const ans = props.answers[randNum()];
        setAnswer(ans.msg); 
        setColor(ans.color);
    }

    const reset = () => {
        setAnswer('Think of a Question');
        setColor('black');
    }

    const [answer, setAnswer] = useState('Think of a Question')
    const [color, setColor] = useState('black'); 
    return (
        <div>
            <button className="EightBall" id={color} onClick={() => setAnswer(getAnswer)}>
                <p className="EightBall-text">{answer}</p>
            </button>
            <button className="EightBall-reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default EightBall; 