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

@Path("/api")
@Produces(MediaType.APPLICATION_JSON)
public class AdthenaDataResource {

    private final ApiConfiguration configuration;

    @Inject
    public AdthenaDataResource(ApiConfiguration configuration) {
        this.configuration = configuration;
    }

    @GET
    @Timed
    public Status getStatusMessage(@QueryParam("message") Optional<String> message) {
        return new Status(message.orElse(configuration.getDefaultMessage()));
    }
}
