// Nexss PROGRAMMER 2.0.0 - App/Run
const {
  nxsError,
  nxsInfo,
} = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssLog.js`);

const NexssIn = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssIn.js`);
let NexssStdout = NexssIn();

//   let fieldOut = "nxsOut";
//   if (NexssStdout.nxsOutAs) {
//     fieldOut = NexssStdout.nxsOutAs;
//   }
const cwd = NexssStdout.__dirname || NexssStdout.cwd;
process.chdir(cwd);

if (!NexssStdout._app) {
  nxsError(
    "You need to pass at least application name to run eg. nexss App/Run --_app=explorer.exe OR nexss App/Run --_app='code .'"
  );
  process.exit(1);
}

const message = NexssStdout.nxsIn.join(" ");
if (message) {
  nxsInfo(message);
}

try {
  const result = require("child_process")
    .execSync(NexssStdout._app, {
      cwd,
      shell: process.platform === "win32" ? true : "/bin/bash",
    })
    .toString();

  NexssStdout.nxsOut = result;
} catch (er) {
  // nxsError(er);
  // explorer.exe shows error, even if is ok so we don't display it
  if (!NexssStdout._app.startsWith("explorer")) nxsError(er);
  //   process.exit();
}
delete NexssStdout.nxsIn;
delete NexssStdout.resultField_1;
process.stdout.write(JSON.stringify(NexssStdout));
