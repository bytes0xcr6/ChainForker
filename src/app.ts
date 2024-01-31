import Fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { exec } from "child_process";

export const app = Fastify();

// Import the Hardhat runtime
import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";
import { task } from "hardhat/config";

app.register(require("fastify-healthcheck"));
// Register CORS with allowed origin(s)
app.register(fastifyCors, {
  origin: "*",
});

const serverAddress: string = "0.0.0.0";
const port: number = 8545;

app.listen({ port, host: serverAddress }, async () => {
  console.log(`Listening on port ${port}`);

  try {
    await startHardhatNode();
  } catch (error) {
    console.error("Script failed:", error);
    process.exit(1);
  }
});

async function startHardhatNode() {
  return new Promise<void>((resolve, reject) => {
    const command1 = "cd ..";
    const command2 = "npx hardhat node";

    // Execute the command
    const childProcess = exec(command1);
    const childProcess2 = exec(command2);

    // Capture the output
    let output = "";

    childProcess.stdout?.on("data", (data) => {
      console.log(data);
      output += data;
    });
    childProcess2.stdout?.on("data", (data) => {
      console.log(data);
      output += data;
    });

    // Listen for the process to finish
    childProcess2.on("exit", (code) => {
      if (code === 0) {
        // The process exited successfully
        console.log("Hardhat node started successfully.");
        resolve();
      } else {
        // The process exited with an error
        console.error(`Error starting Hardhat node. Exit code: ${code}`);
        console.error(`Hardhat node output:\n${output}`);
        reject(`Error starting Hardhat node. Exit code: ${code}`);
      }
    });

    // Listen for any errors in the process
    childProcess.on("error", (error) => {
      console.error("Error starting Hardhat node:", error.message);
      reject(`Error starting Hardhat node: ${error.message}`);
    });
  });
}
