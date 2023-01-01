<div align="center">
<a>
   <img src="https://i.loli.net/2018/12/06/5c08b9a294c29.png">
</a>
<br/>
<b>PM2TGO</b>
<br/><br/>
<a href="https://circleci.com/gh/hoangnguyen1247/pm2tgo">
<img src="https://circleci.com/gh/hoangnguyen1247/pm2tgo.svg?&style=shield&circle-token=0fa8ccfc85928edc54a0d7d848cbc784e31813ff" alt="Build Status">
</a>

<a href="http://commitizen.github.io/cz-cli">
  <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly" />
</a>

<a href="https://gitter.im/getpmgo/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
  <img src="https://badges.gitter.im/getpmgo/Lobby.svg" alt="Join the chat" />
</a>

<a href="https://goreportcard.com/report/github.com/hoangnguyen1247/pm2tgo">
  <img src="https://goreportcard.com/badge/github.com/hoangnguyen1247/pm2tgo" alt="Go Report Card" />
</a>

<a href="https://godoc.org/github.com/hoangnguyen1247/pm2tgo">
  <img src="https://godoc.org/github.com/hoangnguyen1247/pm2tgo?status.svg" alt="GoDoc" />
</a>
<br/><br/>
</div>


# PM2TGO 
PM2TGO is a lightweight process manager written in Golang for Golang applications. It helps you keep your applications alive forever, reload and start them from the source code.


## Install pm2tgo

```bash
$ go install github.com/hoangnguyen1247/pm2tgo@latest
$ mv $GOPATH/bin/pm2tgo /usr/local/bin
```

Or
```bash
git clone https://github.com/hoangnguyen1247/pm2tgo.git
cd path/to/hoangnguyen1247/pm2tgo
go build -v pm2tgo.go
mv pm2tgo /usr/local/bin
```


## Starting a new application
If it's the first time you are starting a new golang application, you need to tell pmgo to first build its binary. Then you need to first run:
```bash
$ pm2tgo start path/to/source-directory app-name
```

This will automatically compile, start and daemonize your application. If you need to later on, stop, restart or delete your app from PMGO, you can just run normal commands using the app-name you specified. Example:
```bash
$ pm2tgo stop app-name
$ pm2tgo restart app-name
$ pm2tgo delete app-name
```

## Main features

### Commands overview

```bash
$ pm2tgo kill                                                  # kill pm2tgo daemon process

$ pm2tgo start source app-name                                 # Compile, start, daemonize and auto  restart application.
$ pm2tgo restart app-name                                      # Restart a previously saved process
$ pm2tgo stop app-name                                         # Stop application.
$ pm2tgo delete app-name                                       # Delete application forever.

$ pm2tgo save                                                  # Save current process list

$ pm2tgo list                                                  # Display status for each app.
$ pm2tgo info app-name                                         # describe importance parameters of a process name
```

### Start your GO-application with parameters
```bash
// pm2tgo will build your source code folder under $GOPATH/src by default
// Here my tmp folder was: $GOPATH/src/tmp
pm2tgo start tmp/ test --args "arg1 arg2 arg3"

# In your application
fmt.Println(os.Args[1:])
# Output: [arg1, arg2, arg3]
```


### Start application from user input compiled binary

```bash
# true means use user input compiled binary path
pm2tgo start /Users/strucoder/personalPro/goplace/main awesome_name true --args="arg1 arg2 arg3"
```

### Demo
![demo](https://i.loli.net/2018/12/06/5c08bbd407b35.png)

### I Love This. How do I Help?

- Simply star this repository :-)
- Help us spread the world on Facebook and Twitter
- Contribute Code!
- I'll be very grateful if you'd like to donate to encourage me to continue maintaining pmgo.


### Contributors
<a href="https://github.com/hoangnguyen1247/pm2tgo/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=hoangnguyen1247/pm2tgo" />
</a>

### Donate

|      **Paypal**       |        **Alipay**         |
| :------------------------: | :------------------------: |
| [![paypal](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/hoangng1247) | [![not yet](https://img.shields.io/badge/Donate-alipay-blue.svg)]() |

### By The Way
In China Mainland, maybe you can't download some packages in golang.org, thus just click [here](https://goproxy.io/zh/) to set `GOPROXY`
### LICENSE

[MIT](https://github.com/hoangnguyen1247/pm2tgo/blob/master/LICENSE)
