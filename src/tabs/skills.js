import {Accordion} from "react-bootstrap";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const Skills=()=>{

    return (
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
            <div className="padded-20">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><span className={'bolder'}>SOFT SKILLS</span></Accordion.Header>
                        <Accordion.Body className={'accord-pane'}>
                            <ul>
                        <h5 className={'text-danger'}>Problem Solver</h5>
                        <p className={'text-success'}>I feed on problems and shine by ending them to the benefit of the organization.</p>
                        <h5 className={'text-danger'}>Communication</h5>
                        <p className={'text-success'}>Good and effective communication skills both upwards and downwards.</p>
                        <h5 className={'text-danger'}>Learning</h5>
                        <p className={'text-success'}>Quick to lean and I enjoy learning new environments and new technologies.</p>
                        <h5 className={'text-danger'}>Flexible</h5>
                        <p className={'text-success'}>Can readily relocate and adjust to different times and conditions.</p>
                        <h5 className={'text-danger'}>Team Player</h5>
                        <p className={'text-success'}>I enjoy interacting with team members and have team success</p>
                    </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><span className={'bolder'}>TECHNICAL SKILLS</span></Accordion.Header>
                        <Accordion.Body className={'accord-pane'}>
                            <ul>
                        <h5 className={'text-danger'}>Java Programming</h5>
                        <p className={'text-primary'}>Java 8 and later skills</p>
                        <ul className={'text-success'}>
                            <li>Java SE 8+</li>
                            <li>Java EE including JSF and Primefaces</li>
                            <li>Spring Framework (WebMVC, Batch, Data, Rest, etc)</li>
                            <li>JavaFX</li>
                        </ul>
                        <h5 className={'text-danger'}>NodeJS Framework</h5>
                        <p className={'text-success'}>Backend NodeJS frameworks which are ExpressJS and NestJS.</p>
                        <h5 className={'text-danger'}>Web Development</h5>
                        <p className={'text-primary'}>Javascript development including React Library (with NextJS)</p>
                        <ul className={'text-success'}>
                            <li>HTML5</li>
                            <li>Javascript</li>
                            <li>React Framework</li>
                            <li>NextJS Framework</li>
                            <li>CSS Framework</li>
                        </ul>
                        <h5 className={'text-danger'}>Databases</h5>
                        <p className={'text-success'}>Oracle, MySQL, Postgres and SQL Server Administration and development</p>
                        <h5 className={'text-danger'}>Integration</h5>
                        <p className={'text-success'}>RabbitMQ, Apache Kafka, Rest</p>
                        <h5 className={'text-danger'}>DevOps Skills</h5>
                        <p className={'text-success'}>Jenkins, Git, Docker</p>
                    </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><span className={'bolder'}>OTHER SKILLS</span></Accordion.Header>
                        <Accordion.Body className={'accord-pane'}>
                            <p className={'text-success'}>
                                I am also a gospel music composer, digital instrumentalist, chorister, conductor, recorder, editor, producer and adjudicator. I own a small studio for personal use.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


            </div>
        </>
    )
}

export default Skills