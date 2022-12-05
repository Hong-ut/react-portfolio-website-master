import { v4 as uuidv4 } from 'uuid';
import projImg1 from '../../assets/images/logo_sub.png'
import projImg2 from '../../assets/images/logo_sub.png'
import projImg3 from '../../assets/images/logo_sub.png'

const projects = [
    {
        id: uuidv4(),
        name: "Business Startup",
        desc: "Design & Development",
        img: projImg1,
    },
    {
        id: uuidv4(),
        name: "Business Startup",
        desc: "Design & Development",
        img: projImg2,
    },
    {
        id: uuidv4(),
        name: "Business Startup",
        desc: "Design & Development",
        img: projImg3,
    },
];

export default projects;