import './App.css';
import main from './images/main.jpg';
import {Tab, Tabs} from "react-bootstrap";
import Overview from "./tabs/overview";
import Skills from "./tabs/skills";
import Education from "./tabs/education";
import Certifications from "./tabs/certifications";
import Gallery from "./tabs/gallery";
import Projects from "./tabs/projects";
import Experience from "./tabs/experience";

function App() {
  return (
    <div className={'container main'}>
        <div className={'d-flex justify-content-center align-items-center'}>
            <img src={main} width={'300'} height={'300'} alt={'header-main'} className={'header-image'}/>
        </div>
        <div className={'col-md-12 d-flex justify-content-center align-items-center'}>
            <h3>Manatsa Chinyeruse Profile</h3><br/>
        </div>
        <div className={'col-md-12 d-flex justify-content-center align-items-center text-info'}>
            <small>+263 776 298 063 or + 263 733 680 483 </small>&nbsp; &nbsp;  <a href={'mailto:manatsachinyeruse@gmail.com'}><small>manatsachinyeruse@gmail.com</small></a>
        </div>
        <div className="main col-md-12"></div>
      <div className="col-md-12">
          <Tabs className={'mb-3 '} defaultActiveKey="overview" id="cv-tab" fill={true}>
              <Tab title={'Overview'} eventKey={'overview'}>
                  <Overview />
              </Tab>
              <Tab title={'Experience'} eventKey={'experience'}>
                <Experience />
              </Tab>
              <Tab title={'Skills'} eventKey={'skills'}>
                  <Skills />
              </Tab>
              <Tab title={'Projects'} eventKey={'projects'}>
                  <Projects />
              </Tab>
              <Tab title={'Education'} eventKey={'education'}>
                  <Education />
              </Tab>
              <Tab title={'Certifications'} eventKey={'certifications'}>
                  <Certifications />
              </Tab>
              <Tab title={'Gallery'} eventKey={'gallery'}>
                  <Gallery />
              </Tab>

          </Tabs>
      </div>
    </div>
  );
}

export default App;
