import React from 'react'
// import {libary} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPencilAlt,
  faCoffee,
  faBook,
  faComment
} from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt, faCoffee, faBook, faComment)

const About = () => (
  <div className="wrapper">
    <div className="container">
      <div className="portrait">
        <img
          src="https://www.gravatar.com/avatar/f0b1f249484e7691d1a2ba398e843f48.jpeg?s=450"
          alt="Avatar"
        />
      </div>
      <div className="about" id="about">
        <h2>About Me</h2>
        <div className="interests">
          <div className="interest">
            <div className="interest-header">
              <FontAwesomeIcon
                className="interest-icon"
                size="2x"
                icon="pencil-alt"
              />
              <h3>Engineering</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              dui rutrum, bibendum ante eu, dictum nulla. Fusce tristique urna
              vel dictum fermentum. Duis sagittis varius varius. Etiam ut
              accumsan.
            </p>
          </div>
          <div className="interest">
            <div className="interest-header">
              <FontAwesomeIcon
                className="interest-icon"
                size="2x"
                icon="coffee"
              />
              <h3>Coffee</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              dui rutrum, bibendum ante eu, dictum nulla. Fusce tristique urna
              vel dictum fermentum. Duis sagittis varius varius. Etiam ut
              accumsan.
            </p>
          </div>
          <div className="interest">
            <div className="interest-header">
              <FontAwesomeIcon
                className="interest-icon"
                size="2x"
                icon="book"
              />
              <h3>Reading</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              dui rutrum, bibendum ante eu, dictum nulla. Fusce tristique urna
              vel dictum fermentum. Duis sagittis varius varius. Etiam ut
              accumsan.
            </p>
          </div>
          <div className="interest">
            <div className="interest-header">
              <FontAwesomeIcon
                className="interest-icon"
                size="2x"
                icon="comment"
              />
              <h3>Entrepreneurship</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              dui rutrum, bibendum ante eu, dictum nulla. Fusce tristique urna
              vel dictum fermentum. Duis sagittis varius varius. Etiam ut
              accumsan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
