
# Chat application - final project

This project has been made by two students of ECE Paris in 4th year. It helped us working on react, nodeJS, dex and git. 
It is basically a chat application like messenger or whatsapp. You'll have the possibility to add channels, to modify your settings, to connect via mail adresses or GitHub accounts. Let's see how it works.

## Usage

* Clone this repository, from your local machine:
  ```
  git clone https://github.com/Saikuron/technos-web-2020.git
  ```
* Install [Go](https://golang.org/) and [Dex](https://dexidp.io/docs/getting-started/). For example, on Ubuntu, from your project root directory:   
  ```
  # Install Go
  apt install golang-go
  # Download Dex
  git clone https://github.com/dexidp/dex.git
  # Build Dex
  cd dex
  make
  make examples
  ```
  Note, the provided `.gitignore` file ignore the `dex` folder.
* Make a copy of the Dex configuration to `./dex-config/config-private.yaml`, the project is configured to Git ignore this path:
  ```bash
  cp -rp ./dex-config/config.yaml ./dex-config/config-private.yaml
  ```
* Register your GitHub application, get the clientID and clientSecret from GitHub and report them to your Dex configuration. Modify the provided `./dex-config/config-private.yaml` configuration to look like:
  ```yaml
  - type: github
    id: github
    name: GitHub
    config:
      clientID: xxxx98f1c26493dbxxxx
      clientSecret: xxxxxxxxx80e139441b637796b128d8xxxxxxxxx
      redirectURI: http://127.0.0.1:5556/dex/callback
  ```
* Install the dependencies
  ```bash
  # Back-end
  cd back-end
  # Install dependencies (use yarn or npm)
  yarn install
  # Front-end
  cd ../front-end
  # Install dependencies (use yarn or npm)
  yarn install
  ```
* Start the app
  ```bash
  # Go back on the project source
  cd ..
  #Launch the start script that will launch dex, init and start the back-end, and start the front-end
  start
  ```
* You can now navigate through our chat application at [http://localhost:3000](http://localhost:3000)
* Connect using your github account or your email address
* Enjoy !

## Authors

* Jean de Malliard, 4th year student in IS at ECE Paris
* Lucas Rietsch, 4th year student in IS at ECE Paris

## Tasks we have done

Project management

* Naming convention   
  *place your comments*
* Project structure   
  *place your comments*
* Code quality   
  *We really wanted to have a code as easy-to-read and to-understand as possible. We focused on the indentation, the naming convention and the clarity of ou code*
* Design, UX   
  *We decided to keep a simple yet elegant design, based on a primary blue color and a secondary red color. We used a lot of [Material UI](https://material-ui.com/getting-started/installation/) Components in order to keep a friendly, elegant and functionnal application*
* Git and DevOps   
  *We used Git a lot, made several branches in order to work as efficiently as possible on the project. We had no troubles using git and it was very helpful to both of us for working togheter properly*

Application development

* Welcome screens   
  *You will find on the welcome page a friendly message that will explain to you what you can do in the app. You will see that you can add a channel, go to your settings page, or directly go for your favorite channel*
  *Special mention for [Adaltas](https://www.adaltas.com) for their welcome page background image*
  *You will also see on the left side a [Drawer](https://material-ui.com/components/drawers/) which you will use to navigate through the app.*
* New channel creation   
  *place your comments*
* Channel membership and access   
  *place your comments*
* Ressource access control   
  *place your comments*
* Invite users to channels   
  *place your comments*
* Message modification   
  *place your comments*
* Message removal   
  *place your comments*
* Account settings   
  *At [http://localhost:3000/settings](http://localhost:3000/settings), you will have the possibility to change informations about your account, like your name, your e-mail adress, the theme of the application, your favorite channel. You will also have the possibility to contact us, to log out, or to know a little bit about us, the authors. We've used a lot of [Material UI](https://material-ui.com/getting-started/installation/) Components to make our app as friendly and as easy-to-use as possible. You will see a lot of home buttons so that you will be able to get back to the welcoming homepage without any trouble.*
* Gravatar integration   
  *place your comments*
* Avatar selection   
  *place your comments*
* Personal custom avatar   
  *place your comments*

## Bonus we have done

*place your comments*
