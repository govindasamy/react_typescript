import React from "react";

const flexiConfig = {
    items: [
        {
            "name": "person_name",
            "label": "Person's Name",
            "type": "TextField",
        },
        {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
                "Maharashtra",
                "Kerala",

                "Kerala",
                "Tamil Nadu"
            ]
        },
        {
            "name": "person_age",
            "label": "Person's age",
            "type": "TextField",
        },
    ]
};

export default class TestComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userData : null
        }
    }

    onChange(e){
        this.setState({
            userData : {
                ...this.state.userData,
                [e.target.name] : e.target.value
            }
        })
    }

    // onSelectionChange(key, val){

    // }

    SubmitForm(event, obj){
        event.preventDefault();
        console.log(this.state.userData);

    }

    render(){
        const formFields = flexiConfig.items.map((el,i)=>{
            if(el.type === "TextField"){
                return <input type="text" id={el.name} name={el.name} placeholder={el.label} onChange={(e)=>this.onChange(e)} />
            } else if(el.type === "DropDown") {
                return <select name={el.name} onChange={(e)=>this.onChange(e)}>
                    {el.values.map((option,index)=>{
                        return <option value={option}>{option}</option>
                    })}
                </select>
            }
        })
        return(
            <form onSubmit={(e)=>this.SubmitForm(e, this)}>
                {formFields}
                <button>Submit</button>
            </form>
        )
    }
}