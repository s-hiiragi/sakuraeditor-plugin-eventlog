@echo off

del eventlog.zip
powershell -Command "Compress-Archive eventlog eventlog.zip"
if ErrorLevel 1 (
  REM ダブルクリックで実行した場合はpauseする
  if "%~0" == "%~dpnx0" (pause)
)
