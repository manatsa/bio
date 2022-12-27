import {Accordion} from "react-bootstrap";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const Projects = () =>{

    return(
        <>
            <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={100}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{backgroundColor:'dodgerblue', borderColor:'dodgerblue', color:'white'}}
                ToggledStyle={{backgroundColor:'dodgerblue', borderColor:'dodgerblue', color:'white'}}
            />
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span className={'bolder'}>Projects Supervised</span></Accordion.Header>
                    <Accordion.Body className={'accord-pane'}>
                        <ul>
                            <h5 className={'text-primary'}>Creation of a new SIM CARD Registration System</h5>
                            <p className={'text-danger'}>PROBLEM - The SIM CARD registration system which was in operation was not stable, lacked many features and was developed using an obsolete technology.</p>
                            <p className={'text-success'}>SOLUTION - Supervised creation of a new ANGULAR based SIM Card registration System from requirements gathering to post deployment support.</p>
                            <h5 className={'text-primary'}>Development of a Bulk Messaging System.</h5>
                            <p className={'text-danger'}>PROBLEM - The bulk messaging system was not reliable and would not give report of success delivery. It was made of obsolete technology.</p>
                            <p className={'text-success'}>SOLUTION - Supervised the whole development process of the new modern bulk messaging system, training of users and supervised provision of post deployment support.</p>
                            <h5 className={'text-primary'}>Simplifying Application Configurations by migrating them from source code to database.</h5>
                            <p className={'text-danger'}>PROBLEM - It was difficult to reconfigure systems, such configurations as price, service units,etc.</p>
                            <p className={'text-success'}>SOLUTION - Supervised the refactoring of source code, moving common configurations to the database, and have them loaded on application startup.</p>
                            <h5 className={'text-primary'}>More..</h5>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><span className={'bolder'}>Team Effort Projects</span></Accordion.Header>
                    <Accordion.Body className={'accord-pane'}>
                        <ul>
                            <h5 className={'text-primary'}>Migration from multiple monolith bundle purchasing applications to single microservice Architecture</h5>
                            <p className={'text-danger'}>PROBLEM - There were multiple servers, some of which were underutilized while others were overloaded, leading to frequent server downtimes during peak hours</p>
                            <p className={'text-success'}>SOLUTION - Implementing microservices and distributing them across all servers. To mitigate security risk, all request were made to pass through a single gateway and authentication and authorization was also handled by the gateway</p>
                            <h5 className={'text-primary'}>Creation of Telecel Mobile Application</h5>
                            <p className={'text-danger'}>PROBLEM - Telecel had no mobile application, and had had more than two failed attempts.</p>
                            <p className={'text-success'}>SOLUTION - Supervised and assisted technically in the development of the mobile application. My role was more of a LEAD developer. While myself and some Graduate Trainees focussed on the mobile app itself, the API was created by another pair withing my team.</p>
                            <h5 className={'text-primary'}>Creation of Doves Holdings Mobile Application</h5>
                            <p className={'text-danger'}>PROBLEM - Doves Holdings wanted an application to enable customers to query information about their policies and potential customers to self register into a second level database.</p>
                            <p className={'text-success'}>SOLUTION - Together with my assistant, I engaged on development of the mobile app and delivered withing three months.</p>
                            <h5 className={'text-primary'}>Creation of an interim Policy Management System for Doves Holdings</h5>
                            <p className={'text-danger'}>PROBLEM - Doves Funeral Assurance used to manage customer data on excel files which made it difficult to manage payments, as they were scattered across different files</p>
                            <p className={'text-success'}>SOLUTION - With my assistant, we created a JAVAFX based system which was to manage customer policy data including payments, dependents and claims.</p>
                            <h5 className={'text-primary'}>Connection of branches to the Head Office network via VPN</h5>
                            <p className={'text-danger'}>PROBLEM - Doves Branches were using dongles to connect to the internet and could not access some services from Head office as they required one to be with Doves network.</p>
                            <p className={'text-success'}>SOLUTION - Designed the network for branches, configured routers and switches to connect to the internet via a VPN to the head office.</p>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><span className={'bolder'}>Individual Effort Projects</span></Accordion.Header>
                    <Accordion.Body className={'accord-pane'}>
                        <ul>
                            <h5 className={'text-primary'}>Telecel Servers Architecture Review</h5>
                            <p className={'text-danger'}>PROBLEM - There were multiple servers, some of which were underutilized while others were overloaded, leading to frequent server downtimes during peak hours</p>
                            <p className={'text-success'}>SOLUTION - Implementing microservices and distributing them across all servers. To mitigate security risk, all request were made to pass through a single gateway and authentication and authorization was also handled by the gateway</p>
                            <h5 className={'text-primary'}>Creation of Zvandiri's Zvamoda Mobile Application</h5>
                            <p className={'text-danger'}>PROBLEM - Telecel had no mobile application, and had had more than two failed attempts.</p>
                            <p className={'text-success'}>SOLUTION - Supervised and assisted technically in the development of the mobile application. My role was more of a LEAD developer. While myself and some Graduate Trainees focussed on the mobile app itself, the API was created by another pair withing my team.</p>
                            <h5 className={'text-primary'}>Spring Batch based Zvandiri Reports Systems</h5>
                            <p className={'text-danger'}>PROBLEM - Doves Holdings wanted an application to enable customers to query information about their policies and potential customers to self register into a second level database.</p>
                            <p className={'text-success'}>SOLUTION - Together with my assistant, I engaged on development of the mobile app and delivered withing three months.</p>
                            <h5 className={'text-primary'}>Development of Automated Task Allocation System for Edgars Stores</h5>
                            <p className={'text-danger'}>PROBLEM - Doves Funeral Assurance used to manage customer data on excel files which made it difficult to manage payments, as they were scattered across different files</p>
                            <p className={'text-success'}>SOLUTION - With my assistant, we created a JAVAFX based system which was to manage customer policy data including payments, dependents and claims.</p>
                            <h5 className={'text-primary'}>Development of Customer Management System for Oceane Cosmetics</h5>
                            <p className={'text-danger'}>PROBLEM - Doves Branches were using dongles to connect to the internet and could not access some services from Head office as they required one to be with Doves network.</p>
                            <p className={'text-success'}>SOLUTION - Designed the network for branches, configured routers and switches to connect to the internet via a VPN to the head office.</p>
                            <h5 className={'text-primary'}>More...</h5>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Projects;