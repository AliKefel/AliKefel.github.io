import React from 'react';
import About from './About';
import Education from './Education';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';

const Scroll = () => {

    let message = "~ Projects "
    let message2 = "~ Experience "


    const experiences = [
        {
            heading: 'Undergraduate Teaching Assistant - FSE100, CSE205',
            company: 'Ira A. Fulton Schools of Engineering at Arizona State University',
            duration: 'Jan 2024 - Present · 11 mos',
            location: 'Tempe, Arizona, United States · On-site',
            li1: 'Assisted in teaching and supporting students in intro to engineering coursework.',
            li2: 'Supported students in learning data structures and algorithms, enhancing their understanding of programming concepts.',
            li3: 'Provided feedback and assistance with course assignments and projects.',
        },
        {
            heading: 'Section Leader - ASU101',
            company: 'Ira A. Fulton Schools of Engineering at Arizona State University',

            li1: 'Conducted weekly follow-ups with students to improve engagement and provide academic support, including guiding first-year students in adjusting to university life.',
            li2: 'Presented a lecture and led a workshop to help students develop their two-year academic plan.',
            duration: 'Aug 2024 - Present · 4 mos' ,
            location: 'Tempe, Arizona, United States · On-site',
        },
        
        {
            heading: 'Vietnam Shrimp Farming Project - Arduino Team Lead',
            company: 'EPICS at ASU',
            duration: 'Jan 2024 - May 2024 · 5 mos',
            location: 'Tempe, Arizona, United States · On-site',
            li1: 'Designed the Arduino schematics and conducted market research on appropriate integrated circuit boards.',
            li2: 'Prototyped and developed an aquaculture monitoring system to help shrimp farmers monitor water quality.',
            li3: 'Created a sustainable solution that improved product adoption by 19% through macro system research.',
        },
        {
            heading: 'Administrative & Software Support Intern',
            company: 'ZIZU Investments Ltd',
            duration: 'Aug 2022 - Nov 2022 · 4 mos',
            location: 'Nairobi, Kenya · On-site',
            li1: 'Spearheaded the development of an online inventory management system to monitor the company’s stock levels.',
            li2: 'Improved data storage infrastructure with a digital report system, reducing paper waste by 40%.',
        }
    ];

    const projects = [
        {
            heading: 'Black-Scholes Option Calculator',
            description1: 'Developed an option calculator that calculates the price of an option using the Black-Scholes formula.',
            description2: 'Built using JavaScript to provide a user-friendly interface for financial analysis.',
            githubLink: 'https://github.com/AliKefel', // Replace with actual link if needed
            urls: ['project1.png']
        },
        {
            heading: 'Stock Watchlist App',
            description1: 'Developed an option calculator that calculates the price of an option using the Black-Scholes formula.',
            description2: 'Built using JavaScript to provide a user-friendly interface for financial analysis.',
            githubLink: 'https://github.com/AliKefel', // Replace with actual link if needed
            urls: ['project2.png', 'Stock_second_screen.png', 'Stock_first_screen.png']
        },
        {
            heading: 'Help System Application',
            description1: 'Created a help system application with functionality for user authentication and encryption of sensitive information.',
            description2: 'Used JavaFX for the user interface, H2 as the database, and JUnit for testing.',
            githubLink: 'https://github.com/AliKefel', // Replace with actual link if needed
            urls: ['help-system.png']
        },
        {
            heading: 'Vietnam Shrimp Farming Project',
            description1: 'Prototyped and developed an aquaculture monitoring system for shrimp farmers.',
            description2: 'Aided in monitoring water quality to improve shrimp health and yield, working with a team of six members.',
            description3: 'Designed Arduino schematics and conducted market research on the most appropriate integrated circuit boards to use.',
            githubLink: 'https://github.com/AliKefel', // Replace with actual link if needed
            urls: ['Shrimp-first-page.png']
        },
        {
            heading: 'AI-Powered Requirements Gathering Chatbot for Engineering Courses',
            description1: 'Developed an interactive chatbot to assist engineering students in gathering detailed project requirements from simulated customer interactions, enhancing real-world application skills.',
            description2: 'Implemented natural language processing (NLP) techniques to interpret customer needs accurately, simulating a realistic requirements-gathering process.',
            description3: 'Improved students’ understanding of requirement analysis by providing instant feedback and structured customer responses.',
            githubLink: 'https://github.com/AliKefel', // Replace with actual link if needed
            urls: ['chatgpt.png']
        },
        {
            heading: 'Full Stack Online Survey',
            description1: 'Created a full-stack survey application to evaluate desired levels of automation transparency in decision support systems.',
            description2: 'Utilized MongoDB and Render to host the backend and securely collect participant data.',
            description3: 'Built a responsive frontend with React and Tailwind CSS for enhanced usability.',
            githubLink: 'https://github.com/AliKefel', // Replace with actual link if needed
            urls: ['survey.png']
        },
        {
            heading: 'Fine Motor Skills Project',
            description1: 'Designed a game specifically targeted at improving fine motor skills for toddlers and stroke patients.',
            description2: 'Leveraged the p5.js library and JavaScript to create interactive games.',
            githubLink: 'https://github.com/AliKefel',
            urls: ['Dodge-the-drops.png']
        },
        {
            heading: 'Personal Portfolio Website',
            description1: 'Developed a dynamic and responsive personal portfolio page using React.',
            description2: 'Integrated Tailwind CSS for styling, focusing on responsiveness and accessibility.',
            description3: 'Adopted a component-based architecture for reusability and maintainability.',
            githubLink: 'https://github.com/AliKefel',
            urls: ['new-portfolio.png', 'Old-portfolio.png']
        },
        {
            heading: 'Blackjack Java Game',
            description1: 'Developed a graphical Blackjack game in Java, utilizing object-oriented programming principles.',
            description2: "Implemented a user-friendly graphical interface using Java's Swing and AWT libraries to create a graphical user interface.",
            githubLink: 'https://github.com/AliKefel',
            urls: ['Blackjack.png']
        },
       
        {
            heading: 'SEO-Website',
            description1: 'Developed a website for a social media marketing agency.',
            description2: 'Designed for optimal user experience, with modern UI/UX principles.',
            description3: 'Focused on responsive design to accommodate various device screen sizes.',
            githubLink: 'https://github.com/AliKefel', // Replace with actual link if needed
            urls: ['seo.png']
        },
        
    ];

    return (
        <>
            <section style={{ borderColor: '#CCC5B9' }} className='w-full h-full rounded-md flex flex-col overflow-y-scroll pb-10'>
                <div>
                    <div className='w-full'>
                        <About />
                    </div>
                    <div className='w-full'>
                        <Education />
                    </div>

                    <div className=' mt-5 text-center justify-center'>
                        <span className='courier-prime-regular font-bold tracking-tight text-teal-400'> {message2}</span>
                    </div>

                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            heading={experience.heading}
                            company={experience.company}
                            duration={experience.duration} // Ensure this is passed
                            location={experience.location} // Ensure this is passed
                            li1={experience.li1}
                            li2={experience.li2}
                            li3={experience.li3 || ''}
                        />
                    ))}

                    <div className=' mt-5 text-center justify-center'>
                        <span className='courier-prime-regular font-bold tracking-tight text-teal-400'> {message}</span>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            message={project.description1}
                            heading={project.heading}
                            li1={project.description1}
                            li2={project.description2}
                            li3={project.description3 || ''}
                            urls={project.urls}
                            githubLink={project.githubLink}
                        />
                    ))}



                </div>



            </section>
        </>
    );
};

export default Scroll;
