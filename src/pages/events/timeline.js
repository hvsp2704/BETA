import { render } from 'react-dom';
import {Timeline, TimelineEvent} from 'react-event-timeline'

function AltTimeline() {
  return(
    <Timeline>
            <TimelineEvent title="Event Info"
                           createdAt="2016-09-12"
                           icon={<i className="material-icons md-18">textsms</i>}
            >
                Event 1
            </TimelineEvent>
            <TimelineEvent
                title="Event Info"
                createdAt="2016-09-11"
                icon={<i className="material-icons md-18">email</i>}
            >
                Event 2
            </TimelineEvent>
            <TimelineEvent
                title="Event Info"
                createdAt="2016-09-11"
                icon={<i className="material-icons md-18">email</i>}
            >
                Event 3
            </TimelineEvent>
            <TimelineEvent title="Event Info"
                           createdAt="2016-09-12"
                           icon={<i className="material-icons md-18">textsms</i>}
            >
                Event 4
            </TimelineEvent>
            <TimelineEvent
                title="Event Info"
                createdAt="2016-09-11"
                icon={<i className="material-icons md-18">email</i>}
            >
                Event 5
            </TimelineEvent>
            <TimelineEvent
                title="Event Info"
                createdAt="2016-09-11"
                icon={<i className="material-icons md-18">email</i>}
            >
                Event 6
            </TimelineEvent>
    </Timeline>
    )
}
export default AltTimeline;