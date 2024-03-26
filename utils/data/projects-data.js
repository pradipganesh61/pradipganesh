import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Patient Rating',
        description: "Patients Rating is a critical project developed during the height of the COVID-19 pandemic for one of the leading pharmaceutical clients in the United States. This innovative platform assesses and rates the severity of patient infections, providing invaluable data insights. By aggregating and analyzing patient data, the project aims to offer a comprehensive understanding of the pandemic's impact, aiding healthcare professionals in managing and combating the virus effectively.",
        tools: ['ReactJS', 'TypeScript', 'SharePoint', 'Redux', 'Rest API', ".NET Core", 'Azure'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front-End Developer',
    },
    {
        id: 2,
        name: 'Innovation Engine',
        description: "Developed a $150K Reactjs application ‘Innovation Engine’ to effectively channel diverse medical ideas from various sources into a single platform, facilitating clients in making well-informed, singular concrete decisions.",
        tools: ['ReactJS', 'SharePoint', 'Redux', 'Rest API', ".NET Core", 'Azure'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 3,
        name: 'Vehicles Tracking and Visualization',
        description: 'Implemented a distributed ETL pipeline visualizes or tracks the real-time location of vehicles in Greater Boston, Massachusetts using MBTA API. Massachusetts Bay Transportation Authority (MBTA) operates heavy-rail, light-rail, and bus transit services in the Boston metropolitan area. This multi-component full-stack solution shows the capabilities of what could be done with modern open-source technologies, especially Apache Spark and Kafka. For this application, the other clients could be the Transportation Department or Police department who are interested in tracking the locations of vehicles that are running in public transport area of any location. In our project, we take the real-time data with the help of Kafka and processed with spark and populate the map with the help of ReactJS as front-end framework. For server and client side, we have used Node.JS as our server environment. As a backend database we have used MongoDB which is a document-oriented database which serves perfect for storing big data and manipulating real time data.',
        tools: ['ReactJS', 'NodeJS', 'HTML/CSS', "Google Maps", "Express", "TypeScript", "MongoDB", "Apache Kafka", "Apache Spark"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Traffic Light Management System',
        description: "Developed an innovative approach utilizing Reinforcement Learning techniques to effectively manage traffic lights at a complex four-way intersection. Leveraging the Simulation of Urban MObility (SUMO) agent-based simulator and TensorFlow, we created a synthetic yet realistic environment to explore the outcomes of potential regulatory actions. This initiative stands as a significant contribution in the realm of traffic management research, offering insights into optimizing traffic flow and decision-making while using Artificial Intelligence to enhance urban transportation.",
        tools: ['Python', 'Reinforcement Learning', 'Deep Q-Learning'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 5,
        name: 'Image Search Engine',
        description: 'This project required four steps to build — Defining image descriptor, Indexing Dataset, Defining similarity Matrix, and the final Searching. As an image descriptor, we used a 3D color histogram in the color HSV space. It split the image into five parts with four corners and a center part. In the second step, the features of the color histogram were extracted with normalization for better performance and stored in a CSV file. For the calculation between the input image and the stored image, Chi-squared calculation was used. This project was developed using Python and OpenCV. I was primarily responsible for fetching the 3D color histogram of the multiple regions of images and increasing the performance of the search engine by normalizing the histogram. I used OpenCV to extract the histogram and stored and managed the extracted histograms in the CSV file.',
        tools: ['Python', 'OpenCV', 'Histogram', 'Numpy', 'pandas', 'matplotlib'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },