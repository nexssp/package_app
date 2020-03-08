$nxsParameters = @("")
$input | . "$($env:NEXSS_PACKAGES_PATH)/Nexss/Lib/NexssIn.ps1"

$ErrorActionPreference = "Stop"

$program, $attrs = $inFieldValue_1

$NULL, $installApps = $attrs

Set-Location $NexssStdout.cwd

$currentLocation = Get-Location
nxsInfo("$currentLocation")

& $program @attrs 

if ( $inFieldValue_1) {  
    $NexssStdout | Add-Member -Force -NotePropertyMembers  @{"$resultField_1" = $installApps }
}
else {
    $NexssStdout.PSObject.Properties.Remove($resultField_1)   
}

. "$($env:NEXSS_PACKAGES_PATH)/Nexss/Lib/NexssOut.ps1"