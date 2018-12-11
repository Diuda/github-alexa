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



