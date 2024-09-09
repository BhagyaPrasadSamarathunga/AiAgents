import { useState } from "react";
import CheckBox from "../../../../components/checkBox/CheckBox"
import Intent from "./Intent";
import { getIntents } from '../../../../services/apiService';
import Styles from './IntentList.module.css'

const IntentList:React.FC  = () =>{

    const [checked, setChecked] = useState<boolean>(false);
    const intentsData = getIntents();
    const [selectedIntents, setSelectedIntents] = useState<string[]>([]);

    const handleSelectAllClick = () => {
        if (checked) {
          setSelectedIntents([]);
        } else {
          let intents = intentsData.map((i) => i.id);
          setSelectedIntents([...intents]);
        }
        setChecked(!checked);
    };
    
    const handleSingleIntentClick = (id:string) => {
        let index = selectedIntents.indexOf(id);
        if (index > -1) {
          let intents = selectedIntents;
          intents.splice(index, 1);
          setSelectedIntents([...intents]);
          setChecked(false);
        } else {
          setSelectedIntents([...selectedIntents, id]);
        }
    }; 

    const Intents = () => {
        return (
            <div className={Styles.intents}>
                <div className={Styles.content}>
                    {intentsData.map((intent) => (
                        <Intent
                            key={intent.id}
                            id={intent.id}
                            name={intent.name}
                            description={intent.description}
                            trainingData={intent.trainingData}
                            reply={intent.reply}
                            selected={selectedIntents.includes(intent.id)}
                            onClick={(id)=>handleSingleIntentClick(id)}
                         />
                    ))}
                </div>
            </div>
        )
    }

    return(
        <div className={Styles.container}>
            <div className={Styles.header}>
                <div className={Styles.titleContainer}>
                    <span className={Styles.title}> Select the intents for your AI Bot </span>
                    <span className={Styles.description}> Here you can see the list of categories of user's messages and the trained response from the AI Bot</span>
                </div>
                <div className={Styles.checkBoxContainer}>
                    <CheckBox title='Select All' isChecked={checked} onClick={handleSelectAllClick}/>
                </div>
            </div>
             <div className={Styles.intentsContainer}>
                <Intents /> 
             </div>
        </div>
    )
}
export default IntentList