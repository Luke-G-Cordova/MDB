# MDB


<pre>
<h1>TO DO: </h1>
    index.js: 
        Needs to listen for events 
            ready - set up the discord server. Check for certain catagories and channels on the server. 
                Create those channels and catagories if they are not created before inviting the bot.
            guildMemberAdd - when a member joins the server say hi and direct them to the roll assigning page
                To assign the proper roll. 
            message - listen for commands. 
                <ul>COMMANDS: 
                    <li>roll [certain roll]: this should assign a roll to the user who typed it.
                        The idea is that we have rolls for different experience levels of programming.
                        EX. beginner, intermediate, pro</li>
                    <li>kick [user]: this command is only for higher up mods or owners</li>
                    <li>ban [user]: this command is only for higher up mods or owners</li>
                    <li>give-role [user] [roll]: this command is only for higher up mods or owners</li>
                </ul>

User joins -
    [x] When a user joins they are directed to role-assign channel
    [x] In role-assign you can assign a role based on your level of experience in development.
            (maybe in the future get more roles)
Role assignment -
    [ ] Higher up mods can assign and take away roles. 
    [ ] When a user makes a commit to a repository, they are given the contributer role automatically.
    [ ] Developer role is given to people who make 10 commits to any repository.
commands -
    [ ] clear command to clear messages. Something went wrong witht this
    [ ] role command for mods to give out roles.

</pre>
