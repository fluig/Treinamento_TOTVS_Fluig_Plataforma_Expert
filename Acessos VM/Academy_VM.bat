echo off 
cls 
echo fluig Academy - Instancias VM
Set /p IP=Digite o IP da Maquina Virtual:
cmdkey /generic: %IP%  /user: Administrador /pas:LC;;FeaAv2MEqXmL!FPmjMwLvYEdZHms
mstsc.exe /v:%IP%
