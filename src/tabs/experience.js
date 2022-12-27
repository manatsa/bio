import {Accordion} from "react-bootstrap";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";


const Experience = () =>{

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
                    <Accordion.Header><span className={'bolder text-success'}> 1. &nbsp; &nbsp; ICT Manager @ Zimnat General Insurance</span></Accordion.Header>
                    <Accordion.Body className={'accord-pane'}>
                       <table className={'table table-striped table-responsive text-secondary'}>
                           <tbody>
                           <tr>
                               <td>Organization</td> <td>Zimnat General Insurance</td>
                           </tr>
                           <tr>
                               <td>Start Date</td> <td>1 January 2023</td>
                           </tr>
                           <tr>
                               <td>End Date</td> <td> To Date</td>
                           </tr>
                           <tr>
                               <td>Role Level</td> <td>Senior Manager</td>
                           </tr>
                           </tbody>
                       </table>
                        <h5 className={'text-danger'}>Duties</h5>
                        <ul>
                            <li className={'text-primary'}>.</li>
                            <li className={'text-primary'}>.</li>
                            <li className={'text-primary'}>.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><span className={'bolder text-success'}> 2. &nbsp; &nbsp; Database Officer @ Zvandiri</span></Accordion.Header>
                    <Accordion.Body className={'accord-pane'}>

                        <table className={'table table-striped table-responsive text-secondary'}>
                            <tbody>
                                <tr>
                                    <td>Organization</td> <td>Zvandiri</td>
                                </tr>
                                <tr>
                                    <td>Start Date</td> <td>1 December 20219</td>
                                </tr>
                                <tr>
                                    <td>End Date</td> <td>31 December 2022</td>
                                </tr>
                                <tr>
                                    <td>Role Level</td> <td>Engineer</td>
                                </tr>
                            </tbody>
                        </table>
                        <h5 className={'text-danger'}>Duties</h5>
                        <ul>
                            <li className={'text-primary'}>Develop, fine tune, and maintain Organization's Systems and Databases</li>
                            <li className={'text-primary'}>Develop mobile app and additional system functionality.</li>
                            <li className={'text-primary'}>User support and training and data extraction.</li>
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><span className={'bolder text-success'}> 3. &nbsp; &nbsp; Software Development Team Leader @ Telecel Zimbabwe</span></Accordion.Header>
                    <Accordion.Body className={'accord-pane'}>

                        <table className={'table table-striped table-responsive text-secondary'}>
                            <tbody>
                                <tr>
                                    <td>Organization</td> <td>Telecel Zimbabwe</td>
                                </tr>
                                <tr>
                                    <td>Start Date</td> <td>1 October 2017</td>
                                </tr>
                                <tr>
                                    <td>End Date</td> <td>30 November 2019</td>
                                </tr>
                                <tr>
                                    <td>Role Level</td> <td>Junior Management</td>
                                </tr>
                            </tbody>
                        </table>
                        <h5 className={'text-danger'}>Duties</h5>
                        <ul>
                            <li className={'text-primary'}>Value Added Services (VAS) Architecture Review</li>
                            <li className={'text-primary'}>Systems Implementation/Development Supervision.</li>
                            <li className={'text-primary'}>Projects management functions </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><span className={'bolder text-success'}> 4. &nbsp; &nbsp; Database Administrator @ Doves Holdings</span></Accordion.Header>
                    <Accordion.Body className={'accord-pane'}>
                        <table className={'table table-striped table-responsive text-secondary'}>
                            <tbody>
                                <tr>
                                    <td>Organization</td> <td>Doves Holdings</td>
                                </tr>
                                <tr>
                                    <td>Start Date</td> <td>1 March 2014</td>
                                </tr>
                                <tr>
                                    <td>End Date</td> <td>30 September 2017</td>
                                </tr>
                                <tr>
                                    <td>Role Level</td> <td>Administrator</td>
                                </tr>
                            </tbody>
                        </table>
                        <h5 className={'text-danger'}>Duties</h5>
                        <ul>
                            <li className={'text-primary'}>Design, implement, and maintain MySQL and SQL Server databases.</li>
                            <li className={'text-primary'}>Design, implement, deploy, and support funeral policy management software</li>
                            <li className={'text-primary'}>Connect, maintain branch networks across the country.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><span className={'bolder text-success'}> 5. &nbsp; &nbsp;  Software Developer @ Microcom Technologies </span></Accordion.Header>
                    <Accordion.Body className={'accord-pane'}>
                        <table className={'table table-striped table-responsive text-secondary'}>
                            <tbody>
                                <tr>
                                    <td>Organization</td> <td>Microcom Technologies</td>
                                </tr>
                                <tr>
                                    <td>Start Date</td> <td>1 October 2013</td>
                                </tr>
                                <tr>
                                    <td>End Date</td> <td> 28 February 2014</td>
                                </tr>
                                <tr>
                                    <td>Role Level</td> <td>Developer</td>
                                </tr>
                            </tbody>
                        </table>
                        <h5 className={'text-danger'}>Duties</h5>
                        <ul>
                            <li className={'text-primary'}>Developed an Automated task allocation System used by Edgars Stores Debt Collection Unit</li>
                            <li className={'text-primary'}>Offer training and post deployment support.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                </Accordion>
        </>
    )
}

export default  Experience;