; Nexss PROGRAMMER 2.0.0 - Auto Hot Key
; Default template for JSON Data
; SETUP
#NoEnv 
#Warn
SendMode Input
; SetWorkingDir %A_ScriptDir% 
#Include 3rdPartyLibraries/AutoHotkey-JSON/JSON.ahk
; STDIN
STDIN := FileOpen("*", "r")
NexssStdin := STDIN.Read()
NexssStdout := JSON.load(NexssStdin)

; Modify Data

if(NexssStdout.app){
    CWD :=NexssStdout.cwd
    SetWorkingDir %CWD% ; Change to current working directory
    Program :=NexssStdout.app
    Runwait, %comspec% /c %Program%,,max
} else {
    NexssStdout.warningNexss := "Nothing to run. Please use it nexss App/Run --app=yourapp"
}

; STDOUT
NexssStdout := JSON.Dump(NexssStdout)
STDOUT := FileOpen("*", "w")
STDOUT.Write(NexssStdout)
