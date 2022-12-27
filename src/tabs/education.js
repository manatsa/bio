import {Accordion} from "react-bootstrap";
import '../App.css'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";


const Education = ()=>{

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
            <h3>Educational Qualifications</h3><br/>

            <Accordion defaultActiveKey="3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className={'accord-header'}><span className={'bolder'}>Ordinary Level</span></Accordion.Header>
                    <Accordion.Body>
                        <table className={'table table-striped table-responsive'}>
                            <thead>
                                <th>Subject</th> <th>Grade</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>English</td> <td>B</td>
                                </tr>
                                <tr>
                                    <td>Mathematics</td> <td>A</td>
                                </tr>
                                <tr>
                                    <td>Physical Science</td> <td>A</td>
                                </tr>
                                <tr>
                                    <td>Integrated Science</td> <td>A</td>
                                </tr>
                                <tr>
                                    <td>Biology</td> <td>A</td>
                                </tr>
                                <tr>
                                    <td>Shona</td> <td>A</td>
                                </tr>
                                <tr>
                                    <td>History</td> <td>A</td>
                                </tr>
                                <tr>
                                    <td>Geography</td> <td>B</td>
                                </tr>
                                <tr>
                                    <td>Building Studies</td> <td>B</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className={'accord-header'}><span className={'bolder'}>Advanced Level</span></Accordion.Header>
                    <Accordion.Body>
                        <table className={'table table-striped table-responsive'}>
                            <thead>
                                <th>Subject</th> <th>Grade</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mathematics</td> <td>C</td>
                                </tr>
                                <tr>
                                    <td>Physics</td> <td>C</td>
                                </tr>
                                <tr>
                                    <td>Chemistry</td> <td>D</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className={'accord-header'}><span className={'bolder'}>Bachelors Degree</span></Accordion.Header>
                    <Accordion.Body>
                        <table className={'table table-striped table-responsive'}>
                            <tbody>
                            <tr>
                                <td>Institution</td> <td>University of Zimbabwe</td>
                            </tr>
                            <tr>
                                <td>Programme Name</td> <td>Bachelors Degree Honors in Computer Science</td>
                            </tr>
                            <tr>
                                <td>Degree Class</td> <td><b>Upper First Class (2.1)</b></td>
                            </tr>
                            <tr>
                                <td>Start Year</td> <td>2010</td>
                            </tr>
                            <tr>
                                <td>End Year</td> <td>2013</td>
                            </tr>
                            <tr>
                                <td>Dissertation </td> <td>Mobile E-Tourism</td>
                            </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className={'accord-header'}><span className={'bolder'}>Masters Degree</span></Accordion.Header>
                    <Accordion.Body>
                        <table className={'table table-striped table-responsive'}>
                            <tbody>
                            <tr>
                                <td>Institution</td> <td>National University of Science and Technology</td>
                            </tr>
                            <tr>
                                <td>Programme Name</td> <td>Master of Business Administration</td>
                            </tr>
                            <tr>
                                <td>Degree Class</td> <td>Pass With <b>Credit</b></td>
                            </tr>
                            <tr>
                                <td>Start Year</td> <td>2018</td>
                            </tr>
                            <tr>
                                <td>End Year</td> <td>2020</td>
                            </tr>
                            <tr>
                                <td>Dissertation </td> <td>Value Creation through IT-Business Alignment</td>
                            </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className={'accord-header'}><span className={'bolder'}>Doctorate Degree</span></Accordion.Header>
                    <Accordion.Body>
                        <span>No qualification yet.</span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header className={'accord-header'}><span className={'bolder'}>Other Qualifications</span></Accordion.Header>
                    <Accordion.Body>
                        <span>No qualification yet.</span>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </>
    )
}

export default Education;