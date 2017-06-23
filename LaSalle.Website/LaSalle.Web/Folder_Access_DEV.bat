REM Following line in original script incorrectly sets all child folder permissions
icacls app_code /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)RX
icacls app_browsers /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)RX
icacls app_data /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls bin /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls config /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls css /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls data /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls masterpages /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls media /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls python /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls scripts /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls umbraco /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls usercontrols /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)R
icacls xslt /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls views /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls web.config /grant "IIS APPPOOL\stage.elasalle.com":(OI)(CI)M
icacls robots.txt /grant "IIS APPPOOL\stage.elasalle.com":M