import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, CardText, Button, Input } from 'reactstrap';
import Answer from './Answer';

const CardBody = () => {

    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        getQuestion();
    }, [])

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            isButtonClicked ? getQuestion() : evaluateAnswer()
        }
    })

    const getQuestion = async () => {
        const url = 'https://jservice.io/api/random'
        await axios.get(url).then(res => {
            const {question, answer} = res.data[0];
            setQuestion(question);
            setAnswer(answer);
        })
        setIsButtonClicked(false);
        setShowAnswer(false);
    }

    const evaluateAnswer = () => {
        if (answer.toLowerCase() === userAnswer.toLowerCase()) {
            setIsAnswerCorrect(true);
        } else {
            setIsAnswerCorrect(false);
        }
        setIsButtonClicked(true);
        setShowAnswer(true);
        setUserAnswer('');
    }

    const styles= {
        container: {
            display: 'flex',
            placeContent: 'center',
            flexDirection: 'column' as 'column'
        },
        question: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: '2rem 1rem 1rem 1rem',
            overflow:"auto", 
            height:"100%" ,
            width:"100%",
            textAlign: 'center' as 'center',
        },
        btn: {
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '5px',
            padding: '0.5rem',
            margin: '1rem',
            alignSelf: 'center',
        },
        input: {
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '5px',
            padding: '0.5rem',
            margin: '1rem',
            alignSelf: 'center'
        },
    }

    return (
        <Container style= {styles.container}>
            <Card body >
                <CardText style= {styles.question}>
                    {!question ? 'Loading...' : question}
                </CardText>
            </Card>
            <Input type="text" placeholder="Answer!!!" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} style= {styles.input}/>
            <Button 
                style={styles.btn} 
                onClick={(e) =>
                    isButtonClicked ? getQuestion() : evaluateAnswer()
                }>
                    { isButtonClicked ? "Next!" : "Answer!"}
            </Button>
            { showAnswer && <Answer answer={answer} isAnswerCorrect={isAnswerCorrect}/>}
        </Container>
    )
}

export default CardBody
