package com.adthena.conf;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import org.hibernate.validator.constraints.NotEmpty;

public class ApiConfiguration extends Configuration {

    @NotEmpty
    private String appName;

    @NotEmpty
    private String defaultMessage;

    @NotEmpty
    private String healthCheckMessage;

    @JsonProperty
    public String getAppName() {
        return appName;
    }

    @JsonProperty
    public void setAppName(String appName) {
        this.appName = appName;
    }

    @JsonProperty
    public String getDefaultMessage() {
        return defaultMessage;
    }

    @JsonProperty
    public void setDefaultMessage(String defaultMessage) {
        this.defaultMessage = defaultMessage;
    }

    @JsonProperty
    public String getHealthCheckMessage() {
        return healthCheckMessage;
    }

    @JsonProperty
    public void setHealthCheckMessage(String healthCheckMessage) {
        this.healthCheckMessage = healthCheckMessage;
    }
}
