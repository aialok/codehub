import fs from "fs";
import path from "path";
import { promisify } from "util";
import { exec } from "child_process";

const writeFile = promisify(fs.writeFile);
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const execPromisified = promisify(exec);

export const submitCode = async (data) => {
  let { code, language } = data;
  console.log("Code: ", data);
  language = language.toLowerCase();

  let extension;

  switch (language) {
    case "javascript":
      extension = ".js";
      break;
    case "python":
      extension = ".py";
      break;
    case "java":
      extension = ".java";
      break;
    case "ruby":
      extension = ".rb";
      break;
    case "cpp":
      extension = ".cpp";
      break;
    case "php":
      extension = ".php";
      break;
    default:
      extension = ".txt";
  }

  const filePath = path.join(__dirname, "../../container/code" + extension);
  console.log("File Path: ", filePath);

  await writeFile(filePath, code);

  try {
    const response = await executeCodeInDocker(filePath, language);
    return response;
  } catch (error) {
    throw error;
  }
};

const executeCodeInDocker = async (filePath, language) => {
  let docker;

  switch (language) {
    case "javascript":
      docker = "node:latest";
      break;
    case "python":
      docker = "python:latest";
      break;
    case "java":
      docker = "openjdk:latest";
      break;
    case "ruby":
      docker = "ruby:latest";
      break;
    case "cpp":
      docker = "gcc:latest";
      break;
    case "php":
      docker = "php:latest";
      break;
    default:
      docker = "node:14";
  }

  let command;

  switch (language) {
    case "javascript":
      command = "node";
      break;
    case "python":
      command = "python";
      break;
    case "java":
      command = "java";
      break;
    case "ruby":
      command = "ruby";
      break;
    case "cpp":
      command = "g++";
      break;
    case "php":
      command = "php";
      break;
    default:
      command = "node";
  }

  console.log("Docker: ", docker);

  console.log("Executing code in Docker...");

  const pullImage = await execPromisified(`sudo docker pull ${docker}`);
  console.log(pullImage);

  const startTime = process.hrtime();

  const { stdout, stderr } = await execPromisified(
    `sudo docker run --rm -v ${path.dirname(
      filePath
    )}:/lets-code -w /lets-code ${docker} ${command} ${path.basename(filePath)}`
  );

  const endTime = process.hrtime(startTime);
  const executionTime = (endTime[0] * 1e9 + endTime[1]) / 1e6;

  console.log(
    `sudo docker run --rm -v ${path.dirname(
      filePath
    )}:/lets-code -w /lets-code ${docker} ${command} ${path.basename(filePath)}`
  );

  console.log(stdout);

  return { stdout, stderr, executionTime };
};

export default submitCode;
