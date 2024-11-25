@echo off

SET R_HOME=/GCModeller/src/R-sharp/App/net8.0-windows
SET R_ENV="%R_HOME%/R#.exe"

%R_ENV% ./build-githubpage.R

pause