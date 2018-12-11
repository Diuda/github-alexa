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