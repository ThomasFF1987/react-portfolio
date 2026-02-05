import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCode, faStore } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Unity",
    "2D",
    "3D",
    "Crossplatform",
    "Multiplayer",
    "Gameplay",
    "UI",
    "Input",
    "Sound",
    "Animations",
    "Particle Systems",
    "Shaders",
    "Online",
    "Database",
    "Optimization",
    "Addressables",
    "MVC",
    "State Machine",
    "Command Pattern",
    "Observer/Event Pattern",
    "Scriptable Objects",
    
];

const labelsSecond = [
    "C#",
    "Visual Studio",
    "VS Code",
    "Cursor",
    "Xcode",
    "GitHub",
    "Copilot",
    "AWS Lambda",
    "MongoDB",
    "HTML",
    "CSS",
    "Javascript",
    "React.JS",
    "Three.JS",
    "TypeScript",
    "PHP",
    "JSON",
    "Photon Fusion",
    "Spine Animation",
];

const labelsThird = [
    "Android",
    "iOS",
    "PC",
    "OSX",
    "WebGL",
    "Steam",
    "Nintendo Switch",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h2>Expertise</h2>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faUnity} size="3x" style={{ marginRight: "20px" }}/>
                    <h3>Game Development</h3>
                    <p>I have built a diverse game applications from scratch using Unity technologies, and have a strong proficiency in the Game Development Lifecycle process.</p>
                    <p>Working alongside various roles has allowed me to gain hands-on experience with every aspect of the game engine.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x" style={{ marginRight: "20px" }}/>
                    <h3>Tech Stack</h3>
                    <p>For each project, I select the most suitable technologies, learn and apply them effectively.</p>
                    <p>A modern and evolving stack, tailored for game development, enabling me to create reliable, high-performance, and immersive experiences.</p>
                    <p>AI agents help me generate boilerplate code, provide autocompletion, and review and optimize code to enhance my development workflow.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faStore} size="3x" style={{ marginRight: "20px" }}/>
                    <h3>Publishing & Updating</h3>
                    <p>Once my applications are released on stores, I continuously update them based on user feedback.</p>
                    <p>At the same time, I ensure compliance with evolving store requirements driven by legislation, as well as changes in software and hardware.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Expertise;
