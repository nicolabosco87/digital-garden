# Keycloak

## Keycloak docker-compose

To export a realm from a running keycloak container, open the container console and run the following cmd, specifying the right realm name (--realm realmName):

```
/opt/keycloak/bin/kc.sh export --dir /opt/keycloak/data/test --realm app-realm --users realm_file
```

It will save the exported JSON file into the location ‘/opt/keycloak/data/test‘.

[Ref](https://howtodoinjava.com/devops/keycloak-export-import-realm/#:~:text=To%20export%20a%20realm%2C%20make,prompt%20for%20the%20docker%20container.&text=Next%2C%20run%20the%20%2Fbin%2F,and%20arguments%20for%20custom%20requirements)
