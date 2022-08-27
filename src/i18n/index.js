import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    navbar: {
                        about: 'About',
                        experience: 'Experience',
                        work: 'Work',
                        contact: 'Contact',
                        resume: 'Resume'
                    },
                    home: {
                        greetings: 'Hi, my name is',
                        phrase: 'I build things for the web.',
                        description: "I'm a web and mobile developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on get a competitive job, that allows me improve my skills and become a senior developer.",
                        action: 'Check out my projects',
                    },
                    about: {
                        title: 'About me',
                        paragraph: {
                            first: 'Hello! My name is Josep and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided to try developing some trickiy projects for collegue - turns out researching and deploying some projects that taught me a lot about HTML & CSS and more stuff!',
                            second: 'Fast-forward to today, and I’ve had the privilege of working at an techEd startup. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.',
                            third: 'I also develop a project that covers everything you need to build a web app as social network similar to Facebook and Twitter using React & Node JS.',
                        },
                        tecnologies: 'Here are a few technologies I’ve been working with recently:',
                    },
                    experience: {
                        title: "Where I've Worked",
                        work1: {
                            name: 'WorldConnect',
                            role: 'FullStack Developer - Flutter Jr. Developer',
                            date: 'July - April 2020',
                            info_1: 'Developed and maintained code for ReactivaPeru E-commerce platform using HTML, CSS, React JS, JavaScript and PHP',
                            info_2: 'UI-UX Design using AdobeXD, for mobile and desktop applications',
                            info_3: 'Developed a mobile application using Flutter for an local water service provider. Visit it here'
                        },
                        work2: {
                            name: 'FractalUp',
                            role: 'Front-End Developer',
                            date: 'May - March 2021',
                            info_1: 'Write modern, performant, maintainable code for a diverse array of client and internal projects',
                            info_2: 'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue 3, GraphQL, Apollo, WebRTC and Netlify',
                            info_3: 'Communicate with multi-disciplinary teams of engineers, developers, designers, QA team on a daily basis'
                        },
                        work3: {
                            name: 'Henry',
                            role: 'Henry Bootcamp',
                            date: 'April - August 2022',
                            info_1: 'Learn Advanced Javascript concepts',
                            info_2: 'Improvement soft-skills as communication, team group, agile metodologies and others',
                            info_3: 'Developed an individual project using PERN stack.',
                            info_4: 'Developed a group project using React JS, Redux Toolkit, TailwindCSS, React Router V6, Node JS, Express, Nodemailer, Passport, SocketIO, Mongoose, MongoDB'
                        }
                    },
                    work: {
                        title: "Some Things I've built",

                    },
                    contact: {
                        title: "What's Next?",
                        subTitle: 'Get In Touch',
                        quote: "Currently I'm looking for new opportunities so my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
                        action: 'Contact Me',
                    },
                    extra: {
                        built: 'Built by Josep J. Rojas',
                        designed: 'Designed by Bryttany Chiang'
                    },
                    showMore: 'show more...'
                }
            },
            es: {
                translation: {
                    navbar: {
                        about: 'Sobre mi',
                        experience: 'Experiencia',
                        work: 'Trabajo',
                        contact: 'Contacto',
                        resume: 'Resumen'
                    },
                    home: {
                        greetings: 'Hola, mi nombre es',
                        phrase: 'Creo cosas para la web.',
                        description: "Soy un desarrollador web y mobile especializado en construir (y ocasionalmente diseñar) experiencias digitales excepcionales. Actualmente, me concentro en obtener una oferta laboral competitiva, que me permita mejorar mis habilidades y convertirme en un Senior Developer.",
                        action: 'Mira mis proyectos',
                    },
                    about: {
                        title: 'Sobre mi',
                        paragraph: {
                            first: 'Hola! Mi nombre es Josep y disfruto creando cosas para la red. Mi interes en el desarrollo web nacio en el 2020, cuando desarrolle algunos proyectos para la universidad, aprendiendo HTML, CSS y muchos más durante la investigación, y despliegue de estos.',
                            second: 'A dia de hoy, he tenido el privilegio de trabajar para StartUp EdTech peruana y mi principal objetivo ahora es desarrollar productos inclusivos accesibles y experiencias digitales.',
                            third: 'Recientemente participe en un projecto que cubre una gran variedad de funcionalidedes de una red social similar a Facebook o Twitter usando React y NodeJS',
                        },
                        tecnologies: 'Estas son algunas tecnologias con las que he trabajado recientemente:',
                    },
                    experience: {
                        title: "Mi experiencia",
                        work1: {
                            name: 'WorldConnect',
                            role: 'Desarrollador FullStack - Desarrollador Jr. Flutter',
                            date: 'Julio - Abril 2020',
                            info_1: 'Desarrollo y mantenimiento para Reactiva-Peru, una plataforma de comercio electronico que se proyectaba a fusionar las funcionalidades de una red social con un e-commerce tan grande como Amazon o similares',
                            info_2: 'UI-UX Design usando Adobe XD, para aplicaciones moviles y de escritorio',
                            info_3: 'Desarrollo de una aplicacion movil usando Flutter para un proveedor de servicios local.'
                        },
                        work2: {
                            name: 'FractalUp',
                            role: 'Desarrollador Front-End',
                            date: 'Mayo - Marzo 2021',
                            info_1: 'Escribir codigo moderno, escalable, mantenible para un diverso conjunto de clientes y proyectos internos',
                            info_2: 'Trabajar con una variedad de lenguajes, plataformas, frameworks y tecnologias como JavaScript, TypeScript, Vue 3, GraphQL, Apollo, WebRTC and Netlify',
                            info_3: 'Comunicacion con equipos multi-disciplinarios de ingenieros, desarrolladores, diseñadores y equipos de QA regularmente'
                        },
                        work3: {
                            name: 'Henry',
                            role: 'Henry Bootcamp',
                            date: 'Abril - Agosto 2022',
                            info_1: 'Aprendizaje de conceptos avanzados de Javascript',
                            info_2: 'Mejora de habilidades blandas como comunicación, trabajo en equipo, metodologias agiles y otros',
                            info_3: 'Desarrollo de un proyecto individual usando el stack PERN(PostgreSQL, ExpressJS, ReactJS, NodeJS).',
                            info_4: 'Desarrollo de proyecto grupal, una red social(SocialN) usando React JS, Redux Toolkit, TailwindCSS, React Router V6, Node JS, Express, Nodemailer, Passport, SocketIO, Mongoose, MongoDB'
                        }
                    },
                    work: {
                        title: "Algunos proyectos en los que he trabajado",

                    },
                    contact: {
                        title: "Qué sigue?",
                        subTitle: 'Pongamonos en contacto',
                        quote: "Por el momento estoy buscando nuevas oportunidades y mi inbox siempre esta abierto. Si quieres hacerme una pregunta o simplemente saludar, intentare responderte lo antes posible!",
                        action: 'Contactame',
                    },
                    extra: {
                        built: 'Desarrollado por Josep J. Rojas',
                        designed: 'Diseñado por Bryttany Chiang'
                    },
                    showMore: 'ver más...'
                }
            }
        }
    })