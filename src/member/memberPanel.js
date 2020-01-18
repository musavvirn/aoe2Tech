import React, {Component} from "react";
import MemberList from "./memberList";
import "./member.css";
import Dropdown from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import MenuItem from 'react-bootstrap/DropdownItem';
import SplitButton from 'react-bootstrap/SplitButton';

const memberList = new MemberList();

class MemberPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {members: memberList.getMemberList(), count : memberList.getTotalCount(), showList: false};
        this.showMembers = this.showMembers.bind(this);
        this.displayMembers = this.displayMembers.bind(this);
         
    }

    getMembers() {
        return this.state.count;
    }

    showMembers() {
        if (!this.state.showList) {
            this.setState({showList : true});
            return this.state.members;
        } else {
            this.setState({showList : false});
        }
    }

    displayMembers() {
        if (this.state.showList) {
            let list = this.state.members.map(m => 
                <div >
                    <div key={m.id} className="btn btn-dark member-btn"> {"[" + m.elo + "] " + m.name} </div> 
                </div>
                
            )
            return (list);
        }
    }

    renderMemberBtn() {
        let btnText = (!this.state.showList) ? "Show Members" : "Hide Memebrs";
        let btn = <button onClick={this.showMembers} className="btn btn-dark member-btn"> {btnText} </button>
        return btn;
    }

    render() {
        return (
            <div className="memberPanel">
                <h5> PLAYERS ONLINE </h5>
                <p> Active: {this.getMembers()} {this.renderMemberBtn()} </p>
                <div>{this.displayMembers()}</div>
            </div>
        )
    }
}

export default MemberPanel;