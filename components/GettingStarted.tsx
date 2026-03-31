import Link from "next/link";

const startingSteps = [
  {
    label: "Get Authorizer instance",
    description:
      "Deploy production ready Authorizer instance using one click deployment options available below",
    link: "https://docs.authorizer.dev/getting-started",
  },
  {
    label: "Setup instance",
    description:
      "Open authorizer instance endpoint in browser. Sign up as an admin with a secure password. Configure environment variables from dashboard",
    link: "https://docs.authorizer.dev/getting-started",
  },
  {
    label: "Integrate with your application",
    description:
      "Load the @authorizerdev/authorizer-js library and initialize the authorizer object. Authorizer object can be instantiated with JSON object with following keys in its constructor.",
    link: "https://docs.authorizer.dev/getting-started",
  },
];

const COLORS = {
  railway:
    "transparent linear-gradient(90deg, #48229B 0%, #A547C6 100%) 0% 0% no-repeat padding-box",
  heroku: "#6B5AB9",
  render: "#5168e9",
};

const deploymentButtons = [
  {
    href: `https://railway.app/new/template/nwXp1C?referralCode=FEF4uT`,
    label: "Deploy to Railway",
    bgColor: COLORS.railway,
  },
  {
    href: "https://heroku.com/deploy?template=https://github.com/authorizerdev/authorizer-heroku",
    label: "Deploy to Heroku",
    bgColor: COLORS.heroku,
  },
  {
    href: "https://render.com/deploy?repo=https://github.com/authorizerdev/authorizer-render",
    label: "Deploy to Render",
    bgColor: COLORS.render,
  },
];

export default function GettingStarted() {
  return (
    <div className="my-20 bg-gray-50 p-6 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap -mx-8">
          <div className="w-full lg:w-1/2 px-8">
            <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
              <h2 className="mb-2 text-3xl font-semibold">
                Get started in{" "}
                <span className="font-extrabold text-blue-500">
                  3 simple steps
                </span>
              </h2>
              <p className="mb-8 text-2xl lg:text-xl leading-loose text-gray-500">
                Authentication and authorization have never been this simple
                before!
              </p>
              <ul className="space-y-12">
                {startingSteps.map((step, index) => (
                  <li className="flex -mx-4" key={`steps_${index}`}>
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        {index + 1}
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="text-xl font-semibold">{step.label}</h3>
                      <p className="text-gray-500 leading-loose">
                        {step.description}
                      </p>
                      <Link
                        href={step.link}
                        className="text-blue-500 hover:text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-8 flex justify-center">
            <div className="w-full md:w-1/2 mt-2 md:mt-16">
              <div className="flex bg-white justify-center align-middle flex-col rounded-md shadow-md py-5 pb-10">
                <h3 className="text-2xl lg:text-xl p-5 font-semibold text-center text-gray-600">
                  Deploy your instance now
                </h3>
                {deploymentButtons.map((button) => (
                  <Link
                    key={button.href}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: button.bgColor,
                    }}
                    className="mx-5 my-3 rounded-md text-white p-5 text-center font-medium hover:opacity-95 transition-opacity"
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
