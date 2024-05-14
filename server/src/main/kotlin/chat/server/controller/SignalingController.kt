package chat.server.controller

import org.springframework.messaging.handler.annotation.DestinationVariable
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.web.bind.annotation.RestController

@RestController
class SignalingController {

    @MessageMapping("/offer/{roomId}")
    @SendTo("/topic/offer/{roomId}")
    fun sendOffer(
        @Payload offer: String,
        @DestinationVariable(value = "roomId") roomId: String
    ): String {
        return offer
    }

    @MessageMapping("/answer/{roomId}")
    @SendTo("/topic/answer/{roomId}")
    fun sendAnswer(
        @Payload answer: String,
        @DestinationVariable(value = "roomId") roomId: String
    ): String {
        return answer
    }
}