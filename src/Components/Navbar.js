import React, {Component} from 'react';
import {FiMenu} from 'react-icons/fi';
import {ImGift} from 'react-icons/im';
import '../App.css';

export default class Navbar extends Component {
    state = {
        toggle: false
    }
  
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

    render(){
        const li = [    {
            link: "/",
            text: <ImGift/>
          }, 
          {
            link: "/",
            text:"HOME"
          },
          {
            link: "/about/",
            text:"ABOUT"
          },
          {
            link: "/happy/",
            text: "HAPPY"
          },
          {
            link: "/contact/",
            text: "CONTACT"
          },
];
       

        return(
            <>
            <div className="navBar">
                <button onClick = {this.Toggle}>
                      <FiMenu/>
                </button>
                <ul className = {this.state.toggle ? "links showNav" : "links"}>
                    {
                      li.map((objLink, i) => {
                      return ( <li key={i}><a href={objLink.link}>{objLink.text}</a></li> )
                      })
                    }
                </ul>
            </div>
        </>
        )
    }
}



