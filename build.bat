@echo off

del eventlog.zip
powershell -Command "Compress-Archive eventlog eventlog.zip"
if ErrorLevel 1 (
  REM �_�u���N���b�N�Ŏ��s�����ꍇ��pause����
  if "%~0" == "%~dpnx0" (pause)
)
