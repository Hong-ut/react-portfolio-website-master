import Art1 from '../assets/images/Artisian1.jpeg'
import Art2 from '../assets/images/Artisian2.jpeg'
import Art3 from '../assets/images/Artisian3.jpeg'
import Art4 from '../assets/images/Artisian4.jpeg'
import Ez1 from '../assets/images/ezmed1.jpeg'
import Ez2 from '../assets/images/ezmed2.jpeg'
import chat1 from '../assets/images/chat1.jpeg'
import chat2 from '../assets/images/chat2.jpeg'
import lowRisk1 from '../assets/images/lowRisk1.jpeg'
import lowRisk2 from '../assets/images/lowRisk2.jpeg'


const projectList = [
    {
        name: "Artisian",
        desc: "A web application that generates a high-quality image from a quick sketch and prompt from the user",
        imgs: [Art1, Art2, Art3, Art4],
        links: [
            'https://github.com/Gongsta/Artisian',
            'https://devpost.com/software/homify-7czehr',
        ],
        skills: "HTML, CSS, JavaScript, Python, Pytorch, Stable-diffusion",
    },
    {
        name: "EasyMed",
        desc: "A convenient and accessible prescription mobile app that helps users to take their medications on time",
        imgs: [Ez1, Ez2],
        links: [
            'https://github.com/vsahni3/EasyMed',
            'https://devpost.com/software/easymed-y9so6w',
        ],
        skills: "Javascript, Firebase, Python, Flask, Matplotlib, SQLReact-native, expo.io",
    },
    {
        name: "RSG Chat",
        desc: "A chat web application that allows Recognized Study Groups in University of Toronto to privately communicate outside of their meetings",
        imgs: [chat1, chat2],
        links: [
            'https://github.com/Hong-ut/UofT-RSG-Chat',
        ],
        skills: "ReactJS, NodeJS, Socket.io, ExpressJS"
    },
    {
        name: "Low Risk Routing System",
        desc: "A map application that suggests the safest and fastest path and displays risk-level of intersections in Toronto",
        imgs: [lowRisk1, lowRisk2],
        links: [
            'https://github.com/stone12222/HackTo2022Hive',            
        ],
        skills: "HTML, CSS, JavaScript, Python, Pandas, Numpy, Leaflet",
    },
];

export default projectList;