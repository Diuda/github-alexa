'use strict'

const alexa = require('ask-sdk-core');



const LaunchRequestHandler = {
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },

    handle(handlerInput){
        const speechText = 'Welcome to alexa skill kit';

        return handlerInput.responseBuilder
                    .speak(speechText)
                    .repromt(speechText)
                    .withSimpleCard('Hello World', speechText)
                    .getResponse();
    }
}

const GithubRepoBranch = {
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'brepo'
    },

    handle(handlerInput){
        //logic for github repo branches reterival

        const speechText = 'Github response';

        return handlerInput.responseBuilder
                    .speak(speechText)
                    .withSimpleCard('Github', speechText)
                    .getResponse();
    }
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};


const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};



