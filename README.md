## Usage

```shell
$ git clone https://github.com/u4bi-store/node-cli-app.git

$ cd node-cli-app

$ sudo npm install -g ./

$ cli-app --help
```

#### $ cli-app weapon

```
$ cli-app weapon --help

$ cli-app weapon AK-47
$ cli-app weapon AK-47 -a -e --safe_mode

$ cli-app weapon AK-47 -a 210 -e Gold
$ cli-app weapon AK-47 -a 210 -e Gold --safe_mode


    Weapon Command
    ------------------
    Weapon name     :        AK-47
    Ammo amount     :          210
    Edition type    :         Gold
    isSafe_mode     :         true
```

#### $ cli-app weapon_2

```
$ cli-app weapon_2 --help

$ cli-app weapon_2


    ? Please select a Weapon. M4A1
    ? Please select a Ammo 210
    ? Please select a Edition Silver
    ? Do you want to enable safe mode? No

    Weapon_2 Command
    ------------------
    Weapon name     :         M4A1
    Ammo amount     :          210
    Edition type    :       Silver
    isSafe_mode     :        false
```


#### $ cli-app list

```
$ cli-app list --help

$ cli-app list


    test list
    test list
    test list
    test list
```

#### $ cli-app login

```
$ cli-app login --help

$ cli-app login


    ? Please enter your ID. test1234
    ? Please enter your password. [hidden]
    Login Command
    ------------------
    ID              :     test1234
    Password        :     pass1234
```

#### $ cli-app json

```
$ cli-app json --help

$ cli-app json ABCD EFGH


    { fisrt: 'ABCD', second: 'EFGH' } // bin.json
```