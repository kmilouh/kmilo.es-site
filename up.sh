#!/bin/bash
#
chmod 600 traefik/acme.json

docker compose --env-file .env up -d
