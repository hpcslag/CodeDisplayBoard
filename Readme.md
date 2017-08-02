# Code Display Board
In sometime teachers need to show their code to student.

code display-board give you better experience in class.

## Install

Download it on github.

And follow the command.

```
npm install .

node app.js
```

## Config
all setting in config.yml

you need to check ipconfig

```
ipconfig getpacket en0

or

ipconfig
```

get your local ip, and set `config.yml`

```
port: 8080 //default
ip: xxx.xxx.xxx.xxx
```

## Access
General student just access Index page.
```
localhost:8080
```

and teacher need to access

```
localhost:8080/teacher
```

## License
Use MIT License

## Editor Information
[Ace editor](https://ace.c9.io/)
