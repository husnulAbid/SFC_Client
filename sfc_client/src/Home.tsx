import reactLogo from './assets/react.svg'
import djangoLogo from '/django.svg'
import flaskLogo from '/flask.svg'
import dockerLogo from '/docker.svg'
import awsLogo from '/aws.svg'
import './Home.css'


function Home() {

  return (
    <div className="mainRoot">
      <h2>Secure Forcast</h2>
      <h5 className="motoLine">Expand Your Business Through Data Analysis</h5>

      <div className="exploreButton">
        <button className="btn btn-primary">
          Let's Explore
        </button>
      </div>

      <a href="https://sites.google.com/view/husnulabid26/">Hosted By: Husnul Abid</a>

      <div className="poweredByLogo">
        <a href="https://www.djangoproject.com/" target="_blank">
          <img src={djangoLogo} className="logo django" alt="Django logo" />
        </a>

        <a href="https://flask.palletsprojects.com/" target="_blank">
          <img src={flaskLogo} className="logo flask" alt="Flask logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://www.docker.com/" target="_blank">
          <img src={dockerLogo} className="logo docker" alt="docker logo" />
        </a>

        <a href="https://aws.amazon.com//" target="_blank">
          <img src={awsLogo} className="logo aws" alt="Aws logo" />
        </a>
      </div>
    </div>
  )
}

export default Home
