import React, { Component } from 'react';
import Tree from "./tree";
import "./panel.css";
import {Button} from "react-bootstrap";
import {Collapse} from "react-bootstrap";

class TreePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true}
        this.collapse = this.collapse.bind(this);
        this.getImg = this.getImg.bind(this);
    }

    /* collapse panel on clicking the header */
    collapse() {
        let x = (this.state.open) ? false : true;
        this.setState({open: x});
    }

    /* generate building icon for the header of the panel */
    getImg() {
        if (this.props.build !== "Economic Buildings") {
            let x = this.props.build.toLowerCase().replace(' ', '_');
            return x;
        } else {
            let x = "farm";
            return x;
        }
    }

    
    updateTree(value) {
        

    }


    
    render() {
        
        return (              
            
            <th className="panel">
                <Button onClick={this.collapse} className="panel-btn" aria-controls="example-collapse-text" aria-expanded={!this.state.open}>
                    <img className="img" src={require("../Buildings/" + this.getImg() + ".png")} alt="IMG"></img>
                    <span className="build-name">{" "}{this.props.build}</span>
                </Button>
                <Collapse in={this.state.open}>
                    
                    <div id="example-collapse-text" className="panel-space">
                    <Tree fu={this.props.fu} units={this.props.tree} UT={this.props.UT}/> 
                    </div>
                    
                </Collapse>
            </th>
            
            
            
        )
        
    }
}

export default TreePanel;
