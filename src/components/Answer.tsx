import React from 'react'
import { Card, CardText, CardTitle } from 'reactstrap'

import { style } from './styles/AnswerStyles';
interface Props {
    answer: string,
    isAnswerCorrect: boolean
}

const Answer = ( props : Props ) => {
    const { answer, isAnswerCorrect } = props;

    return (
        <Card body  style= {{...style.card, backgroundColor: isAnswerCorrect ? 'green' : 'red' } }>
                <CardTitle style= { style.text}>Answer</CardTitle>
                <CardText style= { style.text}>
                    {!answer ? 'Loading...' : answer}
                </CardText>
            </Card>
    )
}

export default Answer
