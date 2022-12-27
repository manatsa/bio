import '../App.css'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const Overview = () => {
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
            <div className={'padded-20'} id={'nav'}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb d-flex justify-content-evenly">
                        <li ><span className={'bolder text-primary'}>NAVIGATION::</span></li>
                        <li className="breadcrumb-item"><a  href={'#summary'}>Professional Summary</a></li>
                        <li className="breadcrumb-item"><a  href={'#achievements'}>Major Achievements</a></li>
                        <li className="breadcrumb-item"><a  href={'#personal'}>Personal Details</a></li>
                        <li className="breadcrumb-item"><a  href={'#contact'}>Contact Details</a></li>
                        <li className="breadcrumb-item"><a  href={'#hobbies'}>Hobbies</a></li>
                        <li className="breadcrumb-item"><a  href={'#weaknesses'}>Weaknesses</a></li>
                    </ol>
                </nav>
            </div>
            <div className={'padded-20 bg-secondary bg-opacity-10'} id={'summary'}>
                <h3 className={'text-danger'}>PROFESSIONAL SUMMARY</h3>
                <p className={'text-primary bolder'}>
                    Determined ICT Manager who knows the trenches, eager to use software development skills in delivering programming excellence and clean code while helping the organizations realize their strategic goals. Developed more than 20 mobile and web apps. Collaborated on 10+ projects, tested, and debugged 15+ projects and supervised 20+ projects for 5+ organizations. Major contributor to migration from multiple monolith applications to centralized microservices architecture. I am a passionate and flexible java 8+ and NodeJS programmer, who is a team player and very keen on meeting new challenges.
                </p>
            </div>

            <div className={'padded-20 bg-secondary bg-opacity-10'} id={'achievements'}>
                <h3 className={'text-danger'}>MAJOR ACHIEVEMENTS</h3>
                <ul className={'text-success'}>

                    <li> Migrated 5 USSD short code application from monolith architecture to microservices architecture using spring cloud.</li>
                    <li> Designed, developed, and deployed automated task allocation system for Edgars stores.</li>
                    <li> Developed React Native Based App for Africaid currently hosted on google play.</li>
                    <li> Designed, developed, and deployed funeral policy management system using JavaFX.</li>
                    <li> Designed, developed, and deployed mobile app for a Mobile Network Operator which had failed more than 3 times in the past.</li>
                    <li> Supervised design, development, deployment, and maintenance of more than 20 projects</li>
                    <li> Many more.</li>


                </ul>
            </div>

            <div className={'padded-20 bg-secondary bg-opacity-10'} id={'personal'}>
                <h3 className={'text-danger'}>PERSONAL DETAILS</h3>
                <table className={'table table-striped table-responsive'}>
                    <thead>
                    <th></th> <th></th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>First Name</td> <td>Manatsa</td>
                    </tr>
                    <tr>
                        <td>Last Name</td> <td>Chinyeruse</td>
                    </tr>
                    <tr>
                        <td>Date Of Birth</td> <td>24 October 1986</td>
                    </tr>
                    <tr>
                        <td>Gender</td> <td>Male</td>
                    </tr>
                    <tr>
                        <td>Religion</td> <td>Christian</td>
                    </tr>
                    <tr>
                        <td>Race</td> <td>African</td>
                    </tr>

                    </tbody>
            </table>
            </div>
            <div className={'padded-20 bg-secondary bg-opacity-10'} id={'contact'}>
                <h3 className={'text-danger'}>CONTACT DETAILS</h3>
                <table className={'table table-responsive table-striped'}>
                    <thead>
                    <th></th> <th></th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Physical Address</td> <td>735 Sunway City, Harare, Zimbabwe</td>
                    </tr>
                    <tr>
                        <td>Mobile Phone 1</td> <td>+263 776 298 063</td>
                    </tr>
                    <tr>
                        <td>Mobile Phone 2</td> <td>+263 733 680 483</td>
                    </tr>
                    <tr>
                        <td>Email Address</td> <td>manatsachinyeruse@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className={'padded-20 bg-secondary bg-opacity-10'} id={'hobbies'}>
                <h3 className={'text-info'}>HOBBIES</h3>
                <ol className={'text-success'}>
                    <li>Music and Travelling</li>
                    <li>Learning new things and seeing new places</li>
                </ol>
            </div>

            <div className={'padded-20 bg-secondary bg-opacity-10'} id={'weaknesses'}>
                <h3 className={'text-warning'}>WEAKNESSES</h3>
                <p className={'text-success'}>I am so pained when i hit a brickwall such that i find it difficult to have a work-life balance in these situations. This sometimes has a negative effect as it maybe counter productive.</p>
            </div>

        </>
    );
}

export default Overview;