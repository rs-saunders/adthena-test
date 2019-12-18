package com.adthena.resources;

import com.adthena.conf.ApiConfiguration;
import com.adthena.models.Status;
import com.codahale.metrics.annotation.Timed;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.Optional;

@Path("/status")
@Produces(MediaType.APPLICATION_JSON)
public class AdthenaStatusResource {

    private final ApiConfiguration configuration;

    @Inject
    public AdthenaStatusResource(ApiConfiguration configuration) {
        this.configuration = configuration;
    }

    @GET
    @Timed
    public Status getStatusMessage(@QueryParam("message") Optional<String> message) {
        return new Status(message.orElse(configuration.getDefaultMessage()));
    }
}
