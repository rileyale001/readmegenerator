// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No license") {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No license") {
    return `\n* [License](#license)\n`;
  }
  return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No license") {
    return `
    # License
    Porject license is under ${license} license
    `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table Contents
  - [Description](#Description)
  - [User Story](#User-Story)
  - [Acceptance Criteria](#Acceptance-Criteria)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Link](#Link)
  - [Screenshot/Demo](#Screenshot/Gif-Demo)
  - [Contact](#Contact)

  ## Description
  ${data.description}

  ## User Story
  ${data.userStory}

  ## Acceptance Criteria
  ${data.acceptanceCriteria}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Link 
  ${data.link}

  ## Contact
  Any further questions? Please contact me:
  - GitHub: [${data.github}](https:github.com/${data.github})
  - Email: ${data.email}
`
}

module.exports = generateMarkdown;
