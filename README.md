[![Github All Releases](https://img.shields.io/github/downloads/jetspiking/TeleDesk/total.svg)]()
[![License](https://img.shields.io/github/license/jetspiking/TeleDesk.svg)]()
[![Stars](https://img.shields.io/github/stars/jetspiking/TeleDesk.svg)]()

# TeleDesk
<img src="https://github.com/jetspiking/TeleDesk/blob/main/Images/TeleDeskWeather.png" width="200" height="235"> <img src="https://github.com/jetspiking/TeleDesk/blob/main/Images/TeleDeskFinances.png" width="200" height="235"> <img src="https://github.com/jetspiking/TeleDesk/blob/main/Images/TeleDeskTelevision.png" width="200" height="235">


Cross-platform desktop (Electron) application for NOS (Dutch) Teletekst.

# Description
NOS Teletekst is, despite its age of more than four decades, still accessible. TeleDesk (Teletesk Desktop) was created as an alternative that you always carry with you. Teletekst is a Dutch implementation for the Teletext specification.

Why Teletekst is not obsolete:
- High performance.
- High information density.
- Privacy friendly.
- Limited advertising possibilities.
- Still used daily by a large quantity of people.
- News, weather, traffic-information, finances and sports all on a single app.

# Usage
Download and unzip the archived folder for your operating system. In the unpacked folder you will find an executable for your system. You could consider creating a shortcut on your desktop.

[Releases](https://github.com/jetspiking/TeleDesk/releases)

# Requirements
TeleDesk works on Windows, MacOS and Linux.

# Information
TeleDesk downloads the data from the following URL.

https://teletekst-data.nos.nl/json

https://teletekst-data.nos.nl/webplus

# Documentation
The application uses Electron and its routing capabilities to inject data into DOM-elements (HTML) and binds input events from users to an action for updating the Teletekst data and corresponding UI. The front-end is running on the 'Main'-process, while the backend is running on the 'Rendering'-process (Chromium engine). Communication (routing) is done by the preload.ts and its 'ContextBridge', which specifies an interface for data communication purposes.

<img src="https://github.com/jetspiking/TeleDesk/blob/main/Documentation/Routing.png" width="400">

# Contributing
Bugs can be reported by opening issues. Ideas to include specific features can also be discussed by opening an issue. 

# Thank you for using TeleDesk
If you enjoy TeleDesk and you want to support me, you could consider buying me a drink by navigating to my Buy Me A Coffee account.

<a href="https://www.buymeacoffee.com/DustinHendriks" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>



