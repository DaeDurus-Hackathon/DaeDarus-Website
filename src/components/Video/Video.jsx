import React from 'react'
import ReactPlayer from 'react-player'
import '../Video/Video.css'
import { Container, Row, Col } from 'react-bootstrap'

const Video = ({url}) => {
      return (
        <div className='player-wrapper'>
            <Container className="pt-5">
                <ReactPlayer
                    className='react-player'
                    url= {url}
                    width='100%'
                    height='100%'
                    controls={true}
                    muted={true}
                    pip = {true}
                    loop = {true}
                    playing = {true}
                />
            </Container>
        </div>
      )
  }

export default Video