# testing-trello

`trello-retrieve-card-names-async-await.js` - this application prints card names from specified board id and list id in the following format (it uses async/await functions):

```
===== Begin <ListId> List =====
* Test card name 1
* Test card name 2
===== End Of <ListId> List =====
```

## Usage

As per documentation Trello interprets the me in the place of a memberID as a reference to the user who is making the request based on the API token (remember, the API token belongs to a specific user).

In order to find out your Member Id you can use the following function:

```
let member = await trello.getMember("me");
```

In order to find out the required Board Id use the following `curl` command:

```
curl -s "https://api.trello.com/1/members/me/boards?fields=name,id&key=$TRELLO_APP_KEY&token=$TRELLO_APP_TOKEN" | jq | less
```

In order to find out the required List Id use the following `curl` command:

 ```
curl -s "https://api.trello.com/1/boards/5bed79829f69ab780e67397b/lists?key=$TRELLO_APP_KEY&token=$TRELLO_APP_TOKEN" | jq | less
```

Install dependencies

```
npm install trello --save
```

Create `trello.env` file where you are supposed to copy paste your Trello Application Key and Application Token

```
cat twilio.env
--
export TRELLO_APP_KEY=''
export TRELLO_APP_TOKEN=''
```

Next, execute the command to read the environmental variables or set the variables in Lambda Function options.

```
source ./trello.env
```

If you're using AWS Lambda function with API Gateway, remember to change the Content-Type in Response Models for 200 GET Method from application/json to text/plain
