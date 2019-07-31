const appKey = process.env.TRELLO_APP_KEY;
const appToken = process.env.TRELLO_APP_TOKEN;

const Trello = require("trello");
const trello = new Trello(appKey, appToken);

async function  getCardNames(listId) {
    try {
        var body = `===== Begin ${listId} List =====\n`;
        let cards = await trello.getCardsForList(listId);
        const cardNames = [];
        cards.forEach(async card => {
            await cardNames.push(card.name);
        });
        cardNames.forEach(cardName => {
            body += `* ${cardName}\n`;
        });
        body += `===== End Of ${listId} List =====\n`;
        return body;
    } catch (err) {
        console.log(err);
    }
}

exports.handler = async (event) => {

    const temporaryListId = "<ListId>";
        
    let generatedBody = '';
    generatedBody += await getCardNames(temporaryListId);
    
    const response = {
        statusCode: 200,
        body: generatedBody,
    };
    return response;
};
