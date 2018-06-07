import React, { Component } from 'react'
import Head from 'next/head'
import { Circle } from 'rc-progress'

class Index extends Component {

  state = {
    countdown: 100
  }

  componentDidMount () {
    setInterval(() => {
      const countdown = this.state.countdown
      if (countdown > 0) {
        this.setState({ countdown: countdown - 5 })
      } else {
        window.location = 'http://mekanisme.com'
      }
    }, 1000)
  }

  render () {
    return (
      <div>
        <Head>
          <link href="/static/style.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <div className="container">
          <div className="centered">
            <h1>This website is currently undergoing development.</h1>
            <h2>Feel free to visit my photography portfolio at <a href="http://niepoortphoto.com">niepoortphoto.com</a>.</h2>
            <h2>You will be redirected to my current work affiliate, <a href="http://mekanisme.com">Mekanisme</a>, in <strong>T-{ this.state.countdown / 5 }</strong> seconds.</h2>
            <div className="count-down">
              <Circle percent={ this.state.countdown } strokeWidth="1.5" strokeColor="#141E30" trailColor="#C5D6A9" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-inner">
            &copy; 2017 Sebastian Niepoort | <a href="mailto:sebastian@niepoortmedia.com">sebastian@niepoortmedia.com</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
