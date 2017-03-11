package com.hackathon.Controllers;

import com.hackathon.Models.Heartbeat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by boyanbonev on 11/03/2017.
 */
@RestController
public class HeartbeatController {
    private static final String template = "Hello, %s!";

    @RequestMapping("/greeting")
    public Heartbeat heartbeat() {
        return new Heartbeat();
    }
}
