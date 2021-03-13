var wsh = new ActiveXObject('WScript.Shell');
var fso = new ActiveXObject('Scripting.FileSystemObject');

var logPath = Plugin.GetOption('global', 'log_file_path');
logPath = wsh.ExpandEnvironmentStrings(logPath);

var date = new Date();

var tzOffset = date.getTimezoneOffset();
var tzAbsOffset = Math.abs(tzOffset);
var tzSign = tzOffset < 0 ? '+' : '-';
var tzStr =
    tzSign + ('0' + Math.floor(tzAbsOffset / 60)).slice(-2)
       ':' + ('0' + (tzAbsOffset % 60)).slice(-2)

var time = '' + date.getFullYear()
    + '-' + ('0' + date.getMonth()).slice(-2)
    + '-' + ('0' + date.getDate()).slice(-2)
    + 'T' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2)
    + '.' + ('0' + date.getMilliseconds()).slice(-3)
    + tzStr;

var file = fso.OpenTextFile(logPath, /*ForAppending*/8, /*create*/true, /*DefaultEncoding*/-2);
file.WriteLine('[' + time + '] editor start');
file.Close();
