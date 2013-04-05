webchat由Balloons.IO二次开发而来

===========

webchat 是一个web的多-房间聊天系统。
它的建立于Node.js，express，Socket.IO和Redis。

## 安装

### 环境 node 和 Redis

-   [node.JS](http://nodejs.org)
-   [Redis-server](http://redis.io)


### 安装 Redis

    wget https://redis.googlecode.com/files/redis-2.6.12.tar.gz
    tar -zxvf redis-2.6.12.tar.gz
    cd redis-2.6.12
    make && make install

尝试启动 Redis

`./redis-server redis.conf`


### 安装 webchat

前提是你安装了前面2款工具, 打开终端执行:

    git clone https://github.com/joeylin/webchat.git
    cd webchat
    npm install

然后修改config.json中的sina和QQ的第三方登录keys。

打开终端启动 Redis

`./redis_start.sh`

打开另一个终端启动webchat

`./start.sh`

在浏览器中打开 `http://127.0.0.1:6789` (你也可以在'config.json'中修改启动端口)

使用Balloons [PassportJS](http://passportjs.org) 实现sina和QQ第三方登录。

祝您使用愉快！


## License

(The MIT License)

Copyright (c) 2011 Gravity On Mars &lt;work@gravityonmars.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
