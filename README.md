
# Chat application - final project

This project has been made by two students of ECE Paris in 4th year. It helped us working on react, nodeJS, dex and git. 
It is basically a chat application like messenger or whatsapp. You'll have the possibility to add channels, to modify your settings, to connect via mail adresses or GitHub accounts. Let's see how it works.

## Usage

* Clone this repository, from your local machine, and go inside it
  ```
  git clone https://github.com/Saikuron/technos-web-2020.git webtech-project
  cd webtech-project
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
  cd ..
  ```
  Note, the provided `.gitignore` file ignore the `dex` folder.
  The dex config file is not provided because you asked to not provide anything related to dex. You should use http://localhost:3000 as a redirect URI of the app, not http://127.0.0.1:3000
  Also our back-end/bin/init file uses accounts such as wdavid@example.com, ksergei@example.com or jeand@example.com, so add them in you dex config file to access them
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
* To start the app we provide a bash script, you can use -h option to see the options available
  It assumes you have dex locally as if you dowloaded it like shown above, and that you have a config-private.yaml file in the dex-config directory at the root. Don't forget to remove the cookies for http://localhost:3000
  ```bash
  # Go back on the project source
  cd ..
  # Launch the start script that will launch dex, start the back-end, and start the front-end
  # Options to reset and init the database with some examples
  ./start --reset --init
  ```
* You can now navigate through our chat application at [http://localhost:3000](http://localhost:3000)
* Connect using your github account or your email address
* Enjoy !

## Authors
* Jean de Malliard, 4th year student in IS at ECE Paris <br>
jean.de-malliard@edu.ece.fr<br>
Student at [ECE Paris](https://www.ece.fr)

* Lucas Rietsch, 4th year student in IS at ECE Paris <br>
lucas.rietsch@edu.ece.fr <br>
Student at [ECE Paris](https://www.ece.fr)

## Tasks we have done

Project management

* Naming convention   
  *We did what we thought meaningful to name the variables*
* Project structure   
  *place your comments*
* Code quality   
  *We did our best to keep the code clear*
* Design, UX   
  *We decided to keep a simple yet elegant design, based on a primary blue color and a secondary red color. We used a lot of [Material UI](https://material-ui.com/getting-started/installation/) Components in order to keep a friendly, elegant and functionnal application*
* Git and DevOps   
  *We used Git a lot, made several branches in order to work as efficiently as possible on the project. We had no troubles using git and it was very helpful to both of us for working togheter properly. Branches were created for different functionnalities, and then merged with other branches when needed. Unit tests are working and were useful to keep an eye on the back-end state*

Application development

* Welcome screens   
  *You will find on the welcome page a friendly message that will explain to you what you can do in the app. You will see that you can add a channel, go to your settings page, or directly go for your favorite channel*
  *Special mention for [Adaltas](https://www.adaltas.com) for their welcome page background image*
  *You will also see on the left side a [Drawer](https://material-ui.com/components/drawers/) which you will use to navigate through the app.*
* New channel creation   
  *A button has been added under the channel list to create a new channel. By clicking it you can select a name and choose the members of the channel. You can cancel or choose to create the channel and it will instantly be visible. You can send messages on a newly created channel and everything is persistent*
* Channel membership and access   
  *Every request contains the access token of the user, this token is checked on the back-end every time. If the user doesn't exist in the database (for example you connect using github) it is created and will persist.*
* Ressource access control   
  *The channels are visible only to their members, the back-end sends back to the user only his channels.*
* Invite users to channels   
  *At the channel creation it is possible to invite any member that has an account registered in the database.*
* Message modification   
  *Unfortunately it is not possible to modify a message, we putted an icon to do it we didn't have enough time for this.*
* Message removal   
  *It is possible to remove messages. You can only delete your own messages. After clicking the button you'll have to refresh the page or to go somewhere else and come back on the channel to see that the message has been removed. Unfortunately we didn't do better than this, we choosed to focus on other things.*
* Account settings   
  *At [http://localhost:3000/settings](http://localhost:3000/settings), you will have the possibility to change informations about your account, like your name, your e-mail adress, the theme of the application, your favorite channel. Those changes will persist in the database. By the way they are simply here to show their persistence, you can't change the email or username associated with your account. You will also have the possibility to contact us, to log out, or to know a little bit about us, the authors. We've used a lot of [Material UI](https://material-ui.com/getting-started/installation/) Components to make our app as friendly and as easy-to-use as possible. You will see home buttons so that you will be able to get back to the welcoming homepage without any trouble.*
* Gravatar integration   
  *We used a module called 'react-gravatar' to add some gravatars, it was pretty easy.*
* Avatar selection   
  *We didn't do this task because we lacked of time*
* Personal custom avatar   
  *Same, not enough time, even though this task doesn't seem complicated.*

## Bonus we have done

*The start script was not asked, and we didn't do it to have bonus points, but I find it very useful and I'm not sure that a lot of groups did something like this.*
