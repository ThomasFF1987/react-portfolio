
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import logo001 from '../assets/images/logo_funforge.png';
import logo002 from '../assets/images/logo_isart.png';
import logo003 from '../assets/images/logo_electronlibre.png';
import logo004 from '../assets/images/logo_sillycat.png';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h2>Career</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb. 2015 - Aug. 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <img src={logo001} alt="thumbnail" width="15%"/>
            <h3 className="vertical-timeline-element-title">Game Developer @ Funforge</h3>
            <h4 className="vertical-timeline-element-subtitle">Paris, FRANCE</h4>
            <p>
              Full-stack Game Development, Unity C#, Project Management
            </p>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb. 2013 - Feb. 2015"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <img src={logo004} alt="thumbnail" width="30%"/>
            <h3 className="vertical-timeline-element-title">Co-Founder CTO @ SillyCat Studio</h3>
            <h4 className="vertical-timeline-element-subtitle">Paris, FRANCE</h4>
            <p>
              Full-stack Game Development
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2010 - Jul. 2012"
            iconStyle={{ background: '#ca009eff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faFontAwesome} />}
          >
            <img src={logo002} alt="thumbnail" width="25%"/>
            <h3 className="vertical-timeline-element-title">Game Design & Programming Diploma</h3>
            <h4 className="vertical-timeline-element-subtitle">Paris, FRANCE</h4>
            <p>
              ISART Digital Paris
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2011 - Jul. 2012"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <img src={logo002} alt="thumbnail" width="25%"/>
            <h3 className="vertical-timeline-element-title">Game Developer Intern @ ISART Digital</h3>
            <h4 className="vertical-timeline-element-subtitle">Paris, FRANCE</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2011 - Jul. 2011"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <img src={logo003} alt="thumbnail" width="40%"/>
            <h3 className="vertical-timeline-element-title">Web Developer Intern @ ElectronLibre.info</h3>
            <h4 className="vertical-timeline-element-subtitle">Paris, FRANCE</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec. 2008 - Sep. 2010"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Electronic Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">FRANCE</h4>
            <p>
              Alcatel-Lucent / Rockwell Collins / Corvo Technology / Chronodisk
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep. 2006 - Jul. 2008"
            iconStyle={{ background: '#ca009eff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faFontAwesome} />}
          >
            <h3 className="vertical-timeline-element-title">BTS Electronic Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">Beauvais, FRANCE</h4>
            <p>
              Lycée Paul Langevin
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;