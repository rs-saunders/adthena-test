package com.adthena.modules;

import com.adthena.conf.ApiConfiguration;
import com.adthena.resources.AdthenaStatusResource;
import com.google.inject.Binder;
import com.hubspot.dropwizard.guicier.DropwizardAwareModule;

public class ResourcesModule extends DropwizardAwareModule<ApiConfiguration> {
    @Override
    public void configure(Binder binder) {
        binder.bind(AdthenaStatusResource.class);
    }
}
