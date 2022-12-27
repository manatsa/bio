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
            <span className={'text-danger'}>No certification yet.</span>
        </>
    )
}

export default  Certifications