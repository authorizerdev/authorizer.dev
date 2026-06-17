import { COLORS } from "../styles/colors";

export const DEPLOYMENT_BUTTONS = [
  {
    href: "https://railway.app/new/template/nwXp1C?referralCode=FEF4uT",
    img: "https://railway.app/button.svg",
    label: "Deploy to Railway",
    bgColor: COLORS.railway,
  },
  {
    href: "https://heroku.com/deploy?template=https://github.com/authorizerdev/authorizer-heroku",
    img: "https://www.herokucdn.com/deploy/button.svg",
    label: "Deploy to Heroku",
    bgColor: COLORS.heroku,
  },
  {
    href: "https://render.com/deploy?repo=https://github.com/authorizerdev/authorizer-render",
    img: "https://render.com/images/deploy-to-render-button.svg",
    label: "Deploy to Render",
    bgColor: COLORS.render,
  },
];
