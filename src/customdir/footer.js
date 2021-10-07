import React, {Component} from "react";
import {Button} from "react-bootstrap";
import CivService from "../techtree/Service/civService";
import NotifService, {CIV_TYPED} from "../techtree/Service/notifService";
import CivTypedService from "../techtree/Service/civTypedService";
import {CIVS} from "../techtree/civPanel";

var notifService = new NotifService();
var civTypedService = new CivTypedService();

class Footer extends Component {
    constructor() {
        super();
        this.state = {label: "Warning", id: 0, value: ""};
        this.handleEvent = this.handleEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        notifService.addObserver(CIV_TYPED, this, this.reset)
    }

    componentWillUnmount() {
        notifService.removeObserver(this, CIV_TYPED);
    }

    handleEvent() {
        console.log("Warning button is clicked");
        if (this.state.id > 10) {
            this.state.id = 0;
        }
        if (this.state.id % 2 == 1) {
            this.setState({label: "Clicked", id: this.state.id+1});

        } else {
            this.setState({label: "Warning", id: this.state.id+1});

        }

    }

    handleSubmit(e) {
        let x = e.target.value;

        if (CIVS.includes(x)) {
            console.log(x);
            civTypedService.civSelected(x);
        }
    }

    reset() {

    }



    render() {
        return(
        <article>
        <div>Press this button to exit:
            <form onChange={this.handleSubmit}>
                <input type="text"></input>

            </form>
            <Button variant="warning" onClick={this.handleEvent}>{this.state.label}</Button>{' '}
            <Button variant="primary">{this.state.id}</Button>{' '}
        </div>

        </article>
        )
    }
}

export default Footer;