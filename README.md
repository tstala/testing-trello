# testing-trello

`trello-retreive-card-names-async-await.js` - this application prints card names from specified board id and list id in the following format:

```
===== Begin <ListId> List =====
* Test card name 1
* Test card name 2
===== End Of <ListId> List =====
```

## Usage

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
