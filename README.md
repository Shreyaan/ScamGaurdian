[![Create Release and Upload ZIP](https://github.com/Shreyaan/ScamGaurdian/actions/workflows/main.yml/badge.svg)](https://github.com/Shreyaan/ScamGaurdian/actions/workflows/main.yml)

# ScamGuardian


ScamGuardian is a website extension that aims to address the problems faced by internet users by monitoring their web activity and proactively protecting them from scams. The extension maintains a database of suspicious sites and warns users if they attempt to access a known scam site. Additionally, it provides educational resources to help users become more aware of common scams and protect themselves while using the internet.

## Features

- Educational Resources: The extension includes sidebars with educational content, risks, and tips related to the specific website and scenario that users are facing. This ensures that users are equipped with the necessary knowledge to identify and avoid potential scams.

- URL Scanning: By right-clicking on a webpage, users can choose the "Scan All URLs on This Page" option. The extension then scans all the URLs on the page and checks if any of them are blacklisted. This feature helps users identify potentially harmful sites and protects them from falling victim to scams.

## Installation

To install ScamGuardian, follow the steps below:

1. Download the ZIP file from [this link](https://github.com/Shreyaan/ScamGaurdian/releases/latest/download/dist.zip).

2. Extract the contents of the downloaded ZIP file on your computer.

3. Open your browser's Extensions settings.

4. Enable Developer Mode in the Extensions settings.

5. Click on "Load Unpacked" and select the extracted files from the ZIP file.

6. Open a new tab and click "Keep" when prompted.

## Technical Implementation

ScamGuardian is built using the following technologies:

- Hosting: The landing page and API are hosted on Vercel, a cloud platform known for its seamless deployment and scalability. This ensures that the application is fast, reliable, and easily accessible to users.

- Database: The application utilizes a PostgreSQL database hosted on Neon. This provides a robust and secure storage solution for the data required by the extension.

- Frontend: The landing page is developed using HTML, CSS, Typescript, React, Next.js, and Tailwind CSS. These technologies enable a responsive and user-friendly interface for users to access the educational resources.

- APIs: The APIs are built using Next.js, Typescript, and PostgreSQL. These APIs handle requests from the extension and provide the necessary data for vendor details and URL scanning.

- Extension: The extension itself is developed using JavaScript, HTML, CSS, and Webpack. These technologies allow for the seamless integration of ScamGuardian with the user's browser interface.
Webpack is used to bundle the code.

- Code Management: GitHub is utilized for code storage, collaboration, and version control. GitHub Actions are employed to automate the deployment process, ensuring that users can easily access the latest version of the extension.

## High-Level Journey of a Request

### SG Button and Popup

The ScamGuardian (SG) button is designed to enhance the user experience. If the button obscures any elements on a webpage, users can easily move it up or down to access the content without inconvenience. Additionally, users can double-press the SG button to temporarily hide it for 12 hours, ensuring unobstructed browsing.

### Vendor Details

When a user visits a website, the extension sends a request to the `/vendor?vendorName=${vendorName}` endpoint. This request is handled by a Next.js serverless API, which retrieves the relevant data from the PostgreSQL database. The API then responds with the necessary vendor details, which are displayed in the extension's popup. To optimize performance, the retrieved data is locally stored within the extension for a day, reducing the need for frequent requests.

### Scan All URLs Button

Clicking the "Scan All URLs" button triggers a request in the form of an array to the `/check-domains` API endpoint. This Next.js serverless API further calls two separate APIs: `/check-domainsBlacklist` and `/check-domainsWhitelist`. These APIs perform the necessary checks and comparisons, returning an array with the scan results. This allows users to efficiently scan multiple URLs and receive comprehensive feedback.

---

For more information and to download the ScamGuardian extension, please visit the [ScamGuardian GitHub repository](https://github.com/Shreyaan/ScamGaurdian).
