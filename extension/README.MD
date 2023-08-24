# ScamGuardian Chrome Extension

The ScamGuardian Chrome Extension is designed to protect users from accessing known scam sites and provide warnings about potentially suspicious websites. It utilizes a database of identified scam sites to provide real-time alerts and notifications. Additionally, it has the capability to scan new sites and add them to the scam database.

## Installation

Please refer to the main repository's README file for installation instructions.

[Main Repository README](https://github.com/Shreyaan/ScamGaurdian)

## Building from Source

If you wish to build the extension from source, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the `extension` directory.

3. Install the required dependencies using `pnpm`:

   ```
   pnpm install
   ```

4. Build the extension using Webpack:

   ```
   pnpm run build
   ```

5. Follow the "Usage" instructions above to load the extension in Chrome.

## Usage

Once the extension is installed, it will work silently in the background. When you navigate to a website, the extension will check if the site is listed in its scam database. If it detects a known scam site, it will display a warning notification to alert you. If the site is not in the database, the extension will scan it and determine if it's potentially suspicious.

## Development

If you'd like to contribute to the development of the ScamGuardian Chrome Extension, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Shreyaan/ScamGaurdian.git
   ```

2. Navigate to the extension directory:

   ```sh
   cd ScamGaurdian/extension
   ```

3. Install the required dependencies using pnpm:

   ```sh
   pnpm install
   ```

4. Make changes to the `src` directory, where the content script (`content.js`) is located.

5. Build the extension using the following script:

   ```sh
   npm run build
   ```

6. Load the extension in your Chrome browser as mentioned in the **Installation** section.

7. Test your changes to ensure everything works as expected.

8. If you're satisfied with your changes, create a pull request on the [repository](https://github.com/Shreyaan/ScamGaurdian) to submit your contribution.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or encounter issues, feel free to open an issue on the [GitHub repository](https://github.com/Shreyaan/ScamGaurdian/issues).
