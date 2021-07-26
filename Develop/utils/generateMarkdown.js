// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(data) {
  //if (data.licenseType) {
    //return true;
  //} else {
   // return "";
  //}
//};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(data) {
  //if (data.licenseType) {
    //return data.licenseType
    //console.log(data.licenseType);
  //} else {
    //return "";
  //}
//};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

## Licensing 
[![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

## Table of Contents
- [Description]
- [Installation]
- [Usage]
- [Contribution]
- [Testing]
- [Additional Info]

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contribution
${data.contribution}

## Testing
${data.test}

## Additional Info
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} `;
}

module.exports = generateMarkdown;