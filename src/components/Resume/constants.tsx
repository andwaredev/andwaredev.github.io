import React from 'react';

/* eslint-disable import/prefer-default-export */
export interface ResumeBlock {
  heading?: string;
  subHeading?: string;
  listItems?: React.ReactNode[];
  subBlocks?: ResumeBlock[];
}

export interface ResumeSection {
  heading: string;
  blocks: ResumeBlock[];
}

export interface ResumeContent {
  heading: string;
  subHeading?: string;
  sections?: ResumeSection[];
}

export const resumeContent: ResumeContent = {
  heading: 'Andrew Ware',
  subHeading: 'Senior Software Engineer',
  sections: [
    {
      heading: 'Employment',
      blocks: [
        {
          heading: 'Slalom',
          subHeading: 'Oct 2018 - Current',
          subBlocks: [
            {
              heading: 'USCIS',
              subHeading: 'MyE-Verify',
              listItems: [
                'Led architecture, design and implementation of core redesigned application features including “Self Check”, which accounts for 30 million unique user sessions annually.',
                'Led creation of authentication flow using DHS federated SAML and Spring authorization roles.',
                'Led full application upgrade from Java 8 to 11 upgrade, containerization with Docker, and decreased application build times in Gradle by over 40%.',
                /* eslint-disable react/jsx-key */
                <span>
                  <u>Leveraged Knowledge</u> in Full Stack Web development,
                  Microservice architecture, Java, Spring Boot, React,
                  TypeScript, MSSQL, Docker, and AWS.
                </span>,
              ],
            },
            {
              heading: 'Charter Communications',
              subHeading: 'RADR',
              listItems: [
                'Created SQL queries using indexing and temporary tables to efficiently join across numerous tables containing upwards of 30 million records in under one second.',
                'Used RxJS to create single streams of data updates and reduce re-rendering in core components by 50%.',
                'Employed the Serverless Framework to create a RESTful API using Node.js and AWS lambda.',
                <span>
                  <u>Leveraged Knowledge</u> in Full Stack Web development,
                  Angular, Node.js, TypeScript, PostgreSQL, Python, and
                  Serverless with AWS Lambda.
                </span>,
              ],
            },
            {
              heading: 'T-Mobile – Layer3 TV',
              subHeading: 'Maestro',
              listItems: [
                'Led creation of automated time-based billing actions using the Zuora API and a Node.js microservice architecture, reducing manual support hours by over 85%.',
                'Transitioned legacy pages written with jQuery and Handlebars templates to Angular, and decreased page load times by over 60%.',
                <span>
                  <u>Leveraged Knowledge</u> in Microservice architecture,
                  Node.js, MySQL, HTML/CSS, Python, Third-Party API consumption,
                  and AWS.
                </span>,
              ],
            },
          ],
        },
        {
          heading: '128 Technology',
          subHeading: 'July 2017 - Feb 2018',
          listItems: [
            'Reduced React app bundle size by over 5% by implementing replacement for AntDesign Table component, allowing us to remove the library as a dependency all together.',
            'Created map visualizations of a connected network of nodes across the globe, supporting zoom and scroll with seamless re-rendering.',
            <span>
              <u>Leveraged Knowledge</u> in Full Stack Web development, React,
              D3.js, Node.js, SQL, HTML/CSS.
            </span>,
          ],
        },
      ],
    },
    {
      heading: 'Education',
      blocks: [
        {
          heading: 'Gordon College | Class of 2017',
          subHeading: 'Wenham, MA',
          subBlocks: [
            {
              heading: 'B.S. Computer Science & Mathematics',
              subHeading: 'Relevant Coursework',
              listItems: [
                'Software & Database Systems',
                'Agile Software Development',
                'Mobile Computing',
                'Programming with C# & Python',
                'Object Oriented Programming with Java',
                'Data Structures',
                'Numerical Analysis',
                'Operations Research',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Skills',
      blocks: [
        {
          listItems: [
            'Node.js',
            'React',
            'Angular',
            'Vue',
            'TypeScript',
            'JavaScript(ES7)',
            'Java',
            'Spring',
            'SQL',
            'PostgreSQL',
            'AWS',
            'Lambda',
            'Cloudformation',
            'Docker',
            'Webpack',
            'NPM',
            'Nexus Repository',
            'Gradle',
            'Cordova',
            'HTML',
            'CSS',
            'Sass',
            'Jest',
            'JUnit',
            'Unix',
            'Bash',
            'Git',
            'Groovy',
            'YAML',
            'Postman',
            'Python',
            'NoSQL',
            'MongoDB',
          ],
        },
      ],
    },
  ],
};

export const buildResumeBlockKey = ({
  heading,
  subHeading,
}: ResumeBlock): string => `${heading}__${subHeading}`;
