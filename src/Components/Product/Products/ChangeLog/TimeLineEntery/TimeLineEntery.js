import React,{useEffect} from 'react'
import './TimeLineEntery.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function TimeLineEntery(props) {

  useEffect(()=>{
    AOS.init()
  })
    return (
        <div class="TimelineEntryContainer"
        data-aos="zoom-in-left"
        
        data-aos-once="true"
        >
        <div class="TimelineEntry_timeline">
          <div class="TimelineEntry_line TimelineEntry_firstElement"></div>
        </div>
        <div class="TimelineEntry_textContent">
          <div class="TimelineEntryHead">
            <p class="
                TimelineEntryHead_dateContainer
                TimelineEntryHead_date_small
                TimelineEntryHead_date_color
              ">
              {props.date}
            </p>
          </div>

          
          <p class="
              TimelineEntryHead_dateContainer
              TimelineEntryTitle
              TimelineEntryTitle_small
              TimelineEntryTitle_color
            ">
            {props.desc}
          </p>
         
        </div>
      </div>
    )
}

export default TimeLineEntery
