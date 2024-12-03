    import React from "react"
    import "./toolbar.css";
    
    export const ToolBar = (props) => {

        return (

            <div className="toolBar">
                <div className="add-contact" onClick={props.modalVisible}>             
                    <i className="fa-solid fa-plus" ></i>
                    <p>Add new contact</p>
                </div>
                <div className="add-contact">             
                    <i className="fa-solid fa-trash" onClick={props.resetAll}></i>
                    <p>Delete contacts</p>
                 </div>
          </div>

        )
    }
    
    
    
    