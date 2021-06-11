import React from 'react';

/* eslint-disable import/prefer-default-export */
export interface ResumeBlock {
  heading: string;
  subHeading: string;
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
