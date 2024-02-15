import {Accordion} from "react-bootstrap";
import '../App.css'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const Certifications =()=>{

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
            <h3>Certifications</h3><br/>

            <Accordion defaultActiveKey="3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className={'accord-header'}><span className={'bolder'}>Project Management Professional</span></Accordion.Header>
                    <Accordion.Body>
                        <table className={'table table-striped table-responsive'}>
                            <thead>
                            <th>By</th> <th>PMI</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Year</td> <td>2023</td>
                            </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className={'accord-header'}><span className={'bolder'}>IPEC Certificate of Proficiency</span></Accordion.Header>
                    <Accordion.Body>
                        <table className={'table table-striped table-responsive'}>
                            <thead>
                            <th>Subject</th> <th>Short Term Insurance</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Status</td> <td>P</td>
                            </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default  Certifications