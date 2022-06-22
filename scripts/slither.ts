import fs from "fs";
import inquirer from "inquirer";
import { execSync } from "node:child_process";
import path from "node:path";

const projectRoot = path.join(__dirname, "../");
const solcVersion = "0.8.9";
const timestamp = Date.now();
const packageNames = ["protocol-contracts", "example-contracts"];

async function getPackageName() {
  let packageName;

  if (process.env.CI) {
    packageName = process.argv[2];

    if (!packageNames.includes(packageName)) {
      console.error(`${packageName} is not a valid package name.`);
      console.error(`Valid package names are: ${packageNames.join(", ")}`);
      process.exit(1);
    }

    return packageName;
  } else {
    packageName = await inquirer.prompt([
      {
        type: "list",
        message: "Which set of contracts would you like to test?",
        name: "contracts",
        choices: packageNames,
      },
    ]);

    return packageName.contracts;
  }
}

const run = async (command: string) => {
  try {
    console.log("Starting -- This may take a few minutes...");

    execSync(command, {
      encoding: "utf-8",
      stdio: "inherit",
    });

    console.log("Results output to the console and saved to slither-output/ in Markdown, JSON, and SARIF formats.");
  } catch (error: any) {
    console.error("Error: Docker Failed To Run");
    console.error(`${error}`);
  }
};

function runSlither(packageName: string) {
  const dockerCommand = `cd /home/trufflecon/packages/${packageName} && \
  solc-select use ${solcVersion} && \
  slither --json ../../scripts/slither-results/${packageName}-${timestamp}.json \
  --sarif ../../scripts/slither-results/${packageName}-${timestamp}.sarif \
  --checklist  ./ | tee ../../scripts/slither-results/${packageName}-${timestamp}.md`;
  run(`docker run -v "${projectRoot}":/home/trufflecon trailofbits/eth-security-toolbox  -c "${dockerCommand}"`);
}

async function main() {
  const packageName = await getPackageName();
  await runSlither(packageName);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });