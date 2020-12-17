[![syndicai-logo](https://raw.githubusercontent.com/syndicai/brand/main/banner/banner_github.png)](https://syndicai.co)

<p align="center">
  <a aria-label="Syndicai" href="https://syndicai.co/">
    <img alt="" src="https://img.shields.io/badge/MADE%20FOR%20DISRUPTORS-000000.svg?style=for-the-badge&labelColor=000">
  </a>
  <a aria-label="Docs" href="https://docs.syndic.ai">
    <img alt="" src="https://img.shields.io/badge/Documentation-000.svg?style=for-the-badge&labelColor=000">
  </a>
  <a aria-label="Join the community on GitHub" href="https://join.slack.com/t/syndicai/shared_invite/zt-eqbfjmyo-BCNw0gDryzU1A_6GH7xyYw">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blue.svg?style=for-the-badge&logo=Slack&labelColor=000000&logoWidth=20">
  </a>
</p>

# Showcase
Showcase is the React web app created for the sample models deployed using [Syndicai Platform](https://syndicai.co). 

## Demo
<img src="images/app.gif" alt="Syndicai Showcase Demo" width="100%"/>

## Project Status
Currenlty the project is under constant development. If you are willing to contribute, please [drop us a line](https://join.slack.com/t/syndicai/shared_invite/zt-eqbfjmyo-BCNw0gDryzU1A_6GH7xyYw) and help us spread the passion to applied AI!

## Run locally
1. Download or Fork the repository
2. Install necessary dependencies with `yarn` command.
3. Run the app in the development model using `yarn start`. Open http://localhost:3000 to view it in the browser.


## Technology
- [React](https://reactjs.org/)
- [TailwindCss](https://tailwindcss.com/)
- [Geist](https://react.geist-ui.dev/en-us/guide/introduction)


## Add new model
1. Create a new `your_model.js` file in the  `src/models` directory
2. Add your model to model list in `src/models/models.json` with necessary data
3. Add routing in `src/router/index.js`
