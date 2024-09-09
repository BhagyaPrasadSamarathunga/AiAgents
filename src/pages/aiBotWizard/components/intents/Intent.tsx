import React from 'react';
import Styles from './Intent.module.css';

type trainingDataProps = {
    expressionCount: number;
    expressions: ExpressionsProps[];
}
type ExpressionsProps = {
    id: string;
    text: string;
}
type ReplyProps = {
    id: string;
    text: string;
}
type IntentProps = {
    id: string;
    name: string;
    description: string;
    trainingData: trainingDataProps;
    reply: ReplyProps;
    selected: boolean;
    onClick: (id:string) => void;
}
const Intent:React.FC<IntentProps> = ({id, name, description, trainingData, reply, selected, onClick}) => {
    return(
        <div data-testid={`intent-${id}`} className={`${Styles.tile} ${selected && Styles.active}`} onClick={()=>onClick(id)}>
            <div className={Styles.title}>
                <span >{name}</span>
            </div>
            <div className={Styles.content}>
                <span className={Styles.description}>{description}</span>
                <ul>{trainingData.expressions.map((data)=><li key={data.id}>{data.text}</li>)}</ul>
                <span className={Styles.replyTitle}>Reply: </span>
                <span className={Styles.replyValue}>{reply.text}</span>
            </div>
        </div>
    )
}
export default Intent;