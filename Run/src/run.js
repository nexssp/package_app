// Nexss PROGRAMMER 2.0.0 - App/Run
const {
  nxsError,
} = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssLog.js`);

const NexssIn = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssIn.js`);
let NexssStdout = NexssIn();

//   let fieldOut = "nxsOut";
//   if (NexssStdout.nxsOutAs) {
//     fieldOut = NexssStdout.nxsOutAs;
//   }
process.chdir(NexssStdout.cwd);

if (!NexssStdout.app) {
  nxsError(
    "You need to pass at least application name to run eg. nexss App/Run --app=explorer.exe OR nexss App/Run --app='code .'"
  );
  process.exit(1);
}
try {
  require("child_process").execSync(NexssStdout.app, {
    cwd: NexssStdout.cwd,
    stdio: "inherit",
  });
} catch (er) {
  // explorer.exe shows error, even if is ok so we don't display it
  if (!NexssStdout.app.startsWith("explorer")) nxsError(er);
  //   process.exit();
}
delete NexssStdout.nxsIn;
delete NexssStdout.resultField_1;
process.stdout.write(JSON.stringify(NexssStdout));
