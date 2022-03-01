export default {
    // Home page
    name: "Deepak Choudhary",
    title: "Frontend Developer",
    //   either add a photo to src/Assets/images/ with the name photo.png or link here
    photo: "https://res.cloudinary.com/dsvmpzpk1/image/upload/q_auto:low/v1646073884/self_df5b1u.jpg",

    links: {
        // links would be displayed in the below order
        // currently support for only these, if you find your favourite one missing, raise an issue at https://github.com/iamakshatjain/iamakshatjain.github.io/issues
        linkedIn: "https://www.linkedin.com/in/deepak-choudhary-578030146/",
        github: "https://github.com/Deepak2-0",
    },

    aboutMe: {
        // manadatory
        description:
            "Hello! I’m Deepak Choudhary. A passionate Software Developer 🚀 and having an experience of building Frontend Applications with JavaScript / Reactjs and some other cool libraries and frameworks.",

        // remove the field that you don't want on your portfolio home page and contacts page
        email: "choudharydeepak938@gmail.com",
        phone: "+91-9547631127",
        location: "India 🇮🇳",
        freelance: "Available",
    },

    //   provide direct links to resume and vCard resource to allow downloading
    //   vCard : virtual business card
    resume: "https://drive.google.com/file/d/1XB8tu82Odi5vTVskpxUcJmnngH103rR-/view?usp=sharing",
    // vCard:
    //   "https://res.cloudinary.com/whiteknight/image/upload/v1597427637/Screenshot_from_2020-08-14_23-23-26_qzbhw8.png",

    //    Resume
    //    Provide details about education, experience and skills
    education: [
        {
            title: "B.Tech, Mechanical Engineering",
            //   write in exact format as you want it to be displayed
            startDate: "2014",
            endDate: "2018",
            organisation: {
                name: "Kalinga Institute of Industrial Technology",
                link: "https://kiit.ac.in/",
            },
            description: ["CGPA : 8.68"],
        },
        {
            title: "Senior Secondary",
            //   write in exact format as you want it to be displayed
            startDate: "2011",
            endDate: "2013",
            organisation: {
                name: "Caesar School",
                link: "http://www.caesarschool.in/",
            },
            description: ["Percentage : 70.6%"],
        },
    ],

    experience: [
        {
            title: "Software Engineer - Frontend",
            //   write in exact format as you want it to be displayed
            startDate: "Jan 2022",
            endDate: "Present",
            organisation: {
                name: "1K Kirana Bazaar",
                link: "https://www.1knetworks.com/",
            },
            description: [
                "Contributed to various products.",
                "Made an admin dashboard for auditing the products.",
                "Made a quiz platform for users to increase user engagement.",
            ],
            skills: [
                "JavaScript",
                "Typescript",
                "ReactJS",
                "Preact",
                "React Native",
                "Redux",
                "React Query",
                "NextJS",
                "HTML",
                "CSS",
                "ant-design",
                "styled-components",
            ],
        },
        {
            title: "Software Engineer - Frontend",
            //   write in exact format as you want it to be displayed
            startDate: "Jan 2021",
            endDate: "Dec 2021",
            organisation: {
                name: "DebugsBunny",
                link: "https://debugsbunny.com/",
            },
            description: [
                "Improved the UI of the website, added new features and increased the website performance, accessibility, and best practices score in lighthouse.",
                "Made a test portal for exams like JEE Mains, NEET, etc from scratch.",
                "Made an android app for a client to aggregate the health data from all the popular devices like Fitbit and GoogleFit.",
                "Made a website for a client where users can enroll for a course and take live classes.",
            ],
            skills: [
                "JavaScript",
                "ReactJS",
                "Redux",
                "HTML",
                "CSS",
                "Material-UI",
                "Flutter",
            ],
        },
        {
            title: "Frontend Developer Training",
            //   write in exact format as you want it to be displayed
            startDate: "May 2020",
            endDate: "Jul 2020",
            organisation: {
                name: "Newton School.",
                link: "https://www.newtonschool.co/",
            },
            description: [
                "Learned and worked with languages like JavaScript and technologies like React, Redux, Git, etc.",
                "Made several small projects like Quiz App, Weather app, Todo list, etc to have a strong fundamentals with the various technologies.",
            ],
            skills: ["JavaScript", "ReactJS", "Redux", "HTML", "CSS"],
        },
    ],

    skills: {
        "Technologies and Languages": [
            "JavaScript",
            "Typescript",
            "ReactJS",
            "React Native",
            "Redux",
            "React Query",
            "NextJS",
            "HTML",
            "CSS",
            "Flutter",
        ],
    },
    portfolio: {
        projects: [
            {
                title: "Modular Portfolio",
                description: [
                    "Virtual Business Card theme",
                    "Change and customize all the data based on your need with just one file",
                    "Completely Open Source for anyone to use",
                    "Sections include : Home, Resume, Portfolio, Contact",
                    "Timeline display of Resume and highly customizable portfolio section",
                ],
                skills: [
                    "ReactJS",
                    "Git",
                    "HTML5",
                    "CSS3",
                    "Javascript",
                ],
                thumbnail:
                    "https://res.cloudinary.com/dsvmpzpk1/image/upload/q_auto:low/v1646114684/Screenshot_2022-03-01_at_11.34.13_AM_ctab59.png",
                link: "https://github.com/iamakshatjain/iamakshatjain.github.io",
            },
        ],
        // "extra Curriculars": [
        //     {
        //         title: "Startup Weekend",
        //         description: [
        //             "Organised Startup Weekend in first year of college at LNMIIT",
        //             "Hackathon for entrepreneurship and business",
        //             "Managed to sell 100+ tickets",
        //             "Powered by Google",
        //         ],
        //         thumbnail:
        //             "https://res.cloudinary.com/whiteknight/image/upload/v1597491709/startup_weekend_dh6vhy.png",
        //         link: "https://startupweekend.org/",
        //         skills: ["Marketing", "Management", "Networking", "Sales"],
        //     },
        //     {
        //         title: "Startup Intern Fair",
        //         description: [
        //             "Organised Startup Intern Fair and in first and second year of college at LNMIIT",
        //             "Managed to get 30+ startups",
        //             "Registered 300+ applicants",
        //         ],
        //         thumbnail:
        //             "https://res.cloudinary.com/whiteknight/image/upload/v1597491997/Screenshot_from_2020-08-15_17-16-17_lzts06.png",
        //         link: "https://www.facebook.com/events/375021799921363/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%7D",
        //         skills: [
        //             "Marketing",
        //             "Management",
        //             "Leadership",
        //             "Networking",
        //             "Sales",
        //         ],
        //     },
        //     {
        //         title: "Internshala Student Partner",
        //         description: [
        //             "Internshala Student Partner (ISP) 13.0",
        //             "Helped internshala in providing the right opportunities to the right people",
        //             "Got 300+ students registered over the platform",
        //         ],
        //         skills: ["Marketing", "Advertisement", "Public Speaking"],
        //         thumbnail:
        //             "https://res.cloudinary.com/whiteknight/image/upload/v1597496037/internshala_og_image_pcjejp.webp",
        //         link: "https://www.linkedin.com/in/iamakshtjain/detail/treasury/position:1466658733/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACS21yQBfPLlst3-FvzFE8lf5TSN17pmTgI%2C1561052235795)&parentEntityUrn=urn%3Ali%3Afsd_profilePosition%3A(ACoAACS21yQBfPLlst3-FvzFE8lf5TSN17pmTgI%2C1466658733)&section=position%3A1466658733&treasuryCount=2",
        //     },
        // ],
    },
};
