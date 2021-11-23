import React from 'react'
import { Card, CardText, CardTitle } from 'reactstrap'

interface Props {
    answer: string,
    isAnswerCorrect: boolean
}

const Answer = ( props : Props ) => {
    const { answer, isAnswerCorrect } = props;

    const style= {
        card:{
            display: 'flex',
            placeContent: 'center',
            flexDirection: 'column' as 'column',
            backgroundColor: isAnswerCorrect ? 'green' : 'red',
            color: 'white',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px',
        },
        text:{
            fontSize: '1.5em',
            textAlign: 'center' as 'center',

        },
        btn:{
            margin: '10px',
            fontSize: '1em',
            left: '50%',
            border: 'none',
            borderRadius: '2px',
            width: 'fit-content',
            alignSelf: 'center',
        }
    }
    return (
            <Card body  style= { style.card}>
                <CardTitle style= { style.text}>Answer</CardTitle>
                <CardText style= { style.text}>
                    {!answer ? 'Loading...' : answer}
                </CardText>
            </Card>
    )
}

export default Answer
