package com.adthena.health;

import com.adthena.conf.ApiConfiguration;
import com.codahale.metrics.health.HealthCheck;

public class AdthenaHealthCheck extends HealthCheck {

    private final ApiConfiguration configuration;

    public AdthenaHealthCheck(ApiConfiguration configuration) {
        this.configuration = configuration;
    }

    @Override
    protected Result check() throws Exception {
        return configuration.getHealthCheckMessage().contains("TEST") ? Result.unhealthy("Something is wrong.") : Result.healthy();
    }
}
